import React, { useState } from 'react';
import { PageView } from '../types';
import { X, ArrowUpRight, Sparkles, Mail, Phone, Calendar } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView) => void;
  onOpenAI: () => void;
}

const MENU_PREVIEWS: Partial<Record<PageView, { title: string; image: string; tag: string }>> = {
  home: {
    title: 'Alexander Vance Portfolio',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    tag: 'Website Developer & UI/UX Designer'
  },
  portfolio: {
    title: 'Featured Projects',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    tag: 'WordPress, Next.js, E-Commerce & 3D'
  },
  services: {
    title: 'Service Offerings',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Web Design, WordPress, Speed & UI/UX'
  },
  about: {
    title: 'About Alexander',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    tag: '6+ Years Crafting High-Converting Websites'
  },
  blog: {
    title: 'Insights & Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    tag: 'WordPress Speed, Conversion & UI/UX'
  },
  contact: {
    title: 'Let\'s Work Together',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    tag: 'Book a Consultation or Estimate Your Scope'
  }
};

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenAI
}) => {
  const [hoveredPage, setHoveredPage] = useState<PageView>('home');

  if (!isOpen) return null;

  const links: { page: PageView; label: string; num: string }[] = [
    { page: 'home', label: 'Home', num: '01' },
    { page: 'portfolio', label: 'Selected Work', num: '02' },
    { page: 'services', label: 'Services', num: '03' },
    { page: 'about', label: 'About Alexander', num: '04' },
    { page: 'blog', label: 'Blog & Insights', num: '05' },
    { page: 'contact', label: 'Get in Touch', num: '06' }
  ];

  const currentPreview = MENU_PREVIEWS[hoveredPage] || MENU_PREVIEWS['home']!;

  return (
    <div className="fixed inset-0 z-[100] bg-[#09090b]/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 lg:p-16 animate-in fade-in duration-300">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center font-heading font-bold text-blue-400">
            AV
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white font-heading">
            Alexander Vance Menu
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenAI();
            }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/60 border border-blue-500/40 text-xs font-semibold text-blue-200 hover:bg-blue-800 transition-colors font-heading"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>AI Project Advisor</span>
          </button>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
            data-cursor="hover"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Body: Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-8 items-center">
        
        {/* Left: Typographic Links */}
        <div className="lg:col-span-7 flex flex-col space-y-2">
          {links.map((link) => (
            <button
              key={link.page}
              onMouseEnter={() => {
                soundFx.playHover();
                setHoveredPage(link.page);
              }}
              onClick={() => {
                soundFx.playClick();
                onNavigate(link.page);
                onClose();
              }}
              className="group text-left flex items-center gap-6 py-2 px-3 rounded-2xl transition-all duration-300 hover:bg-white/5"
              data-cursor="hover"
            >
              <span className="text-xs font-mono text-blue-400 group-hover:text-cyan-400 font-bold transition-colors">
                {link.num}
              </span>
              <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-300 group-hover:text-white group-hover:translate-x-3 transition-all duration-300 font-heading tracking-tight">
                {link.label}
              </span>
              <ArrowUpRight className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all ml-auto" />
            </button>
          ))}
        </div>

        {/* Right: Dynamic Hover Image Preview */}
        <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center">
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl group">
            <img
              src={currentPreview.image}
              alt={currentPreview.title}
              className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                {currentPreview.tag}
              </span>
              <h3 className="text-2xl font-bold text-white font-heading">{currentPreview.title}</h3>
            </div>
          </div>
        </div>

      </div>

      {/* Footer / Contact Details */}
      <div className="border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-gray-400">
        <div>
          <div className="font-bold text-white uppercase tracking-wider mb-1 font-heading">EMAIL INQUIRIES</div>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 hover:underline">{PERSONAL_INFO.email}</a>
          <div className="text-[10px] text-gray-500 font-mono mt-0.5">Response within 24 hours</div>
        </div>
        <div>
          <div className="font-bold text-white uppercase tracking-wider mb-1 font-heading">PHONE & WHATSAPP</div>
          <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.phone}</a>
          <div className="text-[10px] text-gray-500 font-mono mt-0.5">Available for WhatsApp & Zoom calls</div>
        </div>
        <div>
          <div className="font-bold text-white uppercase tracking-wider mb-1 font-heading">LOCATION</div>
          <div>{PERSONAL_INFO.location}</div>
          <div className="text-[10px] text-blue-400 font-mono mt-0.5">Working with clients globally</div>
        </div>
      </div>

    </div>
  );
};
