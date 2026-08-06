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
    <section id="tech" className="py-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 font-heading">
            • TECH STACK & SKILLS •
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight font-heading">
            Built On Modern, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Battle-Tested Technologies.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-surface)] p-6 rounded-3xl border border-[var(--border-color)] hover:border-blue-500/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  {tech.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-main)] mb-2 font-heading">{tech.name}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-body">{tech.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
