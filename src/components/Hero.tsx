import React, { useEffect, useState } from 'react';
import { PageView } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight, AudioWaveform } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { ShowreelModal } from './ShowreelModal';

const HERO_PORTRAIT_URL = 'https://res.cloudinary.com/gz77x9kx/image/upload/v1791813337/Professional_Portrait_with_Warm_Office_Bokeh-1_1_frwup5.png';

interface HeroProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [loaded, setLoaded] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    soundFx.playClick();
    const el = document.getElementById('selected-work') || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('projects');
    }
  };

  const handleOpenContact = () => {
    soundFx.playClick();
    onNavigate('contact');
  };

  const handleToggleAudio = () => {
    soundFx.playClick();
    if (!isPlayingAudio) {
      soundFx.playChime();
      setIsPlayingAudio(true);
    } else {
      setIsPlayingAudio(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-gradient-to-b from-[#EDEDEE] via-[#E7E9ED] to-[#DFE1E7] text-[#0E1015] pt-24 sm:pt-28 pb-8 sm:pb-10 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Soft Studio Cyclorama Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[750px] bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(235,237,242,0.6)_45%,transparent_75%)] rounded-full blur-[80px]" />
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-white/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[500px] bg-[#E1E4EA]/70 rounded-full blur-[120px]" />
      </div>

      {/* Giant Typographic Watermark Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
        {/* Giant Watermark Typography behind shoulders: EMMANUEL */}
        <div className="absolute top-[34%] sm:top-[30%] lg:top-[28%] inset-x-0 flex justify-center items-center pointer-events-none select-none z-10 opacity-70">
          <span className="font-display font-black text-[15vw] sm:text-[16vw] lg:text-[17vw] tracking-[-0.05em] uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-[#C7CBD4]/50 to-transparent drop-shadow-sm">
            EMMANUEL
          </span>
        </div>
      </div>

      {/* Main Grid Content Container (Left & Right UI Columns) */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 relative z-30 my-auto pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[480px]">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-30 pt-2 lg:pt-0 max-w-xl">
            
            {/* Large Confident Headline matching the exact 4-line reference layout */}
            <div className="mb-2">
              <h1
                className={`font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[72px] tracking-[-0.04em] leading-[1.02] text-[#0E1015] transition-all duration-1000 delay-300 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                We start from <br />
                zero, delivering <br />
                only what <br />
                matters.
              </h1>
            </div>

            {/* Social Proof: 5 Amber Stars + 3000+ Customers • 100% Satisfaction */}
            <div
              className={`flex items-center gap-2 mt-4 mb-8 sm:mb-10 transition-all duration-1000 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center text-[#FF7A00] text-sm tracking-tight">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="text-xs sm:text-sm font-bold font-display text-[#0E1015] tracking-tight">
                3000+ Customers
              </span>
              <span className="text-xs sm:text-sm font-display text-[#8C919D]">
                • 100% Satisfaction
              </span>
            </div>

            {/* Dual CTA Buttons (Solid Black Pill with Embedded White Arrow Circle + Frosted Grey Pill) */}
            <div
              className={`flex flex-wrap items-center gap-3.5 transition-all duration-1000 delay-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Primary Pill Button: Chat With Us -> */}
              <button
                id="hero-chat-with-us-btn"
                onClick={handleOpenContact}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#0E1015] hover:bg-[#21242C] text-white font-display font-semibold text-xs sm:text-sm flex items-center gap-3.5 transition-all duration-300 shadow-[0_10px_25px_rgba(14,16,21,0.2)] active:scale-95 cursor-pointer group"
              >
                <span>Chat With Us</span>
                <div className="w-6 h-6 rounded-full bg-white text-[#0E1015] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Secondary Pill Button: Our Works */}
              <button
                id="hero-our-works-btn"
                onClick={scrollToWork}
                onMouseEnter={() => soundFx.playHover()}
                className="px-7 py-3.5 rounded-full bg-[#E2E4EB] hover:bg-[#D5D8E0] text-[#0E1015] font-display font-semibold text-xs sm:text-sm transition-all duration-300 border border-black/[0.03] active:scale-95 cursor-pointer"
              >
                <span>Our Works</span>
              </button>
            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col items-end justify-between self-stretch z-30 pt-4 lg:pt-0">
            
            {/* Top Right: Sleek White Capsule with [AUDIO] pill and < > controls */}
            <div
              className={`bg-white/90 backdrop-blur-md rounded-full p-2 pr-3 flex items-center gap-6 sm:gap-8 shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-white/80 transition-all duration-1000 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              {/* Left Black Pill: Audio indicator */}
              <button
                onClick={handleToggleAudio}
                onMouseEnter={() => soundFx.playHover()}
                className="px-4 py-2 sm:py-2.5 rounded-full bg-[#0E1015] hover:bg-[#20232A] text-white flex items-center gap-2 transition-all cursor-pointer group"
                title={isPlayingAudio ? 'Pause studio audio' : 'Play studio audio'}
              >
                <AudioWaveform className={`w-4 h-4 text-white ${isPlayingAudio ? 'animate-pulse text-[#FF7A00]' : ''}`} />
                <span className="text-xs font-display font-black tracking-wider text-white">
                  AUDIO
                </span>
              </button>

              {/* Right Controls: < and > */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    soundFx.playClick();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/[0.05] hover:bg-black/[0.1] text-[#0E1015] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/[0.05] hover:bg-black/[0.1] text-[#0E1015] flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Lower Right: "Our Partners" with Diamond Bullets matching screenshot */}
            <div
              className={`mt-12 lg:mt-auto flex flex-col items-end transition-all duration-1000 delay-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="text-xs sm:text-sm font-bold font-display text-[#0E1015] tracking-tight mb-3">
                Our Partners
              </div>

              {/* Logo Cluster with clean diamond bullets */}
              <div className="flex flex-col gap-2 items-end">
                {/* Row 1 */}
                <div className="flex items-center gap-4 sm:gap-5 text-xs sm:text-[13px] font-display font-medium text-[#5B606D]">
                  <span className="flex items-center gap-1.5 hover:text-[#0E1015] transition-colors cursor-default">
                    <span className="text-[10px]">◆</span> zantic
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-[#0E1015] hover:text-[#FF7A00] transition-colors cursor-default">
                    <span className="text-[10px] font-normal text-[#5B606D]">◆</span> BookStore
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-[#0E1015] transition-colors cursor-default">
                    <span className="text-[10px]">◆</span> Wager
                  </span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-4 sm:gap-5 text-xs sm:text-[13px] font-display font-medium text-[#747884]">
                  <span className="flex items-center gap-1.5 hover:text-[#0E1015] transition-colors cursor-default">
                    <span className="text-[10px]">◆</span> Crone
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-[#0E1015] transition-colors cursor-default">
                    <span className="text-[10px]">◆</span> Mercury
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-[#0E1015] transition-colors cursor-default">
                    <span className="text-[10px]">◆</span> WordPress
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM FLOATING CAPSULE / DOCK BAR WITH GROUNDED FIGURE ================= */}
      <div
        className={`max-w-5xl w-full mx-auto px-6 sm:px-10 relative z-20 transition-all duration-1000 delay-800 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Grounded Man Cutout with Full Head Visibility, Sized Down to Natural Scale */}
        <div
          className={`absolute bottom-[calc(100%-8px)] left-1/2 -translate-x-1/2 pointer-events-none z-10 flex flex-col items-center justify-start overflow-hidden h-[290px] sm:h-[330px] md:h-[370px] lg:h-[410px] xl:h-[445px] transition-all duration-1000 ease-out delay-200 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 translate-y-6'
          }`}
        >
          <img
            src={HERO_PORTRAIT_URL}
            alt="Emmanuel"
            referrerPolicy="no-referrer"
            className="w-auto h-[350px] sm:h-[395px] md:h-[440px] lg:h-[490px] xl:h-[530px] max-w-none object-contain object-top drop-shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
          />
        </div>

        <div className="relative z-20 bg-[#121318]/95 backdrop-blur-2xl border border-white/10 rounded-full py-3 sm:py-3.5 px-6 sm:px-8 text-white shadow-[0_20px_45px_rgba(0,0,0,0.25)] flex items-center justify-between gap-4">
          
          {/* Left Pill Badge: 10+ Years Exp */}
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
            <span className="text-xs sm:text-[13px] font-display font-semibold tracking-tight text-white whitespace-nowrap">
              10+ Years Exp
            </span>
          </div>

          {/* Center Info: • Based in Warsaw • Global Projects */}
          <div className="text-[11px] sm:text-xs font-display font-medium text-[#9BA1AF] flex items-center gap-2 truncate">
            <span>• Based in Warsaw</span>
            <span className="hidden sm:inline">• Global Projects</span>
          </div>

          {/* Right Button: Scroll Down ↓ */}
          <button
            onClick={scrollToWork}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-1.5 text-xs sm:text-[13px] font-display font-semibold text-[#FF7A00] hover:text-white transition-colors cursor-pointer whitespace-nowrap group"
          >
            <span>Scroll Down</span>
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </button>

        </div>
      </div>

      {/* Interactive Showreel Video Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        onNavigateContact={handleOpenContact}
      />
    </section>
  );
};
