import React from 'react';

export const TechPedestal: React.FC = () => {
  const techs = [
    { name: 'WordPress & PHP 8.2', category: 'CMS & Custom Themes', icon: '🌐', desc: 'Bespoke theme engineering, custom PHP hooks, ACF Pro flexible fields, and zero-bloat code.' },
    { name: 'Elementor Pro', category: 'Page Builder Expert', icon: '🎨', desc: 'Custom Elementor widgets and responsive layouts that empower non-technical teams.' },
    { name: 'React & Next.js 15', category: 'Frontend Framework', icon: '⚛️', desc: 'Server components, fast page routing, custom WebGL integrations, and high performance.' },
    { name: 'Figma UI/UX', category: 'Design Systems', icon: '❖', desc: 'Interactive prototypes, component design tokens, auto-layout grids, and WCAG accessibility.' },
    { name: 'WooCommerce', category: 'E-Commerce Engine', icon: '🛍️', desc: 'Custom storefront templates, Stripe gateway integration, and high-converting checkout flows.' },
    { name: 'Tailwind CSS', category: 'Utility Styling', icon: '🌊', desc: 'Light & dark mode CSS variables, responsive viewport control, and clean maintainable code.' },
    { name: 'GSAP & Framer Motion', category: 'Animation Engine', icon: '✨', desc: 'Tactile hover feedback, smooth scroll triggers, and fluid micro-interactions.' },
    { name: 'Speed & SEO (98+)', category: 'Optimization & Security', icon: '⚡', desc: 'Lighthouse Core Web Vitals optimization, Cloudflare CDN, WebP images, and schema markup.' }
  ];

  return (
    <section id="tech" className="py-24 bg-[#EDEDEE] text-[#0E1015] relative z-10 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            • TECH STACK & SKILLS •
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0E1015] tracking-tight font-display">
            Built On Modern, <br />
            <span className="text-[#FF7A00]">
              Battle-Tested Technologies.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-black/[0.08] hover:border-[#FF7A00] transition-all duration-300 group hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                <span className="text-[10px] font-mono text-[#0E1015] bg-[#F5F6F8] px-2.5 py-1 rounded-full border border-black/[0.06]">
                  {tech.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#0E1015] mb-2 font-display">{tech.name}</h3>
              <p className="text-xs text-[#5B606D] leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
