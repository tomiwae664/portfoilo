import React, { useState } from 'react';
import { Project, PageView } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, Sparkles, Award, Globe, ExternalLink } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageView) => void;
  limit?: number;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onNavigate,
  limit = 6
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const categories = ['All', 'WordPress', 'UI/UX Design', 'WooCommerce', 'Landing Pages'];

  const filteredProjects = (activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(
        (p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(activeCategory.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
      )
  ).slice(0, limit);

  return (
    <section
      id="selected-work"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[#DEE0E6]/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Massive Background Watermark */}
      <div className="absolute top-20 left-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display font-black text-[13vw] tracking-tighter text-black uppercase leading-none">
          PROJECTS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8 sm:gap-12">
          
          {/* Left: Eyebrow & Bold Oversized Heading */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                04 / CURATED PORTFOLIO & WORK
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              OUR PROJECTS <br />
              <span className="text-[#FF7A00] inline-block">SELECTED</span> FOR <br />
              IMPACT.
            </h2>
          </div>

          {/* Right: Editorial Descriptor & Quick Metrics */}
          <div className="max-w-md flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#5B606D] font-display leading-relaxed mb-6">
              A bespoke collection of modern websites, custom WordPress themes, and high-conversion digital experiences crafted with architectural precision and verified business metrics.
            </p>

            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.08] text-xs font-display font-semibold text-[#FF7A00] flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>50+ Delivered Systems</span>
              </div>
              <div className="text-xs font-display text-[#5B606D]">
                Average 98+ PageSpeed
              </div>
            </div>
          </div>

        </div>

        {/* Filter Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-16 sm:mb-20 border-b border-black/[0.08] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0E1015] text-white shadow-md'
                  : 'bg-white/80 text-[#5B606D] hover:text-[#0E1015] hover:bg-white border border-black/[0.08] shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Projects Showcase Layout */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          
          {/* Card 1: Flagship Full-Width Editorial Hero Card */}
          {filteredProjects[0] && (
            <div
              id={`project-hero-${filteredProjects[0].id}`}
              onMouseEnter={() => {
                soundFx.playHover();
                setHoveredCardId(filteredProjects[0].id);
              }}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={() => {
                soundFx.playClick();
                onSelectProject(filteredProjects[0]);
              }}
              className="group cursor-pointer rounded-3xl lg:rounded-[36px] bg-white border border-black/[0.08] hover:border-[#FF7A00]/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 p-6 sm:p-10 lg:p-12"
              data-cursor="view"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Visual Presentation */}
                <div className="lg:col-span-7 relative">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EDEDEE] border border-black/[0.08] shadow-lg aspect-[16/10] sm:aspect-[16/9]">
                    
                    {/* Browser Chrome Header */}
                    <div className="h-9 px-4 bg-[#F5F6F8] border-b border-black/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-black/20 group-hover:bg-[#FF7A00]/60 transition-colors" />
                        <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
                      </div>
                      <div className="text-[11px] font-mono text-[#5B606D] truncate max-w-[220px]">
                        brightfutureacademy.edu
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Screenshot */}
                    <div className="relative w-full h-[calc(100%-36px)] overflow-hidden">
                      <img
                        src={filteredProjects[0].image}
                        alt={filteredProjects[0].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                      
                      {/* Floating Key Impact Pill */}
                      {filteredProjects[0].impactMetrics && filteredProjects[0].impactMetrics[0] && (
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 rounded-full bg-[#0E1015]/90 backdrop-blur-md border border-white/15 shadow-xl text-xs font-mono font-bold text-[#FF7A00] flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{filteredProjects[0].impactMetrics[0].label}: {filteredProjects[0].impactMetrics[0].value}</span>
                        </div>
                      )}

                      {/* Previews Count Badge */}
                      {filteredProjects[0].galleryImages && filteredProjects[0].galleryImages.length > 0 && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-md text-[11px] font-mono font-bold text-[#0E1015] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                          <span>+{filteredProjects[0].galleryImages.length} Interface Previews</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Right Editorial Info */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Index & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-[#FF7A00]">
                        /01
                      </span>
                      <span className="text-xs font-mono text-[#5B606D] uppercase tracking-wider">
                        {filteredProjects[0].year} • FEATURED LEAD
                      </span>
                    </div>

                    {/* Category Label */}
                    <div className="text-xs font-mono tracking-widest text-[#FF7A00] uppercase font-bold mb-2">
                      {filteredProjects[0].categoryLabel || filteredProjects[0].category}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors duration-300 mb-4 leading-tight">
                      {filteredProjects[0].title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#5B606D] font-normal leading-relaxed mb-6 font-sans">
                      {filteredProjects[0].description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {filteredProjects[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono text-[#5B606D] bg-[#F5F6F8] border border-black/[0.06] group-hover:border-[#FF7A00]/30 group-hover:text-[#0E1015] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Interaction */}
                  <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#0E1015] text-white flex items-center justify-center font-bold shadow-md group-hover:bg-[#FF7A00] group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E1015] group-hover:text-[#FF7A00] transition-colors">
                        EXPLORE CASE STUDY
                      </span>
                    </div>

                    <span className="text-xs font-mono text-[#5B606D]">
                      {filteredProjects[0].client}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* Staggered Asymmetrical Row 1: Cards 2 & 3 (7-col / 5-col staggered rhythm) */}
          {(filteredProjects[1] || filteredProjects[2]) && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              
              {/* Card 2: 7-Column Width, Standard Alignment */}
              {filteredProjects[1] && (
                <div
                  id={`project-card-${filteredProjects[1].id}`}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setHoveredCardId(filteredProjects[1].id);
                  }}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => {
                    soundFx.playClick();
                    onSelectProject(filteredProjects[1]);
                  }}
                  className="lg:col-span-7 group cursor-pointer rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between"
                  data-cursor="view"
                >
                  {/* Large Visual Area */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#EDEDEE] border border-black/[0.08] aspect-[16/10] mb-6">
                    <img
                      src={filteredProjects[1].image}
                      alt={filteredProjects[1].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1015]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#FF7A00] uppercase font-bold">
                      {filteredProjects[1].categoryLabel || filteredProjects[1].category}
                    </div>

                    {filteredProjects[1].galleryImages && filteredProjects[1].galleryImages.length > 0 && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-md text-[11px] font-mono font-bold text-[#0E1015] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                        <span>+{filteredProjects[1].galleryImages.length} Previews</span>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0E1015] text-white flex items-center justify-center shadow-md group-hover:bg-[#FF7A00] group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                  {/* Metadata */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-mono font-bold text-[#FF7A00]">/02</span>
                      <span className="text-xs font-mono text-[#5B606D]">{filteredProjects[1].year}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-3">
                      {filteredProjects[1].title}
                    </h3>

                    <p className="text-sm text-[#5B606D] leading-relaxed mb-6 font-sans">
                      {filteredProjects[1].subtitle || filteredProjects[1].description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {filteredProjects[1].tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F5F6F8] text-[#5B606D]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider flex items-center gap-1">
                        VIEW PROJECT →
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card 3: 5-Column Width, Staggered Top Offset for Editorial Asymmetry */}
              {filteredProjects[2] && (
                <div
                  id={`project-card-${filteredProjects[2].id}`}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setHoveredCardId(filteredProjects[2].id);
                  }}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => {
                    soundFx.playClick();
                    onSelectProject(filteredProjects[2]);
                  }}
                  className="lg:col-span-5 lg:mt-24 group cursor-pointer rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between"
                  data-cursor="view"
                >
                  {/* Taller Visual Area */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#EDEDEE] border border-black/[0.08] aspect-[4/3] sm:aspect-[16/11] mb-6">
                    <img
                      src={filteredProjects[2].image}
                      alt={filteredProjects[2].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1015]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#FF7A00] uppercase font-bold">
                      {filteredProjects[2].categoryLabel || filteredProjects[2].category}
                    </div>

                    {filteredProjects[2].galleryImages && filteredProjects[2].galleryImages.length > 0 && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-md text-[11px] font-mono font-bold text-[#0E1015] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                        <span>+{filteredProjects[2].galleryImages.length} Previews</span>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0E1015] text-white flex items-center justify-center shadow-md group-hover:bg-[#FF7A00] group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                  {/* Metadata */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-mono font-bold text-[#FF7A00]">/03</span>
                      <span className="text-xs font-mono text-[#5B606D]">{filteredProjects[2].year}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-3">
                      {filteredProjects[2].title}
                    </h3>

                    <p className="text-sm text-[#5B606D] leading-relaxed mb-6 font-sans">
                      {filteredProjects[2].subtitle || filteredProjects[2].description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {filteredProjects[2].tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F5F6F8] text-[#5B606D]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider flex items-center gap-1">
                        VIEW PROJECT →
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Staggered Asymmetrical Row 2: Cards 4 & 5 (5-col / 7-col inverted rhythm) */}
          {(filteredProjects[3] || filteredProjects[4]) && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              
              {/* Card 4: 5-Column Width, Elevated Lookbook */}
              {filteredProjects[3] && (
                <div
                  id={`project-card-${filteredProjects[3].id}`}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setHoveredCardId(filteredProjects[3].id);
                  }}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => {
                    soundFx.playClick();
                    onSelectProject(filteredProjects[3]);
                  }}
                  className="lg:col-span-5 group cursor-pointer rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between"
                  data-cursor="view"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-[#EDEDEE] border border-black/[0.08] aspect-[4/3] sm:aspect-[16/11] mb-6">
                    <img
                      src={filteredProjects[3].image}
                      alt={filteredProjects[3].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1015]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#FF7A00] uppercase font-bold">
                      {filteredProjects[3].categoryLabel || filteredProjects[3].category}
                    </div>

                    {filteredProjects[3].galleryImages && filteredProjects[3].galleryImages.length > 0 && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-md text-[11px] font-mono font-bold text-[#0E1015] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                        <span>+{filteredProjects[3].galleryImages.length} Previews</span>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0E1015] text-white flex items-center justify-center shadow-md group-hover:bg-[#FF7A00] group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-mono font-bold text-[#FF7A00]">/04</span>
                      <span className="text-xs font-mono text-[#5B606D]">{filteredProjects[3].year}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-3">
                      {filteredProjects[3].title}
                    </h3>

                    <p className="text-sm text-[#5B606D] leading-relaxed mb-6 font-sans">
                      {filteredProjects[3].subtitle || filteredProjects[3].description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {filteredProjects[3].tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F5F6F8] text-[#5B606D]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider flex items-center gap-1">
                        VIEW PROJECT →
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card 5: 7-Column Width, Staggered with Wide Cinematic Presentation */}
              {filteredProjects[4] && (
                <div
                  id={`project-card-${filteredProjects[4].id}`}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setHoveredCardId(filteredProjects[4].id);
                  }}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => {
                    soundFx.playClick();
                    onSelectProject(filteredProjects[4]);
                  }}
                  className="lg:col-span-7 lg:mt-16 group cursor-pointer rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between"
                  data-cursor="view"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-[#EDEDEE] border border-black/[0.08] aspect-[16/10] mb-6">
                    <img
                      src={filteredProjects[4].image}
                      alt={filteredProjects[4].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E1015]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#FF7A00] uppercase font-bold">
                      {filteredProjects[4].categoryLabel || filteredProjects[4].category}
                    </div>

                    {filteredProjects[4].galleryImages && filteredProjects[4].galleryImages.length > 0 && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-md text-[11px] font-mono font-bold text-[#0E1015] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                        <span>+{filteredProjects[4].galleryImages.length} Previews</span>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0E1015] text-white flex items-center justify-center shadow-md group-hover:bg-[#FF7A00] group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-mono font-bold text-[#FF7A00]">/05</span>
                      <span className="text-xs font-mono text-[#5B606D]">{filteredProjects[4].year}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-3">
                      {filteredProjects[4].title}
                    </h3>

                    <p className="text-sm text-[#5B606D] leading-relaxed mb-6 font-sans">
                      {filteredProjects[4].subtitle || filteredProjects[4].description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {filteredProjects[4].tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#F5F6F8] text-[#5B606D]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider flex items-center gap-1">
                        VIEW PROJECT →
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Card 6: Flagship Finale Wide Card */}
          {filteredProjects[5] && (
            <div
              id={`project-card-${filteredProjects[5].id}`}
              onMouseEnter={() => {
                soundFx.playHover();
                setHoveredCardId(filteredProjects[5].id);
              }}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={() => {
                soundFx.playClick();
                onSelectProject(filteredProjects[5]);
              }}
              className="group cursor-pointer rounded-3xl lg:rounded-[36px] bg-white border border-black/[0.08] hover:border-[#FF7A00]/50 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 p-6 sm:p-10 lg:p-12"
              data-cursor="view"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Visual Presentation */}
                <div className="lg:col-span-7 relative order-2 lg:order-1">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EDEDEE] border border-black/[0.08] aspect-[16/10] sm:aspect-[16/9]">
                    <img
                      src={filteredProjects[5].image}
                      alt={filteredProjects[5].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                    {filteredProjects[5].impactMetrics && filteredProjects[5].impactMetrics[0] && (
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 rounded-full bg-[#0E1015]/90 backdrop-blur-md border border-white/15 shadow-xl text-xs font-mono font-bold text-[#FF7A00] flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{filteredProjects[5].impactMetrics[0].label}: {filteredProjects[5].impactMetrics[0].value}</span>
                      </div>
                    )}

                    {filteredProjects[5].galleryImages && filteredProjects[5].galleryImages.length > 0 && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-md text-[11px] font-mono font-bold text-[#0E1015] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                        <span>+{filteredProjects[5].galleryImages.length} Previews</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Editorial Info */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 order-1 lg:order-2">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-[#FF7A00]">
                        /06
                      </span>
                      <span className="text-xs font-mono text-[#5B606D] uppercase tracking-wider">
                        {filteredProjects[5].year} • MARKETING EXP
                      </span>
                    </div>

                    <div className="text-xs font-mono tracking-widest text-[#FF7A00] uppercase font-bold mb-2">
                      {filteredProjects[5].categoryLabel || filteredProjects[5].category}
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors duration-300 mb-4 leading-tight">
                      {filteredProjects[5].title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#5B606D] font-normal leading-relaxed mb-6 font-sans">
                      {filteredProjects[5].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {filteredProjects[5].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono text-[#5B606D] bg-[#F5F6F8] border border-black/[0.06] group-hover:border-[#FF7A00]/30 group-hover:text-[#0E1015] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#0E1015] text-white flex items-center justify-center font-bold shadow-md group-hover:bg-[#FF7A00] group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E1015] group-hover:text-[#FF7A00] transition-colors">
                        EXPLORE CASE STUDY
                      </span>
                    </div>

                    <span className="text-xs font-mono text-[#5B606D]">
                      {filteredProjects[5].client}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          )}

        </div>

        {/* Bottom CTA to All Work */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-[#0E1015] uppercase tracking-tight">
              INTERESTED IN EXPANDING YOUR DIGITAL PRESENCE?
            </h4>
            <p className="text-sm text-[#5B606D] mt-1 max-w-xl">
              Browse our complete archive of client transformations, custom WooCommerce architectures, and performance case studies.
            </p>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('projects');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#0E1015] hover:bg-[#21242C] transition-all flex items-center gap-3 active:scale-95 cursor-pointer font-display shadow-md shrink-0"
            data-cursor="hover"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
