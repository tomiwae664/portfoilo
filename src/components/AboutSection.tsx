import React from 'react';
import { PageView } from '../types';
import { PERSONAL_INFO, SKILLS, STATS } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle, Award, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface AboutSectionProps {
  onNavigate?: (page: PageView) => void;
  onOpenEstimator?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenEstimator
}) => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-white/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Hero-styled Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
          <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
            02 / ABOUT EMMANUEL
          </span>
        </div>

        {/* Editorial Heading matching Hero sizing */}
        <div className="mb-14">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
            DESIGNER. <br />
            DEVELOPER. <br />
            <span className="text-[#FF7A00]">PROBLEM SOLVER.</span>
          </h2>
        </div>

        {/* Main Content Grid: Image Crop + Bio & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Professional Portrait Area with Editorial Mask */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-black/[0.08] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] group">
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#E6E8EC] flex items-end justify-center">
                
                {/* Amber Glow Behind */}
                <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#FF7A00]/20 via-transparent to-transparent pointer-events-none" />
                
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Emmanuel — Website Designer and Developer"
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-full h-full object-cover object-[center_18%] filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent z-20 pointer-events-none" />
                
                {/* Overlay Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-30 p-4 rounded-xl bg-[#0E1015]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm font-bold font-display text-white">Emmanuel</div>
                    <div className="text-xs font-display text-[#FF7A00]">Website Designer & Developer</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping" />
                </div>

              </div>

            </div>
          </div>

          {/* Right: Bio, Core Philosophy, and Skills Area */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Supporting Copy */}
            <div className="space-y-6 text-base sm:text-lg text-[#4A4F5C] font-display font-normal leading-relaxed">
              <p>
                I’m a professional website designer and developer focused on creating modern, responsive, and high-performing websites that help businesses build a stronger online presence. I work with platforms such as WordPress, Shopify, Wix, Squarespace, Webflow, and Elementor to create websites that are visually appealing, easy to navigate, and built around the client’s goals.
              </p>
              <p>
                I also integrate AI-powered features into websites to make them smarter and more efficient. This can include AI chatbots, virtual assistants, automated customer support, AI-powered forms, personalized experiences, content tools, and business workflow automation.
              </p>
              <p>
                My approach combines clean design, functionality, user experience, and smart technology to create websites that don’t just look good they work for the business.
              </p>
            </div>

            {/* Skills Pills Area */}
            <div className="pt-6 border-t border-black/[0.08]">
              <div className="text-xs sm:text-sm font-semibold font-display text-[#FF7A00] tracking-tight mb-4">
                CORE SKILLS & TECHNOLOGIES
              </div>

              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-xs sm:text-sm font-display font-semibold text-[#0E1015] bg-white/90 border border-black/[0.08] hover:border-[#FF7A00] hover:text-[#FF7A00] shadow-sm transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Clients Alignment */}
            <div className="p-6 rounded-2xl bg-white/80 border border-black/[0.08] shadow-sm space-y-2.5">
              <div className="text-xs sm:text-sm font-semibold font-display text-[#FF7A00] tracking-tight">
                WHO I HELP
              </div>
              <p className="text-xs sm:text-sm text-[#5B606D] leading-relaxed font-display">
                Startups, small businesses, digital agencies, professional service firms, e-commerce brands, schools, law firms, logistics companies, and entrepreneurs looking to scale online.
              </p>
            </div>

            {/* Action Buttons matching Hero style */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  if (onNavigate) onNavigate('contact');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3 sm:py-3.5 rounded-full bg-[#0E1015] hover:bg-[#21242C] text-white font-display font-semibold text-xs sm:text-sm flex items-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(14,16,21,0.2)] active:scale-95 cursor-pointer group"
                data-cursor="hover"
              >
                <span>Let's Work Together</span>
                <div className="w-6 h-6 rounded-full bg-white text-[#0E1015] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {onOpenEstimator && (
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onOpenEstimator();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-7 py-3 sm:py-3.5 rounded-full bg-[#0E1015]/[0.08] hover:bg-[#0E1015]/[0.14] text-[#0E1015] font-display font-semibold text-xs sm:text-sm transition-all duration-300 border border-black/[0.04] active:scale-95 cursor-pointer"
                  data-cursor="hover"
                >
                  <span>Calculate Estimate</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
