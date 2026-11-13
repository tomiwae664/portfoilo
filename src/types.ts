export type PageView = 
  | 'home' 
  | 'experience'
  | 'configurator'
  | 'movement'
  | 'anatomy'
  | 'specifications'
  | 'boutique'
  | 'about' 
  | 'services' 
  | 'projects'
  | 'contact';

export type CaseMaterial = 'titanium' | 'rose-gold' | 'carbon-black' | 'steel' | 'platinum';
export type DialStyle = 'midnight-blue' | 'skeleton-openwork' | 'champagne' | 'emerald' | 'polar-white';
export type BezelStyle = 'ceramic-tachymeter' | 'fluted-gold' | 'gmt-dual' | 'stealth-carbon';
export type StrapType = 'alligator-obsidian' | 'alligator-cognac' | 'rubber-sport' | 'steel-oyster' | 'rose-gold-president';
export type CameraPreset = 'dial' | 'profile' | 'exploded' | 'caseback' | 'calibre' | 'isometric' | 'strap';

export interface WatchCustomization {
  caseMaterial: CaseMaterial;
  dialStyle: DialStyle;
  bezelStyle: BezelStyle;
  strapType: StrapType;
  engravingText: string;
  lumeMode: boolean;
  explodedProgress: number; // 0 to 1
  autoRotate: boolean;
  soundEnabled: boolean;
}

export interface WatchComponentHotspot {
  id: string;
  name: string;
  layerNumber: string;
  category: string;
  description: string;
  craftsmanship: string;
  specs: string;
  position3D: [number, number, number];
  explodedOffset: [number, number, number];
}

export interface WatchChapter {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string; unit?: string }[];
  cameraPreset: CameraPreset;
  targetExplode: number;
  highlightPart?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Website Design' | 'WordPress Development' | 'UI/UX Design' | 'Landing Pages' | 'WooCommerce' | 'WebGL & 3D' | string;
  categoryLabel: string;
  year: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  videoPreview?: string;
  galleryImages: string[];
  tags: string[];
  impactMetrics: { label: string; value: string }[];
  liveUrl?: string;
  featured?: boolean;
  award?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string;
    avatar?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  typicalTimeline: string;
  startingPrice: string;
  basePriceUSD?: number;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon: string; highlight?: boolean }[];
}

export interface Testimonial {
  id: string;
  name?: string;
  author?: string;
  role: string;
  company: string;
  avatar: string;
  content?: string;
  quote?: string;
  rating: number;
  projectType: string;
  result?: string;
}

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'UI/UX Design' | 'WordPress Performance' | 'Conversion Strategy' | 'Web Development' | 'Performance' | 'Architecture' | 'AI & Design' | 'Conversion UX' | 'Technical SEO' | string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface EstimatorOption {
  id: string;
  name: string;
  price: number;
  timeDays?: number;
  time?: string;
  category: string;
  description: string;
}

export interface AwardItem {
  id?: string;
  organization: string;
  title: string;
  category?: string;
  year: string;
  projectTitle?: string;
  project?: string;
}

export interface KeyFactItem {
  id: string;
  metric: string;
  label: string;
  sublabel: string;
  iconType?: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  image: string;
  experience?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
}

export interface GroundingSource {
  title: string;
  url: string;
  domain?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  sources?: GroundingSource[];
  searchQueries?: string[];
  grounded?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline?: string;
  experienceYears: string;
  completedProjects: string;
  clientSatisfaction: string;
  globalClients: string;
  email: string;
  phone: string;
  location: string;
  calendlyUrl: string;
  whatsappUrl: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  behance: string;
  dribbble: string;
  upwork: string;
  fiverr: string;
  bio: string;
}
