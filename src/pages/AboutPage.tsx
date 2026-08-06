import React from 'react';
import { PageView } from '../types';
import { AboutSection } from '../components/AboutSection';
import { Zap, Layout, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEstimator }) => {
  return (
    <div className="pt-20 bg-[#0A0A0C] text-white relative z-10 min-h-screen transition-colors duration-300">
      
      {/* Featured Luxury About Me Bento Section */}
      <AboutSection onOpenEstimator={onOpenEstimator} />

      {/* Guiding Principles Section */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[80px] pb-28">
        <div className="p-10 lg:p-16 rounded-[36px] bg-[#121215] border border-white/10 shadow-2xl space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-3">My Guiding Principles</h2>
            <p className="text-[#A1A1AA] text-base font-body">Crafted for performance, usability, and long-term business growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-[#18181C] rounded-3xl border border-white/5 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">Speed & Performance First</h3>
              <p className="text-sm text-[#A1A1AA] font-body leading-relaxed">Sub-second loading times ensure lower bounce rates and higher conversion rates across all mobile devices.</p>
            </div>

            <div className="p-8 bg-[#18181C] rounded-3xl border border-white/5 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30]">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">Conversion-Driven UX</h3>
              <p className="text-sm text-[#A1A1AA] font-body leading-relaxed">Every visual element, button placement, and typographic line is calculated to guide visitors toward taking action.</p>
            </div>

            <div className="p-8 bg-[#18181C] rounded-3xl border border-white/5 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">Easy Client Management</h3>
              <p className="text-sm text-[#A1A1AA] font-body leading-relaxed">Your website backend will be so intuitive you won't need to hire a developer for simple text or image updates.</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenEstimator();
              }}
              className="h-[60px] px-10 rounded-[999px] bg-[#FF3B30] hover:bg-[#E03126] text-white font-heading font-semibold text-[16px] shadow-xl hover:shadow-[0_10px_30px_rgba(255,59,48,0.4)] transition-all cursor-pointer"
            >
              Start A Project With Alexander
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

