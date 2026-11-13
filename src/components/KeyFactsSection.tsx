import React from 'react';
import { KEY_FACTS } from '../data/portfolioData';
import { Sparkles, Layers, Clock, Zap, TrendingUp, CheckCircle, Globe, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface KeyFactsSectionProps {
  onOpenEstimator?: () => void;
}

export const KeyFactsSection: React.FC<KeyFactsSectionProps> = ({ onOpenEstimator }) => {
  const getFactIcon = (type?: string) => {
    switch (type) {
      case 'layers':
        return <Layers className="w-5 h-5 text-[#FF7A00]" />;
      case 'clock':
        return <Clock className="w-5 h-5 text-[#FF7A00]" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-[#FF7A00]" />;
      case 'trending':
        return <TrendingUp className="w-5 h-5 text-[#FF7A00]" />;
      case 'check':
        return <CheckCircle className="w-5 h-5 text-[#FF7A00]" />;
      case 'globe':
      default:
        return <Globe className="w-5 h-5 text-[#FF7A00]" />;
    }
  };

  return (
    <section
      id="key-facts"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#DEE0E6]/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Massive Background Watermark */}
      <div className="absolute top-20 right-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display font-black text-[14vw] tracking-tighter text-black uppercase leading-none">
          METRICS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8 sm:gap-12">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                05 / KEY FACTS & PROVEN RESULTS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              VERIFIED IMPACT. <br />
              <span className="text-[#FF7A00]">MEASURABLE</span> <br />
              RESULTS.
            </h2>
          </div>

          <div className="max-w-md flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#5B606D] font-display leading-relaxed mb-6">
              Every website engineered at Emmanuel Studio is built with real business outcomes in mind: sub-second server response times, high conversion architecture, and long-term maintainability.
            </p>

            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.08] text-xs font-display font-semibold text-[#FF7A00] flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audited Core Web Vitals</span>
              </div>
              <div className="text-xs font-display text-[#5B606D]">
                Live Production Benchmarks
              </div>
            </div>
          </div>

        </div>

        {/* 6 High-Impact Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {KEY_FACTS.map((fact, idx) => (
            <div
              key={fact.id || idx}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] hover:border-[#FF7A00]/50 transition-all duration-300 group hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden"
              data-cursor="hover"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Row: Icon & Monospace Index */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F6F8] border border-black/[0.06] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF7A00]/10 group-hover:border-[#FF7A00]/30 transition-all duration-300">
                    {getFactIcon(fact.iconType)}
                  </div>
                  <span className="text-xs font-display font-bold text-[#5B606D] tracking-widest uppercase">
                    /0{idx + 1}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-3 tracking-tight">
                  {fact.metric}
                </div>

                {/* Metric Label */}
                <h3 className="text-lg sm:text-xl font-bold font-display uppercase text-[#0E1015] mb-2 leading-snug tracking-tight">
                  {fact.label}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-[#5B606D] leading-relaxed font-display">
                  {fact.sublabel}
                </p>
              </div>

              {/* Bottom Subtle Divider with Accent Dot */}
              <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between">
                <span className="text-xs font-display text-[#FF7A00] uppercase tracking-wider font-semibold">
                  VERIFIED STATISTIC
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Estimator Trigger */}
        {onOpenEstimator && (
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-[#0E1015] uppercase tracking-tight">
                READY TO ELEVATE YOUR BRAND'S METRICS?
              </h4>
              <p className="text-xs sm:text-sm text-[#5B606D] mt-1 font-display">
                Use our interactive project estimator to calculate custom scope, pricing, and timelines for your website.
              </p>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onOpenEstimator();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-6 py-3 sm:py-3.5 rounded-full bg-[#0E1015] hover:bg-[#21242C] text-white font-display font-semibold text-xs sm:text-sm flex items-center gap-3 transition-all duration-300 shadow-[0_10px_25px_rgba(14,16,21,0.2)] active:scale-95 cursor-pointer shrink-0"
            >
              <span>Launch Cost Estimator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
