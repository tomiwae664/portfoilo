import React, { useState } from 'react';
import { PageView } from '../types';
import { SERVICES } from '../data/portfolioData';
import { Layout, Code2, Palette, Zap, RefreshCw, ShoppingBag, ShieldCheck, Gauge, Calendar, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface ServicesSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onOpenEstimator
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('website-design');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-emerald-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-cyan-400" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-indigo-400" />;
      default:
        return <Layout className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 font-heading">
              • SERVICE OFFERINGS •
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight font-heading">
              Comprehensive Web Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Crafted For High Growth.
              </span>
            </h2>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenEstimator();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2 font-heading"
            data-cursor="hover"
          >
            <span>Calculate Project Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Accordion / Tab Cards Grid */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const isExpanded = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isExpanded
                    ? 'bg-[var(--bg-surface)] border-blue-500/50 shadow-2xl ring-1 ring-blue-500/30'
                    : 'bg-[var(--bg-surface)]/60 border-[var(--border-color)] hover:border-blue-500/30 hover:bg-[var(--bg-surface)]'
                }`}
              >
                {/* Accordion Header */}
                <div
                  onClick={() => {
                    soundFx.playClick();
                    setActiveServiceId(isExpanded ? '' : service.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-6 sm:p-8 flex items-center justify-between cursor-pointer select-none"
                  data-cursor="hover"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] font-heading">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5 font-body line-clamp-1">{service.tagline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-6 text-xs text-[var(--text-muted)] font-mono">
                      <div>
                        Timeline: <span className="text-blue-400 font-bold">{service.typicalTimeline}</span>
                      </div>
                      <div>
                        From: <span className="text-[var(--text-main)] font-bold">{service.startingPrice}</span>
                      </div>
                    </div>

                    <div className={`w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-[var(--text-muted)]'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[var(--border-color)] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
                    
                    {/* Left: Full Description */}
                    <div className="lg:col-span-6 space-y-4 font-body">
                      <p className="text-base text-blue-400 font-semibold leading-relaxed font-heading">
                        "{service.tagline}"
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2">
                        <div className="text-xs font-bold font-mono text-[var(--text-main)] mb-2">FEATURES & ADVANTAGES:</div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
                          {service.features.map((feat, fidx) => (
                            <div key={fidx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Deliverables & Action */}
                    <div className="lg:col-span-6 bg-[var(--bg-main)] p-6 rounded-2xl border border-[var(--border-color)] flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold font-mono text-blue-400 uppercase tracking-wider mb-3 font-heading">
                          KEY DELIVERABLES:
                        </div>
                        <ul className="space-y-2 mb-6 font-body">
                          {service.deliverables.map((deliv, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-main)]">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                        <div className="text-xs font-mono text-[var(--text-muted)]">
                          Starting at <span className="text-[var(--text-main)] font-bold">{service.startingPrice}</span>
                        </div>

                        <button
                          onClick={() => {
                            soundFx.playClick();
                            onOpenEstimator();
                          }}
                          className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-colors font-heading"
                        >
                          Book Service Scope
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
