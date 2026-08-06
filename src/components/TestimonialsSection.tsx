import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 font-heading">
            • CLIENT TESTIMONIALS •
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight font-heading">
            Trusted By Clients. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Validated By Proven Growth.
            </span>
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--bg-surface)] p-6 rounded-3xl border border-[var(--border-color)] hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating & Result Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-500/30" />
                </div>

                <div className="inline-block px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-[10px] font-mono font-bold text-cyan-400 mb-4">
                  {t.result}
                </div>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed italic mb-6 font-body">
                  "{t.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/40"
                />
                <div>
                  <div className="text-xs font-bold text-[var(--text-main)] font-heading">{t.name}</div>
                  <div className="text-[10px] text-blue-400 font-mono">{t.role}</div>
                  <div className="text-[9px] font-mono text-[var(--text-muted)]">{t.company}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
