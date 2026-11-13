import React, { useState } from 'react';
import { PageView } from '../types';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight, Plus, Minus, CheckCircle, Sparkles, Sliders, ArrowRight, Tag } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { useCurrency } from '../context/CurrencyContext';
import { CurrencySelector } from './CurrencySelector';

interface ServicesSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onOpenEstimator
}) => {
  const { formatPrice, currency } = useCurrency();
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filterCategories = [
    { id: 'all', label: `All Services (${SERVICES.length})` },
    { id: 'platforms', label: 'Web Platforms' },
    { id: 'ai-agents', label: 'AI Chatbots & Support' },
    { id: 'automation', label: 'Workflows & AI Tools' }
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'platforms') {
      return (
        service.id.includes('wordpress') ||
        service.id.includes('shopify') ||
        service.id.includes('webflow') ||
        service.id.includes('wix')
      );
    }
    if (activeFilter === 'ai-agents') {
      return (
        service.id.includes('chatbots') ||
        service.id.includes('support')
      );
    }
    if (activeFilter === 'automation') {
      return (
        service.id.includes('automation') ||
        service.id.includes('personalized')
      );
    }
    return true;
  });

  const toggleRow = (id: string) => {
    soundFx.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] bg-[#DEE0E6]/60 rounded-full blur-[140px] pointer-events-none" />

      {/* Massive Background Watermark */}
      <div className="absolute top-16 right-6 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="font-display font-black text-[13vw] tracking-tighter text-black uppercase leading-none">
          SERVICES
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8 sm:gap-12">
          
          {/* Left: Eyebrow & Bold Oversized Heading */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                03 / SERVICES & CAPABILITIES
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              OUR SERVICES <br />
              <span className="text-[#FF7A00] inline-block">CRAFTED</span> FOR <br />
              GROWTH.
            </h2>
          </div>

          {/* Right: Editorial Descriptor & Quick Actions */}
          <div className="max-w-md flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#5B606D] font-display leading-relaxed mb-6">
              From modern websites built on WordPress, Shopify, Webflow, Wix, and Squarespace to intelligent AI chatbots, smart support forms, and business workflow automations — delivered on time and within budget.
            </p>

            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.08] text-xs font-display font-semibold text-[#FF7A00] flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>8 Core Offerings</span>
              </div>
              <div className="text-xs font-display text-[#5B606D]">
                Accessible & Budget-Friendly
              </div>
            </div>
          </div>

        </div>

        {/* Filter Switcher Pills & Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 sm:mb-16 border-b border-black/[0.08] pb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {filterCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveFilter(tab.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0E1015] text-white shadow-md'
                    : 'bg-white/80 text-[#5B606D] hover:text-[#0E1015] hover:bg-white border border-black/[0.08] shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Regional Currency Indicator */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white/80 px-3 py-1.5 rounded-full border border-black/[0.08] shadow-2xs">
            <span className="text-[11px] font-display text-[#5B606D]">Local Currency:</span>
            <CurrencySelector variant="compact" />
          </div>
        </div>

        {/* High-End Editorial Service List */}
        <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]">
          {filteredServices.map((service, idx) => {
            const isExpanded = expandedId === service.id;
            const isHovered = hoveredIndex === idx;
            const displayNumber = `0${idx + 1}`;

            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-all duration-500 relative ${
                  isExpanded ? 'bg-white/60 rounded-2xl' : 'hover:bg-white/40'
                }`}
              >
                {/* Subtle Amber Gradient Hover Sheen */}
                <div
                  className={`absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-r from-transparent via-[#FF7A00]/[0.03] to-transparent transition-opacity duration-500 ${
                    isHovered || isExpanded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Primary Interactive Row Header */}
                <div
                  onClick={() => toggleRow(service.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  className="py-9 sm:py-12 px-3 sm:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 cursor-pointer select-none group relative z-10"
                  data-cursor="hover"
                >
                  
                  {/* Left: Monospace Index Number & Large Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span className="text-sm sm:text-base font-mono font-bold text-[#FF7A00] tracking-widest shrink-0 mt-1 sm:mt-0">
                      /{displayNumber}
                    </span>

                    <div>
                      <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#0E1015] group-hover:text-[#FF7A00] group-hover:translate-x-2 transition-all duration-300 uppercase tracking-tight leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5B606D] mt-1.5 font-sans max-w-xl line-clamp-1 sm:line-clamp-none">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Deliverable Tags, Timeline & Animated Arrow Button */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-8 pt-2 lg:pt-0">
                    
                    {/* Capability Tags (Desktop) */}
                    <div className="hidden xl:flex items-center gap-2">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-[11px] font-mono text-[#5B606D] bg-white/80 border border-black/[0.08] group-hover:border-[#FF7A00]/40 group-hover:text-[#0E1015] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Timeline & Price indicator */}
                    <div className="text-right hidden sm:block">
                      <div className="text-xs font-mono text-[#0E1015] font-semibold">
                        {service.typicalTimeline}
                      </div>
                      <div className="text-[11px] font-mono text-[#FF7A00] font-bold">
                        From {formatPrice(service.basePriceUSD || 500)}
                      </div>
                    </div>

                    {/* Animated Circular Arrow / Toggle Button */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-all duration-500 shadow-sm ${
                        isExpanded
                          ? 'bg-[#0E1015] border-[#0E1015] text-white rotate-45 scale-105'
                          : 'border-black/15 bg-white text-[#0E1015] group-hover:bg-[#FF7A00] group-hover:border-[#FF7A00] group-hover:text-white group-hover:rotate-45 group-hover:scale-105'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
                    </div>

                  </div>

                </div>

                {/* Expanded Editorial Content Drawer */}
                {isExpanded && (
                  <div className="px-3 sm:px-8 pb-10 pt-2 animate-in fade-in duration-300 relative z-10">
                    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      
                      {/* Left: Deep Strategy & Scope */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <div className="text-xs font-mono tracking-widest text-[#FF7A00] uppercase font-bold mb-2">
                            OVERVIEW & TECHNICAL APPROACH
                          </div>
                          <p className="text-sm sm:text-base text-[#3A3F4A] leading-relaxed font-sans">
                            {service.description}
                          </p>
                        </div>

                        {/* Standout Features */}
                        <div>
                          <div className="text-xs font-mono text-[#5B606D] uppercase tracking-wider mb-3 font-semibold">
                            STRATEGIC ADVANTAGES:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-center gap-2.5 text-xs text-[#0E1015] p-2.5 rounded-xl bg-[#F5F6F8] border border-black/[0.05]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <div className="text-xs font-mono text-[#5B606D] uppercase tracking-wider mb-2 font-semibold">
                            CORE TECHNOLOGIES & TOOLING:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg text-xs font-mono text-[#FF7A00] bg-[#FF7A00]/10 border border-[#FF7A00]/25 font-bold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: What You Receive & Call to Action */}
                      <div className="lg:col-span-5 bg-[#F5F6F8] p-6 sm:p-8 rounded-2xl border border-black/[0.08] flex flex-col justify-between shadow-sm">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-widest font-bold">
                              KEY DELIVERABLES:
                            </span>
                            <span className="text-xs font-mono text-[#5B606D]">
                              {service.typicalTimeline}
                            </span>
                          </div>

                          <ul className="space-y-3 mb-8">
                            {service.deliverables.map((item, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#0E1015]">
                                <CheckCircle className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <div className="text-xs font-display text-[#5B606D]">Investment:</div>
                            <span className="px-3 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-xs font-mono font-bold text-[#FF7A00]">
                              From {formatPrice(service.basePriceUSD || 500)} ({currency.code})
                            </span>
                          </div>

                          <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                              onClick={() => {
                                soundFx.playClick();
                                onNavigate('contact');
                              }}
                              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0E1015] hover:bg-[#21242C] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-display shadow-md"
                            >
                              <span>DISCUSS THIS SERVICE</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>

                            {onOpenEstimator && (
                              <button
                                onClick={() => {
                                  soundFx.playClick();
                                  onOpenEstimator();
                                }}
                                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-mono font-medium tracking-wider text-[#5B606D] hover:text-[#0E1015] bg-white hover:bg-[#EDEDEE] border border-black/[0.08] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                              >
                                <Sliders className="w-3.5 h-3.5 text-[#FF7A00]" />
                                <span>CALCULATE COST</span>
                              </button>
                            )}
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Custom Scope Callout */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
          <div className="space-y-1">
            <h4 className="text-xl sm:text-2xl font-bold font-display text-[#0E1015] uppercase tracking-tight">
              NEED A TAILORED SCOPE OR COMBO PACKAGE?
            </h4>
            <p className="text-sm text-[#5B606D] max-w-xl">
              We design and develop custom solutions across WordPress, Shopify, Webflow, Wix, and Squarespace with tailored AI agents and workflow automations to fit your exact project goals and budget.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate('contact');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#0E1015] hover:bg-[#21242C] transition-all flex items-center gap-2.5 font-display shadow-md cursor-pointer"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
