import React from 'react';

export const ClientMarquee: React.FC = () => {
  const stacks = [
    { name: 'WORDPRESS', detail: 'CUSTOM THEMES & ACF' },
    { name: 'FIGMA', detail: 'UI/UX & DESIGN SYSTEMS' },
    { name: 'ELEMENTOR PRO', detail: 'PIXEL-PERFECT TEMPLATES' },
    { name: 'WOOCOMMERCE', detail: 'E-COMMERCE ARCHITECTURE' },
    { name: 'HTML5 & CSS3', detail: 'SEMANTIC MARKUP' },
    { name: 'JAVASCRIPT', detail: 'INTERACTIVE MOTIONS' },
    { name: 'PHP', detail: 'BACKEND HOOKS & APIS' },
    { name: 'SPEED & SEO', detail: '95+ CORE WEB VITALS' }
  ];

  return (
    <section className="py-7 bg-[#E6E8EC] border-y border-black/[0.08] overflow-hidden relative z-10 select-none">
      <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee gap-8">
          {[...stacks, ...stacks].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3.5 px-6 py-2.5 rounded-full bg-white/90 border border-black/[0.08] hover:border-[#FF7A00]/60 shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
              <span className="text-xs font-bold font-display uppercase tracking-wider text-[#0E1015]">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-[#5B606D] uppercase tracking-widest">
                / {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
