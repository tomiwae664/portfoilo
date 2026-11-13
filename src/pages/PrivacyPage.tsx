import React from 'react';
import { PageView } from '../types';

interface PrivacyPageProps {
  onNavigate: (page: PageView) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#EDEDEE] text-[#0E1015] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
              LEGAL • PRIVACY & DATA GOVERNANCE
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] uppercase">
            PRIVACY <span className="text-[#FF7A00]">POLICY.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#5B606D] font-display mt-3">Effective Date: 2025 • Emmanuel Studio</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#5B606D] leading-relaxed bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.04)] font-display">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#0E1015] font-display">1. Data Minimization Philosophy</h2>
            <p>
              At Emmanuel Studio, we respect client and visitor privacy. We collect only the information necessary to provide project estimates, respond to inquiries, and deliver professional design and development services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0E1015] font-display">2. Information We Collect</h2>
            <p>
              When you submit a project brief or inquiry through our platform, we collect your name, email address, company details, estimated budget, and project requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0E1015] font-display">3. Security Standards</h2>
            <p>
              All communications and project data are handled securely with industry-standard encryption, strict access controls, and adherence to modern web security best practices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0E1015] font-display">4. Your Rights</h2>
            <p>
              You may request complete deletion or an export of your inquiry history at any time by contacting hello@emmanuel.design.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
