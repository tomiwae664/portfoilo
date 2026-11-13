import React, { useState } from 'react';
import { Project, PageView } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageView) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'WordPress', 'UI/UX Design', 'WooCommerce', 'Landing Pages'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory || p.categoryLabel.includes(selectedCategory) || p.tags.includes(selectedCategory));

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#EDEDEE] text-[#0E1015]">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
          <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
            ARCHIVE • SELECTED CLIENT WORK
          </span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] mb-6">
          ALL CASE <span className="text-[#FF7A00]">STUDIES.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5B606D] max-w-2xl font-display leading-relaxed mb-8">
          Detailed case studies across WordPress development, bespoke UI/UX architecture, WooCommerce online stores, and high-converting marketing experiences.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-5 py-2.5 rounded-full text-xs font-display font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FF7A00] text-[#0E1015] font-bold shadow-[0_4px_15px_rgba(255,122,0,0.25)]'
                  : 'bg-white text-[#5B606D] hover:text-[#0E1015] hover:bg-[#F5F6F8] border border-black/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                soundFx.playClick();
                onSelectProject(project);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.04)]"
              data-cursor="view"
            >
              <div>
                {/* Browser Mockup Image */}
                <div className="rounded-2xl overflow-hidden border border-black/[0.06] bg-[#F5F6F8] mb-6 relative aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[10px] font-mono text-[#FF7A00] uppercase font-bold shadow-sm">
                    {project.categoryLabel || project.category}
                  </div>
                  {project.galleryImages && project.galleryImages.length > 0 && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#0E1015]/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white flex items-center gap-1 shadow-sm">
                      <span>+{project.galleryImages.length} Screens</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors">
                    {project.title}
                  </h2>
                  <div className="w-9 h-9 rounded-full bg-black/[0.04] text-[#0E1015] group-hover:bg-[#FF7A00] group-hover:text-[#0E1015] flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5B606D] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags & Year */}
              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-[#5B606D]">
                <div className="flex gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F5F6F8] border border-black/[0.04] text-[10px] text-[#0E1015]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
