import React, { useState } from 'react';
import { PageView } from '../types';
import { X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView) => void;
  onOpenAI?: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenAI
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const links: { page: PageView; label: string; num: string; tag: string }[] = [
    { page: 'home', label: 'HOME', num: '01', tag: 'Overview & Story' },
    { page: 'projects', label: 'WORK', num: '02', tag: 'Selected Case Studies' },
    { page: 'about', label: 'ABOUT', num: '03', tag: 'Designer & Developer' },
    { page: 'services', label: 'SERVICES', num: '04', tag: 'Websites & AI Integrations' },
    { page: 'contact', label: 'CONTACT', num: '05', tag: 'Start a Project' }
  ];

  return (
    <div
      id="fullscreen-menu-overlay"
      className="fixed inset-0 z-[100] bg-[#EDEDEE]/98 backdrop-blur-3xl text-[#0E1015] flex flex-col justify-between p-6 sm:p-12 lg:p-20 animate-in fade-in duration-300 overflow-y-auto"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-black/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-2xl tracking-tight text-[#0E1015] font-display uppercase">
            EMMANUEL
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
        </div>

        <div className="flex items-center gap-3">
          {onOpenAI && (
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
                onOpenAI();
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#0E1015] hover:text-white border border-black/10 text-xs font-semibold font-display transition-colors cursor-pointer shadow-sm text-[#0E1015]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI Search Radar</span>
            </button>
          )}

          <button
            id="close-fullscreen-menu-btn"
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-12 h-12 rounded-full border border-black/10 text-[#0E1015] hover:bg-[#0E1015] hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menu Navigation Links */}
      <div className="my-auto py-12 flex flex-col space-y-4 max-w-4xl">
        {links.map((link, idx) => (
          <button
            key={link.page}
            id={`fullscreen-nav-${link.label.toLowerCase()}`}
            onMouseEnter={() => {
              soundFx.playHover();
              setHoveredIndex(idx);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              soundFx.playClick();
              onNavigate(link.page);
              onClose();
            }}
            className="group text-left flex items-baseline gap-6 sm:gap-10 py-3 transition-all duration-300 cursor-pointer"
          >
            <span className="text-xs sm:text-sm font-mono text-[#FF7A00] tracking-widest font-bold">
              {link.num}
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] group-hover:translate-x-3 transition-all duration-300 font-display">
              {link.label}
            </span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#5B606D] group-hover:text-[#0E1015] transition-colors ml-auto font-mono">
              {link.tag}
            </span>
            <ArrowUpRight className="w-6 h-6 text-[#FF7A00] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </button>
        ))}
      </div>

      {/* Bottom Footer Info */}
      <div className="border-t border-black/[0.08] pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#5B606D] font-sans">
        <div>
          <div className="font-bold text-[#0E1015] uppercase tracking-wider mb-1 font-display">DIRECT INQUIRIES</div>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#FF7A00] hover:underline font-mono">
            {PERSONAL_INFO.email}
          </a>
        </div>
        <div>
          <div className="font-bold text-[#0E1015] uppercase tracking-wider mb-1 font-display">LOCATION</div>
          <div>{PERSONAL_INFO.location}</div>
        </div>
        <div>
          <div className="font-bold text-[#0E1015] uppercase tracking-wider mb-1 font-display">CONNECT</div>
          <div className="flex gap-4 text-[#0E1015]">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF7A00] transition-colors">LinkedIn ↗</a>
            <a href={PERSONAL_INFO.behance} target="_blank" rel="noreferrer" className="hover:text-[#FF7A00] transition-colors">Behance ↗</a>
            <a href={PERSONAL_INFO.upwork} target="_blank" rel="noreferrer" className="hover:text-[#FF7A00] transition-colors">Upwork ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
};
