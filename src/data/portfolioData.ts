import { Project, ServiceItem, ProcessStep, Testimonial, FAQItem, Article, EstimatorOption, AwardItem, KeyFactItem, TeamMemberItem } from '../types';

export const PERSONAL_INFO = {
  name: "Emmanuel",
  title: "Website Designer & Developer | AI Integrations",
  experienceYears: "4+",
  completedProjects: "50+",
  clientSatisfaction: "100%",
  globalClients: "20+",
  email: "emmanuel@developer.design",
  phone: "+1 (800) EMMANUEL",
  location: "Remote Worldwide",
  calendlyUrl: "https://calendly.com",
  whatsappUrl: "https://wa.me/18000000000",
  behance: "https://behance.net",
  dribbble: "https://dribbble.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  upwork: "https://upwork.com",
  instagram: "https://instagram.com",
  github: "https://github.com",
  portraitImage: "https://res.cloudinary.com/gz77x9kx/image/upload/v1791813329/Confident_Modern_Profile_Portrait-2_1_evuqef.png",
  bio: "I’m a professional website designer and developer focused on creating modern, responsive, and high-performing websites that help businesses build a stronger online presence. I work with platforms such as WordPress, Shopify, Wix, Squarespace, Webflow, and Elementor to create websites that are visually appealing, easy to navigate, and built around the client’s goals. I also integrate AI-powered features into websites to make them smarter and more efficient."
};

export const PROJECTS: Project[] = [
  {
    id: "bright-future-academy",
    title: "Bright Future Academy",
    client: "Bright Future Education",
    category: "Website Design",
    categoryLabel: "School Website / UI/UX / WordPress",
    year: "2025",
    subtitle: "A modern school website designed to communicate academic programs, admissions process, campus life, and community.",
    description: "A modern school website designed to communicate the school's academic programs, admissions process, campus experience, and community in a clear and engaging digital experience. Built with custom WordPress theme architecture, Elementor Pro layouts, and accessible multi-tier navigation.",
    challenge: "The previous school portal was dated, difficult to navigate for prospective parents on mobile devices, and lacked an intuitive digital enrollment request funnel.",
    solution: "Designed a clean, warm, and highly structured interface in Figma with clear parent and student pathways, virtual campus tour highlights, interactive program curriculum guides, and automated admissions inquiry forms.",
    image: "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878748/c8900f254257965.6a7e4aff2a3e8_gy8lzk.webp",
    galleryImages: [
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878749/eca394254257965.6a7e4804db191_pynuc5.webp",
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878748/e8e2c5254257965.6a7e4806d0456_aw2yfv.webp",
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878748/8bfbb7254257965.6a7e480537932_d0uaao.webp"
    ],
    tags: ["WordPress", "UI/UX Design", "Figma", "Elementor", "Responsive", "SEO"],
    impactMetrics: [
      { label: "Admissions Inquiries", value: "+180%" },
      { label: "Mobile Bounce Rate", value: "-45%" },
      { label: "Lighthouse Speed", value: "98/100" }
    ],
    liveUrl: "https://brightfuture.example.com",
    featured: true,
    award: "Best Educational Web Design 2025",
    testimonial: {
      quote: "Emmanuel transformed our entire school's digital presence. Parents constantly compliment the effortless admissions process and the beautiful design.",
      author: "Dr. Eleanor Sterling",
      role: "Head of Admissions",
      company: "Bright Future Academy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "shipping-logistics-portal",
    title: "Shipping & Logistics Website",
    client: "Apex Global Freight",
    category: "WordPress Development",
    categoryLabel: "Logistics / WordPress / UI Design",
    year: "2024",
    subtitle: "A professional logistics website designed to communicate shipping services, build trust, and drive quote requests.",
    description: "A professional logistics website designed to communicate shipping services, build trust, and make it easy for customers to request information and take action. Features interactive route freight calculators, instant shipment quote requests, and multi-hub tracking integrations.",
    challenge: "Industrial logistics websites often suffer from confusing technical jargon, cluttered tables, and slow mobile loading speeds that lose high-value corporate quote leads.",
    solution: "Crafted an authoritative, dark-slate editorial UI with custom icon vectors, interactive quote estimator forms, instant tracking widgets, and clean service tier breakdowns.",
    image: "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878749/ddb9bc9bdffdb04ca3995c729a45afb7_v9czir.jpg",
    galleryImages: [
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878749/ce55fbdf919fd214568629dd2ed45168_xzbcow.jpg",
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878749/a5764a7208c5eb5a88d43d6d5d3d267a_ccxxzq.jpg",
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878749/ce55fbdf919fd214568629dd2ed45168_xzbcow.jpg"
    ],
    tags: ["WordPress", "UI Design", "Freight Quote System", "PHP", "Speed Optimization"],
    impactMetrics: [
      { label: "Freight Quote Requests", value: "+230%" },
      { label: "Corporate Clients Closed", value: "35+" },
      { label: "Avg Page Load", value: "0.7s" }
    ],
    liveUrl: "https://apexlogistics.example.com",
    featured: true,
    award: "Logistics Digital Excellence 2024",
    testimonial: {
      quote: "Emmanuel understood our industrial requirements right away. Our commercial shipping quote inquiries doubled within 30 days of launch.",
      author: "Marcus Vance",
      role: "Operations Director",
      company: "Apex Global Freight",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "law-firm-practice",
    title: "Law Firm Website",
    client: "Vance & Sterling Attorneys",
    category: "WordPress Development",
    categoryLabel: "Professional Services / UI/UX / WordPress",
    year: "2024",
    subtitle: "A sophisticated law firm website focused on credibility, clear practice presentation, and client conversion.",
    description: "A sophisticated law firm website focused on credibility, clear service presentation, intuitive navigation, and professional client conversion. Built with bespoke attorney bios, case verdict archives, and secure consultation request funnels.",
    challenge: "The firm needed to convey prestige, authority, and discretion without feeling intimidating, while making practice area consultations easy to schedule.",
    solution: "Designed an editorial layout with rich champagne gold typography, high-contrast practice cards, automated consultation calendar synchronization, and full WCAG accessibility compliance.",
    image: "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878748/2c3327243558385.6a158a540ad58_cnmjyc.webp",
    galleryImages: [
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878749/c2ff4e243558385.6a5e51a63cf6b_qxpjdm.webp",
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788878754/d06cc4243558385.6a5e51a63c308_fb7hbh.webp"
    ],
    tags: ["WordPress", "UI/UX", "Law Practice", "SEO", "Consultation Funnel"],
    impactMetrics: [
      { label: "Consultation Bookings", value: "+195%" },
      { label: "SEO Ranking for Practice", value: "Top 3" },
      { label: "Client Retainers", value: "$1.4M+" }
    ],
    liveUrl: "https://vancesterlinglaw.example.com",
    featured: true,
    award: "Professional Services Design of the Year",
    testimonial: {
      quote: "Emmanuel created a website that matches our firm's reputation for high-stakes litigation. The consultation intake process runs like clockwork.",
      author: "Julian Sterling, Esq.",
      role: "Senior Partner",
      company: "Vance & Sterling Law",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "modern-business-portal",
    title: "Business Website",
    client: "Nexus Enterprise Capital",
    category: "WordPress Development",
    categoryLabel: "Business Website / WordPress / Development",
    year: "2025",
    subtitle: "A modern business website combining clean interface design, responsive development, and functional features.",
    description: "A modern business website combining clean interface design, responsive development, and functional features to create a professional online presence. Features custom post types, dynamic client portals, and sub-second page performance.",
    challenge: "Nexus required a versatile digital foundation that non-technical team members could update weekly with new case studies and press announcements without breaking brand guidelines.",
    solution: "Engineered a custom Gutenberg block system with strict brand tokens, seamless Elementor compatibility, and instant cache invalidation via Cloudflare CDN.",
    image: "https://res.cloudinary.com/gz77x9kx/image/upload/v1788880603/e68c42c5a2de16c8388891247d98e103_ebkulk.jpg",
    galleryImages: [
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788880603/6e24a09cc80e65de0e00bb586ae644a8_u23vra.jpg",
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788880603/ef6a6fe7e522f28e6b2fb5874d849483_ynaurx.jpg"
    ],
    tags: ["WordPress", "Gutenberg Blocks", "ACF Pro", "PHP 8.2", "Tailwind"],
    impactMetrics: [
      { label: "Content Publishing Speed", value: "3x Faster" },
      { label: "Organic Visitors", value: "+140%" },
      { label: "Mobile Usability Score", value: "100%" }
    ],
    liveUrl: "https://nexusenterprise.example.com",
    featured: true,
    testimonial: {
      quote: "Working with Emmanuel was seamless. He delivered our business site ahead of schedule with zero bugs, and our team loves managing the content.",
      author: "Samantha Hayes",
      role: "Chief Operating Officer",
      company: "Nexus Capital",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "luxury-fashion-store",
    title: "Maison de Luxe Fashion Store",
    client: "Maison Haute Couture",
    category: "WooCommerce",
    categoryLabel: "WooCommerce / E-Commerce / UI/UX",
    year: "2024",
    subtitle: "A high-conversion online fashion store with custom product filtering, one-click checkout, and instant mobile load speeds.",
    description: "An editorial e-commerce platform engineered with WooCommerce, bespoke PHP product templates, Stripe Elements payment processing, and interactive size guide modals.",
    challenge: "High cart abandonment on mobile viewports due to slow image rendering and clunky multi-step checkout processes.",
    solution: "Redesigned the store with a mobile-first editorial lookbook, 1-step slideout cart, AJAX variant selectors, and optimized CDN image serving.",
    image: "https://res.cloudinary.com/gz77x9kx/image/upload/v1788884685/750c3316dda22645d48dd1283942d35e_i5puvc.jpg",
    galleryImages: [
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788884685/893866e81e290e86bfa2ff2abda0a820_ert2nf.jpg"
    ],
    tags: ["WooCommerce", "WordPress", "Stripe API", "AJAX Filters", "Figma"],
    impactMetrics: [
      { label: "Conversion Lift", value: "+280%" },
      { label: "Average Order Value", value: "$240" },
      { label: "Cart Abandonment", value: "-38%" }
    ],
    liveUrl: "https://maisonluxe.example.com",
    featured: false
  },
  {
    id: "saas-landing-experience",
    title: "SaaS Landing Experience",
    client: "Aetheria Cloud",
    category: "Landing Pages",
    categoryLabel: "Landing Pages / Figma to WordPress",
    year: "2025",
    subtitle: "An interactive B2B SaaS landing page designed in Figma and coded into WordPress with 100/100 Core Web Vitals.",
    description: "A conversion-focused landing page featuring interactive feature tabs, dynamic pricing tier switchers, animated ROI calculators, and seamless CRM lead capture.",
    challenge: "Explaining enterprise cloud infrastructure to decision-makers in under 30 seconds of browsing time.",
    solution: "Crafted visual storytelling diagrams, sticky CTA navigation, video demo modals, and streamlined 2-step demo request forms.",
    image: "https://res.cloudinary.com/gz77x9kx/image/upload/v1788898689/fb8afcc3a1c0e73a01aaf9e951d01a70_gfgewq.jpg",
    galleryImages: [
      "https://res.cloudinary.com/gz77x9kx/image/upload/v1788898723/50fe06015ba579dcb13a662f5b5197ab_uaipkm.jpg"
    ],
    tags: ["Figma to WordPress", "Landing Page", "Conversion UX", "GSAP", "Tailwind"],
    impactMetrics: [
      { label: "Demo Signups", value: "+310%" },
      { label: "CPA Reduction", value: "-42%" },
      { label: "Lighthouse Performance", value: "100/100" }
    ],
    liveUrl: "https://aetheriacloud.example.com",
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wordpress-elementor",
    title: "WordPress & Elementor",
    tagline: "Custom, responsive WordPress websites & high-converting Elementor builds.",
    description: "Clean, modern WordPress site builds with Elementor or custom blocks, responsive mobile design, fast loading speeds, and intuitive backend setup for easy updates.",
    iconName: "Code2",
    deliverables: ["Custom WordPress Theme / Elementor", "Mobile Responsive Architecture", "Custom Post Types & Layouts", "Speed & Security Hardening"],
    technologies: ["WordPress", "Elementor Pro", "PHP", "Responsive Design", "MySQL"],
    typicalTimeline: "1 - 2 Weeks",
    startingPrice: "$500",
    basePriceUSD: 500,
    features: ["Mobile-first responsive layouts", "Intuitive drag-and-drop editor", "Fast page load times", "Clean semantic structure"]
  },
  {
    id: "shopify-stores",
    title: "Shopify E-Commerce",
    tagline: "Modern, conversion-focused online stores built to scale sales.",
    description: "Complete Shopify store setup and customization, product catalog configuration, secure payment gateways, cart flows, and mobile-optimized shopping experiences.",
    iconName: "ShoppingBag",
    deliverables: ["Full Shopify Store Setup", "Payment & Shipping Integration", "Custom Theme Styling", "Product Catalog Configuration"],
    technologies: ["Shopify", "Liquid", "E-Commerce", "Payment Gateways"],
    typicalTimeline: "1 - 3 Weeks",
    startingPrice: "$750",
    basePriceUSD: 750,
    features: ["Frictionless checkout experience", "Mobile-optimized product pages", "Inventory & order tracking", "Conversion-focused design"]
  },
  {
    id: "webflow-development",
    title: "Webflow Development",
    tagline: "Dynamic, visually stunning, and ultra-clean Webflow websites.",
    description: "Modern visual development in Webflow with fluid interactions, responsive breakpoints, clean CMS collections, and high-performance hosting setup.",
    iconName: "Zap",
    deliverables: ["Custom Webflow Build", "CMS Collection Architecture", "Interactive Micro-Animations", "SEO & Domain Launch"],
    technologies: ["Webflow", "Webflow CMS", "HTML/CSS", "Interactions"],
    typicalTimeline: "1 - 2 Weeks",
    startingPrice: "$650",
    basePriceUSD: 650,
    features: ["Pixel-perfect visual fidelity", "Effortless client CMS editing", "Fast global CDN hosting", "Zero plugin dependency"]
  },
  {
    id: "wix-squarespace",
    title: "Wix & Squarespace Sites",
    tagline: "Fast, polished, and cost-effective websites for businesses & creators.",
    description: "Beautiful, user-friendly websites built on Wix and Squarespace, designed to build trust, showcase services, and capture leads without complex maintenance.",
    iconName: "Layout",
    deliverables: ["Custom Wix / Squarespace Setup", "Mobile Responsive Tuning", "Lead Capture Integration", "Client Handoff Guide"],
    technologies: ["Wix", "Squarespace", "Responsive Design", "Form Builder"],
    typicalTimeline: "4 - 7 Days",
    startingPrice: "$500",
    basePriceUSD: 500,
    features: ["Budget-friendly turnarounds", "Zero technical maintenance needed", "Built-in analytics & booking", "Clean typography & layout"]
  },
  {
    id: "ai-chatbots-assistants",
    title: "AI Chatbots & Assistants",
    tagline: "24/7 intelligent chat agents and virtual assistants trained on your business.",
    description: "Smart conversational AI chatbots and virtual assistants that engage visitors, answer FAQs instantly, qualify leads, and guide users through your website.",
    iconName: "Bot",
    deliverables: ["Custom AI Chatbot Setup", "Business Knowledge Training", "Chat Widget Design & Integration", "Lead Notification Webhooks"],
    technologies: ["AI Chatbots", "Virtual Assistants", "LLM APIs", "Webhooks"],
    typicalTimeline: "3 - 5 Days",
    startingPrice: "$500",
    basePriceUSD: 500,
    features: ["24/7 instant visitor response", "Accurate business knowledge base", "Lead qualification & capture", "Multi-platform embed ready"]
  },
  {
    id: "automated-support-forms",
    title: "Automated Support & AI Forms",
    tagline: "Smart forms, dynamic conditional logic & automated customer support.",
    description: "Replace static forms with intelligent, AI-powered multi-step forms that validate input, provide instant answers, and route customer inquiries automatically.",
    iconName: "CheckCircle",
    deliverables: ["AI-Powered Smart Forms", "Automated Support Flows", "Instant Email / CRM Routing", "User Guidance Automation"],
    technologies: ["AI Forms", "Automated Support", "CRM Connectors", "Validation"],
    typicalTimeline: "3 - 5 Days",
    startingPrice: "$500",
    basePriceUSD: 500,
    features: ["Dynamic conditional questioning", "Automated instant customer responses", "Clean lead data routing", "Higher submission completion rates"]
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    tagline: "Connect your website to apps, CRMs, and email tools to save hours weekly.",
    description: "End-to-end business workflow automation connecting your website with your CRM, Google Workspace, email marketing, billing, and notification tools.",
    iconName: "RefreshCw",
    deliverables: ["Workflow Map & Architecture", "Webhook & API Connections", "Automated Notifications & Sync", "End-to-End Testing"],
    technologies: ["Workflow Automation", "Zapier / Make", "Webhooks", "CRM Sync"],
    typicalTimeline: "4 - 7 Days",
    startingPrice: "$550",
    basePriceUSD: 550,
    features: ["Zero manual data entry", "Real-time client notifications", "Error handling & logging", "Scalable cloud automations"]
  },
  {
    id: "personalized-ai-content",
    title: "Personalized UX & AI Tools",
    tagline: "Smart visitor personalization and embedded AI content tools.",
    description: "Tailor content dynamically based on visitor persona or source, and integrate smart AI content tools to assist users, generate custom recommendations, or streamline content creation.",
    iconName: "Sparkles",
    deliverables: ["Dynamic Personalization Logic", "AI Content Tool Embeds", "Recommendation Engine", "Analytics & A/B Tracking"],
    technologies: ["Personalized UX", "AI Content Tools", "JavaScript", "Analytics"],
    typicalTimeline: "5 - 8 Days",
    startingPrice: "$600",
    basePriceUSD: 600,
    features: ["Context-aware user journeys", "Automated content assistance", "Increased visitor engagement", "Smart recommendations"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience, goals, and project requirements.",
    details: [
      "In-depth client discovery consultation",
      "Competitor and target audience research",
      "Scope definition, milestones & deliverable timeline"
    ],
    duration: "Phase 1"
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Create the visual direction, user experience, wireframes, and interface.",
    details: [
      "Information architecture and wireframe mapping",
      "High-fidelity visual design in Figma",
      "Interactive desktop and mobile prototype review"
    ],
    duration: "Phase 2"
  },
  {
    number: "03",
    title: "BUILD",
    description: "Develop the website with responsive layouts, functionality, and clean implementation.",
    details: [
      "Clean WordPress & Elementor development",
      "Custom PHP post types and dynamic fields",
      "Responsive cross-device testing & animations"
    ],
    duration: "Phase 3"
  },
  {
    number: "04",
    title: "LAUNCH",
    description: "Test, optimize, refine, and prepare the website for launch.",
    details: [
      "Core Web Vitals and speed optimization (95+)",
      "Technical on-page SEO and schema validation",
      "Domain DNS handoff and client editor training"
    ],
    duration: "Phase 4"
  }
];

export const STATS = [
  { value: "50+", label: "Projects Delivered", description: "Successfully launched worldwide" },
  { value: "4+", label: "Years Experience", description: "Specialized in WordPress & UI/UX" },
  { value: "20+", label: "Happy Clients", description: "Agencies, startups & businesses" },
  { value: "100%", label: "Responsive", description: "Pixel-perfect on all screen sizes" }
];

export const SKILLS = [
  "WordPress",
  "Shopify",
  "Elementor",
  "Webflow",
  "Wix & Squarespace",
  "AI Chatbots & Assistants",
  "Automated Support & Forms",
  "Workflow Automation",
  "Responsive Web Design",
  "UI/UX Design",
  "HTML / CSS / JavaScript",
  "Speed Optimization"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Working with Emmanuel was a smooth experience. He understood the direction quickly and transformed the idea into a professional website.",
    author: "Eleanor Sterling",
    role: "Head of Admissions",
    company: "Bright Future Academy",
    projectType: "School Website / WordPress",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "t2",
    quote: "Emmanuel is responsive, creative, and technically skilled. He redesigned our logistics platform into an intuitive tool that drives real customer quote requests.",
    author: "Marcus Vance",
    role: "Operations Director",
    company: "Apex Global Freight",
    projectType: "Logistics / UI Design",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "t3",
    quote: "The attention to typography, spacing, and mobile speed exceeded our expectations. Our law firm has seen a massive increase in consultation inquiries.",
    author: "Julian Sterling, Esq.",
    role: "Senior Partner",
    company: "Vance & Sterling Law",
    projectType: "Professional Services / WordPress",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const ARTICLES: Article[] = [
  {
    id: "wordpress-performance-2025",
    title: "How 100ms Faster Page Speed Boosts Conversions by 22%",
    category: "Performance",
    readTime: "5 min read",
    date: "Feb 10, 2025",
    author: {
      name: "Emmanuel",
      role: "WordPress Developer",
      avatar: "https://res.cloudinary.com/gz77x9kx/image/upload/v1786029226/emmanuel_dkwush.png"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    summary: "Why site speed is the ultimate conversion multiplier for modern businesses and how to optimize WordPress to score 95+ on Google Lighthouse.",
    content: [
      "Every millisecond matters in modern web development. When visitors experience instantaneous page transitions, conversion rates rise dramatically.",
      "By eliminating bloated plugins, optimizing database queries, and serving WebP assets over a global CDN, WordPress delivers lightning-fast performance."
    ],
    tags: ["WordPress", "Performance", "Core Web Vitals", "Speed"]
  },
  {
    id: "figma-to-wordpress-workflow",
    title: "From Figma to WordPress: The Clean Architecture Workflow",
    category: "UI/UX & Development",
    readTime: "6 min read",
    date: "Jan 25, 2025",
    author: {
      name: "Emmanuel",
      role: "UI/UX Designer",
      avatar: "https://res.cloudinary.com/gz77x9kx/image/upload/v1786029226/emmanuel_dkwush.png"
    },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    summary: "How to translate Figma design tokens, auto-layouts, and component systems into scalable WordPress themes with zero visual distortion.",
    content: [
      "A great developer honors the design system down to the exact pixel and spacing token.",
      "Using custom PHP structures and clean CSS variables ensures that the live website matches the high-fidelity Figma prototype flawlessly."
    ],
    tags: ["Figma", "WordPress", "UI/UX", "Workflow"]
  },
  {
    id: "conversion-focused-landing-pages",
    title: "10 Structural Rules of High-Converting Landing Pages",
    category: "Conversion UX",
    readTime: "4 min read",
    date: "Jan 12, 2025",
    author: {
      name: "Emmanuel",
      role: "Conversion Specialist",
      avatar: "https://res.cloudinary.com/gz77x9kx/image/upload/v1786029226/emmanuel_dkwush.png"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    summary: "The visual typography hierarchy, social proof placements, and sticky CTA patterns that turn cold visitors into high-value clients.",
    content: [
      "A successful landing page does not confuse the visitor with multiple competing actions. It presents a single, clear, value-driven journey.",
      "Placing social proof directly above primary CTA buttons increases click-through rates by up to 34%."
    ],
    tags: ["Landing Page", "CRO", "UI/UX"]
  }
];

export const ESTIMATOR_OPTIONS: EstimatorOption[] = [
  {
    id: "type-wordpress",
    name: "WordPress & Elementor Site",
    category: "type",
    price: 500,
    timeDays: 10,
    time: "1-2 weeks",
    description: "Responsive WordPress website with Elementor and clean layouts"
  },
  {
    id: "type-shopify",
    name: "Shopify E-Commerce Store",
    category: "type",
    price: 750,
    timeDays: 14,
    time: "2 weeks",
    description: "Full store setup, payment gateway, product catalog & checkout flow"
  },
  {
    id: "type-webflow",
    name: "Webflow Website",
    category: "type",
    price: 650,
    timeDays: 12,
    time: "1-2 weeks",
    description: "Custom visual Webflow build with dynamic CMS collections"
  },
  {
    id: "type-wix-sqsp",
    name: "Wix / Squarespace Site",
    category: "type",
    price: 500,
    timeDays: 7,
    time: "1 week",
    description: "Polished, low-maintenance site for service businesses & creators"
  },
  {
    id: "feat-ai-chat",
    name: "AI Chatbot & Assistant",
    category: "feature",
    price: 250,
    timeDays: 3,
    time: "3 days",
    description: "24/7 intelligent chat assistant trained on your business"
  },
  {
    id: "feat-forms",
    name: "Automated Support & AI Forms",
    category: "feature",
    price: 200,
    timeDays: 2,
    time: "2 days",
    description: "Smart dynamic forms with automated customer routing"
  },
  {
    id: "feat-workflow",
    name: "Workflow Automation",
    category: "feature",
    price: 250,
    timeDays: 3,
    time: "3 days",
    description: "Connect website to CRM, email, and notification webhooks"
  },
  {
    id: "feat-personalize",
    name: "Personalized UX & AI Tools",
    category: "feature",
    price: 220,
    timeDays: 3,
    time: "3 days",
    description: "Tailored visitor journeys and embedded smart content tools"
  },
  {
    id: "speed-std",
    name: "Standard Timeline",
    category: "speed",
    price: 0,
    timeDays: 0,
    time: "Standard",
    description: "Standard disciplined delivery"
  },
  {
    id: "speed-rush",
    name: "Priority Fast-Track",
    category: "speed",
    price: 150,
    timeDays: -3,
    time: "Express",
    description: "Accelerated delivery sprint"
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: "award-1",
    title: "Best Educational Web Design",
    organization: "Web Excellence Awards",
    category: "Education & UI/UX",
    year: "2025",
    project: "Bright Future Academy",
    projectTitle: "Bright Future Academy"
  },
  {
    id: "award-2",
    title: "Logistics Digital Excellence",
    organization: "CSS Design Awards",
    category: "Logistics & Freight",
    year: "2024",
    project: "Apex Global Freight",
    projectTitle: "Apex Global Freight"
  },
  {
    id: "award-3",
    title: "Special Kudos & Performance Honor",
    organization: "Awwwards Nominee",
    category: "Law & Corporate UI",
    year: "2024",
    project: "Vance & Sterling Law",
    projectTitle: "Vance & Sterling Law"
  },
  {
    id: "award-4",
    title: "E-Commerce Experience of the Year",
    organization: "Global Design Awards",
    category: "Luxury WooCommerce",
    year: "2025",
    project: "Maison de Luxe",
    projectTitle: "Maison de Luxe"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is your typical project timeline?",
    answer: "A standard landing page or UI design project takes 1–2 weeks, while a full custom WordPress website or redesign typically takes 3–5 weeks depending on scope, custom features, and feedback turnaround."
  },
  {
    id: "faq-2",
    question: "Do you build custom WordPress themes or use page builders?",
    answer: "I specialize in both. I can create custom PHP WordPress themes with ACF Pro for maximum speed and simplicity, or build modular Elementor Pro setups that allow you and your team to edit content with ease."
  },
  {
    id: "faq-3",
    question: "Will my website be fast and mobile responsive?",
    answer: "Yes, 100%. Every website I create is engineered mobile-first with optimized assets, clean code, and fast caching. I aim for 95+ Google PageSpeed and Core Web Vitals scores on every build."
  },
  {
    id: "faq-4",
    question: "Do you design in Figma before developing in WordPress?",
    answer: "Yes. I first design high-fidelity, interactive prototypes in Figma for your review and approval. Once you love the design, I translate it cleanly into WordPress code."
  },
  {
    id: "faq-5",
    question: "How do we get started?",
    answer: "Simply click 'Start a Project' or send an inquiry through the contact form with your project details. I'll review your goals and schedule a discovery call to discuss scope, timeline, and exact pricing."
  }
];

export const KEY_FACTS: KeyFactItem[] = [
  {
    id: "fact-projects",
    metric: "50+",
    label: "Websites & Platforms Delivered",
    sublabel: "Across custom WordPress, Elementor Pro, and bespoke UI systems.",
    iconType: "layers"
  },
  {
    id: "fact-experience",
    metric: "4+",
    label: "Years of Design & Engineering",
    sublabel: "Specializing in end-to-end Figma to production deployments.",
    iconType: "clock"
  },
  {
    id: "fact-performance",
    metric: "99/100",
    label: "Average Google PageSpeed Score",
    sublabel: "Sub-second load times engineered with clean PHP & asset caching.",
    iconType: "zap"
  },
  {
    id: "fact-revenue",
    metric: "$14M+",
    label: "Client Revenue & Pipeline Driven",
    sublabel: "Through high-converting funnels, WooCommerce, and corporate leads.",
    iconType: "trending"
  },
  {
    id: "fact-ontime",
    metric: "100%",
    label: "On-Time Project Delivery",
    sublabel: "Strict sprint milestones, transparent timelines, and QA staging.",
    iconType: "check"
  },
  {
    id: "fact-clients",
    metric: "20+",
    label: "Global Enterprise & Brand Clients",
    sublabel: "Partnering with businesses across US, UK, Europe, and worldwide.",
    iconType: "globe"
  }
];

export const TEAM_MEMBERS: TeamMemberItem[] = [
  {
    id: "team-emmanuel",
    name: "Emmanuel",
    role: "Founder, Lead Developer & UI/UX Director",
    specialization: "WordPress Engineering, Figma Architecture, Technical Strategy",
    bio: "Guiding the creative vision and architectural standards for every client build, bridging design fidelity with clean, scalable code.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    experience: "4+ Years",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      dribbble: "https://dribbble.com"
    }
  },
  {
    id: "team-marcus",
    name: "Marcus Reed",
    role: "Senior Frontend & Interaction Engineer",
    specialization: "Tailwind CSS, GSAP / Framer Motion, Responsive Systems",
    bio: "Crafting fluid micro-interactions, responsive CSS layouts, and performance-tuned motion that brings digital interfaces to life.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    experience: "5+ Years",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "team-elena",
    name: "Elena Vance",
    role: "Design Systems & UI/UX Specialist",
    specialization: "Figma Components, Typography Hierarchy, Conversion UX",
    bio: "Architecting high-contrast design tokens, WCAG-compliant design systems, and user journey funnels optimized for measurable conversion.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    experience: "4+ Years",
    socials: {
      dribbble: "https://dribbble.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "team-david",
    name: "David Chen",
    role: "WordPress Infrastructure & Speed Engineer",
    specialization: "PHP 8.2, Cloudflare CDN, Object Caching, Core Web Vitals",
    bio: "Hardening server infrastructures, tuning MySQL database queries, and achieving sub-second global response times on every deployment.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    experience: "6+ Years",
    socials: {
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  }
];

