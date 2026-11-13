import React from 'react';
import { PageView } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface IntroductionSectionProps {
  onNavigate?: (page: PageView) => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="introduction"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Hero-styled Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
          <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
            01 / INTRODUCTION
          </span>
        </div>

        {/* Hero-matched Editorial Heading & Split Body with Portrait Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-between">
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] mb-6">
              I TURN IDEAS <br />
              INTO DIGITAL <br />
              <span className="text-[#FF7A00]">EXPERIENCES.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5B606D] font-display leading-relaxed mb-6 max-w-xl">
              From modern website design and development across top platforms to AI-powered features and smart automation, I create websites that don't just look good — they work for the business.
            </p>

            {/* Quick Highlights / Value Points */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-lg">
              <div className="p-3.5 rounded-xl bg-white/70 border border-black/[0.06] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                <span className="text-xs sm:text-sm font-semibold font-display text-[#0E1015]">4+ Years Experience</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-black/[0.06] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                <span className="text-xs sm:text-sm font-semibold font-display text-[#0E1015]">50+ Shipped Projects</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-black/[0.06] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                <span className="text-xs sm:text-sm font-semibold font-display text-[#0E1015]">AI & Smart Automations</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-black/[0.06] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs sm:text-sm font-semibold font-display text-[#0E1015]">100% Client Satisfaction</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => {
                  soundFx.playClick();
                  if (onNavigate) onNavigate('about');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3 sm:py-3.5 rounded-full bg-[#0E1015] hover:bg-[#21242C] text-white font-display font-semibold text-xs sm:text-sm flex items-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(14,16,21,0.2)] active:scale-95 cursor-pointer group"
                data-cursor="hover"
              >
                <span>Read More About Emmanuel</span>
                <div className="w-6 h-6 rounded-full bg-white text-[#0E1015] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  if (onNavigate) onNavigate('projects');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3 sm:py-3.5 rounded-full bg-white/80 hover:bg-white text-[#0E1015] font-display font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border border-black/[0.08] active:scale-95 cursor-pointer"
                data-cursor="hover"
              >
                <span>Explore Portfolio</span>
              </button>
            </div>
          </div>

          {/* Right: Confident Modern Profile Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-black/[0.08] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#E6E8EC] flex items-end justify-center">
                {/* Amber Glow Accent */}
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FF7A00]/20 via-transparent to-transparent pointer-events-none" />

                <img
                  src="https://res.cloudinary.com/gz77x9kx/image/upload/v1791813337/Professional_Portrait_with_Warm_Office_Bokeh-1_1_frwup5.png"
                  alt="Emmanuel — Portrait"
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-full h-full object-contain object-bottom filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0E1015]/75 via-[#0E1015]/20 to-transparent z-20 pointer-events-none" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 z-30 p-3.5 rounded-xl bg-[#0E1015]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs sm:text-sm font-bold font-display text-white">Emmanuel</div>
                    <div className="text-[11px] sm:text-xs font-display text-[#FF7A00]">Founder & Creative Technologist</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] text-emerald-400 font-display font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-black/[0.08]">
          <div className="bg-white/80 p-8 rounded-3xl border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3">
            <div className="text-xs sm:text-sm font-semibold font-display text-[#FF7A00] tracking-tight">01 / DESIGN</div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0E1015] tracking-tight">Bespoke Interface Design</h3>
            <p className="text-xs sm:text-sm text-[#5B606D] leading-relaxed font-display">
              Tailored visual systems designed in Figma with high contrast, elegant typography, and user-friendly interaction flows.
            </p>
          </div>

          <div className="bg-white/80 p-8 rounded-3xl border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3">
            <div className="text-xs sm:text-sm font-semibold font-display text-[#FF7A00] tracking-tight">02 / BUILD</div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0E1015] tracking-tight">Clean WordPress Architecture</h3>
            <p className="text-xs sm:text-sm text-[#5B606D] leading-relaxed font-display">
              Zero-bloat theme coding, custom PHP post types, and intuitive Elementor or Gutenberg block setups for effortless editing.
            </p>
          </div>

          <div className="bg-white/80 p-8 rounded-3xl border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3">
            <div className="text-xs sm:text-sm font-semibold font-display text-[#FF7A00] tracking-tight">03 / CONVERT</div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0E1015] tracking-tight">Speed & Performance Focus</h3>
            <p className="text-xs sm:text-sm text-[#5B606D] leading-relaxed font-display">
              Engineered for sub-second load times, 95+ Core Web Vitals, and strategic CTA placement that turns visitors into paying clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
