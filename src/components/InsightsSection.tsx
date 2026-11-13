import React, { useState, useRef } from 'react';
import { Article, PageView } from '../types';
import { ARTICLES } from '../data/portfolioData';
import { ArrowUpRight, Clock, Calendar, Bookmark, Star, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface InsightsSectionProps {
  onNavigate: (page: PageView) => void;
  limit?: number;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onNavigate, limit }) => {
  const articlesList = limit ? ARTICLES.slice(0, limit) : ARTICLES;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const activeArticle = articlesList[activeIndex] || articlesList[0];

  const handleNext = () => {
    soundFx.playClick();
    const nextIdx = (activeIndex + 1) % articlesList.length;
    setActiveIndex(nextIdx);
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollTo({
        left: nextIdx * 240,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    soundFx.playClick();
    const prevIdx = (activeIndex - 1 + articlesList.length) % articlesList.length;
    setActiveIndex(prevIdx);
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollTo({
        left: prevIdx * 240,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="insights" className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 overflow-hidden select-none font-sans min-h-[720px] lg:min-h-[820px] flex items-center border-t border-black/[0.08]">
      
      {/* 1. CINEMATIC FULL-BLEED DYNAMIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {articlesList.map((art, idx) => (
          <div
            key={art.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? 'opacity-15 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-full object-cover filter contrast-125 brightness-95 saturate-110 transition-transform duration-1000"
            />
          </div>
        ))}

        {/* Ambient Gradients for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EDEDEE] via-[#EDEDEE]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EDEDEE] via-transparent to-[#EDEDEE]/80 z-10" />
      </div>

      {/* 2. MAIN CONTAINER (1440px) */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-[80px] relative z-20">
        
        {/* Section Pill Badge Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
              12 / EDITORIAL & INSIGHTS
            </span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('blog');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-[#0E1015] hover:text-white border border-black/[0.08] text-xs sm:text-sm font-semibold font-display text-[#0E1015] flex items-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <span>Explore All Insights</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF7A00]" />
          </button>
        </div>

        {/* BENTO GRID: LEFT HERO DETAILS & RIGHT SLIDING CAROUSEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT FEATURED ARTICLE DETAILS (7 Cols) */}
          <div className="lg:col-span-6 flex items-center gap-6">
            
            {/* Left Vertical Timeline Track */}
            <div className="hidden sm:flex flex-col items-center gap-3 py-4 shrink-0">
              {articlesList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-[#FF7A00] scale-125 ring-4 ring-[#FF7A00]/20'
                      : 'bg-black/20 hover:bg-black/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <div className="w-[1px] h-12 bg-black/15 my-1" />
              <div className="text-[10px] font-mono text-[#5B606D] -rotate-90 origin-center whitespace-nowrap mt-4">
                0{activeIndex + 1} / 0{articlesList.length}
              </div>
            </div>

            {/* Main Article Headline & Excerpt */}
            <div className="space-y-5 max-w-xl">
              
              {/* Star Rating & Reading Badge */}
              <div className="flex items-center gap-3 text-[#FF7A00] text-xs font-mono">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#FF7A00] stroke-none" />
                  <Star className="w-4 h-4 fill-[#FF7A00] stroke-none" />
                  <Star className="w-4 h-4 fill-[#FF7A00] stroke-none" />
                  <Star className="w-4 h-4 fill-[#FF7A00] stroke-none" />
                  <Star className="w-4 h-4 fill-[#FF7A00]/40 stroke-none" />
                </div>
                <span className="text-[#0E1015] font-bold">5.0</span>
                <span className="text-black/20">•</span>
                <span className="text-[#FF7A00] uppercase font-mono tracking-wider font-semibold">{activeArticle.category}</span>
                <span className="text-black/20">•</span>
                <span className="text-[#5B606D]">{activeArticle.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] leading-[1.05] text-[#0E1015] font-black uppercase tracking-[-0.038em]">
                {activeArticle.title}
              </h3>

              {/* Excerpt */}
              <p className="text-base sm:text-lg text-[#5B606D] leading-relaxed font-display line-clamp-3 max-w-lg">
                {activeArticle.summary}
              </p>

              {/* Action Play/Read Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedArticle(activeArticle);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-8 py-4 rounded-full bg-[#0E1015] text-white hover:bg-[#21242C] font-display font-semibold text-sm tracking-wide shadow-md transition-all cursor-pointer flex items-center gap-3 group active:scale-95"
                >
                  <div className="w-7 h-7 rounded-full bg-white text-[#0E1015] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span>Read Full Article</span>
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT SLIDING CAROUSEL (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Cards Track */}
            <div
              ref={scrollTrackRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none scroll-smooth py-4 px-1"
            >
              {articlesList.map((article, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={article.id}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveIndex(idx);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`w-[200px] sm:w-[220px] lg:w-[240px] shrink-0 aspect-[3/4.2] rounded-[24px] overflow-hidden relative cursor-pointer transition-all duration-500 border group ${
                      isActive
                        ? 'border-[#FF7A00] shadow-[0_15px_35px_rgba(255,122,0,0.2)] -translate-y-2 scale-105 z-20'
                        : 'border-black/[0.08] opacity-80 hover:opacity-100 hover:border-black/30 hover:-translate-y-1'
                    }`}
                  >
                    {/* Background Image of Card */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark Overlay Gradient inside card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

                    {/* Top Bookmark Icon */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`p-2 rounded-xl backdrop-blur-md border ${
                        isActive ? 'bg-[#FF7A00]/20 border-[#FF7A00]/50 text-[#FF7A00]' : 'bg-black/40 border-white/10 text-white/70'
                      }`}>
                        <Bookmark className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="absolute bottom-0 inset-x-0 p-4 z-10 flex flex-col justify-end space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF7A00]">
                        Episode 0{idx + 1}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white line-clamp-2 leading-snug">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 pt-1">
                        <Star className="w-3 h-3 fill-[#FF7A00] stroke-none" />
                        <span>5.0</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* CAROUSEL FOOTER NAV CONTROLS & STEP COUNTER */}
            <div className="flex items-center justify-between pt-2">
              
              {/* Circular Prev/Next Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Article"
                  className="w-11 h-11 rounded-full bg-white hover:bg-[#0E1015] hover:text-white border border-black/[0.08] text-[#0E1015] flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Article"
                  className="w-11 h-11 rounded-full bg-white hover:bg-[#0E1015] hover:text-white border border-black/[0.08] text-[#0E1015] flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Step Counter (01 —— 06) */}
              <div className="flex items-center gap-3 font-mono text-xs text-[#5B606D]">
                <span className="font-bold text-[#0E1015] text-sm">0{activeIndex + 1}</span>
                <span className="w-8 h-[1px] bg-black/20" />
                <span>0{articlesList.length}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-black/[0.1] rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl text-[#0E1015]">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F5F6F8] hover:bg-black hover:text-white text-[#0E1015] flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 font-mono">
              <span className="text-xs font-bold text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-full border border-[#FF7A00]/20">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-[#5B606D]">{selectedArticle.date} • {selectedArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0E1015] mb-6 font-display uppercase">
              {selectedArticle.title}
            </h2>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full aspect-[16/9] object-cover rounded-2xl mb-8 border border-black/[0.08]"
            />

            <div className="space-y-4 text-sm sm:text-base text-[#5B606D] leading-relaxed mb-8 font-sans">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-bold text-[#0E1015] font-display">{selectedArticle.author.name}</div>
                  <div className="text-xs text-[#FF7A00] font-mono">{selectedArticle.author.role}</div>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-full bg-[#0E1015] text-white font-bold text-xs font-display hover:bg-[#21242C] cursor-pointer transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
