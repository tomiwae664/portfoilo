import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact?: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onNavigateContact
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const highlights = [
    {
      title: "Bright Future Academy",
      category: "WordPress • Elementor • Custom UI",
      metric: "+180% Admissions Inquiries",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      description: "Interactive school portal with seamless digital enrollments, high-speed caching, and bespoke UI architecture."
    },
    {
      title: "Luxe Furnishings E-Commerce",
      category: "WooCommerce • Custom Checkout",
      metric: "99/100 Lighthouse Performance",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      description: "High-conversion luxury furniture online flagship with instant filtering and frictionless 1-click checkout."
    },
    {
      title: "FinTech SaaS Marketing Site",
      category: "UI/UX Design • Webflow & WP",
      metric: "3.4x Conversion Increase",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description: "Conversion-first SaaS product showcase with interactive ROI calculator and interactive interactive cards."
    }
  ];

  const handleNext = () => {
    soundFx.playClick();
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const handlePrev = () => {
    soundFx.playClick();
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-black/[0.08] rounded-3xl overflow-hidden shadow-2xl text-[#0E1015]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#F5F6F8]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#FF7A00]/15 border border-[#FF7A00]/40 flex items-center justify-center text-[#FF7A00] font-bold text-xs">
              <Play className="w-3.5 h-3.5 fill-current" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#0E1015] uppercase tracking-wider">
                EMMANUEL SHOWREEL • 2026
              </div>
              <div className="text-[10px] text-[#5B606D] font-mono">
                WordPress Development & UI/UX Design In Action
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-[#5B606D] hover:text-[#0E1015] hover:bg-black/[0.05] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Showcase Stage */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={highlights[currentSlide].image}
            alt={highlights[currentSlide].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Center Play Overlay Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 ml-1 fill-white" />
            </div>
          </div>

          {/* Overlay Slide Info */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF7A00]/20 text-[#FF7A00] border border-[#FF7A00]/30 font-mono text-[10px] font-bold uppercase">
                {highlights[currentSlide].category}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {highlights[currentSlide].title}
              </h3>
              <p className="text-xs text-white/80 max-w-md">
                {highlights[currentSlide].description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-[#FF7A00]">
                {highlights[currentSlide].metric}
              </div>
            </div>
          </div>

          {/* Slide Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center text-lg z-20 transition-all cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center text-lg z-20 transition-all cursor-pointer"
          >
            ›
          </button>
        </div>

        {/* Progress & Slide Tabs */}
        <div className="p-4 sm:p-6 bg-[#F5F6F8] border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {highlights.map((h, i) => (
              <button
                key={i}
                onClick={() => {
                  soundFx.playClick();
                  setCurrentSlide(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === i ? 'w-8 bg-[#FF7A00]' : 'w-2 bg-black/20 hover:bg-black/40'
                }`}
              />
            ))}
            <span className="text-[11px] font-mono text-[#5B606D] ml-2">
              0{currentSlide + 1} / 0{highlights.length}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
                if (onNavigateContact) onNavigateContact();
              }}
              className="px-6 py-2.5 rounded-full bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
