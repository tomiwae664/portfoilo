import React, { useState, useEffect, useRef } from 'react';
import { Star, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { BeforeAfterSection } from './BeforeAfterSection';

interface AboutSectionProps {
  onOpenEstimator?: () => void;
  onOpenCalendly?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimator, onOpenCalendly }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Counter state
  const [clientCount, setClientCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Counter animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const steps = 50;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = Math.min(step / steps, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setClientCount(Math.floor(ease * 120));

            if (step >= steps) {
              clearInterval(timer);
              setClientCount(120);
            }
          }, interval);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleStartProject = () => {
    soundFx.playClick();
    if (onOpenEstimator) {
      onOpenEstimator();
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="relative w-full max-w-[1920px] mx-auto bg-[#0A0A0C] text-white py-20 lg:py-28 px-6 sm:px-12 lg:px-[80px] overflow-hidden select-none font-sans"
    >
      {/* Background Red Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#FF3B30]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#FF3B30]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* MAIN BENTO GRID CONTAINER (1440px) */}
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT BENTO CARD: 7/12 cols (~58% Width) */}
          <div className="lg:col-span-7 bg-[#121215] border border-white/10 rounded-[36px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[540px]">
            
            {/* Top Info Header */}
            <div className="flex flex-col items-center text-center space-y-4 mb-8 z-10">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#A1A1AA] font-medium shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
                <span>Available for worldwide project</span>
              </div>

              {/* Main Location Heading */}
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[46px] leading-tight tracking-tight text-white">
                Based in <span className="text-[#FF3B30]">Montréal, Canada</span>
              </h2>

              {/* Start a Project Pill Button */}
              <button
                onClick={handleStartProject}
                onMouseEnter={() => soundFx.playHover()}
                className="mt-2 px-7 py-3 rounded-full bg-[#1E1E22] hover:bg-[#28282D] active:scale-95 text-white font-heading font-semibold text-xs tracking-wide border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all cursor-pointer flex items-center gap-2 group/btn"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF3B30] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>

            </div>

            {/* Bottom Crimson Ambient Studio Photo Canvas */}
            <div className="w-full h-[280px] sm:h-[340px] rounded-[28px] overflow-hidden relative bg-[#0D0D10] border border-white/5 flex items-center justify-center group/media">
              
              {/* Red Studio Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3B30]/40 via-[#8B0000]/30 to-black/80 z-10 mix-blend-hard-light pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 z-10 pointer-events-none" />

              {/* Background Ambient Studio Image */}
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80"
                alt="Creative Studio Environment"
                className="w-full h-full object-cover filter contrast-[1.2] brightness-[0.7] hue-rotate-[-30deg] saturate-[1.8] group-hover/media:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Central Glowing Red Portrait Accent */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
                <img
                  src="https://res.cloudinary.com/gz77x9kx/image/upload/v1786029226/emmanuel_dkwush.png"
                  alt="Alexander Vance Studio"
                  referrerPolicy="no-referrer"
                  className="h-full object-contain filter contrast-[1.15] brightness-[0.9] drop-shadow-[0_15px_30px_rgba(255,59,48,0.35)] opacity-95 group-hover/media:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: 5/12 cols (~42% Width) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* TOP RIGHT BENTO CARD: Stats & Trust */}
            <div className="bg-[#121215] border border-white/10 rounded-[36px] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden h-full min-h-[250px]">
              
              {/* Subtitle Caption */}
              <p className="text-sm sm:text-base font-medium text-[#A1A1AA] leading-relaxed max-w-[380px]">
                Trusted by 120+ clients across 10+ industries — shipping all from ideas to production in 2–4 weeks.
              </p>

              {/* Stat Number & Rating Stars */}
              <div className="flex items-end justify-between pt-8 border-t border-white/5 mt-6">
                
                {/* 5-Star Rating */}
                <div className="flex flex-col gap-2">
                  <div className="flex text-[#FF3B30] gap-1">
                    <Star className="w-4 h-4 fill-[#FF3B30] stroke-none" />
                    <Star className="w-4 h-4 fill-[#FF3B30] stroke-none" />
                    <Star className="w-4 h-4 fill-[#FF3B30] stroke-none" />
                    <Star className="w-4 h-4 fill-[#FF3B30] stroke-none" />
                    <Star className="w-4 h-4 fill-[#FF3B30] stroke-none" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#71717A]">5.0 Client Rating</span>
                </div>

                {/* Giant Counter */}
                <div className="font-heading font-black text-6xl sm:text-7xl lg:text-[80px] leading-none text-white tracking-tighter">
                  {clientCount}+
                </div>

              </div>

            </div>

            {/* BOTTOM RIGHT BENTO CARD: Quote / Testimonial */}
            <div className="bg-[#121215] border border-white/10 rounded-[36px] p-6 sm:p-7 flex items-center gap-5 sm:gap-6 shadow-2xl relative overflow-hidden">
              
              {/* Left Portrait Avatar */}
              <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-white/10 relative bg-[#1E1E22]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Ava Collins - HyperX Design Lead"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Content */}
              <div className="flex-1 flex flex-col justify-between py-1">
                
                {/* Quotation Mark */}
                <div className="text-2xl font-serif text-[#FF3B30] font-black leading-none mb-1">
                  “
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm font-medium text-white leading-snug mb-3">
                  Good artwork is obvious — because the hard work is hidden.
                </p>

                {/* Author Info */}
                <div>
                  <div className="text-xs font-bold text-white font-heading">
                    Ava Collins
                  </div>
                  <div className="text-[11px] font-mono text-[#71717A]">
                    HyperX Design Lead
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BEFORE AND AFTER REDESIGN TRANSFORMATION SECTION */}
      <div className="mt-16 sm:mt-24">
        <BeforeAfterSection onOpenEstimator={onOpenEstimator} />
      </div>
    </section>
  );
};
