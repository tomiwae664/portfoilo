import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCalendly?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCalendly }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Website Design');
  const [budget, setBudget] = useState('$1,800 - $3,500');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 overflow-hidden transition-colors duration-300">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 font-heading">
            • GET IN TOUCH •
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight font-heading">
            Let’s Build Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              High-Performing Website.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border-color)] shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-main)] font-heading">Contact Details</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-body">
                Have a project in mind, need a custom quote, or want to discuss a redesign? Reach out directly via form or email, or book a 15-minute consultation.
              </p>
              
              <div className="space-y-4 text-xs font-body">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-blue-500/40 transition-all group"
                >
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[var(--text-main)] font-heading">EMAIL ME</div>
                    <div className="text-blue-400 font-mono mt-0.5">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all group"
                >
                  <MessageSquare className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[var(--text-main)] font-heading">WHATSAPP & PHONE</div>
                    <div className="text-cyan-400 font-mono mt-0.5">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                {onOpenCalendly && (
                  <button
                    onClick={onOpenCalendly}
                    className="w-full flex items-center gap-3 p-4 rounded-2xl bg-blue-600/10 border border-blue-500/30 hover:border-blue-400 transition-all group text-left"
                  >
                    <Calendar className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[var(--text-main)] font-heading">SCHEDULE A CALL</div>
                      <div className="text-indigo-400 font-mono text-[11px] mt-0.5">Pick a slot on my calendar</div>
                    </div>
                  </button>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] font-mono">
                Location: {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[var(--bg-surface)] p-8 sm:p-10 rounded-3xl border border-[var(--border-color)] shadow-2xl relative">
            
            {submitted ? (
              <div className="py-16 text-center space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto font-body">
                  Thank you <span className="text-blue-400 font-bold">{name}</span>. I have received your project details and will email you at <span className="text-cyan-400 font-bold">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-xs font-heading"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-body">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-2 font-heading">
                      YOUR NAME / BRAND:
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Marcus Rothschild"
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] focus:border-blue-400 rounded-xl px-4 py-3 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-2 font-heading">
                      EMAIL ADDRESS:
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="marcus@company.com"
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] focus:border-blue-400 rounded-xl px-4 py-3 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2 font-heading">
                      PROJECT CATEGORY:
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] focus:border-blue-400 rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:outline-none transition-colors"
                    >
                      <option value="Website Design">Bespoke Website Design</option>
                      <option value="WordPress Development">Custom WordPress Theme / Elementor</option>
                      <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                      <option value="Landing Pages">High-Converting Landing Page</option>
                      <option value="WooCommerce">WooCommerce E-Commerce Store</option>
                      <option value="Website Redesign">Complete Website Redesign</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-2 font-heading">
                      ESTIMATED BUDGET:
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] focus:border-blue-400 rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:outline-none transition-colors"
                    >
                      <option value="$1,200 - $1,800">$1,200 - $1,800 (Landing Page)</option>
                      <option value="$1,800 - $3,500">$1,800 - $3,500 (Custom Website)</option>
                      <option value="$3,500 - $6,000">$3,500 - $6,000 (E-Commerce / Web App)</option>
                      <option value="$6,000+">$6,000+ (Enterprise Scale)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-2 font-heading">
                    PROJECT GOALS & REQUIREMENTS:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your business, current website, goals, and target launch timeline..."
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] focus:border-blue-400 rounded-xl p-4 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-2xl transition-all flex items-center justify-center gap-2 group font-heading"
                  data-cursor="hover"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Send Project Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};
