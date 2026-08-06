import React from 'react';
import { PageView } from '../types';

interface PrivacyPageProps {
  onNavigate: (page: PageView) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#06050e] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase">LEGAL GOVERNANCE</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-2">Privacy Policy</h1>
          <p className="text-xs text-gray-400 font-mono mt-1">Effective Date: January 1, 2025 • NEXORA STUDIO INC.</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#0b0a1a] p-8 rounded-3xl border border-purple-500/20">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Data Minimization Philosophy</h2>
            <p>
              At NEXORA Studio Inc., we respect client and visitor data privacy. We collect only the data necessary to provide scope estimates, fulfill project inquiries, and process direct client communications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              When you submit a brief or contact inquiry through our platform, we collect your name, work email address, company details, estimated project budget, and project requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Security Standards & API Proxies</h2>
            <p>
              All server-side communications and API key integrations (such as Gemini AI model proxies) are protected using enterprise TLS 1.3 encryption, HTTP-only cookie headers, and edge firewall rules on Vercel infrastructure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Your Rights</h2>
            <p>
              You may request complete erasure or export of your inquiry history by contacting privacy@nexorastudio.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
