export interface SiteConfig {
  name: string;
  initials: string;
  role: string;
  title: string;
  heroBio: string;
  heroHeadline: string;
  heroSupportingHeadline: string;
  education: string;
  location: string;
  aboutIntro: string;
  aboutBio: string;
  availability: string;
  email: string;
  resumeUrl: string;
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "KARAN C",
  initials: "KC",
  role: "Digital Marketer | Video Editor | Full Stack Developer",
  title: "Digital Marketer, Video Editor & Full Stack Developer",
  heroHeadline: "CREATIVITY MEETS TECHNOLOGY.",
  heroSupportingHeadline: "Digital Marketing. Video Editing. Full Stack Development.",
  heroBio:
    "Turning ideas into digital experiences through creative storytelling, smart marketing, and modern web development.",
  education: "Bachelor of Computer Applications (BCA) Graduate",
  location: "Trichy, Tamil Nadu, India",
  aboutIntro:
    "I'm a BCA graduate passionate about digital marketing, creative video editing, and full stack development. I combine creativity, technology, and strategy to create engaging digital experiences, produce impactful content, and help businesses grow online. I'm also developing NOVIS, my personal AI assistant project, as part of my journey into AI-powered application development.",
  aboutBio:
    "I'm a BCA graduate with a strong interest in the intersection of marketing, design, and technology. My focus is on developing practical skills across digital marketing, video editing, and full stack development. I enjoy experimenting with modern tools, solving problems, and transforming ideas into meaningful digital experiences. I'm currently expanding my technical skills through personal projects, including NOVIS, my personal AI assistant.",
  availability: "Available for Projects & Collaborations",
  email: "contact.karanportfolio@gmail.com",
  resumeUrl: "#resume-modal",
  socials: {
    linkedin: "https://linkedin.com/in/karanc-portfolio",
    github: "https://github.com/karanc-dev",
    instagram: "https://instagram.com/karanc.creates",
    email: "mailto:contact.karanportfolio@gmail.com",
  },
};

export const heroTypingRoles = [
  "Digital Marketing Strategist",
  "Creative Video Editor",
  "Full Stack Developer",
  "BCA Graduate & Technologist",
  "Creator of NOVIS AI Assistant",
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "NOVIS AI", href: "#novis" },
  { name: "Journey", href: "#journey" },
  { name: "Tools", href: "#tools" },
  { name: "Contact", href: "#contact" },
];

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  badge: string;
  gradient: string;
  accentColor: string;
  description: string;
  visualType: "circle" | "timeline" | "terminal";
  items: string[];
}

export const skillsData: SkillItem[] = [
  {
    id: "marketing",
    name: "Digital Marketing",
    percentage: 80,
    badge: "80% Proficiency",
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "#3B82F6",
    description:
      "Data-driven marketing, paid campaigns, high-converting social media systems, and organic search optimization.",
    visualType: "circle",
    items: [
      "SEO and keyword research",
      "Google Ads and campaign optimization",
      "Meta Ads and audience targeting",
      "Social media management",
      "Content strategy and analytics",
      "Lead generation and conversion optimization",
    ],
  },
  {
    id: "video",
    name: "Video Editing",
    percentage: 80,
    badge: "80% Proficiency",
    gradient: "from-purple-500 to-pink-600",
    accentColor: "#A855F7",
    description:
      "High-energy video storytelling, promotional content, kinetic typography, and rhythmic audio synchronization.",
    visualType: "timeline",
    items: [
      "Business promotional video editing",
      "Instagram Reels and YouTube Shorts",
      "Cinematic transitions",
      "Motion graphics and text animation",
      "Sound design and beat synchronization",
      "Brand storytelling and promotional content",
    ],
  },
  {
    id: "development",
    name: "Full Stack Development",
    percentage: 60,
    badge: "60% Proficiency",
    gradient: "from-cyan-400 to-blue-600",
    accentColor: "#06B6D4",
    description:
      "Modern full stack web engineering, responsive user interfaces, REST APIs, and database fundamentals.",
    visualType: "terminal",
    items: [
      "HTML, CSS, and JavaScript",
      "React.js frontend development",
      "Responsive website design",
      "Node.js and Express.js",
      "MongoDB database fundamentals",
      "REST API integration and debugging",
    ],
  },
];

export const skillAssessmentDisclaimer =
  "Skill percentages represent my self-assessed proficiency.";

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  deliverables: string[];
  gradient: string;
  badge: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing & Strategy",
    icon: "TrendingUp",
    badge: "Growth Strategy",
    description:
      "Systematic campaigns to expand brand reach, capture qualified leads, and maximize advertising return on investment.",
    deliverables: [
      "Social media management",
      "Google Ads and Meta Ads",
      "SEO optimization",
      "Content planning",
      "Lead generation",
      "Campaign analysis",
    ],
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
  },
  {
    id: "video-editing",
    title: "Video Editing & Motion Graphics",
    category: "Creative Production",
    icon: "Film",
    badge: "Visual Storytelling",
    description:
      "Cinematic video editing and dynamic motion graphics engineered for high audience retention across modern platforms.",
    deliverables: [
      "Business promotional videos",
      "Short-form social media content",
      "Cinematic editing",
      "Animated typography",
      "Motion graphics",
      "Brand promotional content",
    ],
    gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
  },
  {
    id: "full-stack-dev",
    title: "Full Stack Development",
    category: "Web Engineering",
    icon: "Code2",
    badge: "Modern Applications",
    description:
      "End-to-end web applications and modern websites built with clean architecture, responsive design, and smooth interactions.",
    deliverables: [
      "Responsive portfolio websites",
      "Business websites and landing pages",
      "Frontend and backend development",
      "REST API integration",
      "Database connectivity",
      "Application development",
    ],
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "Artificial Intelligence" | "Digital Marketing" | "Video Editing" | "Web Development";
  tagline: string;
  description: string;
  tools: string[];
  status: "In Development" | "Completed" | "Showcase Work" | "Concept Exploration";
  isFlagship?: boolean;
  highlight: string;
  accent: string;
  metrics?: { label: string; value: string }[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailNotes: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "novis-ai",
    title: "NOVIS: Personal AI Assistant",
    category: "Artificial Intelligence",
    tagline: "Your Personal AI Assistant. Built for What's Next.",
    description:
      "NOVIS is my flagship personal AI assistant project, which I'm currently developing to explore intelligent assistance, modern application architecture, and AI-powered user experiences. The goal is to create an intuitive assistant that helps users interact with technology more naturally and complete useful tasks efficiently.",
    tools: ["React.js", "JavaScript", "Node.js", "Express.js", "AI API Integration", "Tailwind CSS"],
    status: "In Development",
    isFlagship: true,
    highlight: "Custom animated intelligence core, contextual prompt architecture, and multi-modal productivity workflows.",
    accent: "from-blue-600/40 via-violet-600/30 to-cyan-500/30",
    metrics: [
      { label: "Status", value: "In Active Dev" },
      { label: "Focus", value: "Conversational AI" },
      { label: "Architecture", value: "Full Stack" },
    ],
    features: [
      "Natural-language interaction through modern AI models",
      "Planned voice interaction and spoken responses",
      "Everyday productivity workflow assistance",
      "Context-aware response handling",
    ],
    githubUrl: "https://github.com/karanc-dev/novis-ai-assistant",
    liveUrl: "#novis",
    detailNotes:
      "NOVIS represents my transition into building intelligent AI-driven applications. Built modularly with a React frontend and Node.js backend.",
  },
  {
    id: "ai-marketing-system",
    title: "AI-Powered Digital Marketing System",
    category: "Digital Marketing",
    tagline: "Intelligent Marketing Automation & Analytics Concept",
    description:
      "An AI-focused digital marketing exploration project integrating automated social media workflows, AI content generation, SEO recommendations, and performance analytics dashboards into a unified dashboard.",
    tools: ["AI APIs", "Google Analytics Concept", "SEO Algorithms", "Next.js", "Tailwind CSS"],
    status: "Concept Exploration",
    highlight: "Simulated audience analysis, automated copy generation, and data-driven ad campaign recommendation engine.",
    accent: "from-blue-600/30 to-indigo-600/30",
    metrics: [
      { label: "Concept", value: "Automated Workflows" },
      { label: "Optimization", value: "SEO & Ads" },
      { label: "Status", value: "Proposed Features" },
    ],
    features: [
      "AI content generation concepts",
      "Automated social media workflows",
      "SEO recommendations pipeline",
      "Marketing analytics dashboard",
      "Website integration concepts",
    ],
    githubUrl: "https://github.com/karanc-dev/ai-marketing-system",
    detailNotes:
      "Features are clearly labeled as concept exploration and proposed workflows while under active architectural design.",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    tagline: "High-Performance Animated Digital Showcase",
    description:
      "A modern, responsive personal portfolio website built with React, Next.js, and Framer Motion. Engineered with cinematic dark aesthetics, interactive cards, micro-interactions, and accessible typography.",
    tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    highlight: "Apple & Framer inspired UI, custom canvas particle animations, smooth page transitions, and WCAG AA accessibility.",
    accent: "from-indigo-600/30 to-purple-600/30",
    metrics: [
      { label: "Design", value: "Awwwards Inspired" },
      { label: "Performance", value: "60fps Animations" },
      { label: "Stack", value: "React + Next.js" },
    ],
    features: [
      "Responsive React interface",
      "Smooth Framer Motion transitions",
      "Interactive NOVIS intelligence orb",
      "Self-assessed skills visualizer",
      "Contact form with live feedback",
    ],
    githubUrl: "https://github.com/karanc-dev/karan-portfolio",
    liveUrl: "#hero",
    detailNotes:
      "Crafted as a complete digital product reflecting the synergy of design, video storytelling, and code.",
  },
  {
    id: "promotional-video",
    title: "Business Promotional Video",
    category: "Video Editing",
    tagline: "Cinematic Brand Story & Visual Elevation",
    description:
      "A creative video project featuring cinematic pacing, animated typography, sound synchronization, dynamic visual transitions, and brand storytelling crafted to maximize retention.",
    tools: ["CapCut", "Premiere Pro", "Motion Graphics", "Sound Design", "Color Grading"],
    status: "Showcase Work",
    highlight: "Engineered multi-layer sound design, kinetic text animations, and high-impact visual transitions.",
    accent: "from-purple-600/30 to-pink-600/30",
    metrics: [
      { label: "Pacing", value: "Dynamic Cinematic" },
      { label: "Format", value: "16:9 & 9:16" },
      { label: "Audio", value: "Rhythmic Beat Sync" },
    ],
    features: [
      "Cinematic editing & speed ramping",
      "Animated kinetic typography",
      "Sound design & beat synchronization",
      "Visual transitions & color grading",
      "Brand storytelling narrative",
    ],
    detailNotes:
      "Designed as a benchmark for high-retention commercial promos and social video content.",
  },
  {
    id: "business-website",
    title: "Modern Business Website",
    category: "Web Development",
    tagline: "Responsive Web Architecture & API Connectivity",
    description:
      "A modern business website project exploring responsive frontend interfaces, backend integration, API connectivity, database operations, and conversion-focused user journeys.",
    tools: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    status: "Concept Exploration",
    highlight: "Clean component architecture, REST API communication, mobile-first design, and database integration.",
    accent: "from-cyan-600/30 to-blue-600/30",
    metrics: [
      { label: "Layout", value: "100% Responsive" },
      { label: "Backend", value: "Node & Express" },
      { label: "Database", value: "MongoDB" },
    ],
    features: [
      "Responsive frontend UI",
      "Backend REST integration",
      "API connectivity & error handling",
      "Database operations model",
      "Clean semantic markup",
    ],
    githubUrl: "https://github.com/karanc-dev/modern-business-web",
    detailNotes:
      "Full stack implementation demonstrating clean separation of concerns and scalable code structure.",
  },
];

export const novisRoadmap = [
  {
    phase: "01",
    title: "AI-Powered Conversations",
    description: "Natural-language interaction through an intelligent AI model for contextual answering and ideation.",
    status: "In Development",
    icon: "Bot",
    badge: "Core Feature",
  },
  {
    phase: "02",
    title: "Voice Interaction",
    description: "Potential speech input and spoken responses for hands-free natural interaction.",
    status: "Planned",
    icon: "Mic",
    badge: "Audio AI",
  },
  {
    phase: "03",
    title: "Smart Task Assistance",
    description: "Support for useful everyday tasks, scheduling, notes, and productivity workflows.",
    status: "Planned",
    icon: "CheckSquare",
    badge: "Productivity",
  },
  {
    phase: "04",
    title: "Modern Chat Interface",
    description: "A clean, responsive, dark-mode glassmorphic interface for conversational interaction.",
    status: "In Progress",
    icon: "MessageSquare",
    badge: "UI/UX",
  },
  {
    phase: "05",
    title: "Context-Aware Responses",
    description: "Maintain useful conversational context and memory across ongoing user interactions.",
    status: "Planned",
    icon: "Cpu",
    badge: "Memory",
  },
  {
    phase: "06",
    title: "Full Stack Integration",
    description: "Connect the React frontend, Node backend, AI service, and data storage seamlessly.",
    status: "In Progress",
    icon: "Server",
    badge: "Architecture",
  },
];

export const novisTechStack = [
  {
    category: "Frontend",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3 / Tailwind"],
    status: "Implemented",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js"],
    status: "In Progress",
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    category: "AI Integration",
    technologies: ["Selected AI Model / API"],
    status: "Under Evaluation",
    color: "text-purple-400 border-purple-500/20 bg-purple-500/10",
  },
  {
    category: "Database",
    technologies: ["MongoDB (if used)"],
    status: "Planned",
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    category: "Potential Additional",
    technologies: ["Speech Recognition", "Text-to-Speech", "Authentication", "External API Integrations"],
    status: "Planned",
    color: "text-amber-400 border-amber-500/20 bg-amber-500/10",
  },
];

export const novisTimelinePhases = [
  {
    phase: "Phase 01",
    title: "Idea & Vision",
    description: "Define the purpose, architectural goals, and design philosophy of NOVIS.",
    status: "Completed",
    date: "Milestone 1",
  },
  {
    phase: "Phase 02",
    title: "UI/UX Design",
    description: "Develop the visual identity, glassmorphism interface, and intelligence orb interactions.",
    status: "In Progress",
    date: "Current Focus",
  },
  {
    phase: "Phase 03",
    title: "Core Development",
    description: "Build the initial React client application and foundational interface components.",
    status: "In Progress",
    date: "Current Focus",
  },
  {
    phase: "Phase 04",
    title: "AI Integration",
    description: "Connect the selected AI model API and implement conversational pipelines.",
    status: "Planned",
    date: "Upcoming",
  },
  {
    phase: "Phase 05",
    title: "Testing & Optimization",
    description: "Test conversational accuracy, latency, responsiveness, and memory retention.",
    status: "Planned",
    date: "Upcoming",
  },
  {
    phase: "Phase 06",
    title: "Launch",
    description: "Deploy the NOVIS application live with public documentation and demonstration.",
    status: "Planned",
    date: "Future Milestone",
  },
];

export interface JourneyMilestone {
  period: string;
  title: string;
  category: "Education" | "Digital Marketing" | "Video Production" | "Web Development" | "AI Exploration";
  location?: string;
  description: string;
  status: "Completed" | "Continuous Practice" | "In Active Development";
  highlights: string[];
}

export const journeyTimeline: JourneyMilestone[] = [
  {
    period: "Graduate",
    title: "Bachelor of Computer Applications (BCA)",
    category: "Education",
    location: "Trichy, Tamil Nadu, India",
    description:
      "Graduated with a Bachelor of Computer Applications, establishing solid foundational knowledge in computer science, software logic, database concepts, and computational problem-solving.",
    status: "Completed",
    highlights: [
      "Core computing fundamentals, algorithms, and data structures",
      "Database management concepts and SQL fundamentals",
      "Software development life cycle and web programming",
    ],
  },
  {
    period: "Practice & Execution",
    title: "Digital Marketing Learning & Practical Projects",
    category: "Digital Marketing",
    description:
      "Hands-on development of practical skills across paid search, social media advertising, search engine optimization, and conversion tracking.",
    status: "Continuous Practice",
    highlights: [
      "Google Ads search and display campaign strategy",
      "Meta Ads audience segmentation and funnel targeting",
      "SEO on-page optimization, keyword intent mapping, and analytics",
    ],
  },
  {
    period: "Creative Craft",
    title: "Video Editing Practice & Promotional Content",
    category: "Video Production",
    description:
      "Developing engaging visual content using CapCut and Premiere Pro, mastering short-form video dynamics, kinetic text animations, and cinematic brand promos.",
    status: "Continuous Practice",
    highlights: [
      "9:16 high-retention Instagram Reels and YouTube Shorts",
      "Dynamic sound design, beat synchronization, and audio mixing",
      "Kinetic typography, visual pacing, and color grading",
    ],
  },
  {
    period: "Engineering",
    title: "Full Stack Development Projects",
    category: "Web Development",
    description:
      "Building practical web applications and interactive websites using React, Next.js, JavaScript, Node.js, and MongoDB.",
    status: "Continuous Practice",
    highlights: [
      "Component-driven frontend development with React and Tailwind CSS",
      "RESTful API design and backend routing with Node.js and Express",
      "Database schema structuring with MongoDB",
    ],
  },
  {
    period: "Flagship Innovation",
    title: "NOVIS AI Assistant Development",
    category: "AI Exploration",
    description:
      "Embarking on the creation of NOVIS, my personal AI assistant, exploring AI model integration, prompt architectures, and conversational UX.",
    status: "In Active Development",
    highlights: [
      "Conceptualizing multi-modal personal assistance workflows",
      "Designing futuristic glassmorphic UI and interactive core animations",
      "Iterating through frontend architecture towards full-stack AI deployment",
    ],
  },
];

export interface ToolItem {
  name: string;
  category: "Digital Marketing" | "Video Editing" | "Development" | "Artificial Intelligence";
  experience: "Currently Used" | "Learning / Exploring";
  icon: string;
  purpose: string;
}

export const toolsData: ToolItem[] = [
  // Digital Marketing
  { name: "Google Ads", category: "Digital Marketing", experience: "Currently Used", icon: "Target", purpose: "Paid Search & Display Campaigns" },
  { name: "Meta Ads Manager", category: "Digital Marketing", experience: "Currently Used", icon: "Megaphone", purpose: "Facebook & Instagram Audience Targeting" },
  { name: "Search Engine Optimization (SEO)", category: "Digital Marketing", experience: "Currently Used", icon: "Search", purpose: "Keyword Analysis & On-Page Visibility" },
  { name: "Google Analytics", category: "Digital Marketing", experience: "Currently Used", icon: "BarChart3", purpose: "Audience Behavior & Conversion Tracking" },
  
  // Video Editing
  { name: "CapCut", category: "Video Editing", experience: "Currently Used", icon: "Film", purpose: "Short-Form Reels, Captions & Fast Cuts" },
  { name: "Adobe Premiere Pro", category: "Video Editing", experience: "Currently Used", icon: "Video", purpose: "Cinematic Long-Form & Commercial Edits" },
  { name: "Adobe After Effects", category: "Video Editing", experience: "Learning / Exploring", icon: "Sparkles", purpose: "Motion Graphics & Kinetic Animation" },
  { name: "Canva Pro", category: "Video Editing", experience: "Currently Used", icon: "Palette", purpose: "Visual Thumbnails, Storyboards & Graphics" },

  // Development
  { name: "HTML5 & CSS3", category: "Development", experience: "Currently Used", icon: "Code", purpose: "Modern Semantic Web Layouts" },
  { name: "JavaScript (ES6+)", category: "Development", experience: "Currently Used", icon: "Cpu", purpose: "Dynamic Logic & Interactive State" },
  { name: "React.js", category: "Development", experience: "Currently Used", icon: "Boxes", purpose: "Component-Based UI Architecture" },
  { name: "Next.js", category: "Development", experience: "Currently Used", icon: "Globe", purpose: "Production React Framework & Routing" },
  { name: "Tailwind CSS", category: "Development", experience: "Currently Used", icon: "Wind", purpose: "Utility-First Responsive Styling" },
  { name: "Node.js", category: "Development", experience: "Currently Used", icon: "Server", purpose: "Backend Runtime Environment" },
  { name: "Express.js", category: "Development", experience: "Currently Used", icon: "Workflow", purpose: "RESTful Server APIs & Middleware" },
  { name: "MongoDB", category: "Development", experience: "Learning / Exploring", icon: "Database", purpose: "NoSQL Database & Document Storage" },
  { name: "Git & GitHub", category: "Development", experience: "Currently Used", icon: "GitBranch", purpose: "Version Control & Project Collaboration" },

  // Artificial Intelligence
  { name: "AI Model APIs", category: "Artificial Intelligence", experience: "Currently Used", icon: "Bot", purpose: "Language Models & Generative Inference" },
  { name: "Prompt Engineering", category: "Artificial Intelligence", experience: "Currently Used", icon: "Terminal", purpose: "Structured Reasoning & Context Optimization" },
  { name: "Conversational Architecture", category: "Artificial Intelligence", experience: "Currently Used", icon: "MessageSquare", purpose: "Stateful Dialogue & Agentic Workflows" },
  { name: "Speech & Audio APIs", category: "Artificial Intelligence", experience: "Learning / Exploring", icon: "Mic", purpose: "Voice Input & Text-to-Speech Integration" },
];

export const contactPresetSubjects = [
  "Discuss Digital Marketing Strategy",
  "Video Editing / Promotional Project",
  "Website or Full Stack Development",
  "Collaborate on NOVIS AI Assistant",
  "General Inquiries / Freelance Opportunities",
];

export const contactServices = contactPresetSubjects;

export const budgetRanges = [
  "Flexible / Discussion",
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $3,000",
  "$3,000+",
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
      "Brand elevation videos highlighting core differentiators, product value propositions, and clear call-to-actions.",
    tags: ["Premiere Pro", "Color Grading", "Sound FX", "4K Video"],
    aspectRatio: "16:9",
  },
  {
    id: "reels",
    title: "Instagram Reels",
    badge: "Short-Form",
    description:
      "High-retention 9:16 vertical edits tailored for algorithmic engagement, rhythmic music cuts, and kinetic text hooks.",
    tags: ["CapCut", "Auto Captions", "Kinetic Hooks", "9:16"],
    aspectRatio: "9:16",
  },
  {
    id: "shorts",
    title: "YouTube Shorts",
    badge: "Social Media",
    description:
      "Fast-paced visual storytelling designed for subscriber acquisition and strong audience retention curves.",
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
