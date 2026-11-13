import React from 'react';
import { PageView } from '../types';
import { AboutSection } from '../components/AboutSection';
import { Zap, Layout, ShieldCheck, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEstimator }) => {
  return (
    <div className="pt-20 bg-[#EDEDEE] text-[#0E1015] relative z-10 min-h-screen">
      
      {/* Featured About Section */}
      <AboutSection onNavigate={onNavigate} onOpenEstimator={onOpenEstimator} />

      {/* Guiding Principles Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-28">
        <div className="p-10 lg:p-16 rounded-3xl bg-white border border-black/[0.08] shadow-[0_20px_45px_rgba(0,0,0,0.05)] space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                CORE PHILOSOPHY & ETHOS
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] mb-4 uppercase">
              Guiding <span className="text-[#FF7A00]">Principles.</span>
            </h2>
            <p className="text-[#5B606D] text-base sm:text-lg font-display">
              Built for speed, user clarity, and long-term business performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-[#F5F6F8] rounded-2xl border border-black/[0.06] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E1015] font-display uppercase tracking-tight">Speed & Performance First</h3>
              <p className="text-xs sm:text-sm text-[#5B606D] font-display leading-relaxed">
                Sub-second loading times ensure lower bounce rates and higher conversion rates across mobile and desktop.
              </p>
            </div>

            <div className="p-8 bg-[#F5F6F8] rounded-2xl border border-black/[0.06] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E1015] font-display uppercase tracking-tight">Conversion-Driven UX</h3>
              <p className="text-xs sm:text-sm text-[#5B606D] font-display leading-relaxed">
                Every visual element, layout hierarchy, and call-to-action is planned to guide visitors naturally toward taking action.
              </p>
            </div>

            <div className="p-8 bg-[#F5F6F8] rounded-2xl border border-black/[0.06] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0E1015] font-display uppercase tracking-tight">Easy Backend Management</h3>
              <p className="text-xs sm:text-sm text-[#5B606D] font-display leading-relaxed">
                WordPress dashboards configured cleanly with custom fields so your team can easily update content without breaking layouts.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate('contact');
              }}
              className="px-10 py-4 rounded-full bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] font-display font-bold text-xs uppercase tracking-widest shadow-[0_10px_25px_rgba(255,122,0,0.25)] transition-all cursor-pointer inline-flex items-center gap-3"
            >
              <span>Start A Project With Emmanuel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
