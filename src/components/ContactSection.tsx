import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, MapPin, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useCurrency } from '../context/CurrencyContext';

interface ContactSectionProps {
  onOpenCalendly?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const { formatPrice, currency } = useCurrency();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('WordPress & Elementor');
  const [budgetTier, setBudgetTier] = useState('tier-starter');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    { id: 'tier-starter', label: `${formatPrice(500)} – ${formatPrice(800)} (Starter Website / Setup / AI Bot)` },
    { id: 'tier-standard', label: `${formatPrice(800)} – ${formatPrice(1500)} (WordPress / Webflow / Squarespace Build)` },
    { id: 'tier-ecommerce', label: `${formatPrice(1500)} – ${formatPrice(2500)} (Shopify Store / Full Workflow Automation)` },
    { id: 'tier-custom', label: `${formatPrice(2500)}+ (Complete Custom Site + AI Suite)` }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-white/60 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
          <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
            10 / GET IN TOUCH & COLLABORATE
          </span>
        </div>

        {/* Big Editorial Heading */}
        <div className="mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] mb-6">
            READY TO BUILD <br />
            <span className="text-[#FF7A00]">SOMETHING GREAT?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B606D] max-w-2xl font-display leading-relaxed">
            Have a project in mind, need a website redesign, or want to collaborate? Let's talk.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-black/[0.08] space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
              <h3 className="text-xl font-bold font-display text-[#0E1015]">Direct Inquiries</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F6F8] border border-black/[0.06] hover:border-[#FF7A00]/40 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#FF7A00] shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono text-[#5B606D] uppercase tracking-wider">EMAIL ME</div>
                    <div className="text-sm font-semibold text-[#0E1015] group-hover:text-[#FF7A00] transition-colors">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F6F8] border border-black/[0.06] hover:border-[#FF7A00]/40 transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-[#FF7A00] shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono text-[#5B606D] uppercase tracking-wider">WHATSAPP / PHONE</div>
                    <div className="text-sm font-semibold text-[#0E1015] group-hover:text-[#FF7A00] transition-colors">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F6F8] border border-black/[0.06]">
                  <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono text-[#5B606D] uppercase tracking-wider">LOCATION</div>
                    <div className="text-sm font-semibold text-[#0E1015]">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-black/[0.06]">
                <div className="text-xs font-mono text-[#FF7A00] uppercase tracking-widest font-bold mb-4">
                  CONNECT ACROSS PLATFORMS
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-mono text-[#0E1015] bg-[#F5F6F8] border border-black/[0.08] hover:border-[#FF7A00] hover:text-[#FF7A00] hover:bg-white transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={PERSONAL_INFO.behance}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-mono text-[#0E1015] bg-[#F5F6F8] border border-black/[0.08] hover:border-[#FF7A00] hover:text-[#FF7A00] hover:bg-white transition-colors"
                  >
                    Behance ↗
                  </a>
                  <a
                    href={PERSONAL_INFO.dribbble}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-mono text-[#0E1015] bg-[#F5F6F8] border border-black/[0.08] hover:border-[#FF7A00] hover:text-[#FF7A00] hover:bg-white transition-colors"
                  >
                    Dribbble ↗
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-mono text-[#0E1015] bg-[#F5F6F8] border border-black/[0.08] hover:border-[#FF7A00] hover:text-[#FF7A00] hover:bg-white transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={PERSONAL_INFO.upwork}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-mono text-[#0E1015] bg-[#F5F6F8] border border-black/[0.08] hover:border-[#FF7A00] hover:text-[#FF7A00] hover:bg-white transition-colors"
                  >
                    Upwork ↗
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] shadow-[0_20px_45px_rgba(0,0,0,0.05)]">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00] text-[#FF7A00] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0E1015]">Message Received</h3>
                <p className="text-sm text-[#5B606D] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#FF7A00] font-bold">{name}</span>. I have received your project details and will reply to <span className="text-[#0E1015] font-bold">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] font-bold text-xs uppercase tracking-wider font-display cursor-pointer shadow-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider block mb-2">
                      YOUR NAME / BRAND
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-[#F5F6F8] border border-black/[0.08] focus:border-[#FF7A00] focus:bg-white rounded-xl px-4 py-3 text-xs text-[#0E1015] placeholder-[#5B606D]/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider block mb-2">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alexander@company.com"
                      className="w-full bg-[#F5F6F8] border border-black/[0.08] focus:border-[#FF7A00] focus:bg-white rounded-xl px-4 py-3 text-xs text-[#0E1015] placeholder-[#5B606D]/60 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider block mb-2">
                      SERVICE REQUIRED
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#F5F6F8] border border-black/[0.08] focus:border-[#FF7A00] focus:bg-white rounded-xl px-4 py-3 text-xs text-[#0E1015] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="WordPress & Elementor">WordPress & Elementor</option>
                      <option value="Shopify E-Commerce">Shopify E-Commerce</option>
                      <option value="Webflow Development">Webflow Development</option>
                      <option value="Wix & Squarespace">Wix & Squarespace Sites</option>
                      <option value="AI Chatbots & Assistants">AI Chatbots & Virtual Assistants</option>
                      <option value="Automated Support & AI Forms">Automated Support & AI Forms</option>
                      <option value="Workflow Automation">Business Workflow Automation</option>
                      <option value="Personalized UX & AI Tools">Personalized UX & AI Tools</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider">
                        ESTIMATED BUDGET
                      </label>
                      <span className="text-[10px] text-[#5B606D] font-mono">
                        ({currency.code} {currency.flag})
                      </span>
                    </div>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full bg-[#F5F6F8] border border-black/[0.08] focus:border-[#FF7A00] focus:bg-white rounded-xl px-4 py-3 text-xs text-[#0E1015] focus:outline-none transition-colors cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider block mb-2">
                    PROJECT GOALS & TIMELINE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your business, current site, desired features, and target launch date..."
                    className="w-full bg-[#F5F6F8] border border-black/[0.08] focus:border-[#FF7A00] focus:bg-white rounded-xl p-4 text-xs text-[#0E1015] placeholder-[#5B606D]/60 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full py-4 text-xs font-bold uppercase tracking-widest text-[#0E1015] bg-[#FF7A00] hover:bg-[#FF8F26] rounded-full shadow-[0_10px_30px_rgba(255,122,0,0.25)] transition-all flex items-center justify-center gap-3 font-display cursor-pointer active:scale-95"
                  data-cursor="hover"
                >
                  <Send className="w-4 h-4" />
                  <span>START A PROJECT</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
