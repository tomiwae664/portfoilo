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
    <section id="insights" className="relative w-full bg-[#080B11] text-white py-20 lg:py-28 overflow-hidden select-none font-sans min-h-[720px] lg:min-h-[820px] flex items-center">
      
      {/* 1. CINEMATIC FULL-BLEED DYNAMIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {articlesList.map((art, idx) => (
          <div
            key={art.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-full object-cover filter contrast-125 brightness-90 saturate-110 transition-transform duration-1000"
            />
          </div>
        ))}

        {/* Ambient Dark Gradients for Text Readability & Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B11] via-[#080B11]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-[#080B11]/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,91,255,0.15),transparent_70%)] z-10" />
      </div>

      {/* 2. MAIN CONTAINER (1440px) */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-[80px] relative z-20">
        
        {/* Section Pill Badge Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-blue-300 font-mono tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>BLOG & INSIGHTS</span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('blog');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold font-heading text-white flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Explore All Insights</span>
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
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
                      ? 'bg-amber-400 scale-125 ring-4 ring-amber-400/20'
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <div className="w-[1px] h-12 bg-white/20 my-1" />
              <div className="text-[10px] font-mono text-zinc-400 -rotate-90 origin-center whitespace-nowrap mt-4">
                0{activeIndex + 1} / 0{articlesList.length}
              </div>
            </div>

            {/* Main Article Headline & Excerpt */}
            <div className="space-y-5 max-w-xl">
              
              {/* Star Rating & Reading Badge */}
              <div className="flex items-center gap-3 text-amber-400 text-xs font-mono">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-400 stroke-none" />
                  <Star className="w-4 h-4 fill-amber-400/40 stroke-none" />
                </div>
                <span className="text-white/80 font-bold">5.0</span>
                <span className="text-white/30">•</span>
                <span className="text-blue-300 uppercase font-mono tracking-wider">{activeArticle.category}</span>
                <span className="text-white/30">•</span>
                <span className="text-zinc-400">{activeArticle.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-5xl lg:text-[52px] leading-[1.1] text-white font-normal tracking-tight drop-shadow-md">
                {activeArticle.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-body line-clamp-3 max-w-lg">
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
                  className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-amber-400 font-heading font-bold text-xs tracking-wide shadow-2xl transition-all cursor-pointer flex items-center gap-3 group active:scale-95"
                >
                  <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-black group-hover:scale-105 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span>Read Full Article</span>
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT SLIDING CARDS CAROUSEL (6 Cols) */}
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
                        ? 'border-amber-400/80 shadow-[0_15px_35px_rgba(251,191,36,0.25)] -translate-y-2 scale-105 z-20'
                        : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30 hover:-translate-y-1'
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
                        isActive ? 'bg-amber-400/20 border-amber-400/50 text-amber-300' : 'bg-black/40 border-white/10 text-white/70'
                      }`}>
                        <Bookmark className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="absolute bottom-0 inset-x-0 p-4 z-10 flex flex-col justify-end space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
                        Episode 0{idx + 1}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-white line-clamp-2 leading-snug">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 pt-1">
                        <Star className="w-3 h-3 fill-amber-400 stroke-none" />
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
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Article"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Step Counter (01 —— 06) */}
              <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                <span className="font-bold text-white text-sm">0{activeIndex + 1}</span>
                <span className="w-8 h-[1px] bg-white/30" />
                <span>0{articlesList.length}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#12151E] border border-blue-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl text-white">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 font-mono">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/30">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-zinc-400">{selectedArticle.date} • {selectedArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 font-heading">
              {selectedArticle.title}
            </h2>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full aspect-[16/9] object-cover rounded-2xl mb-8 border border-white/10"
            />

            <div className="space-y-4 text-sm sm:text-base text-zinc-200 leading-relaxed mb-8 font-body">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-bold text-white font-heading">{selectedArticle.author.name}</div>
                  <div className="text-xs text-blue-400 font-mono">{selectedArticle.author.role}</div>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-full bg-blue-600 text-white font-bold text-xs font-heading hover:bg-blue-500 cursor-pointer transition-all"
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
