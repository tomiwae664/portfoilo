import React, { useState } from 'react';
import { ESTIMATOR_OPTIONS } from '../data/portfolioData';
import { Calculator, X, Check, Send, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';
import { useCurrency } from '../context/CurrencyContext';
import { CurrencySelector } from './CurrencySelector';

interface ProjectEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ isOpen, onClose }) => {
  const { formatPrice, currency } = useCurrency();
  const [selectedType, setSelectedType] = useState<string>('type-wordpress');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['feat-ai-chat']);
  const [selectedSpeed, setSelectedSpeed] = useState<string>('speed-std');

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleFeature = (id: string) => {
    soundFx.playClick();
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const typeOpt = ESTIMATOR_OPTIONS.find((o) => o.id === selectedType);
  const speedOpt = ESTIMATOR_OPTIONS.find((o) => o.id === selectedSpeed);
  const featureOpts = ESTIMATOR_OPTIONS.filter((o) => selectedFeatures.includes(o.id));

  const basePrice = typeOpt ? typeOpt.price : 0;
  const featuresPrice = featureOpts.reduce((sum, f) => sum + f.price, 0);
  const speedPrice = speedOpt ? speedOpt.price : 0;
  const totalPrice = basePrice + featuresPrice + speedPrice;

  const baseDays = typeOpt ? typeOpt.timeDays : 0;
  const featuresDays = featureOpts.reduce((sum, f) => sum + f.timeDays, 0);
  const speedDays = speedOpt ? speedOpt.timeDays : 0;
  const totalDays = Math.max(7, baseDays + featuresDays + speedDays);
  const totalWeeks = Math.ceil(totalDays / 7);

  const handleSubmitBrief = (e: React.FormEvent) => {
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
    <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white border border-black/[0.08] rounded-3xl max-w-4xl w-full p-6 sm:p-10 relative max-h-[92vh] overflow-y-auto shadow-2xl text-[#0E1015]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-black/[0.08] mb-8 gap-4 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00] shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0E1015] font-display">Scope & Investment Calculator</h2>
              <p className="text-xs text-[#FF7A00] font-mono font-medium">Calculate estimated project timeline and budget range</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* Currency Selector inside Calculator */}
            <div className="hidden sm:flex items-center gap-2 bg-[#F5F6F8] px-3 py-1.5 rounded-full border border-black/[0.06]">
              <span className="text-[11px] font-display text-[#5B606D]">Currency:</span>
              <CurrencySelector variant="compact" />
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-[#F5F6F8] hover:bg-[#0E1015] hover:text-white text-[#0E1015] flex items-center justify-center transition-all cursor-pointer shadow-sm shrink-0"
              aria-label="Close estimator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Currency Selector Bar */}
        <div className="sm:hidden flex items-center justify-between bg-[#F5F6F8] px-3.5 py-2 rounded-xl border border-black/[0.06] mb-6">
          <span className="text-xs font-display text-[#5B606D]">Select Currency:</span>
          <CurrencySelector variant="compact" />
        </div>

        {submitted ? (
          <div className="py-16 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#FF7A00]/15 rounded-full border border-[#FF7A00] text-[#FF7A00] flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[#0E1015] font-display">Estimate Brief Received</h3>
            <p className="text-sm text-[#5B606D] max-w-md mx-auto">
              Thank you <span className="text-[#FF7A00] font-bold">{clientName}</span>. Emmanuel will review your requirements ({formatPrice(totalPrice)} estimated) and reply to <span className="text-[#0E1015] font-bold">{clientEmail}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] font-bold text-xs uppercase tracking-wider font-display cursor-pointer shadow-md"
            >
              Close Calculator
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider block mb-3 font-display">
                  1. SELECT PROJECT TYPE:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ESTIMATOR_OPTIONS.filter((o) => o.category === 'type').map((opt) => {
                    const isSel = selectedType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedType(opt.id);
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSel
                            ? 'bg-[#FF7A00]/10 border-[#FF7A00] text-[#0E1015] shadow-sm'
                            : 'bg-[#F5F6F8] border-black/[0.06] text-[#5B606D] hover:border-black/20'
                        }`}
                      >
                        <div className="text-xs font-bold font-display text-[#0E1015]">{opt.name}</div>
                        <div className="text-[10px] text-[#FF7A00] font-mono mt-1 font-bold">
                          From {formatPrice(opt.price)} • ~{Math.ceil(opt.timeDays / 7)}wks
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Add-on Features */}
              <div>
                <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider block mb-3 font-display">
                  2. ADD-ON MODULES & FEATURES:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ESTIMATOR_OPTIONS.filter((o) => o.category === 'feature').map((opt) => {
                    const isChecked = selectedFeatures.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleFeature(opt.id)}
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-[#FF7A00]/10 border-[#FF7A00] text-[#0E1015]'
                            : 'bg-[#F5F6F8] border-black/[0.06] text-[#5B606D] hover:border-black/20'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold text-[#0E1015]">{opt.name}</div>
                          <div className="text-[9px] text-[#FF7A00] font-mono font-bold">+{formatPrice(opt.price)}</div>
                        </div>

                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                          isChecked ? 'bg-[#FF7A00] border-[#FF7A00] text-[#0E1015] font-bold' : 'border-black/20 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Sprint Delivery Speed */}
              <div>
                <label className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider block mb-3 font-display">
                  3. TIMELINE PRIORITY:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {ESTIMATOR_OPTIONS.filter((o) => o.category === 'speed').map((opt) => {
                    const isSel = selectedSpeed === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedSpeed(opt.id);
                        }}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSel
                            ? 'bg-[#FF7A00]/10 border-[#FF7A00] text-[#0E1015]'
                            : 'bg-[#F5F6F8] border-black/[0.06] text-[#5B606D] hover:border-black/20'
                        }`}
                      >
                        <div className="text-xs font-semibold text-[#0E1015]">{opt.name}</div>
                        <div className="text-[10px] text-[#FF7A00] font-mono font-bold">
                          {opt.price > 0 ? `+${formatPrice(opt.price)}` : 'Standard Timeline'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Box & Brief Form */}
            <div className="lg:col-span-5 bg-[#F5F6F8] p-6 sm:p-8 rounded-3xl border border-black/[0.08] flex flex-col justify-between shadow-lg">
              <div>
                <div className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-widest mb-6 font-display">
                  ESTIMATED INVESTMENT SUMMARY
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-baseline border-b border-black/[0.06] pb-3">
                    <span className="text-xs text-[#5B606D]">Base Website:</span>
                    <span className="text-sm font-mono font-bold text-[#0E1015]">{formatPrice(basePrice)}</span>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-black/[0.06] pb-3">
                    <span className="text-xs text-[#5B606D]">Add-Ons ({featureOpts.length}):</span>
                    <span className="text-sm font-mono font-bold text-[#FF7A00]">+{formatPrice(featuresPrice)}</span>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-black/[0.06] pb-3">
                    <span className="text-xs text-[#5B606D]">Timeline Priority:</span>
                    <span className="text-sm font-mono font-bold text-[#FF7A00]">+{formatPrice(speedPrice)}</span>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs text-[#5B606D] font-mono uppercase">ESTIMATED TOTAL:</div>
                    <div className="text-3xl font-extrabold text-[#FF7A00] font-display mt-1">
                      {formatPrice(totalPrice)}
                    </div>
                    <div className="text-xs text-[#5B606D] font-mono mt-1">
                      Estimated Duration: <span className="text-[#0E1015] font-bold">{totalWeeks} Weeks</span>
                    </div>
                  </div>
                </div>

                {/* Direct Brief Form */}
                <form onSubmit={handleSubmitBrief} className="space-y-3 pt-4 border-t border-black/[0.06]">
                  <div>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Your Name / Company"
                      className="w-full bg-white border border-black/[0.08] rounded-xl px-4 py-2.5 text-xs text-[#0E1015] placeholder-[#5B606D]/50 focus:outline-none focus:border-[#FF7A00]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-white border border-black/[0.08] rounded-xl px-4 py-2.5 text-xs text-[#0E1015] placeholder-[#5B606D]/50 focus:outline-none focus:border-[#FF7A00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-[#0E1015] bg-[#FF7A00] hover:bg-[#FF8F26] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 font-display cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Scope</span>
                  </button>
                </form>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
