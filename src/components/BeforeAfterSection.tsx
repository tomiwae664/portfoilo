import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface BeforeAfterSectionProps {
  onOpenEstimator?: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenEstimator }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section 
      id="before-after" 
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden select-none font-sans border-t border-black/[0.08]"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
              09 / THE REDESIGN DIFFERENCE
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] uppercase">
            SEE THE <br />
            <span className="text-[#FF7A00]">TRANSFORMATION.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B606D] font-display leading-relaxed max-w-2xl mx-auto">
            Drag the slider to compare standard, cluttered templates with our bespoke, high-converting digital experience.
          </p>
        </div>

        {/* INTERACTIVE BEFORE / AFTER SLIDER CARD */}
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-[1100px] mx-auto aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.5] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-black/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.08)] cursor-ew-resize touch-none select-none"
        >

          {/* 1. AFTER SIDE (Full background width underneath, revealed by clipping) */}
          <div className="absolute inset-0 bg-[#0E1015] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden text-white">
            
            {/* Background Studio Glow & Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Top Bar (After Header) */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/20 border border-[#FF7A00]/40 flex items-center justify-center font-bold text-xs text-[#FF7A00] font-display">
                  E
                </div>
                <span className="text-xs font-mono font-semibold text-[#FF7A00] uppercase tracking-widest">
                  Modern Editorial UX
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">Projects • Services • About</span>
                <div className="px-4 py-1.5 rounded-full bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] text-xs font-bold font-display shadow-[0_0_20px_rgba(255,122,0,0.4)]">
                  Work With Me
                </div>
              </div>
            </div>

            {/* Center Content (Glowing Neon Typography) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto relative z-10">
              
              {/* Left Portrait */}
              <div className="hidden sm:block sm:col-span-5 relative h-48 sm:h-64 lg:h-72">
                <img 
                  src="https://res.cloudinary.com/gz77x9kx/image/upload/v1786029226/emmanuel_dkwush.png"
                  alt="After Portrait"
                  referrerPolicy="no-referrer"
                  className="h-full object-contain object-left filter contrast-110 brightness-105"
                />
              </div>

              {/* Right Glowing Text */}
              <div className="sm:col-span-7 flex flex-col justify-center space-y-2 text-right sm:text-left">
                <div className="font-display font-black text-4xl sm:text-6xl lg:text-[72px] leading-none text-[#FF7A00] tracking-tight uppercase">
                  Bespoke Studio
                </div>
                <div className="font-display font-black text-5xl sm:text-7xl lg:text-[88px] leading-none text-white tracking-tighter">
                  2026
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-sm pt-2 leading-relaxed">
                  Engineered with sub-second page speed, interactive micro-animations, and high-converting lead flows.
                </p>
              </div>

            </div>

            {/* Bottom Label Badge */}
            <div className="flex items-center justify-end relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00]/40 text-[#FF7A00] font-mono text-xs font-bold tracking-wider uppercase">
                AFTER REDESIGN
              </span>
            </div>

          </div>

          {/* 2. BEFORE SIDE (Clipped layer overlay based on sliderPosition %) */}
          <div 
            className="absolute top-0 left-0 bottom-0 bg-[#E5E5E7] text-[#1E1E22] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden border-r border-black/20"
            style={{ width: `${sliderPosition}%` }}
          >
            
            {/* Top Bar (Before Header) */}
            <div className="flex items-center justify-between relative z-10 w-full min-w-[320px] sm:min-w-[600px] lg:min-w-[900px]">
              <div className="font-display font-bold text-lg text-zinc-800">
                Template <span className="text-xs text-zinc-500 font-normal">(Generic WordPress Theme)</span>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                Outdated Standard Site
              </div>
            </div>

            {/* Center Content (Light Generic Cluttered Grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 my-auto relative z-10 w-full min-w-[320px] sm:min-w-[600px] lg:min-w-[900px] max-w-lg">
              
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-zinc-300 shadow-sm space-y-2">
                <div className="w-full h-16 sm:h-20 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-xs font-mono">
                  Theme Box 1
                </div>
                <div className="h-2.5 bg-zinc-300 rounded w-3/4" />
                <div className="h-2 bg-zinc-200 rounded w-1/2" />
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-zinc-300 shadow-sm space-y-2">
                <div className="w-full h-16 sm:h-20 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-xs font-mono">
                  Theme Box 2
                </div>
                <div className="h-2.5 bg-zinc-300 rounded w-2/3" />
                <div className="h-2 bg-zinc-200 rounded w-1/3" />
              </div>

              <div className="hidden sm:block p-3 sm:p-4 rounded-xl bg-white border border-zinc-300 shadow-sm space-y-2">
                <div className="w-full h-16 sm:h-20 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-xs font-mono">
                  Theme Box 3
                </div>
                <div className="h-2.5 bg-zinc-300 rounded w-4/5" />
                <div className="h-2 bg-zinc-200 rounded w-2/5" />
              </div>

            </div>

            {/* Bottom Label Badge */}
            <div className="flex items-center justify-start relative z-10 w-full min-w-[320px]">
              <span className="px-4 py-1.5 rounded-full bg-zinc-300 border border-zinc-400 text-zinc-800 font-mono text-xs font-bold tracking-wider uppercase">
                BEFORE REDESIGN
              </span>
            </div>

          </div>

          {/* 3. SLIDER DRAGGABLE DIVIDER LINE & HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-[#0E1015] shadow-[0_0_15px_rgba(0,0,0,0.4)] z-30 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0E1015] text-[#FF7A00] shadow-[0_5px_20px_rgba(0,0,0,0.3)] border-2 border-white flex items-center justify-center -translate-x-1/2 hover:scale-110 active:scale-95 transition-transform">
              <Sliders className="w-5 h-5 text-[#FF7A00]" />
            </div>
          </div>

        </div>

        {/* COMPARISON METRICS BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1100px] mx-auto mt-10 pt-10 border-t border-black/[0.08]">
          
          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-2">
            <div className="text-xs font-mono uppercase text-[#5B606D]">Core Web Vitals</div>
            <div className="text-lg font-bold text-[#0E1015] flex items-center gap-2">
              <span className="text-rose-500 line-through text-sm">4.2s Load</span>
              <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
              <span className="text-[#0E1015] font-mono font-black">98+ Speed Score</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-2">
            <div className="text-xs font-mono uppercase text-[#5B606D]">User Engagement</div>
            <div className="text-lg font-bold text-[#0E1015] flex items-center gap-2">
              <span className="text-rose-500 line-through text-sm">Generic Template</span>
              <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
              <span className="text-[#0E1015] font-mono font-black">Bespoke Editorial UX</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-2">
            <div className="text-xs font-mono uppercase text-[#5B606D]">Lead Conversions</div>
            <div className="text-lg font-bold text-[#0E1015] flex items-center gap-2">
              <span className="text-rose-500 line-through text-sm">Low Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
              <span className="text-[#0E1015] font-mono font-black">3x Client Inquiries</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
