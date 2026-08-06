import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Plus, Star } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator?: () => void;
  onOpenCalendly?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenCalendly }) => {
  // Live Date & Time State
  const [timeString, setTimeString] = useState('6:30pm • 23 June, 2024');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12;
      const day = now.getDate();
      const month = now.toLocaleString('en-US', { month: 'long' });
      const year = now.getFullYear();
      setTimeString(`${formattedHours}:${minutes}${ampm} • ${day} ${month}, ${year}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const navLinks: { label: string; page: PageView; active?: boolean }[] = [
    { label: 'Home', page: 'home', active: true },
    { label: 'Product', page: 'services' },
    { label: 'About', page: 'about' },
    { label: 'Brands', page: 'portfolio' },
    { label: 'Careers', page: 'about' },
    { label: 'Partners', page: 'contact' },
  ];

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#DEDEE0] text-[#0F172A] pt-6 pb-12 flex flex-col justify-between overflow-hidden select-none font-sans">
      
      {/* Studio Lighting Radial Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />

      {/* TOP HEADER / NAVBAR (Zenrixa Style) */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-[80px] relative z-30 mb-8">
        <div className="flex items-center justify-between py-2">
          
          {/* Logo */}
          <div 
            onClick={() => {
              soundFx.playClick();
              onNavigate('home');
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-6 h-6 bg-[#0F172A] rounded-md flex items-center justify-center text-white font-extrabold text-xs tracking-widest font-heading">
              Z
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-[#0F172A] group-hover:text-blue-600 transition-colors">
              Zenrixa
            </span>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playClick();
                  onNavigate(link.page);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="relative text-sm font-medium text-[#0F172A]/80 hover:text-[#0F172A] transition-colors py-1 cursor-pointer"
              >
                <span>{link.label}</span>
                {link.active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                )}
              </button>
            ))}
          </nav>

          {/* Time Badge & Menu Pill */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-black/5 text-xs font-medium text-[#475569] shadow-sm">
              <span>Timezone</span>
              <span className="text-[#0F172A] font-semibold">{timeString}</span>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate('contact');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-5 py-2 rounded-full bg-white/90 hover:bg-white border border-black/10 text-xs font-semibold text-[#0F172A] flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span className="font-mono text-sm leading-none">=</span>
              <span>MENU</span>
            </button>
          </div>

        </div>
      </div>

      {/* GIANT BACKGROUND WATERMARK TYPOGRAPHY: "ZENRIXA" */}
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden select-none">
        <span className="font-heading font-black text-[140px] sm:text-[240px] lg:text-[320px] xl:text-[380px] leading-none tracking-tighter text-[#0F172A]/[0.06] block uppercase">
          ZENRIXA
        </span>
      </div>

      {/* MAIN HERO CONTENT GRID */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-[80px] relative z-10 my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative min-h-[580px] lg:min-h-[640px]">
          
          {/* LEFT COLUMN (Content) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-20">
            
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] mb-6 tracking-wide">
              <span className="w-[2px] h-4 bg-[#0F172A]" />
              <span>Creative Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] leading-[95%] tracking-[-2px] text-[#0F172A] mb-6">
              We start from <br />
              zero, delivering <br />
              only what matters.
            </h1>

            {/* Rating Stars */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex text-amber-500 gap-1 text-sm">
                <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                <Star className="w-4 h-4 fill-amber-500 stroke-none" />
                <Star className="w-4 h-4 fill-amber-500 stroke-none" />
              </div>
              <span className="text-xs font-bold text-[#475569] tracking-tight">
                3000+ Customers
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              
              {/* Primary Pill Button + Arrow Circle */}
              <div className="inline-flex items-center p-1 rounded-full bg-[#0F172A] shadow-xl hover:bg-[#1E293B] transition-colors cursor-pointer group">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    if (onOpenCalendly) onOpenCalendly();
                    else onNavigate('contact');
                  }}
                  className="px-6 py-3.5 text-xs font-bold text-white font-heading cursor-pointer"
                >
                  Chat With Us
                </button>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0F172A] group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Secondary Pill Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onNavigate('portfolio');
                }}
                className="px-7 py-4 rounded-full bg-black/10 hover:bg-black/15 text-[#0F172A] font-heading font-bold text-xs transition-colors cursor-pointer"
              >
                Our Works
              </button>

            </div>

          </div>

          {/* CENTER COLUMN (Hero Portrait) */}
          <div className="lg:col-span-4 flex items-end justify-center relative z-10 h-[520px] sm:h-[600px] lg:h-[680px] pointer-events-none">
            
            {/* High Quality Central Studio Portrait */}
            <img
              src="https://res.cloudinary.com/gz77x9kx/image/upload/v1786029226/emmanuel_dkwush.png"
              alt="Zenrixa Creative Portrait"
              referrerPolicy="no-referrer"
              className="h-full object-contain object-bottom filter contrast-[1.05] brightness-[1.01] drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)] pointer-events-auto"
            />

          </div>

          {/* RIGHT COLUMN (Widget & Partners) */}
          <div className="lg:col-span-4 flex flex-col justify-between items-end h-full z-20 space-y-8 lg:space-y-0">
            
            {/* Top Right Glass Widget Card: "Design to explore." */}
            <div className="w-full max-w-[340px] bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[32px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-center gap-4 relative group">
              
              {/* Dark Left Square with Emblem */}
              <div className="w-20 h-20 rounded-2xl bg-[#0F172A] flex items-center justify-center text-white shrink-0 shadow-lg">
                <div className="font-heading font-extrabold text-2xl tracking-tighter">
                  N<sup>®</sup>
                </div>
              </div>

              {/* Right Side Content */}
              <div className="flex-1 flex flex-col justify-between h-20 py-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-base text-[#0F172A]">
                    Design to explore.
                  </span>
                  <button className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-[#0F172A] hover:bg-black/10 transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Progress bar line & Control Arrows */}
                <div className="flex items-center justify-between pt-3">
                  <div className="w-16 h-1 rounded-full bg-black/10 overflow-hidden">
                    <div className="w-2/3 h-full bg-[#0F172A] rounded-full" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#0F172A] transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-[#0F172A] text-white flex items-center justify-center hover:bg-[#1E293B] transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Right Partners List */}
            <div className="w-full max-w-[340px] flex flex-col items-end text-right">
              <div className="text-xs font-bold text-[#0F172A] mb-3">
                Our Partners
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-heading font-bold text-[#64748B] opacity-80">
                <div className="flex items-center gap-1.5 justify-end hover:text-[#0F172A] transition-colors cursor-pointer">
                  <span className="font-mono text-sm">z</span>
                  <span>zantic</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end hover:text-[#0F172A] transition-colors cursor-pointer">
                  <span>BookStore</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end hover:text-[#0F172A] transition-colors cursor-pointer">
                  <span>Wager</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end hover:text-[#0F172A] transition-colors cursor-pointer">
                  <span>Crono</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end hover:text-[#0F172A] transition-colors cursor-pointer">
                  <span>Mercury</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM FLOATING GLASS BAR ACROSS PORTRAIT */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-[80px] relative z-30 mt-6">
        <div className="w-full max-w-[900px] mx-auto h-[60px] rounded-full bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.08)] px-6 flex items-center justify-between text-xs font-semibold text-[#0F172A]">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
            <span>10+ Years Exp</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[#64748B]">
            <span>• Based in Warsaw</span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              const el = document.querySelector('#manifesto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors cursor-pointer"
          >
            <span>Scroll Down</span>
            <span>↓</span>
          </button>

        </div>
      </div>

    </section>
  );
};
