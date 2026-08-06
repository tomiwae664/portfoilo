export type PageView = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'blog' 
  | 'contact' 
  | 'privacy' 
  | 'terms'
  | '404';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Website Design' | 'WordPress Development' | 'UI/UX Design' | 'Landing Pages' | 'WooCommerce' | 'WebGL & 3D';
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
    company: string;
    avatar: string;
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
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
  result: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
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
  timeDays: number;
  category: string;
  description: string;
}

export interface AwardItem {
  id: string;
  organization: string;
  title: string;
  category: string;
  year: string;
  projectTitle: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
