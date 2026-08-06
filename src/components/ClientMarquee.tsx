import React from 'react';

export const ClientMarquee: React.FC = () => {
  const clients = [
    { name: 'WORDPRESS PRO', category: 'PHP & CUSTOM THEMES', icon: '🌐' },
    { name: 'ELEMENTOR PRO', category: 'EXPERT BUILDER', icon: '🎨' },
    { name: 'REACT & NEXT.JS 15', category: 'FRONTEND ARCHITECTURE', icon: '⚛️' },
    { name: 'FIGMA UI/UX', category: 'DESIGN SYSTEMS', icon: '❖' },
    { name: 'WOOCOMMERCE', category: 'LUXURY E-COMMERCE', icon: '🛍️' },
    { name: 'TAILWIND CSS', category: 'UTILITY STYLING', icon: '🌊' },
    { name: 'STRIPE PAYMENTS', category: 'CHECKOUT & DEPOSITS', icon: '💳' },
    { name: 'VERCEL & CLOUDFLARE', category: '95+ LIGHTHOUSE SPEED', icon: '⚡' }
  ];

  return (
    <section id="clients" className="py-12 bg-[var(--bg-surface)] border-y border-[var(--border-color)] overflow-hidden relative z-10 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[11px] font-mono font-bold tracking-widest text-blue-400 uppercase font-heading">
          ENGINEERED WITH MODERN STACKS & TRUSTED BY GROWTH BRANDS
        </span>
      </div>

      {/* Ticker Track */}
      <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-marquee gap-6">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-blue-500/50 hover:bg-blue-950/20 transition-all duration-300 group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-125 transition-transform">{client.icon}</span>
              <div className="text-left">
                <div className="text-xs font-extrabold text-[var(--text-main)] font-mono tracking-wider group-hover:text-blue-400 transition-colors">
                  {client.name}
                </div>
                <div className="text-[9px] font-mono text-[var(--text-muted)]">{client.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
