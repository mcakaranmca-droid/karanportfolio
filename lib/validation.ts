export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
  honeypot?: string; // Bot protection
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service || data.service.trim() === "") {
    errors.service = "Please select a service you are interested in.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please provide a brief message (at least 10 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
