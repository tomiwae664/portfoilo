import React, { useState, useRef } from 'react';
import { Project, PageView } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageView) => void;
  limit?: number;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterCategories = ['All', 'WordPress', 'E-Commerce', 'Landing Pages'];

  // Ensure 6 core curated projects for the sliding portfolio showcase matching the requested design
  const projectList: (Project & { frameType: 'laptop' | 'mobile'; displayTitle: string; displayCategory: string; filterGroup: string })[] = [
    {
      ...PROJECTS[0],
      displayTitle: "Restaurant Website",
      displayCategory: "WordPress",
      filterGroup: "WordPress",
      category: "WordPress Development",
      frameType: "laptop",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      ...PROJECTS[2],
      displayTitle: "Fashion Store",
      displayCategory: "WooCommerce",
      filterGroup: "E-Commerce",
      category: "WooCommerce",
      frameType: "mobile",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
    },
    {
      ...PROJECTS[3],
      displayTitle: "Marketing Landing Page",
      displayCategory: "WordPress",
      filterGroup: "Landing Pages",
      category: "Landing Pages",
      frameType: "laptop",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      ...PROJECTS[1],
      displayTitle: "Aetheria Real Estate",
      displayCategory: "WordPress",
      filterGroup: "WordPress",
      category: "WordPress Development",
      frameType: "laptop",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      ...PROJECTS[4] || PROJECTS[0],
      displayTitle: "Vanguard Wealth Portal",
      displayCategory: "WooCommerce",
      filterGroup: "E-Commerce",
      category: "WooCommerce",
      frameType: "mobile",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    },
    {
      ...PROJECTS[5] || PROJECTS[1],
      displayTitle: "KROMA Geneva Watch",
      displayCategory: "Landing Page",
      filterGroup: "Landing Pages",
      category: "Landing Pages",
      frameType: "laptop",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectList
    : projectList.filter(p => p.filterGroup === activeCategory || p.displayCategory.toLowerCase().includes(activeCategory.toLowerCase()));

  const maxIndex = Math.max(0, filteredProjects.length - 1);

  const handlePrev = () => {
    soundFx.playClick();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    soundFx.playClick();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="portfolio" className="relative w-full bg-[#EAEAEA] text-[#0F172A] py-20 lg:py-28 px-6 sm:px-12 lg:px-[80px] overflow-hidden select-none font-sans">
      
      {/* Background Soft Studio Gradient */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

      {/* CONTAINER (1440px) */}
      <div className="max-w-[1440px] w-full mx-auto relative z-10">
        
        {/* HEADER & CATEGORY FILTER TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          
          {/* Left Title */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#635BFF] tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#635BFF] animate-pulse" />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[46px] leading-tight text-[#0F172A] tracking-tight">
              Some Recent Work
            </h2>
          </div>

          {/* Right Filter Pills */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-black/5 shadow-sm overflow-x-auto scrollbar-none">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat);
                    setCurrentIndex(0);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#635BFF] text-white shadow-md shadow-indigo-500/30 font-bold'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-black/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* SLIDING CAROUSEL CONTAINER */}
        <div className="relative group/carousel">
          
          {/* Left / Right Floating Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[#0F172A] shadow-xl flex items-center justify-center hover:bg-[#635BFF] hover:text-white transition-all hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[#0F172A] shadow-xl flex items-center justify-center hover:bg-[#635BFF] hover:text-white transition-all hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none scroll-smooth pb-8 pt-2 px-2"
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                onClick={() => {
                  soundFx.playClick();
                  onSelectProject(project);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="w-[300px] sm:w-[360px] lg:w-[410px] shrink-0 bg-white rounded-[32px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-[0_25px_50px_rgba(99,91,255,0.15)] hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer flex flex-col justify-between"
              >
                {/* Device Mockup Canvas Box */}
                <div className="w-full h-[260px] sm:h-[300px] rounded-[24px] bg-[#F4F5F8] border border-black/5 relative overflow-hidden flex items-center justify-center p-4 mb-5 group-hover:bg-[#ECEFF5] transition-colors">
                  
                  {project.frameType === 'mobile' ? (
                    /* Smartphone Studio Mockup Frame */
                    <div className="w-[140px] sm:w-[160px] h-[230px] sm:h-[265px] bg-[#0F172A] rounded-[32px] p-2 border-4 border-[#1E293B] shadow-[0_20px_35px_rgba(0,0,0,0.18)] relative overflow-hidden flex flex-col items-center">
                      {/* Notch */}
                      <div className="w-12 h-2.5 bg-[#0F172A] rounded-b-lg absolute top-0 z-20" />
                      
                      {/* Screen Content */}
                      <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.displayTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Laptop Studio Mockup Frame */
                    <div className="w-full max-w-[340px] flex flex-col items-center">
                      <div className="w-full aspect-[16/10] bg-[#0F172A] rounded-xl p-1.5 border-2 border-[#1E293B] shadow-[0_20px_35px_rgba(0,0,0,0.15)] relative overflow-hidden">
                        {/* Camera Dot */}
                        <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full absolute top-1 left-1/2 -translate-x-1/2 z-20" />
                        
                        {/* Screen Content */}
                        <div className="w-full h-full rounded-lg overflow-hidden relative mt-1">
                          <img
                            src={project.image}
                            alt={project.displayTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      {/* Laptop Base */}
                      <div className="w-[108%] h-2 bg-[#CBD5E1] rounded-b-md shadow-sm border-t border-slate-300" />
                    </div>
                  )}

                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#0F172A] border border-black/5 shadow-xs">
                    {project.displayCategory}
                  </div>

                </div>

                {/* Bottom Card Details */}
                <div className="flex items-center justify-between pt-1 px-1">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-[#0F172A] group-hover:text-[#635BFF] transition-colors leading-snug">
                      {project.displayTitle}
                    </h3>
                    <p className="text-xs font-medium text-[#64748B] mt-0.5">
                      {project.displayCategory}
                    </p>
                  </div>

                  {/* Circular Arrow Action Button */}
                  <div className="w-10 h-10 rounded-full bg-[#F1F3F9] text-[#0F172A] group-hover:bg-[#635BFF] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM ACTION BUTTON: "View All Projects" */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate('projects');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-[#635BFF] via-[#7C3AED] to-[#4F46E5] hover:from-[#5248FF] hover:to-[#4338CA] text-white font-heading font-bold text-xs tracking-wide shadow-[0_12px_30px_rgba(99,91,255,0.35)] hover:shadow-[0_18px_40px_rgba(99,91,255,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};
