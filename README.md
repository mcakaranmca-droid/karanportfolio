# 🚀 Premium Personal Portfolio Website
### Digital Marketer | Video Editor | Full Stack Developer

A world-class, production-ready portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to rival digital experiences from Apple, Stripe, Linear, Framer, and Awwwards-winning studios.

---

## 🌟 Visual & Architectural Highlights

- **Aesthetic Direction:** Apple minimalism + Linear dark-mode glassmorphism + Stripe cinematic gradients + Framer micro-interactions.
- **Color Palette:** Deep Obsidian (`#0B1120`), Primary Indigo (`#4F46E5`), Secondary Violet (`#7C3AED`), and Cyan Neon Accent (`#06B6D4`).
- **Core Identity Balance:**
  - **80% Digital Marketing:** Data-backed acquisition strategies, Google Ads, Meta Ads funnels, SEO rankings, and conversion analytics.
  - **80% Video Editing:** CapCut, Adobe Premiere Pro, short-form Reels & Shorts, sound design, color grading, and dynamic kinetic typography.
  - **60% Full Stack Development:** Next.js App Router, React, TypeScript, Tailwind CSS, Node.js, Express, and REST APIs.
- **Dynamic Capabilities:**
  - ⚡ **Interactive Studio Workspace:** Real-time switcher showcasing Live Ad Metrics, Multi-track Video Timeline, and Next.js Code.
  - 🎬 **Cinematic Showreel Player:** Responsive 16:9 frame with custom video player controls, waveform scrubbers, and category filters (Reels, Shorts, Commercials, Cinematic).
  - 🛠️ **Configurable Toolkit System:** 3 categorized skill groups with animated progress indicators and proficiency filters.
  - 💼 **Concept & Prototype Showcase:** Reusable project cards with interactive modals, architecture highlights, and category filters.
  - 📬 **Secure Contact Engine:** Server-side API route (`/api/contact`) with honeypot bot protection, type-safe validation, and optional Resend email dispatch.
  - 🔍 **Production SEO & OpenGraph:** Dynamic edge-rendered OpenGraph preview card (`/opengraph-image`), automated XML sitemap (`/sitemap.xml`), and `robots.txt`.

---

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Server-side contact validation & dispatch
│   ├── globals.css               # Tailwind directives, scrollbar & dark tokens
│   ├── icon.tsx                  # Dynamic Edge favicon generator
│   ├── layout.tsx                # Metadata, viewport, Inter & Fira Code fonts
│   ├── opengraph-image.tsx       # Dynamic 1200x630 social card generator
│   ├── page.tsx                  # Unified modular home page
│   ├── robots.ts                 # Crawling directives
│   └── sitemap.ts                # Dynamic XML sitemap generator
│
├── components/
│   ├── ui/
│   │   ├── BackgroundEffects.tsx # Ambient blur blobs & lightweight canvas particles
│   │   ├── BackToTop.tsx         # Smooth floating back-to-top trigger
│   │   ├── GlowCard.tsx          # Glassmorphic card with glow borders
│   │   └── SectionHeader.tsx     # Standardized accessible section headers
│   ├── Navbar.tsx                # Sticky glass navbar with active section pill
│   ├── Hero.tsx                  # 2-column hero with typing effect & interactive studio
│   ├── About.tsx                 # Core philosophy, pillars & skill assessment bars
│   ├── Skills.tsx                # Three detailed skill groups with progress animations
│   ├── Services.tsx              # 6 service cards with deliverables & prefill trigger
│   ├── Projects.tsx              # 6 featured projects with modal inspector & category filters
│   ├── Showreel.tsx              # Cinematic video player mockup with 5 video formats
│   ├── Process.tsx               # 4-phase creative workflow (Discover -> Optimize)
│   ├── Experience.tsx            # Journey & practical milestones timeline
│   ├── Contact.tsx               # Type-safe contact form with social channels
│   └── Footer.tsx                # Brand, quick links, dynamic year & social icons
│
├── hooks/
│   ├── useActiveSection.ts       # Active section detection for navigation
│   └── useReducedMotion.ts       # Respects user's prefers-reduced-motion setting
│
├── lib/
│   ├── animations.ts             # Reusable Framer Motion variants
│   ├── constants.ts              # Single source of truth for all content & config
│   ├── utils.ts                  # Classname merging and smooth scrolling
│   └── validation.ts             # Contact form validation & sanitization
│
└── public/
    ├── images/                   # Screenshots and custom mockups
    ├── videos/                   # Video reel clips
    └── icons/                    # Vector icons and branding assets
```

---

## 🛠️ Quick Start & Local Development

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` (tested on Node v25)
- npm or pnpm

### 2. Installation
```bash
# Clone or navigate to the repository
cd karanportfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Configuration & Customization

All personal details, skills, projects, and contact channels are centralized in **`lib/constants.ts`**:

1. **Owner Profile (`siteConfig`):**
   - Update your name, initials, professional title, location, and bio.
   - Configure your direct social links (LinkedIn, GitHub, Instagram, YouTube, email).

2. **Skill Groups (`skillGroups`):**
   - Adjust percentages (e.g. 80%, 80%, 60%) or add new tools/libraries.

3. **Projects Showcase (`projects`):**
   - Add real client projects, update screenshots, or add live demo URLs.

4. **Showreel Clips (`showreelCategories`):**
   - Replace demo video mockups with your own hosted MP4s or YouTube/Vimeo embeds.

5. **Email & Contact API (`.env.local`):**
   To receive direct emails from inquiries, create `.env.local` based on `.env.example`:
   ```env
   # Optional: Connect Resend for real email delivery
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL_TO=your-email@example.com

   # Production canonical domain
   NEXT_PUBLIC_SITE_URL=https://your-portfolio-domain.com
   ```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Next.js 14 App Router is detected automatically with zero config required.
4. Add environment variables if using Resend for email notifications.
5. Click **Deploy**.

### Deploying to Netlify
1. Set build command to `npm run build`.
2. Set publish directory to `.next`.
3. Use the `@netlify/plugin-nextjs` plugin.

---

## ♿ Accessibility & Performance Standards

- **WCAG 2.2 AA Compliant:** Accessible contrast ratios, visible focus indicators, screen reader labels, and keyboard navigation.
- **Motion Accessibility:** Automatically respects `prefers-reduced-motion` to disable particle canvas and heavy transitions for sensitive users.
- **Performance:** Prerendered static pages, optimized edge handlers, zero unnecessary dependencies, and lightweight CSS animations.
