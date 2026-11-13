import React from 'react';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { Sparkles, Linkedin, Twitter, Github, Dribbble, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#DEE0E6]/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Massive Background Watermark */}
      <div className="absolute top-20 left-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display font-black text-[14vw] tracking-tighter text-black uppercase leading-none">
          PEOPLE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8 sm:gap-12">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                06 / CREATIVE & ENGINEERING COLLECTIVE
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              THE MINDS <br />
              BEHIND THE <br />
              <span className="text-[#FF7A00]">ARCHITECTURE.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#5B606D] font-display leading-relaxed mb-6">
              A specialized digital collective combining Figma design rigor with custom WordPress development, server optimization, and conversion-focused thinking.
            </p>

            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.08] text-xs font-display font-semibold text-[#FF7A00] flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Multidisciplinary Talents</span>
              </div>
              <div className="text-xs font-display text-[#5B606D]">
                Remote & Distributed Worldwide
              </div>
            </div>
          </div>

        </div>

        {/* 4 Team Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.id || idx}
              onMouseEnter={() => soundFx.playHover()}
              className="group rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/40 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between"
              data-cursor="hover"
            >
              <div>
                {/* Portrait Visual Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EDEDEE]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Experience Badge */}
                  {member.experience && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0E1015]/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#FF7A00] uppercase font-bold shadow-md">
                      {member.experience}
                    </div>
                  )}

                  {/* Member Index Marker */}
                  <div className="absolute top-4 left-4 text-xs font-mono font-bold text-[#5B606D]">
                    /0{idx + 1}
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-1">
                    {member.name}
                  </h3>

                  <div className="text-xs font-mono text-[#FF7A00] uppercase font-bold tracking-wider mb-3">
                    {member.role}
                  </div>

                  <p className="text-xs text-[#5B606D] leading-relaxed mb-4 font-sans line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="text-[11px] font-mono text-[#5B606D] bg-[#F5F6F8] p-2.5 rounded-xl border border-black/[0.06] line-clamp-2">
                    <span className="text-[#FF7A00] font-bold">Focus: </span>
                    {member.specialization}
                  </div>
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="px-6 py-4 border-t border-black/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-[#5B606D]">
                  {member.socials?.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF7A00] transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials?.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF7A00] transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials?.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF7A00] transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials?.dribbble && (
                    <a
                      href={member.socials.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF7A00] transition-colors"
                      aria-label={`${member.name} Dribbble`}
                    >
                      <Dribbble className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF7A00]">
                  COLLABORATOR
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
