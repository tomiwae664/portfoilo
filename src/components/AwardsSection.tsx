import React from 'react';
import { AWARDS } from '../data/portfolioData';
import { Award, Trophy, Star, Medal } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 font-heading">
              • RECOGNITION & CERTIFICATIONS •
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight font-heading">
              Award-Winning Quality & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Industry Recognition.
              </span>
            </h2>
          </div>

          <div className="text-right">
            <div className="text-4xl font-extrabold text-[var(--text-main)] font-mono">14+</div>
            <div className="text-xs text-blue-400 font-mono">Industry Honors & Speed Badges</div>
          </div>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((award) => (
            <div
              key={award.id}
              className="bg-[var(--bg-surface)] p-6 rounded-3xl border border-[var(--border-color)] hover:border-blue-500/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-500/30">
                    {award.organization}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">{award.year}</span>
                </div>

                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🏆
                </div>

                <h3 className="text-xl font-bold text-[var(--text-main)] mb-2 font-heading">{award.title}</h3>
                <p className="text-xs text-[var(--text-muted)] font-mono mb-4">{award.category}</p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] text-xs font-bold text-cyan-400 font-heading">
                Project: {award.projectTitle}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
