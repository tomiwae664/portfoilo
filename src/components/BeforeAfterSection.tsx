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
      className="relative w-full bg-[#0A0A0C] text-white py-20 lg:py-28 px-6 sm:px-12 lg:px-[80px] overflow-hidden select-none font-sans border-t border-white/10"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Ambient Red/Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-[#FF3B30]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#A1A1AA] font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>THE REDESIGN DIFFERENCE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[52px] leading-tight text-white tracking-tight">
            See The Transformation
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-body leading-relaxed max-w-2xl mx-auto">
            Drag the slider to compare standard, cluttered templates with our custom, high-converting digital experience.
          </p>
        </div>

        {/* INTERACTIVE BEFORE / AFTER SLIDER CARD */}
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-[1100px] mx-auto aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.5] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-ew-resize touch-none select-none"
        >

          {/* 1. AFTER SIDE (Full background width underneath, revealed by clipping) */}
          <div className="absolute inset-0 bg-[#070709] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden">
            
            {/* Background Studio Glow & Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Top Bar (After Header) */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center font-bold text-xs text-blue-400 font-heading">
                  AI
                </div>
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
                  Modern Luxury UX
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">Projects • About • Skills</span>
                <div className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-heading shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                  Contact me
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
                  className="h-full object-contain object-left filter contrast-125 brightness-105 drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]"
                />
              </div>

              {/* Right Glowing Text */}
              <div className="sm:col-span-7 flex flex-col justify-center space-y-2 text-right sm:text-left">
                <div className="font-heading font-black text-4xl sm:text-6xl lg:text-[72px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 drop-shadow-[0_0_25px_rgba(99,102,241,0.8)] tracking-tight">
                  AI Portfolio
                </div>
                <div className="font-heading font-black text-5xl sm:text-7xl lg:text-[88px] leading-none text-white drop-shadow-[0_0_35px_rgba(147,197,253,0.9)] tracking-tighter">
                  2026
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-body max-w-sm pt-2 leading-relaxed">
                  Engineered with sub-second page speed, interactive micro-animations, and high-converting lead flows.
                </p>
              </div>

            </div>

            {/* Bottom Label Badge */}
            <div className="flex items-center justify-end relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 font-mono text-xs font-bold tracking-wider uppercase">
                AFTER REDESIGN
              </span>
            </div>

          </div>

          {/* 2. BEFORE SIDE (Clipped layer overlay based on sliderPosition %) */}
          <div 
            className="absolute top-0 left-0 bottom-0 bg-[#EFEFEF] text-[#1E1E22] flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden border-r border-black/20"
            style={{ width: `${sliderPosition}%` }}
          >
            
            {/* Top Bar (Before Header) */}
            <div className="flex items-center justify-between relative z-10 w-full min-w-[320px] sm:min-w-[600px] lg:min-w-[900px]">
              <div className="font-heading font-bold text-lg text-zinc-800">
                AI <span className="text-xs text-zinc-500 font-normal">(Generic Template)</span>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                Outdated Standard Site
              </div>
            </div>

            {/* Center Content (Light Generic Cluttered Grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 my-auto relative z-10 w-full min-w-[320px] sm:min-w-[600px] lg:min-w-[900px] max-w-lg">
              
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-zinc-300 shadow-sm space-y-2">
                <div className="w-full h-16 sm:h-20 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-xs font-mono">
                  Image 1
                </div>
                <div className="h-2.5 bg-zinc-300 rounded w-3/4" />
                <div className="h-2 bg-zinc-200 rounded w-1/2" />
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-zinc-300 shadow-sm space-y-2">
                <div className="w-full h-16 sm:h-20 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-xs font-mono">
                  Image 2
                </div>
                <div className="h-2.5 bg-zinc-300 rounded w-2/3" />
                <div className="h-2 bg-zinc-200 rounded w-1/3" />
              </div>

              <div className="hidden sm:block p-3 sm:p-4 rounded-xl bg-white border border-zinc-300 shadow-sm space-y-2">
                <div className="w-full h-16 sm:h-20 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-xs font-mono">
                  Image 3
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
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black shadow-[0_5px_20px_rgba(0,0,0,0.5)] border-2 border-zinc-300 flex items-center justify-center -translate-x-1/2 hover:scale-110 active:scale-95 transition-transform">
              <Sliders className="w-5 h-5 text-black" />
            </div>
          </div>

        </div>

        {/* COMPARISON METRICS BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1100px] mx-auto mt-10 pt-10 border-t border-white/10">
          
          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 space-y-2">
            <div className="text-xs font-mono uppercase text-[#A1A1AA]">Core Web Vitals</div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-rose-400 line-through text-sm">4.2s Load</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">98+ Speed Score</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 space-y-2">
            <div className="text-xs font-mono uppercase text-[#A1A1AA]">User Engagement</div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-rose-400 line-through text-sm">Generic Template</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Bespoke Interactive UX</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-white/10 space-y-2">
            <div className="text-xs font-mono uppercase text-[#A1A1AA]">Lead Conversions</div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-rose-400 line-through text-sm">Low Inquiry</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">3x Client Inquiries</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
