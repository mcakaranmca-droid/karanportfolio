import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, sanitizeInput } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check honeypot for bot spam
    if (body.honeypot && body.honeypot.trim() !== "") {
      // Quietly reject bot
      return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
    }

    const { isValid, errors } = validateContactForm(body);

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please fill out all required fields correctly.",
        },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      service: sanitizeInput(body.service),
      budget: body.budget ? sanitizeInput(body.budget) : "Not specified",
      message: sanitizeInput(body.message),
      timestamp: new Date().toISOString(),
    };

    // If an external service like Resend or a webhook is configured in environment variables:
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_TO || "contact.karanportfolio@gmail.com";

    if (resendApiKey) {
      // Integration with Resend when API key is provided
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            subject: `New Inquiry from ${sanitizedData.name} - ${sanitizedData.service}`,
            text: `
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Service: ${sanitizedData.service}
Budget: ${sanitizedData.budget}
Sent at: ${sanitizedData.timestamp}

Message:
${sanitizedData.message}
            `,
          }),
        });

        if (!resendRes.ok) {
          console.error("Resend delivery warning:", await resendRes.text());
        }
      } catch (err) {
        console.error("External email dispatch error:", err);
      }
    } else {
      // In development or when no external key is configured, log inquiry
      console.log("Contact form submission logged:", sanitizedData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your inquiry has been received and I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your message. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
