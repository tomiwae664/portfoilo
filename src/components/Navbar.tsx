import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Sparkles, Volume2, VolumeX, Menu, X, Sun, Moon, Calculator, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenAI: () => void;
  onOpenEstimator: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenAI,
  onOpenEstimator,
  isMenuOpen,
  setIsMenuOpen
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    soundFx.playClick();
    const newIsLight = !isLight;
    setIsLight(newIsLight);
    if (newIsLight) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  const navItems: { label: string; page: PageView; hash?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Projects', page: 'portfolio' },
    { label: 'Process', page: 'home', hash: '#process' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (item: { label: string; page: PageView; hash?: string }) => {
    soundFx.playClick();
    onNavigate(item.page);
    if (item.hash) {
      setTimeout(() => {
        const el = document.querySelector(item.hash!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 flex justify-center pointer-events-none">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between h-[82px] px-6 sm:px-10 rounded-full bg-white/80 backdrop-blur-[24px] border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] pointer-events-auto transition-all duration-300">
        
        {/* Left: Personal Logo */}
        <button
          onClick={() => {
            soundFx.playClick();
            onNavigate('home');
          }}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-3.5 group text-left"
          data-cursor="hover"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <div className="w-full h-full bg-[#0F172A] rounded-[14px] flex items-center justify-center font-extrabold text-base text-white font-heading">
              AV
            </div>
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-[#0F172A] flex items-center gap-2 font-heading">
              <span>Alexander Vance</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            </div>
            <div className="text-[10px] text-[#64748B] font-mono tracking-wider hidden sm:block">
              WEBSITE DEVELOPER & UI/UX DESIGNER
            </div>
          </div>
        </button>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#EEF2F7]/80 px-3 py-1.5 rounded-full border border-black/5">
          {navItems.map((item) => {
            const isActive = activePage === item.page && !item.hash;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 font-heading ${
                  isActive
                    ? 'text-white bg-[#0F172A] shadow-md'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-white/80'
                }`}
                data-cursor="hover"
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls & Availability & CTA */}
        <div className="flex items-center gap-3">
          
          {/* Availability Status */}
          <div className="hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#16A34A] text-xs font-semibold font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span>Available for Projects</span>
          </div>

          {/* Theme & Sound Controls */}
          <div className="hidden sm:flex items-center gap-1 bg-white p-1 rounded-full border border-black/5">
            <button
              onClick={toggleTheme}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-full text-[#0F172A] hover:bg-[#EEF2F7] transition-all"
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              data-cursor="hover"
            >
              {isLight ? <Moon className="w-3.5 h-3.5 text-indigo-600" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
            </button>

            <button
              onClick={toggleSound}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-full text-[#0F172A] hover:bg-[#EEF2F7] transition-all"
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
              data-cursor="hover"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#64748B]" /> : <Volume2 className="w-3.5 h-3.5 text-blue-600" />}
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onOpenEstimator();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-full text-blue-600 hover:bg-blue-50 transition-all"
              title="Project Scope Calculator"
              data-cursor="hover"
            >
              <Calculator className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Premium CTA Button: "Let's Talk" */}
          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('contact');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 font-heading active:scale-95"
            data-cursor="hover"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* AI Assistant Quick Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenAI();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 hover:bg-indigo-100 transition-all"
            title="Ask AI Assistant"
            data-cursor="hover"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              setIsMenuOpen(!isMenuOpen);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="lg:hidden w-10 h-10 rounded-full bg-white border border-black/10 text-[#0F172A] flex items-center justify-center transition-all"
            aria-label="Toggle Navigation Menu"
            data-cursor="hover"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>
    </header>
  );
};

