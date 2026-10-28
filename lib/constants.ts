export interface SiteConfig {
  name: string;
  initials: string;
  role: string;
  title: string;
  heroBio: string;
  tagline: string;
  location: string;
  availability: string;
  email: string;
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
    youtube: string;
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Karan",
  initials: "KP",
  role: "Digital Marketer | Video Editor | Full Stack Developer",
  title: "Digital Marketer, Video Editor & Full Stack Developer",
  heroBio:
    "I help brands grow through strategic digital marketing, engaging video content, and modern web development to build a powerful online presence.",
  tagline: "Turning Ideas Into Digital Growth.",
  location: "Open for Global Remote & Hybrid Roles",
  availability: "Available for Freelance & Collaborative Projects",
  email: "contact.karanportfolio@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    email: "mailto:contact.karanportfolio@gmail.com",
  },
};

export const heroTypingRoles = [
  "Digital Marketing Strategist",
  "Creative Video Editor",
  "Full Stack Developer",
  "Social Media Growth Enthusiast",
  "Digital Content Creator",
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Showreel", href: "#showreel" },
  { name: "Process", href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export interface SkillGroup {
  id: string;
  name: string;
  percentage: number;
  badge: string;
  gradient: string;
  accentColor: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "marketing",
    name: "Digital Marketing",
    percentage: 80,
    badge: "Growth & Strategy",
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "#4F46E5",
    description:
      "Data-driven marketing, paid acquisition, high-converting social campaigns, and organic search visibility.",
    skills: [
      { name: "Digital Marketing Strategy", level: "Advanced", icon: "TrendingUp" },
      { name: "Social Media Marketing", level: "Advanced", icon: "Share2" },
      { name: "Search Engine Optimization (SEO)", level: "Advanced", icon: "Search" },
      { name: "Google Ads", level: "Advanced", icon: "Target" },
      { name: "Meta Ads (FB & IG)", level: "Advanced", icon: "Megaphone" },
      { name: "Content Marketing", level: "Advanced", icon: "FileText" },
      { name: "Keyword Research", level: "Proficient", icon: "Key" },
      { name: "Audience Targeting", level: "Advanced", icon: "Users" },
      { name: "Conversion Tracking", level: "Advanced", icon: "BarChart3" },
      { name: "Marketing Analytics", level: "Advanced", icon: "PieChart" },
      { name: "Campaign Optimization", level: "Advanced", icon: "Sliders" },
      { name: "Lead Generation", level: "Proficient", icon: "UserPlus" },
    ],
  },
  {
    id: "video",
    name: "Video Editing",
    percentage: 80,
    badge: "Storytelling & Motion",
    gradient: "from-purple-500 to-pink-600",
    accentColor: "#7C3AED",
    description:
      "Engaging short-form content, cinematic promo videos, dynamic kinetic typography, and polished visual storytelling.",
    skills: [
      { name: "CapCut", level: "Expert", icon: "Film" },
      { name: "Adobe Premiere Pro", level: "Advanced", icon: "Video" },
      { name: "Adobe After Effects", level: "Intermediate", icon: "Sparkles" },
      { name: "Canva Pro", level: "Expert", icon: "Palette" },
      { name: "Short-Form Video Editing", level: "Expert", icon: "Smartphone" },
      { name: "Instagram Reels", level: "Expert", icon: "Instagram" },
      { name: "YouTube Shorts", level: "Expert", icon: "Youtube" },
      { name: "Promotional Videos", level: "Advanced", icon: "Tv" },
      { name: "Motion Graphics", level: "Advanced", icon: "Layers" },
      { name: "Cinematic Transitions", level: "Advanced", icon: "Scissors" },
      { name: "Color Correction", level: "Advanced", icon: "Sun" },
      { name: "Sound Design", level: "Advanced", icon: "Volume2" },
      { name: "Text Animation", level: "Advanced", icon: "Type" },
      { name: "Storytelling", level: "Advanced", icon: "Feather" },
    ],
  },
  {
    id: "development",
    name: "Full Stack Development",
    percentage: 60,
    badge: "Modern Web Engineering",
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "#06B6D4",
    description:
      "Modern full-stack web applications, responsive interfaces, performant APIs, and type-safe architecture.",
    skills: [
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Code" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Cpu" },
      { name: "TypeScript", level: "Proficient", icon: "FileCode" },
      { name: "React", level: "Advanced", icon: "Boxes" },
      { name: "Next.js (App Router)", level: "Proficient", icon: "Globe" },
      { name: "Tailwind CSS", level: "Expert", icon: "Wind" },
      { name: "Node.js", level: "Proficient", icon: "Server" },
      { name: "Express.js", level: "Proficient", icon: "Workflow" },
      { name: "MongoDB", level: "Proficient", icon: "Database" },
      { name: "REST APIs", level: "Advanced", icon: "Network" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Responsive Web Design", level: "Expert", icon: "Monitor" },
    ],
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  deliverables: string[];
  gradient: string;
}

export const services: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Strategy & Growth",
    icon: "TrendingUp",
    description:
      "Holistic digital marketing campaigns built on data-backed strategy, competitive research, and targeted online execution.",
    deliverables: [
      "Custom digital growth roadmap",
      "Audience persona & competitor research",
      "Online growth planning & KPI tracking",
      "Campaign performance optimization",
    ],
    gradient: "from-indigo-500/20 to-blue-500/10",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    category: "Organic Presence",
    icon: "Share2",
    description:
      "Structured social media content systems to elevate brand awareness, drive engagement, and foster authentic follower communities.",
    deliverables: [
      "Instagram & Facebook tailored content",
      "Monthly content calendar planning",
      "Post & short-form reel strategy",
      "Visual brand identity & aesthetic consistency",
    ],
    gradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    id: "paid-advertising",
    title: "Paid Advertising",
    category: "Performance Ads",
    icon: "Target",
    description:
      "High-ROI paid advertising campaigns across Google and Meta platforms targeted at maximum conversion and customer acquisition.",
    deliverables: [
      "Google Search & Display Ads campaigns",
      "Meta Ads (Facebook & Instagram) funnels",
      "Custom audience targeting & retargeting",
      "Pixel setup, conversion tracking & ROAS analysis",
    ],
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "video-editing",
    title: "Professional Video Editing",
    category: "Content Creation",
    icon: "Film",
    description:
      "High-energy, thumb-stopping video editing crafted specifically for algorithms and audience retention across modern platforms.",
    deliverables: [
      "High-converting Instagram Reels & YouTube Shorts",
      "Business & product promotional videos",
      "Kinetic text animations & sound design",
      "Color grading & cinematic visual effects",
    ],
    gradient: "from-pink-500/20 to-rose-500/10",
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "Frontend UI/UX",
    icon: "Layout",
    description:
      "Speed-optimized, responsive websites designed to reflect your brand's quality and convert visitors into paying clients.",
    deliverables: [
      "Custom business & agency websites",
      "High-converting product landing pages",
      "Portfolio & personal branding platforms",
      "Mobile-first responsive UI development",
    ],
    gradient: "from-cyan-500/20 to-teal-500/10",
  },
  {
    id: "full-stack-solutions",
    title: "Full Stack Solutions",
    category: "Web Engineering",
    icon: "Terminal",
    description:
      "Full stack web development connecting interactive client-side interfaces with robust server architectures and databases.",
    deliverables: [
      "Interactive Next.js & React frontend interfaces",
      "Node.js & Express.js backend APIs",
      "MongoDB database modeling & integration",
      "RESTful API integration & maintenance",
    ],
    gradient: "from-indigo-500/20 to-violet-500/10",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "Digital Marketing" | "Video Editing" | "Web Development";
  tagline: string;
  description: string;
  tools: string[];
  type: "Concept Project" | "Practice Exploration" | "Showcase Work";
  metrics?: { label: string; value: string }[];
  highlight: string;
  accent: string;
}

export const projects: ProjectItem[] = [
  {
    id: "marketing-campaign",
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    tagline: "Omnichannel Acquisition & Growth Strategy",
    description:
      "A campaign concept focused on brand awareness, audience targeting, creative content, and measurable marketing performance across paid and organic channels.",
    tools: ["Google Ads", "Meta Ads", "SEO", "Google Analytics", "Audience Insights"],
    type: "Concept Project",
    metrics: [
      { label: "Target ROAS", value: "3.4x Model" },
      { label: "Channel Mix", value: "Search + Social" },
      { label: "Objective", value: "Lead Acquisition" },
    ],
    highlight: "Comprehensive funnel mapping from top-of-funnel awareness reels to conversion landing pages.",
    accent: "from-blue-600/30 to-indigo-600/30",
  },
  {
    id: "promotional-video",
    title: "Business Promotional Video",
    category: "Video Editing",
    tagline: "Cinematic Brand Story & Value Proposition",
    description:
      "A polished promotional video concept designed to showcase a business, communicate its value, and encourage customer engagement with cinematic pacing.",
    tools: ["CapCut", "Adobe Premiere Pro", "Motion Graphics", "Color Grading", "Sound Design"],
    type: "Showcase Work",
    metrics: [
      { label: "Resolution", value: "4K UHD" },
      { label: "Pacing", value: "Dynamic / Cinematic" },
      { label: "Soundtrack", value: "Custom SFX Mix" },
    ],
    highlight: "Seamless multi-track editing, audio ducking, color curve adjustments, and branded kinetic typography.",
    accent: "from-purple-600/30 to-pink-600/30",
  },
  {
    id: "social-reel-series",
    title: "Social Media Reel Series",
    category: "Video Editing",
    tagline: "Short-Form High-Retention Content System",
    description:
      "A short-form content series combining attention-grabbing hooks, visual storytelling, dynamic text, and clear calls to action optimized for 9:16 mobile screens.",
    tools: ["CapCut", "Content Strategy", "Social Media Marketing", "Canva"],
    type: "Showcase Work",
    metrics: [
      { label: "Format", value: "9:16 Vertical" },
      { label: "Hook Rate", value: "First 3-Sec Focus" },
      { label: "Platform", value: "Reels & Shorts" },
    ],
    highlight: "Engineered retention curves with zoom-cuts, sound accents, captions, and visual B-roll transitions.",
    accent: "from-pink-600/30 to-rose-600/30",
  },
  {
    id: "business-website",
    title: "Modern Business Website",
    category: "Web Development",
    tagline: "Speed, Conversion & Clean UX Architecture",
    description:
      "A responsive business website concept with a modern interface, clear service presentation, and conversion-focused calls to action built on Next.js.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Concept Project",
    metrics: [
      { label: "Lighthouse", value: "95+ Target" },
      { label: "Stack", value: "Next.js App Router" },
      { label: "Layout", value: "100% Responsive" },
    ],
    highlight: "Semantic markup, fluid typography, dark glass aesthetic, and zero-layout-shift image handling.",
    accent: "from-cyan-600/30 to-blue-600/30",
  },
  {
    id: "ai-marketing-system",
    title: "AI-Powered Marketing System",
    category: "Web Development",
    tagline: "Intelligent Content & Analytics Dashboard",
    description:
      "A project concept combining AI-assisted content creation, social media workflow management, SEO recommendations, and marketing analytics in one dashboard.",
    tools: ["Next.js", "React", "AI APIs", "Marketing Analytics", "Tailwind CSS"],
    type: "Practice Exploration",
    metrics: [
      { label: "Architecture", value: "Modular API" },
      { label: "Feature", value: "SEO Auto-Audit" },
      { label: "Interface", value: "Analytics Grid" },
    ],
    highlight: "Interactive charts, generative prompts workflow, and automated social schedule visualization.",
    accent: "from-indigo-600/30 to-cyan-600/30",
  },
  {
    id: "digital-agency-landing",
    title: "Digital Agency Landing Page",
    category: "Web Development",
    tagline: "High-Impact Visual Narrative for Modern Studios",
    description:
      "A premium landing page concept for a digital agency, designed to communicate services, build trust, and generate inquiries with smooth micro-interactions.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    type: "Showcase Work",
    metrics: [
      { label: "Interaction", value: "Smooth Parallax" },
      { label: "Contrast", value: "WCAG AA Pass" },
      { label: "Conversion", value: "Sticky CTA Dock" },
    ],
    highlight: "Floating glow backdrops, interactive tabs, responsive contact triggers, and sleek brand storytelling.",
    accent: "from-violet-600/30 to-indigo-600/30",
  },
];

export interface ShowreelCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  aspectRatio: string;
}

export const showreelCategories: ShowreelCategory[] = [
  {
    id: "promotions",
    title: "Business Promotions",
    badge: "Commercial",
    description:
      "Brand elevation videos highlighting core differentiators, customer testimonials, and clear call-to-actions.",
    tags: ["Premiere Pro", "Color Grading", "Sound FX", "4K Video"],
    aspectRatio: "16:9",
  },
  {
    id: "reels",
    title: "Instagram Reels",
    badge: "Short-Form",
    description:
      "Viral-ready 9:16 vertical edits tailored for engagement, pacing, rhythmic music cuts, and text hooks.",
    tags: ["CapCut", "Auto Captions", "Kinetic Hooks", "9:16"],
    aspectRatio: "9:16",
  },
  {
    id: "shorts",
    title: "YouTube Shorts",
    badge: "Social Media",
    description:
      "Fast-paced visual storytelling designed for subscriber acquisition and high algorithmic retention.",
    tags: ["Fast Pacing", "Sound Cues", "Thumbnail Design", "Shorts"],
    aspectRatio: "9:16",
  },
  {
    id: "cinematic",
    title: "Cinematic Edits",
    badge: "Visual Craft",
    description:
      "Atmospheric mood pieces featuring customized LUT color grading, speed ramps, and evocative soundscapes.",
    tags: ["LUT Grading", "Speed Ramps", "B-Roll", "Story Arc"],
    aspectRatio: "16:9",
  },
  {
    id: "ads",
    title: "Social Media Ads",
    badge: "Performance",
    description:
      "Direct-response video creatives engineered to boost click-through rates and reduce cost per acquisition.",
    tags: ["Meta Ads", "A/B Hooks", "CTA Graphic", "Conversion"],
    aspectRatio: "1:1 / 4:5",
  },
];

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  outputs: string[];
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "Phase 01",
    number: "01",
    title: "Discover",
    description:
      "Understand the business, target audience, core objectives, and unique project requirements through in-depth analysis.",
    outputs: ["Audience Research", "Competitor Audit", "Goal Alignment", "Technical Scope"],
    icon: "Compass",
  },
  {
    step: "Phase 02",
    number: "02",
    title: "Strategize",
    description:
      "Develop a clear marketing plan, creative video storyboard, or full-stack software architecture roadmap.",
    outputs: ["Content Calendar", "Storyboard & Script", "Tech Architecture", "Wireframe Layout"],
    icon: "Target",
  },
  {
    step: "Phase 03",
    number: "03",
    title: "Create",
    description:
      "Produce engaging video edits, execute targeted marketing campaigns, or build clean, responsive web applications.",
    outputs: ["Cinematic Video Edits", "Paid Ad Creatives", "Production Next.js Code", "Interactive UI"],
    icon: "Sparkles",
  },
  {
    step: "Phase 04",
    number: "04",
    title: "Optimize",
    description:
      "Review campaign and code metrics, run A/B iterations, polish responsiveness, and elevate overall performance.",
    outputs: ["Conversion Tuning", "Core Web Vitals Check", "Audience Retargeting", "Final Delivery"],
    icon: "Zap",
  },
];

export interface JourneyItem {
  period: string;
  title: string;
  domain: "Digital Marketing" | "Video Editing" | "Web Development" | "Creative Technology";
  description: string;
  highlights: string[];
}

export const journeyTimeline: JourneyItem[] = [
  {
    period: "Focus Area",
    title: "Digital Marketing Strategy & Performance Ad Practice",
    domain: "Digital Marketing",
    description:
      "Deepening practical knowledge across Google Ads, Meta Ads Manager, search engine optimization (SEO), and conversion tracking funnels.",
    highlights: [
      "Audience persona identification & competitive ad analysis",
      "Keyword research, search intent matching & on-page SEO",
      "Performance metrics: CTR, CPC, ROAS, and conversion tracking",
    ],
  },
  {
    period: "Focus Area",
    title: "Cinematic Video Editing & Social Media Content Creation",
    domain: "Video Editing",
    description:
      "Mastering CapCut, Premiere Pro, motion graphics, and short-form storytelling designed specifically for high retention on Reels and Shorts.",
    highlights: [
      "Crafting compelling 3-second hooks and dynamic kinetic subtitles",
      "Color grading, LUT matching, sound design, and speed ramping",
      "Producing promotional video assets for business concepts",
    ],
  },
  {
    period: "Focus Area",
    title: "Full Stack Web Development & Modern Architecture",
    domain: "Web Development",
    description:
      "Building full-stack web applications using modern JavaScript, TypeScript, React, Next.js App Router, Tailwind CSS, and Node.js.",
    highlights: [
      "Component-driven responsive design with Tailwind CSS",
      "Building RESTful APIs with Node.js and Express",
      "Integrating MongoDB database schemas and type-safe workflows",
    ],
  },
  {
    period: "Continuous",
    title: "Personal Projects, AI Workflows & Continuous Experimentation",
    domain: "Creative Technology",
    description:
      "Combining marketing acumen, creative storytelling, and coding capabilities to build impactful digital assets and AI-assisted workflows.",
    highlights: [
      "Rapid prototyping with modern web frameworks and design systems",
      "AI-driven content generation pipelines and workflow automations",
      "Bridging the gap between creative visual media and technical code",
    ],
  },
];

export const contactServices = [
  "Digital Marketing",
  "Social Media Management",
  "Google Ads / Meta Ads",
  "Video Editing",
  "Website Development",
  "Full Stack Development",
  "Other",
];

export const budgetRanges = [
  "Flexible / Discussion",
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000+",
];
