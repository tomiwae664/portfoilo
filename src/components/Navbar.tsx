import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles, Sliders } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { CurrencySelector } from './CurrencySelector';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenEstimator?: () => void;
  onOpenAI?: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenEstimator,
  onOpenAI,
  isMenuOpen,
  setIsMenuOpen
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
      const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      setCurrentTime(`${timeStr} • ${dateStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  const navItems: { label: string; page: PageView; hasSub?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Product', page: 'services', hasSub: true },
    { label: 'About', page: 'about' },
    { label: 'Brands', page: 'home' },
    { label: 'Careers', page: 'home' },
    { label: 'Partners', page: 'home' }
  ];

  const handleNavClick = (item: { label: string; page: PageView }) => {
    soundFx.playClick();
    if (item.label === 'Partners') {
      if (activePage !== 'home') onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('partners') || document.getElementById('selected-work');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    if (item.label === 'Brands') {
      if (activePage !== 'home') onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('key-facts') || document.getElementById('selected-work');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    if (item.label === 'Careers') {
      if (activePage !== 'home') onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('about') || document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    onNavigate(item.page);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#EDEDEE]/90 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-[#0E1015]'
          : 'py-4 sm:py-5 bg-transparent text-[#0E1015]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => {
            soundFx.playClick();
            onNavigate('home');
          }}
          className="group flex items-center gap-2 text-left tracking-tight cursor-pointer"
        >
          {/* Futuristic Hex/Geometric glyph like the reference */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current" fill="none">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" className="text-[#0E1015]" />
              <circle cx="12" cy="12" r="3" fill="#FF7A00" />
            </svg>
          </div>
          <span className="font-black text-base sm:text-lg tracking-[-0.03em] font-display text-[#0E1015]">
            Zenrixa <span className="text-xs font-display font-normal opacity-50 ml-1">/ Emmanuel</span>
          </span>
        </button>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.page && (item.label === 'Home' ? activePage === 'home' : true);
            return (
              <button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                onClick={() => handleNavClick(item)}
                onMouseEnter={() => soundFx.playHover()}
                className={`text-xs sm:text-sm font-display font-semibold transition-colors relative py-1 cursor-pointer flex items-center gap-1 ${
                  isActive
                    ? 'text-[#0E1015]'
                    : 'text-[#5B606D] hover:text-[#0E1015]'
                }`}
              >
                <span>{item.label}</span>
                {item.hasSub && (
                  <span className="text-[10px] opacity-60">ˇ</span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Currency Selector, Timezone & = MENU Pill Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Global Multi-Currency Country Selector */}
          <CurrencySelector variant="navbar" />

          {/* Timezone live widget */}
          <div className="hidden lg:flex flex-col text-right leading-tight pr-1">
            <span className="text-[10px] font-display uppercase tracking-wider text-[#747884]">
              Timezone
            </span>
            <span className="text-xs font-display font-semibold text-[#0E1015]">
              {currentTime || '6:30pm • 23 June, 2024'}
            </span>
          </div>

          {/* Sound Mute Toggle */}
          <button
            id="sound-toggle-btn"
            onClick={toggleSound}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2 rounded-full border transition-all cursor-pointer bg-white/80 border-black/[0.08] text-[#5B606D] hover:text-[#0E1015] shadow-sm"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#FF7A00]" />}
          </button>

          {/* AI Search Radar Button */}
          {onOpenAI && (
            <button
              id="navbar-ai-assistant-btn"
              onClick={() => {
                soundFx.playClick();
                onOpenAI();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-white hover:bg-[#0E1015] hover:text-white border border-black/10 text-xs font-display font-semibold transition-all cursor-pointer shadow-sm text-[#0E1015]"
              title="Google Search Grounded AI Intelligence"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>AI Radar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </button>
          )}

          {/* = MENU Pill Button from the reference design */}
          <button
            id="nav-menu-btn"
            onClick={() => {
              soundFx.playClick();
              setIsMenuOpen(!isMenuOpen);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold font-display tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm bg-white hover:bg-[#0E1015] hover:text-white border border-black/10 text-[#0E1015]"
          >
            <span className="text-sm font-light leading-none">=</span>
            <span className="text-xs uppercase tracking-wider">MENU</span>
          </button>

        </div>

      </div>
    </header>
  );
};
