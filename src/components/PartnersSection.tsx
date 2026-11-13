import React from 'react';
import { Sparkles, Building2, Globe2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const PARTNERS_DATA = [
  {
    name: "Bright Future Academy",
    industry: "Education & Academy",
    location: "London, UK",
    collaboration: "Flagship Web Portal & CMS",
    year: "2024 - Present"
  },
  {
    name: "Apex Global Freight",
    industry: "Logistics & Fleet Operations",
    location: "Rotterdam, NL",
    collaboration: "Real-time Tracking & UI/UX",
    year: "2024 - Present"
  },
  {
    name: "Vance & Sterling Law",
    industry: "Corporate & Private Legal",
    location: "New York, USA",
    collaboration: "Brand Identity & Web Presence",
    year: "2023 - Present"
  },
  {
    name: "Maison de Luxe",
    industry: "Ultra-Luxury Real Estate",
    location: "Paris, FR",
    collaboration: "WooCommerce & Editorial UI",
    year: "2024 - Present"
  },
  {
    name: "Nexus Enterprise Cloud",
    industry: "B2B SaaS & Data Systems",
    location: "San Francisco, USA",
    collaboration: "Design System & Landing Funnel",
    year: "2023 - Present"
  },
  {
    name: "Aetheria Health",
    industry: "Biotech & Healthcare",
    location: "Zurich, CH",
    collaboration: "Accessible WordPress Portal",
    year: "2024 - Present"
  },
  {
    name: "Lumina Architecture",
    industry: "Modern Spatial Design",
    location: "Stockholm, SE",
    collaboration: "Minimalist Portfolio & 3D Web",
    year: "2024 - Present"
  },
  {
    name: "Vertex Private Wealth",
    industry: "Asset Management & Capital",
    location: "Singapore, SG",
    collaboration: "Institutional Web Platform",
    year: "2025 - Present"
  }
];

export const PartnersSection: React.FC = () => {
  return (
    <section
      id="partners"
      className="relative w-full bg-[#EDEDEE] text-[#0E1015] py-24 sm:py-32 lg:py-36 px-6 sm:px-10 overflow-hidden border-t border-black/[0.08]"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-white/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-8">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
              <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
                06 / PARTNERS & GLOBAL CLIENTS
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015]">
              TRUSTED BY <br />
              VISIONARY <span className="text-[#FF7A00]">BRANDS.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#5B606D] font-display leading-relaxed mb-4">
              Collaborating with forward-thinking enterprises, ambitious startups, and distinguished institutions worldwide to engineer digital excellence.
            </p>
            <div className="flex items-center gap-2 text-xs font-display font-semibold text-[#FF7A00]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Client Retention on Annual Retainers</span>
            </div>
          </div>

        </div>

        {/* Partners 8-Card Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS_DATA.map((partner, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-black/[0.08] hover:border-[#FF7A00]/40 transition-all duration-300 group hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between"
              data-cursor="hover"
            >
              <div>
                {/* Logo & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F6F8] border border-black/[0.06] flex items-center justify-center text-[#FF7A00] group-hover:bg-[#0E1015] group-hover:text-white transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#5B606D] uppercase">
                    /0{idx + 1}
                  </span>
                </div>

                {/* Partner Name */}
                <h3 className="text-lg font-bold font-display uppercase text-[#0E1015] group-hover:text-[#FF7A00] transition-colors mb-2">
                  {partner.name}
                </h3>

                {/* Industry */}
                <div className="text-xs font-mono text-[#5B606D] uppercase tracking-wider mb-4">
                  {partner.industry}
                </div>

                {/* Collaboration Detail */}
                <p className="text-xs text-[#5B606D] font-sans leading-relaxed">
                  {partner.collaboration}
                </p>
              </div>

              {/* Bottom Footer Info */}
              <div className="pt-5 mt-6 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#5B606D]">
                <div className="flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>{partner.location}</span>
                </div>
                <span className="text-[#FF7A00] font-semibold">{partner.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
