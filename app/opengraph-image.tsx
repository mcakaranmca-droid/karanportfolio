import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${siteConfig.name} - ${siteConfig.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0B1120",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.25) 0%, transparent 50%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #4F46E5, #7C3AED, #06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 900,
              color: "white",
            }}
          >
            {siteConfig.initials}
          </div>
          <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.5 }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: -1,
              maxWidth: 950,
            }}
          >
            CREATIVITY MEETS TECHNOLOGY.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94A3B8",
              fontWeight: 500,
            }}
          >
            Digital Marketing • Video Editing • Full Stack Development • Creator of NOVIS AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: 24,
            fontSize: 18,
            color: "#06B6D4",
            fontWeight: 600,
          }}
        >
          <span>Digital Marketing (80%) • Video Editing (80%) • Full Stack (60%)</span>
          <span style={{ color: "#94A3B8" }}>Available for Projects</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
