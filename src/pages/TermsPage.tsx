import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#EDEDEE] text-[#0E1015] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
              LEGAL • CONTRACTUAL GOVERNANCE
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] uppercase">
            TERMS OF <span className="text-[#FF7A00]">SERVICE.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5B606D] font-display mt-3">Effective Date: 2025 • Emmanuel Studio</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#5B606D] leading-relaxed bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.04)] font-display">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#0E1015] font-display">1. Master Services Agreement</h2>
            <p>
              By engaging Emmanuel for bespoke WordPress engineering, UI/UX architecture, or eCommerce development, the client agrees to the terms outlined in their proposal and Statement of Work (SOW).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0E1015] font-display">2. Intellectual Property & Code Ownership</h2>
            <p>
              Upon complete milestone settlement, the client holds full ownership of all custom theme files, Figma design tokens, ACF configurations, and creative assets produced for the project.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0E1015] font-display">3. Performance Benchmarks</h2>
            <p>
              All websites are built with rigorous quality standards, targeting 90+ Google PageSpeed benchmarks, responsive precision, and cross-browser stability.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
