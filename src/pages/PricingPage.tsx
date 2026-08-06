import React from 'react';
import { PageView } from '../types';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface PricingPageProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenEstimator }) => {
  const tiers = [
    {
      name: 'Landing Page Package',
      price: '$1,200',
      timeline: '7 - 10 Days',
      desc: 'High-converting single-page experience ideal for product launches, ad campaigns, and quick lead capture.',
      deliverables: [
        'Figma Custom UI/UX Design',
        'Responsive WordPress or Next.js Build',
        'Lead Capture Form Integration',
        'Sub-0.8s Page Loading Speed',
        'Basic On-Page SEO Setup'
      ]
    },
    {
      name: 'Custom WordPress Site',
      price: '$1,800',
      timeline: '2 - 3 Weeks',
      popular: true,
      desc: 'Full multi-page corporate or agency website with bespoke theme coding, Elementor block system, and 98+ PageSpeed.',
      deliverables: [
        'Everything in Landing Page Package',
        'Up to 8 Custom Page Layouts',
        'Elementor Pro / Custom Block Setup',
        'ACF Pro Flexible Content Fields',
        'Video Training & 30-Day Support'
      ]
    },
    {
      name: 'WooCommerce Storefront',
      price: '$3,500',
      timeline: '3 - 5 Weeks',
      desc: 'Custom e-commerce store with high-converting cart flow, Stripe/PayPal payment gateway, and product catalog.',
      deliverables: [
        'Everything in Custom WordPress Site',
        'Custom Product & Shop Page Templates',
        'Payment Gateway & Tax Configuration',
        'Inventory & Shipping Rule Setup',
        'Conversion & Cart Abandonment Optimization'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 min-h-screen transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            • TRANSPARENT INVESTMENT PACKAGES •
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight mb-6">
            Clear, Predictable Pricing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Maximum Return On Investment.
            </span>
          </h1>
          <p className="text-base text-[var(--text-muted)] font-body">
            Choose a fixed-price package below or use the interactive Cost Calculator to customize your specific requirements.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between relative shadow-2xl ${
                tier.popular
                  ? 'bg-[var(--bg-surface)] border-blue-500 shadow-blue-950/80 ring-1 ring-blue-500/50'
                  : 'bg-[var(--bg-surface)]/60 border-[var(--border-color)] hover:border-blue-500/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-mono text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  ★ MOST POPULAR PACKAGE
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2 font-heading">{tier.name}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6 font-body">{tier.desc}</p>

                <div className="mb-6 pb-6 border-b border-[var(--border-color)]">
                  <div className="text-xs text-blue-400 font-mono font-heading">ESTIMATED INVESTMENT:</div>
                  <div className="text-4xl font-extrabold text-[var(--text-main)] font-mono mt-1">
                    {tier.price}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mt-1">Timeline: {tier.timeline}</div>
                </div>

                <div className="space-y-3 mb-8 font-body">
                  <div className="text-xs font-mono font-bold text-blue-400 uppercase font-heading">WHAT'S INCLUDED:</div>
                  {tier.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-main)]">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenEstimator();
                }}
                className={`w-full py-3.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all font-heading ${
                  tier.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-[var(--text-main)]'
                }`}
              >
                <span>Customize Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Launch Scope Calculator Banner */}
        <div className="p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-center space-y-4 shadow-xl">
          <Calculator className="w-10 h-10 text-blue-400 mx-auto" />
          <h2 className="text-2xl font-bold text-[var(--text-main)] font-heading">Need A Custom Scope or Specific Feature?</h2>
          <p className="text-xs text-[var(--text-muted)] max-w-lg mx-auto font-body">
            Use our interactive Scope Estimator tool to calculate custom add-ons like speed optimizations, booking calendars, and extra pages.
          </p>
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenEstimator();
            }}
            className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-heading shadow-lg"
          >
            Launch Cost Calculator
          </button>
        </div>

      </div>

    </div>
  );
};
