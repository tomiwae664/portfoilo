import React from 'react';
import { PageView } from '../types';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EDEDEE] text-[#0E1015] pt-20 pb-12 border-t border-black/[0.08] relative z-10 select-none font-display">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/[0.08]">
          
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-2xl tracking-tight text-[#0E1015] uppercase">
                EMMANUEL
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
            </div>

            <p className="text-xs font-display text-[#5B606D] font-medium tracking-wide">
              WordPress Developer & UI/UX Designer
            </p>

            <p className="text-xs sm:text-sm text-[#5B606D] max-w-sm leading-relaxed font-display">
              Crafting high-performing digital experiences with bespoke UI/UX and clean WordPress architecture.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-display text-[#FF7A00] uppercase tracking-wider font-bold mb-3">
              EXPLORE
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-display text-[#5B606D]">
              <li>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onNavigate('home');
                  }}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onNavigate('projects');
                  }}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onNavigate('about');
                  }}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  About Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onNavigate('services');
                  }}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onNavigate('contact');
                  }}
                  className="hover:text-[#FF7A00] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-display text-[#FF7A00] uppercase tracking-wider font-bold mb-3">
              CONNECT
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-display text-[#5B606D]">
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.behance} target="_blank" rel="noreferrer" className="hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1">
                  <span>Behance</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.dribbble} target="_blank" rel="noreferrer" className="hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1">
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1">
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B606D] font-display">
          <div>
            © {new Date().getFullYear()} EMMANUEL. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/[0.1] bg-white text-xs font-display font-semibold text-[#0E1015] hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all cursor-pointer group shadow-sm"
            data-cursor="hover"
          >
            <span>BACK TO TOP</span>
            <span className="group-hover:-translate-y-0.5 transition-transform text-[#FF7A00]">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
