import React from 'react';
import { PROCESS_STEPS, STATS } from '../data/portfolioData';
import { Compass, Palette, Code, Rocket, Check } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <Compass key="1" className="w-5 h-5 text-[#FF7A00]" />,
    <Palette key="2" className="w-5 h-5 text-[#FF7A00]" />,
    <Code key="3" className="w-5 h-5 text-[#FF7A00]" />,
    <Rocket key="4" className="w-5 h-5 text-[#FF7A00]" />
  ];

  return (
    <section
      id="process"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/60 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                08 / SYSTEMATIC WORKFLOW
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              HOW WE <br />
              <span className="text-[#FF7A00]">EXECUTE.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#5B606D] max-w-md font-display leading-relaxed">
            A structured, disciplined 4-step process designed to deliver exceptional results on time and within budget.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-24">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              onMouseEnter={() => soundFx.playHover()}
              className="p-8 rounded-3xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-xl sm:text-2xl font-black text-[#FF7A00]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F8] border border-black/[0.06] flex items-center justify-center group-hover:bg-[#FF7A00]/10 transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#5B606D] leading-relaxed mb-6 font-display">
                  {step.description}
                </p>
              </div>

              {/* Details Checklist */}
              <div className="pt-6 border-t border-black/[0.06]">
                <ul className="space-y-2">
                  {step.details.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-[#5B606D] font-display">
                      <Check className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Statistics Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-black/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`text-center ${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}>
              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#FF7A00] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-[#0E1015] font-display uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-[#5B606D] font-display mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
