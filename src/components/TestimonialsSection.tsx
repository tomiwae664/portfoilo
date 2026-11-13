import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                07 / CLIENT ENDORSEMENTS & REPUTATION
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              WHAT CLIENTS <br />
              <span className="text-[#FF7A00]">EXPERIENCE.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#5B606D] max-w-md font-display leading-relaxed">
            Real feedback from business founders, creative directors, and school administrators across 50+ delivered projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              onMouseEnter={() => soundFx.playHover()}
              className="p-8 rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.04)] group hover:-translate-y-1"
            >
              <div>
                {/* Header: Stars & Orange Quote */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#FF7A00] gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A00] stroke-none" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#FF7A00]/40 group-hover:text-[#FF7A00] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#0E1015] leading-relaxed mb-6 font-display">
                  "{t.quote || t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-black/[0.06] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author || t.name || 'Client'}
                  className="w-11 h-11 rounded-full object-cover border border-[#FF7A00]/30"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold font-display text-[#0E1015]">{t.author || t.name}</div>
                  <div className="text-xs font-display text-[#FF7A00] font-semibold">{t.role}</div>
                  <div className="text-xs text-[#5B606D] font-display">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
