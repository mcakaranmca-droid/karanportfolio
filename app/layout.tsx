import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://karanportfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Explore the portfolio of ${siteConfig.name}, showcasing digital marketing strategies, creative video editing, social media content, and modern web development projects.`,
  keywords: [
    "Digital Marketer",
    "Video Editor",
    "Full Stack Developer",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
    "CapCut",
    "Premiere Pro",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.heroBio,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Digital Marketer, Video Editor & Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.heroBio,
    creator: `@${siteConfig.name.toLowerCase()}`,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B1120] text-slate-100 min-h-screen selection:bg-indigo-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
