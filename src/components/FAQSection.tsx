import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  return (
    <section id="faq" className="py-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 font-heading">
            • FREQUENTLY ASKED QUESTIONS •
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight font-heading">
            Got Questions? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Clear, Honest Answers.
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[var(--bg-surface)] border-blue-500/50 shadow-xl'
                    : 'bg-[var(--bg-surface)]/60 border-[var(--border-color)] hover:border-blue-500/30'
                }`}
              >
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setOpenId(isOpen ? '' : faq.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading"
                  data-cursor="hover"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-[var(--text-muted)]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-color)] font-body animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
