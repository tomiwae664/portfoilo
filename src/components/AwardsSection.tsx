import React from 'react';
import { AWARDS } from '../data/portfolioData';
import { Trophy, Award, Star, Medal, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const AwardsSection: React.FC = () => {
  const getAwardIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <Trophy className="w-6 h-6 text-[#FF7A00]" />;
      case 1:
        return <Award className="w-6 h-6 text-[#FF7A00]" />;
      case 2:
        return <Star className="w-6 h-6 text-[#FF7A00]" />;
      default:
        return <Medal className="w-6 h-6 text-[#FF7A00]" />;
    }
  };

  return (
    <section
      id="awards"
      className="py-24 sm:py-32 bg-[#EDEDEE] text-[#0E1015] relative z-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                05 / INDUSTRY RECOGNITION & HONORS
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              HONORS & DESIGN <br />
              <span className="text-[#FF7A00]">EXCELLENCE.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E1015] font-display">14+</div>
              <div className="text-xs sm:text-sm font-display text-[#5B606D]">Industry Accolades & Badges</div>
            </div>
          </div>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AWARDS.map((award, index) => {
            const cardKey = award.id || `award-${award.title}-${index}`;

            return (
              <div
                key={cardKey}
                onMouseEnter={() => soundFx.playHover()}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-black/[0.08] hover:border-[#FF7A00]/50 transition-all duration-300 group hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-display font-semibold text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-full border border-[#FF7A00]/20">
                      {award.organization}
                    </span>
                    <span className="text-xs font-display text-[#5B606D]">{award.year}</span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#F5F6F8] border border-black/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30 transition-all duration-300">
                    {getAwardIcon(index)}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-2 leading-snug tracking-tight">
                    {award.title}
                  </h3>

                  {award.category && (
                    <p className="text-xs text-[#5B606D] font-display mb-4">
                      {award.category}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-display">
                  <span className="text-[#5B606D]">Project:</span>
                  <span className="font-bold text-[#0E1015] group-hover:text-[#FF7A00] transition-colors">
                    {award.projectTitle || award.project}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
