import React, { useState } from 'react';
import { PageView } from '../types';
import { ArrowUp, ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimator }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#05040a] text-white pt-24 pb-12 border-t border-purple-900/40 relative z-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-purple-900/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large CTA Banner */}
        <div className="bg-gradient-to-r from-purple-950/80 via-[#0e0c24] to-cyan-950/80 p-8 sm:p-14 rounded-3xl border border-purple-500/30 mb-20 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              • START YOUR DIGITAL METAMORPHOSIS •
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              Ready To Build Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-400">
                Expectations?
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenEstimator();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-8 py-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all flex items-center gap-2"
              data-cursor="hover"
            >
              <span>Scope Estimator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onNavigate('contact');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-8 py-4 text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/20 rounded-full transition-all"
              data-cursor="hover"
            >
              Contact Studio
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-purple-900/30">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center font-mono font-bold text-purple-300">
                NX
              </div>
              <span className="font-extrabold text-xl text-white font-sans">NEXORA Studio</span>
            </div>

            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              Award-winning digital agency engineering spatial WebGL experiences, luxury e-commerce, and generative AI platforms.
            </p>

            <div className="pt-2 text-[10px] font-mono text-purple-300">
              © 2025 NEXORA STUDIO INC. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-2">PAGES</div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">Work</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About Story</button></li>
              <li><button onClick={() => onNavigate('insights')} className="hover:text-white transition-colors">Insights</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">Careers</button></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2">GOVERNANCE</div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
              <li><a href="#hero" onClick={scrollToTop} className="hover:text-white transition-colors">Back to Top</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono font-bold text-pink-300 uppercase tracking-wider mb-2">THE NEXORA JOURNAL</div>
            <p className="text-xs text-gray-400">
              Receive monthly breakdowns on WebGL shader performance, Next.js 15, and luxury digital design.
            </p>

            {subscribed ? (
              <div className="text-xs font-bold text-emerald-400 bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/30">
                ✓ Subscribed to NEXORA Journal.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter work email..."
                  className="flex-1 bg-white/5 border border-purple-500/30 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
                <button type="submit" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-colors">
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>Crafted with precision by NEXORA Studio</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-purple-950 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all"
            data-cursor="hover"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
