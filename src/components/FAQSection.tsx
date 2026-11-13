import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#EDEDEE] text-[#0E1015] relative z-10 overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
              09 / TRANSPARENCY & CLARITY
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] uppercase">
            FREQUENTLY ASKED <br />
            <span className="text-[#FF7A00]">QUESTIONS.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const faqKey = faq.id || `faq-${idx + 1}`;
            const isOpen = openId === faqKey;

            return (
              <div
                key={faqKey}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#FF7A00]/50 shadow-[0_15px_35px_rgba(0,0,0,0.04)]'
                    : 'bg-white/70 border-black/[0.08] hover:border-black/20 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setOpenId(isOpen ? '' : faqKey);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display cursor-pointer"
                  data-cursor="hover"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FF7A00] shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-[#0E1015] font-display tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-[#FF7A00] text-white border-[#FF7A00] rotate-180'
                        : 'bg-[#F5F6F8] text-[#5B606D] border-black/[0.08]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5B606D] leading-relaxed border-t border-black/[0.06] font-display animate-in fade-in duration-200">
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
