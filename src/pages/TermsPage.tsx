import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#06050e] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase">CONTRACTUAL GOVERNANCE</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2">Terms of Service</h1>
          <p className="text-xs text-gray-400 font-mono mt-1">Effective Date: January 1, 2025 • NEXORA STUDIO INC.</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#0b0a1a] p-8 rounded-3xl border border-purple-500/20">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Master Services Agreement</h2>
            <p>
              By engaging NEXORA Studio Inc. for WebGL engineering, creative direction, or full-stack software development, client agrees to the terms outlined in their bespoke Statement of Work (SOW) and Master Services Agreement (MSA).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Intellectual Property & Code Ownership</h2>
            <p>
              Upon full settlement of project milestone invoices, client holds 100% full unencumbered ownership of all custom source code, Figma design tokens, GLSL shaders, and component assets generated for their project.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Performance Guarantees</h2>
            <p>
              NEXORA Studio guarantees sub-second page load benchmarks and WCAG AA accessibility compliance on supported modern browser viewports.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
