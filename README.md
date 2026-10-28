# 🚀 KARAN C — Premium Animated Portfolio Website
### Digital Marketer | Video Editor | Full Stack Developer | Creator of NOVIS AI
**BCA Graduate • Trichy, Tamil Nadu, India**

A world-class, production-grade personal portfolio website inspired by Apple, Vercel, Linear, Framer, and Awwwards-winning digital products. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Personal Brand & Pillars

- **Name:** KARAN C
- **Professional Title:** Digital Marketer | Video Editor | Full Stack Developer
- **Education:** Bachelor of Computer Applications (BCA) Graduate
- **Location:** Trichy, Tamil Nadu, India
- **Three Pillars:**
  1. **Marketing and Business Growth:** Paid search & Meta Ads, audience segmentation, conversion analytics, and SEO visibility.
  2. **Creative Storytelling & Video Production:** High-retention short-form reels, commercial promotional videos, kinetic typography, and rhythmic audio design.
  3. **Technology & Artificial Intelligence:** Full-stack web engineering and continuous exploration of conversational AI through flagship project **NOVIS**.

---

## 🎨 Visual Identity & Design System

- **Cinematic Dark Theme:** Obsidian dark background (`#0B1120`), Deep Navy secondary surfaces.
- **Accents:** Electric Blue (`#3B82F6`), Violet/Purple (`#A855F7`), Cyan (`#06B6D4`).
- **Interactive Visual Elements:**
  - Glassmorphism cards with translucent white borders.
  - Interactive **NOVIS Intelligence Orb** rendered with Canvas, rotating energy rings, neural nodes, and reactive audio waveforms.
  - Interactive conversational simulation sandbox allowing visitors to test sample NOVIS dialogue queries.
  - Circular and horizontal animated proficiency rings.
  - Categorized Tools & Technologies wall with experience status tags.
  - Accessible contrast ratios conforming to WCAG AA guidelines.
  - Full support for `prefers-reduced-motion`.

---

## 📊 Self-Assessed Skills Proficiency

1. **Digital Marketing (80%):** SEO and keyword research, Google Ads, Meta Ads, social media management, content strategy, and lead generation.
2. **Video Editing (80%):** Business promotional videos, Instagram Reels & YouTube Shorts, cinematic transitions, motion graphics, and sound design.
3. **Full Stack Development (60%):** HTML, CSS, JavaScript, React.js, responsive web design, Node.js, Express.js, MongoDB fundamentals, and REST APIs.

*Note: Skill percentages represent self-assessed proficiency.*

---

## 🤖 Flagship Project — NOVIS AI Assistant

- **Status:** Currently in Development
- **Category:** Artificial Intelligence | Full Stack Development
- **Core Vision:** An intuitive personal AI assistant exploring intelligent assistance, natural language interaction, modern full-stack application architecture, and AI-powered productivity workflows.
- **Interactive Showcase Includes:**
  - Interactive glowing intelligence core with energy rings and particle nodes.
  - Interactive dialogue simulation sandbox with streaming responses.
  - 6-Phase Feature Roadmap (AI Conversations, Voice Interaction, Smart Task Assistance, Modern Chat Interface, Context-Aware Responses, Full Stack Integration).
  - Clear distinction between implemented, in-progress, and planned tech stack components.
  - System architecture data flow modal and development notes.

---

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Server-side contact validation & dispatch
│   ├── globals.css               # Tailwind directives, theme variables & scrollbar
│   ├── icon.tsx                  # Dynamic Edge KC monogram favicon
│   ├── layout.tsx                # Metadata, viewport, and semantic HTML
│   ├── opengraph-image.tsx       # Dynamic 1200x630 social card generator
│   ├── page.tsx                  # Unified modular home page
│   ├── robots.ts                 # Search engine directives
│   └── sitemap.ts                # Dynamic XML sitemap generator
│
├── components/
│   ├── ui/
│   │   ├── BackgroundEffects.tsx # Dynamic aurora blur blobs & canvas particles
│   │   ├── BackToTop.tsx         # Smooth floating back-to-top trigger
│   │   ├── GlowCard.tsx          # Glassmorphic card with glow borders
│   │   └── SectionHeader.tsx     # Standardized accessible section headers
│   ├── Navbar.tsx                # Sticky glass navbar with active section pill
│   ├── Hero.tsx                  # Cinematic entrance, 3D orbit badge & typing roles
│   ├── About.tsx                 # Personal profile, BCA narrative & resume modal
│   ├── Skills.tsx                # 3 animated skill cards (80%, 80%, 60%)
│   ├── Services.tsx              # What I Can Do (Marketing, Video, Web Dev)
│   ├── Projects.tsx              # Things I'm Building & Creating + Detail Modals
│   ├── NovisShowcase.tsx         # Flagship NOVIS AI Showcase & dialogue sandbox
│   ├── NovisOrb.tsx              # Interactive Canvas NOVIS intelligence orb
│   ├── Showreel.tsx              # Cinematic video player with 4 aspect ratios
│   ├── Experience.tsx            # My Journey milestone timeline
│   ├── Process.tsx               # 4-step workflow methodology
│   ├── Tools.tsx                 # Categorized technology wall with filter tabs
│   ├── Contact.tsx               # Form validation, preset topics & social links
│   └── Footer.tsx                # KC monogram, quick links & dynamic year
│
├── hooks/
│   ├── useActiveSection.ts       # Active section detection for navigation
│   └── useReducedMotion.ts       # Respects user's prefers-reduced-motion setting
│
├── lib/
│   ├── animations.ts             # Framer Motion variants & stagger helper
│   ├── constants.ts              # Single source of truth for all content & config
│   ├── utils.ts                  # Classname merging and smooth scrolling
│   └── validation.ts             # Contact form validation & sanitization
│
└── public/                       # Static public assets
```

---

## 🛠️ Quick Start & Local Development

### 1. Prerequisites
- Node.js `v18.18+` or `v20+`
- npm or pnpm

### 2. Installation
```bash
# Clone or navigate to the project directory
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

All portfolio information is stored in **`lib/constants.ts`**:

1. **Owner Profile (`siteConfig`):** Update name, titles, BCA graduate details, location, and social links.
2. **Skills (`skillsData`):** Update self-assessed percentages or skill bullet points.
3. **Projects (`projectsData`):** Add new projects, update repository links, or modify descriptions.
4. **NOVIS AI Specs (`novisRoadmap`, `novisTechStack`, `novisTimelinePhases`):** Update feature statuses (Completed, In Progress, Planned).
5. **Tools & Technologies (`toolsData`):** Modify active toolsets and experience classifications.
6. **Contact API (`.env.local`):** Configure optional email delivery:
   ```env
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL_TO=contact.karanportfolio@gmail.com
   NEXT_PUBLIC_SITE_URL=https://karanportfolio.vercel.app
   ```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Next.js 14 App Router is detected automatically with zero extra configuration.
4. (Optional) Add your `RESEND_API_KEY` in Project Settings > Environment Variables.
5. Click **Deploy**.

---

## 📄 License
Designed and developed for **KARAN C**. All rights reserved.
