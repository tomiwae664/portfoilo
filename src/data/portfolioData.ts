import { Project, ServiceItem, ProcessStep, SkillCategory, Testimonial, FAQItem, Article, EstimatorOption, AwardItem } from '../types';

export const PERSONAL_INFO = {
  name: "Alexander Vance",
  title: "Website Developer & UI/UX Designer",
  experienceYears: "6+",
  completedProjects: "85+",
  clientSatisfaction: "100%",
  globalClients: "20+ Countries",
  email: "alexander@vancedesign.co",
  phone: "+1 (800) 482-VANCE",
  location: "New York, NY / Remote Worldwide",
  calendlyUrl: "https://calendly.com",
  whatsappUrl: "https://wa.me/18004828262",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  dribbble: "https://dribbble.com",
  bio: "I'm Alexander Vance, a senior Website Developer and UI/UX Designer with over 6 years of hands-on experience crafting bespoke digital products, WordPress platforms, and high-converting marketing sites for SaaS startups, e-commerce leaders, and luxury brands worldwide."
};

export const PROJECTS: Project[] = [
  {
    id: "aetheria-luxury",
    title: "Aetheria Spatial Real Estate",
    client: "Aetheria Group",
    category: "Website Design",
    categoryLabel: "3D & LUXURY UX",
    year: "2025",
    subtitle: "A immersive digital estate showcase featuring 3D virtual floorplans, interactive lighting, and high-converting lead flows.",
    description: "Aetheria requested a ultra-luxury digital experience for architectural developments across London, New York, and Zurich. Built with Next.js 15, Three.js, and custom GSAP transitions.",
    challenge: "Traditional real estate portals feel static and slow. Aetheria needed sub-second loading while rendering interactive 3D floorplans and multi-currency inquiry tools.",
    solution: "Engineered a headless architecture pairing Next.js with WebGL shader optimization, achieving a 99 Lighthouse performance score and 240% increase in qualified buyer inquiries.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Next.js 15", "Three.js", "Figma UI/UX", "Tailwind CSS", "GSAP"],
    impactMetrics: [
      { label: "Inquiry Conversion", value: "+240%" },
      { label: "Lighthouse Speed", value: "99/100" },
      { label: "Avg Session Time", value: "4m 12s" }
    ],
    liveUrl: "https://aetheria-estates.example.com",
    featured: true,
    award: "Awwwards Site of the Day Nominee",
    testimonial: {
      quote: "Alexander transformed our property vision into a masterpiece. The 3D interactive floorplans drove our highest pre-sales month in company history.",
      author: "Marcus Rothschild",
      role: "Managing Director",
      company: "Aetheria Group",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "vanguard-fintech",
    title: "Vanguard Wealth Portal",
    client: "Vanguard Global",
    category: "WordPress Development",
    categoryLabel: "CUSTOM WORDPRESS & REACT",
    year: "2024",
    subtitle: "Custom WordPress portal integrated with React financial dashboard widgets, client document vault, and AES-256 security.",
    description: "Built a bespoke WordPress theme with custom Gutenberg blocks, Elementor extensions, and secure API gateways for wealth management clients.",
    challenge: "Legacy financial sites were clunky and difficult for non-technical editors to manage without breaking complex layout grids.",
    solution: "Designed a modular UI component library in Figma, coded custom Gutenberg blocks in PHP and React, providing zero-code editing flexibility with extreme security.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["WordPress", "PHP", "Elementor", "React", "REST API", "Tailwind"],
    impactMetrics: [
      { label: "Processed Capital", value: "$12M+" },
      { label: "Editor Content Time", value: "-70%" },
      { label: "Page Load Speed", value: "0.8s" }
    ],
    liveUrl: "https://vanguard-wealth.example.com",
    featured: true,
    award: "CSS Design Awards Special Kudos",
    testimonial: {
      quote: "Alexander's WordPress engineering gave our team total content freedom while maintaining enterprise-grade bank security and stunning aesthetics.",
      author: "Elena Rostova",
      role: "VP of Digital",
      company: "Vanguard Global",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "kroma-horlogerie",
    title: "KROMA Luxury Horlogerie",
    client: "KROMA Geneva",
    category: "WooCommerce",
    categoryLabel: "LUXURY E-COMMERCE",
    year: "2024",
    subtitle: "Headless WooCommerce storefront featuring 360-degree watch customization, instant checkout, and multi-currency localization.",
    description: "A luxury timepiece e-commerce experience designed for high-net-worth collectors with instant filtering, sapphire glass shaders, and bespoke WooCommerce checkout.",
    challenge: "Standard WooCommerce templates felt generic and failed to evoke Swiss luxury craft expectations.",
    solution: "Crafted a bespoke dark luxury UI in Figma, coupled with custom WooCommerce PHP hooks, Stripe Elements, and sub-second page transitions.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["WooCommerce", "WordPress", "JavaScript", "Stripe API", "Figma UI/UX"],
    impactMetrics: [
      { label: "Conversion Lift", value: "+310%" },
      { label: "Average Order Value", value: "$3,450" },
      { label: "Mobile Bounce Rate", value: "18%" }
    ],
    liveUrl: "https://kroma-watches.example.com",
    featured: true,
    award: "E-Commerce Excellence Award 2024",
    testimonial: {
      quote: "Alexander's vision for KROMA elevated our online storefront to match our Geneva boutique experience. Conversion tripled in the first 60 days.",
      author: "Jean-Luc Vance",
      role: "Founder & Creative Director",
      company: "KROMA Geneva",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "lumina-ai-saas",
    title: "Lumina AI SaaS Platform",
    client: "Lumina Labs",
    category: "UI/UX Design",
    categoryLabel: "SAAS & LANDING PAGES",
    year: "2025",
    subtitle: "High-converting marketing site and web application UI for an AI-powered creative synthesis suite.",
    description: "Complete design system, interactive pricing calculator, and SaaS dashboard designed from scratch in Figma and deployed on Next.js 15.",
    challenge: "Explaining complex AI workflow tools to non-technical creative directors in a visually compelling, simple way.",
    solution: "Designed interactive product video previews, micro-animated feature cards, and a streamlined 2-step onboarding funnel.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Figma", "UI/UX", "Next.js", "Tailwind CSS", "Framer Motion"],
    impactMetrics: [
      { label: "Month 1 Signups", value: "45,000+" },
      { label: "Funnel Conversion", value: "12.8%" },
      { label: "User Satisfaction", value: "4.9/5" }
    ],
    liveUrl: "https://lumina-ai.example.com",
    featured: true,
    testimonial: {
      quote: "Alexander is a rare dual-threat designer and developer. The UI designs were world-class and the frontend code was impeccably structured.",
      author: "Dr. Aris Thorne",
      role: "CEO",
      company: "Lumina Labs",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "hyperion-creative",
    title: "Hyperion Motion Studio",
    client: "Hyperion Agency",
    category: "WordPress Development",
    categoryLabel: "WORDPRESS & ELEMENTOR REDESIGN",
    year: "2024",
    subtitle: "Complete WordPress redesign with Elementor Pro custom widgets, GSAP scroll triggers, and video portfolio showcases.",
    description: "Transformed an outdated slow agency site into an ultra-fast, cinematic portfolio featuring smooth page transitions and custom case study layouts.",
    challenge: "The previous WordPress build scored 24/100 on mobile speed and took 6 seconds to load video assets.",
    solution: "Optimized server caching, compressed media pipelines, wrote lightweight custom Elementor modules, boosting Lighthouse mobile performance to 98.",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["WordPress", "Elementor Pro", "GSAP", "PHP", "Speed Optimization"],
    impactMetrics: [
      { label: "Mobile Speed Score", value: "98/100" },
      { label: "Organic Traffic", value: "+180%" },
      { label: "Client Inquiries", value: "3x" }
    ],
    liveUrl: "https://hyperion-motion.example.com",
    featured: false
  },
  {
    id: "solis-wellness",
    title: "Solis Mobile Health Landing",
    client: "Solis Health",
    category: "Landing Pages",
    categoryLabel: "CONVERSION LANDING PAGE",
    year: "2024",
    subtitle: "High-converting landing page for a personalized longevity & biohacking wearable app.",
    description: "Crafted interactive comparison sliders, habit trackers, and customer testimonial video embeds with clear conversion architecture.",
    challenge: "Solis needed to convert paid ad traffic into active app pre-orders at a target CPA under $25.",
    solution: "A tight, focused single-page landing structure with sticky booking CTA, social proof badges, and sub-1s load speed.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["React", "Landing Page", "UI/UX Design", "Tailwind CSS", "A/B Testing"],
    impactMetrics: [
      { label: "Pre-Order Conversion", value: "14.2%" },
      { label: "Customer Acquisition Cost", value: "-40%" },
      { label: "Total Downloads", value: "100k+" }
    ],
    liveUrl: "https://solis-health.example.com",
    featured: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "website-design",
    title: "Website Design",
    tagline: "Bespoke digital design crafted for prestige and high conversion.",
    description: "I design clean, editorial, and interactive web layouts tailored specifically to your brand identity, target audience, and business goals. Designed in Figma with full design token libraries.",
    iconName: "Layout",
    deliverables: ["Figma Design Systems", "Responsive Mobile & Desktop Wireframes", "Interactive Prototypes", "Design Token Handoff"],
    technologies: ["Figma", "Adobe CC", "Tokens Studio", "Plugins"],
    typicalTimeline: "2 - 3 Weeks",
    startingPrice: "$1,800",
    features: ["Custom typography scale", "Micro-interaction specs", "Component auto-layout", "WCAG accessibility colors"]
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    tagline: "Custom, scalable WordPress themes & Elementor builds.",
    description: "No bloated off-the-shelf themes. I engineer custom PHP WordPress themes, Gutenberg blocks, and Elementor setups engineered for maximum speed, security, and effortless client editing.",
    iconName: "Code2",
    deliverables: ["Custom WordPress Theme", "Elementor Pro Integration", "Custom PHP/ACF Fields", "Security & Backup Setup"],
    technologies: ["WordPress", "PHP 8.2", "Elementor", "ACF Pro", "MySQL"],
    typicalTimeline: "3 - 5 Weeks",
    startingPrice: "$2,200",
    features: ["Zero-bloat code", "ACF Flexible Content", "Sub-1s page load speed", "Automated daily backups"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "User-centered research, wireframing & digital product interfaces.",
    description: "Deep dive into user psychology, competitor benchmarking, and friction-free user flows to create seamless interfaces for SaaS dashboards, web apps, and mobile platforms.",
    iconName: "Palette",
    deliverables: ["User Journey Maps", "Information Architecture", "High-Fidelity UI Screens", "Usability Testing Report"],
    technologies: ["Figma", "Miro", "Useberry", "FigJam"],
    typicalTimeline: "2 - 4 Weeks",
    startingPrice: "$2,500",
    features: ["Comprehensive UX audits", "Clickable wireframes", "Design system documentation", "Developer-ready specs"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    tagline: "High-converting single-page layouts engineered to scale ad ROI.",
    description: "Focused, persuasive landing pages built to turn cold traffic into leads, consultations, and sales. Optimized for mobile viewports and instant loading speeds.",
    iconName: "Zap",
    deliverables: ["Persuasive Copy Structure", "Custom Responsive Page", "Form & CRM Integrations", "A/B Test Setup"],
    technologies: ["React / Next.js", "WordPress / Elementor", "Tailwind CSS", "Unbounce"],
    typicalTimeline: "1 - 2 Weeks",
    startingPrice: "$1,200",
    features: ["Sticky conversion CTAs", "Fast mobile viewports", "Social proof placement", "Analytics tracking integration"]
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    tagline: "Revamp outdated websites with modern design & 100/100 performance.",
    description: "Transform your dated website into a modern, high-performing lead engine without losing hard-earned SEO rankings or organic traffic history.",
    iconName: "RefreshCw",
    deliverables: ["SEO Audit & Redirect Mapping", "Brand Refinement", "Modern UI Overhaul", "Full Migration"],
    technologies: ["WordPress", "Next.js", "Gutenberg", "Elementor Pro"],
    typicalTimeline: "3 - 4 Weeks",
    startingPrice: "$2,400",
    features: ["Zero SEO loss guarantee", "301 redirect mapping", "Speed upgrade guarantee", "Modern visual storytelling"]
  },
  {
    id: "woocommerce",
    title: "WooCommerce E-Commerce",
    tagline: "Custom online storefronts optimized for maximum average order value.",
    description: "Build or upgrade your online store with WooCommerce. Fast checkout flows, multi-currency support, custom product configurators, and inventory synchronization.",
    iconName: "ShoppingBag",
    deliverables: ["WooCommerce Setup", "Custom Product Templates", "Stripe/PayPal Gateway", "Cart Abandonment Flow"],
    technologies: ["WooCommerce", "WordPress", "Stripe API", "PHP", "JavaScript"],
    typicalTimeline: "4 - 6 Weeks",
    startingPrice: "$3,200",
    features: ["One-click checkout", "Bespoke product filters", "Inventory sync", "Sub-1.5s page load times"]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance & Care",
    tagline: "Ongoing security, performance monitoring, and content updates.",
    description: "Keep your website secure, ultra-fast, and updated. I handle WordPress core updates, plugin audits, speed optimizations, uptime monitoring, and monthly content edits.",
    iconName: "ShieldCheck",
    deliverables: ["Weekly Security Audits", "Daily Cloud Backups", "Plugin & Theme Updates", "Dedicated Support Hours"],
    technologies: ["Cloudflare", "iThemes Security", "WP Rocket", "UpdraftPlus"],
    typicalTimeline: "Monthly Retainer",
    startingPrice: "$250 / mo",
    features: ["Uptime monitoring 24/7", "Malware scanning", "Priority bug fixes", "Monthly health reporting"]
  },
  {
    id: "seo-speed-optimization",
    title: "Speed & SEO Optimization",
    tagline: "Achieve 95+ Lighthouse performance scores & higher Google rankings.",
    description: "Diagnose and fix slow loading speeds, uncompressed assets, render-blocking scripts, and technical SEO bottlenecks to improve your organic rankings.",
    iconName: "Gauge",
    deliverables: ["Comprehensive Speed Audit", "Core Web Vitals Fixes", "Image WebP Optimization", "Schema Markup"],
    technologies: ["Lighthouse", "WP Rocket", "Cloudflare CDN", "Yoast SEO", "RankMath"],
    typicalTimeline: "1 Week",
    startingPrice: "$850",
    features: ["Core Web Vitals green", "Database cleanup", "Script deferral & minification", "RankMath/Yoast setup"]
  },
  {
    id: "booking-systems",
    title: "Booking & Consultation Systems",
    tagline: "Automated client scheduling, deposit payments, and calendar sync.",
    description: "Integrate seamless booking tools into your website so clients can schedule consultations, pick appointment slots, and pay deposits automatically 24/7.",
    iconName: "Calendar",
    deliverables: ["Calendly / Acuity Integration", "Custom Booking Forms", "Stripe Deposit Gateway", "SMS & Email Reminders"],
    technologies: ["Calendly API", "Acuity", "Zapier", "Stripe", "WordPress"],
    typicalTimeline: "1 - 2 Weeks",
    startingPrice: "$950",
    features: ["Google/Outlook Calendar sync", "Automated email confirmations", "Deposit payment collection", "Time zone auto-detection"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We align on your business goals, target audience, brand position, and project deliverables.",
    details: ["Kickoff meeting & brief review", "Competitor & market analysis", "Scope definition & milestone timeline"],
    duration: "Week 1"
  },
  {
    number: "02",
    title: "UX Research & Wireframing",
    description: "Mapping out the information architecture and creating low-fidelity wireframes for user flow approval.",
    details: ["User journey mapping", "Information architecture", "Clickable low-fidelity wireframes"],
    duration: "Week 1 - 2"
  },
  {
    number: "03",
    title: "UI Design & Prototyping",
    description: "Crafting modern, pixel-perfect visual designs in Figma with typography, colors, and interactive prototypes.",
    details: ["High-fidelity Figma mockups", "Custom design tokens & UI elements", "Interactive desktop & mobile prototype"],
    duration: "Week 2 - 3"
  },
  {
    number: "04",
    title: "Development & Coding",
    description: "Translating approved designs into clean, responsive, ultra-fast code on WordPress or React/Next.js.",
    details: ["Custom WordPress / Next.js code", "Tailwind CSS & smooth animations", "Mobile responsive optimization"],
    duration: "Week 3 - 5"
  },
  {
    number: "05",
    title: "Testing & Speed QA",
    description: "Rigorous quality assurance testing across modern browsers, devices, Core Web Vitals, and security.",
    details: ["Lighthouse speed optimization (95+)", "Cross-browser & mobile QA testing", "Form & integration validation"],
    duration: "Week 5"
  },
  {
    number: "06",
    title: "Launch & Growth Support",
    description: "Deploying your website live, setting up analytics, and providing 30 days of post-launch warranty support.",
    details: ["Domain & SSL deployment", "Google Search Console & Analytics setup", "Video walkthrough & 30-day warranty"],
    duration: "Launch Day +"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Core Web Technologies",
    skills: [
      { name: "WordPress & PHP", level: 98, icon: "Wordpress", highlight: true },
      { name: "Elementor Pro", level: 96, icon: "LayoutGrid", highlight: true },
      { name: "HTML5 & CSS3/Sass", level: 99, icon: "FileCode" },
      { name: "JavaScript (ES6+)", level: 95, icon: "Code" },
      { name: "PHP 8.2 & MySQL", level: 92, icon: "Database" }
    ]
  },
  {
    category: "Frontend & Modern Stack",
    skills: [
      { name: "React & Next.js 15", level: 94, icon: "Atom", highlight: true },
      { name: "Tailwind CSS", level: 98, icon: "Palette", highlight: true },
      { name: "GSAP & Framer Motion", level: 90, icon: "Sparkles" },
      { name: "WooCommerce API", level: 94, icon: "ShoppingBag" },
      { name: "Git & Vercel / Cloudflare", level: 92, icon: "GitBranch" }
    ]
  },
  {
    category: "Design & UX Tools",
    skills: [
      { name: "Figma & Design Systems", level: 98, icon: "Figma", highlight: true },
      { name: "UI/UX & Wireframing", level: 96, icon: "PenTool" },
      { name: "Mobile Responsive Layouts", level: 99, icon: "Smartphone" },
      { name: "Speed & SEO Audit (95+)", level: 97, icon: "Gauge" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Rothschild",
    role: "Managing Director",
    company: "Aetheria Real Estate",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: "Alexander is without a doubt the most skilled web developer I have worked with in my 15-year career. He delivered our luxury real estate site on time, with a stunning 3D presentation that boosted our pre-sales by 240%.",
    rating: 5,
    projectType: "Website Design & 3D Interactive",
    result: "+240% Pre-Sales Inquiries"
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "VP of Digital Strategy",
    company: "Vanguard Global Wealth",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content: "Our custom WordPress portal built by Alexander gave our team total freedom to publish content while maintaining flawless financial security and sub-1s load times. Highly recommended!",
    rating: 5,
    projectType: "Custom WordPress Development",
    result: "Sub-0.8s Page Load Speed"
  },
  {
    id: "test-3",
    name: "Jean-Luc Vance",
    role: "Founder & Creative Director",
    company: "KROMA Switzerland",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Alexander transformed our WooCommerce store into a Swiss luxury flagship. His design eye for luxury typography paired with pixel-perfect coding tripled our conversion rates within two months.",
    rating: 5,
    projectType: "WooCommerce E-Commerce",
    result: "+310% Conversion Rate"
  },
  {
    id: "test-4",
    name: "Sarah Lin",
    role: "Head of Marketing",
    company: "Solis Biohacking",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    content: "Our landing page converted 14% of cold ad traffic into paid pre-orders! Alexander understands both conversion psychology and high-performance frontend code.",
    rating: 5,
    projectType: "Conversion Landing Page",
    result: "14.2% Cold Ad Conversion"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is your typical project cost and budget range?",
    answer: "Most of my website projects range from $1,800 to $5,000 depending on the scope. A focused landing page starts at $1,200, custom WordPress sites start at $2,200, and full custom e-commerce or WebGL platforms range from $3,200 to $6,000+. I provide exact, transparent fixed quotes before starting.",
    category: "Pricing & Scope"
  },
  {
    id: "faq-2",
    question: "How long does a website project take to complete?",
    answer: "Standard project timelines are 2 to 5 weeks. Landing pages take 1-2 weeks, custom WordPress sites take 3-4 weeks, and complex e-commerce platforms take 4-6 weeks. Accelerated priority timelines are available upon request.",
    category: "Timeline"
  },
  {
    id: "faq-3",
    question: "Do you build on WordPress or custom code (React / Next.js)?",
    answer: "Both! I specialize in both WordPress (custom theme/Elementor builds for easy client editing) and modern custom code stacks (Next.js 15, React, Tailwind CSS). During our discovery call, we choose the exact right stack based on your team's editing needs and technical goals.",
    category: "Tech Stack"
  },
  {
    id: "faq-4",
    question: "Will I be able to edit and update content on my site easily?",
    answer: "Yes, 100%! If we build on WordPress, I provide custom Gutenberg blocks or intuitive Elementor Pro page builders along with a video walkthrough training recorded specifically for your team. You will never need to code to update text, photos, or blogs.",
    category: "Content Management"
  },
  {
    id: "faq-5",
    question: "Do you provide Figma design source files?",
    answer: "Yes! Every design project includes full ownership of organized Figma design source files, component design systems, typography tokens, and responsive wireframes.",
    category: "Design Handoff"
  },
  {
    id: "faq-6",
    question: "How do you ensure my site loads fast and ranks high on Google?",
    answer: "Every site I engineer undergoes strict speed QA testing to ensure a 95+ score on Google Lighthouse. I optimize image assets to WebP format, implement server Caching/CDN, defer non-essential scripts, and implement structured schema markup for technical SEO.",
    category: "SEO & Speed"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "page-speed-conversion",
    title: "How 100ms Faster Page Speed Boosts E-Commerce Conversions by 22%",
    category: "Performance",
    readTime: "5 min read",
    date: "Jan 28, 2025",
    author: {
      name: "Alexander Vance",
      role: "Lead Website Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    summary: "Discover the technical bottlenecks causing high bounce rates on mobile e-commerce stores and how to fix Core Web Vitals to maximize revenue.",
    content: [
      "In modern e-commerce, speed isn't just a technical metric — it is the single highest-leverage conversion lever available.",
      "Google's benchmark research confirms that as page load time goes from 1s to 3s, the probability of bounce increases by 32%. At 5s, bounce probability spikes by 90%.",
      "Key fixes include migrating uncompressed PNGs to next-gen WebP/AVIF formats, deferring non-critical JavaScript, implementing server-side object caching, and leveraging edge Cloudflare CDN caching."
    ],
    tags: ["Page Speed", "Core Web Vitals", "WordPress", "Conversion Rate"]
  },
  {
    id: "micro-interactions-ux",
    title: "Designing for Trust: Micro-Interactions in Modern SaaS Landing Pages",
    category: "UI/UX Design",
    readTime: "7 min read",
    date: "Feb 10, 2025",
    author: {
      name: "Alexander Vance",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    summary: "How deliberate spring animations, button tactile feedback, and subtle hover states guide user attention and build immediate brand credibility.",
    content: [
      "Micro-interactions are the subtle, single-use visual feedback cues that communicate system status to the user.",
      "When a user clicks 'Book Consultation' and sees a satisfying spring animation, confirmation chime, or subtle pulse, confidence in the software increases instantly.",
      "In this guide, we break down Figma prototyping tokens, GSAP easing functions, and hover states that feel luxurious without lagging browser frames."
    ],
    tags: ["UI/UX", "Figma", "Micro-Interactions", "SaaS"]
  },
  {
    id: "wordpress-vs-nextjs",
    title: "Headless WordPress vs Custom Next.js 15: Choosing the Right Stack in 2025",
    category: "Architecture",
    readTime: "6 min read",
    date: "Jan 14, 2025",
    author: {
      name: "Alexander Vance",
      role: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary: "An honest breakdown comparing custom WordPress builds, headless GraphQL setups, and full Next.js 15 architectures for growing businesses.",
    content: [
      "Clients frequently ask: 'Should I build on WordPress or Next.js?' The answer depends entirely on your team's content editing workflows and performance objectives.",
      "WordPress excels when your marketing team needs to publish blog posts, landing pages, and edit ACF fields daily without developer intervention.",
      "Next.js 15 shines when you require custom WebGL animations, edge API routing, app dashboard portals, or extreme multi-region CDN speed."
    ],
    tags: ["WordPress", "Next.js", "Web Architecture", "GraphQL"]
  },
  {
    id: "ai-prompt-engineering-web",
    title: "Generative AI Workflows for High-Speed Design Prototyping",
    category: "AI & Design",
    readTime: "4 min read",
    date: "Feb 02, 2025",
    author: {
      name: "Alexander Vance",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    summary: "How blending generative image models with vector Figma systems cuts client moodboard review cycles from weeks to under 48 hours.",
    content: [
      "Artificial intelligence is transforming the preliminary concept phase for elite creative agencies.",
      "By establishing brand color palettes and typography rules first, AI visual generation creates tailored studio mockups that resonate deeply with stakeholders."
    ],
    tags: ["AI", "Design Systems", "Prototyping"]
  },
  {
    id: "high-converting-landing-formulas",
    title: "10 Structural Rules of High-Converting B2B Landing Pages",
    category: "Conversion UX",
    readTime: "8 min read",
    date: "Jan 05, 2025",
    author: {
      name: "Alexander Vance",
      role: "Conversion Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    summary: "The visual typography hierarchy, social proof placements, and sticky CTA patterns that turn cold traffic into high-ticket inbound leads.",
    content: [
      "A successful landing page does not confuse the visitor with multiple competing actions. It presents a single, clear, value-driven journey.",
      "Placing social proof directly above primary CTA buttons increases click-through rates by up to 34%."
    ],
    tags: ["Landing Page", "CRO", "Copywriting"]
  },
  {
    id: "seo-schema-for-agencies",
    title: "Technical SEO & Schema Markup Strategies for Local Dominance",
    category: "Technical SEO",
    readTime: "5 min read",
    date: "Dec 18, 2024",
    author: {
      name: "Alexander Vance",
      role: "SEO Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    summary: "How JSON-LD structured data, canonical routing, and clean sitemap indexing propel agency clients to Google page-one rich snippets.",
    content: [
      "Search engines no longer just read plain text; they parse entity relationships via JSON-LD schema.",
      "Implementing rich organization, FAQ, and project schema ensures prominent Google search panel feature placement."
    ],
    tags: ["SEO", "JSON-LD", "Google Analytics"]
  }
];

export const ESTIMATOR_OPTIONS: EstimatorOption[] = [
  { id: "landing", name: "High-Converting Landing Page", price: 1200, timeDays: 7, category: "Type", description: "1-page conversion page for ads, SaaS, or consultations" },
  { id: "custom-wp", name: "Custom WordPress Website (5-8 Pages)", price: 2400, timeDays: 21, category: "Type", description: "Bespoke WordPress theme with Elementor/Gutenberg blocks" },
  { id: "ecommerce", name: "WooCommerce E-Commerce Store", price: 3400, timeDays: 30, category: "Type", description: "Online store with Stripe checkout, filters, & products" },
  { id: "app-ui", name: "Next.js / Custom React Web App", price: 3800, timeDays: 28, category: "Type", description: "Full custom web application or WebGL experience" },
  
  { id: "figma-design", name: "Bespoke Figma UI/UX Design", price: 800, timeDays: 5, category: "Addon", description: "Full custom Figma design system and wireframes" },
  { id: "seo-pack", name: "Advanced Technical SEO & Schema", price: 450, timeDays: 3, category: "Addon", description: "Schema markup, XML sitemap, rank tracking setup" },
  { id: "booking-addon", name: "Automated Booking & Deposit Gateway", price: 500, timeDays: 4, category: "Addon", description: "Calendly/Acuity calendar sync with Stripe deposit collection" },
  { id: "maintenance-plan", name: "3 Months Care & Security Retainer", price: 650, timeDays: 0, category: "Addon", description: "24/7 uptime monitoring, daily backups, priority updates" }
];

export const AWARDS: AwardItem[] = [
  {
    id: "awwwards-site-of-day",
    organization: "Awwwards",
    title: "Site of the Day Nominee",
    category: "3D Spatial Web Design",
    year: "2025",
    projectTitle: "Aetheria Spatial Real Estate"
  },
  {
    id: "css-design-awards",
    organization: "CSS Design Awards",
    title: "Special Kudos & Best UI/UX",
    category: "WordPress Engineering",
    year: "2024",
    projectTitle: "Vanguard Wealth Portal"
  },
  {
    id: "fwa-of-the-day",
    organization: "FWA",
    title: "FWA Of The Day",
    category: "Luxury E-Commerce",
    year: "2024",
    projectTitle: "KROMA Geneva"
  },
  {
    id: "google-speed-badge",
    organization: "Google Core Web Vitals",
    title: "99/100 Mobile Speed Certified",
    category: "Performance Optimization",
    year: "2025",
    projectTitle: "Solis Health Landing"
  }
];
