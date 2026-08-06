import React, { useState } from 'react';
import { Compass, Sparkles, Code2, Cpu, Rocket, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [
    <Compass key="0" className="w-6 h-6 text-blue-400" />,
    <Sparkles key="1" className="w-6 h-6 text-indigo-400" />,
    <Code2 key="2" className="w-6 h-6 text-cyan-400" />,
    <Cpu key="3" className="w-6 h-6 text-emerald-400" />,
    <Rocket key="4" className="w-6 h-6 text-amber-400" />,
    <CheckCircle2 key="5" className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section id="process" className="py-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 font-heading">
            • DEVELOPMENT WORKFLOW •
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight font-heading">
            How We Turn Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              High-Converting Websites.
            </span>
          </h2>
        </div>

        {/* 6-Step Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveStep(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between font-heading ${
                    isActive
                      ? 'bg-blue-950/80 border-blue-500 text-white shadow-xl shadow-blue-950/50'
                      : 'bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-main)]'
                  }`}
                  data-cursor="hover"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-white/5 text-[var(--text-muted)]'
                    }`}>
                      {step.number}
                    </span>
                    <span className="text-sm font-bold">{step.title}</span>
                  </div>

                  <span className="text-[10px] font-mono text-blue-300">{step.duration}</span>
                </div>
              );
            })}
          </div>

          {/* Right: Active Step Card Detail */}
          <div className="lg:col-span-7 bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border-color)] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                {icons[activeStep % icons.length]}
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                PHASE {PROCESS_STEPS[activeStep].number} • {PROCESS_STEPS[activeStep].duration}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4 font-heading">
              {PROCESS_STEPS[activeStep].title}
            </h3>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-8 font-body">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="pt-6 border-t border-[var(--border-color)]">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-4 font-heading">
                KEY DELIVERABLES IN THIS PHASE:
              </div>
              <ul className="space-y-3 font-body">
                {PROCESS_STEPS[activeStep].details.map((deliv, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-[var(--text-main)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
