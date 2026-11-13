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
    <div className="pt-32 pb-24 bg-[#EDEDEE] text-[#0E1015] relative z-10 min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
              TRANSPARENT INVESTMENT PACKAGES
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] mb-6 uppercase">
            CLEAR PRICING. <br />
            <span className="text-[#FF7A00]">
              MAXIMUM ROI.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#5B606D] font-display">
            Choose a fixed-price package below or use the interactive Cost Calculator to customize your specific requirements.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between relative shadow-[0_15px_35px_rgba(0,0,0,0.04)] ${
                tier.popular
                  ? 'bg-white border-[#FF7A00] shadow-[0_20px_45px_rgba(255,122,0,0.12)] ring-1 ring-[#FF7A00]/40'
                  : 'bg-white border-black/[0.08] hover:border-black/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-[#0E1015] font-display text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  ★ MOST POPULAR PACKAGE
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-[#0E1015] mb-2 font-display">{tier.name}</h3>
                <p className="text-xs text-[#5B606D] leading-relaxed mb-6 font-sans">{tier.desc}</p>

                <div className="mb-6 pb-6 border-b border-black/[0.08]">
                  <div className="text-xs text-[#FF7A00] font-mono font-bold">ESTIMATED INVESTMENT:</div>
                  <div className="text-4xl font-extrabold text-[#0E1015] font-mono mt-1">
                    {tier.price}
                  </div>
                  <div className="text-xs text-[#5B606D] font-mono mt-1">Timeline: {tier.timeline}</div>
                </div>

                <div className="space-y-3 mb-8 font-sans">
                  <div className="text-xs font-mono font-bold text-[#FF7A00] uppercase">WHAT'S INCLUDED:</div>
                  {tier.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#0E1015]">
                      <Check className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
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
                className={`w-full py-3.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all font-display cursor-pointer ${
                  tier.popular
                    ? 'bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] shadow-md'
                    : 'bg-[#0E1015] hover:bg-[#FF7A00] hover:text-[#0E1015] text-white shadow-sm'
                }`}
              >
                <span>Customize Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Launch Scope Calculator Banner */}
        <div className="p-10 rounded-3xl bg-white border border-black/[0.08] text-center space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
          <Calculator className="w-10 h-10 text-[#FF7A00] mx-auto" />
          <h2 className="text-2xl font-bold text-[#0E1015] font-display">Need A Custom Scope or Specific Feature?</h2>
          <p className="text-xs text-[#5B606D] max-w-lg mx-auto font-sans">
            Use our interactive Scope Estimator tool to calculate custom add-ons like speed optimizations, booking calendars, and extra pages.
          </p>
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenEstimator();
            }}
            className="px-8 py-3.5 rounded-full bg-[#0E1015] hover:bg-[#FF7A00] hover:text-[#0E1015] text-white font-bold text-xs font-display shadow-md transition-colors cursor-pointer"
          >
            Launch Cost Calculator
          </button>
        </div>

      </div>

    </div>
  );
};
