import React, { useState } from 'react';
import { ESTIMATOR_OPTIONS } from '../data/portfolioData';
import { Calculator, X, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

interface ProjectEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState<string>('type-website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['feat-seo', 'feat-anim']);
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

  // Calculations
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
    <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[var(--bg-surface)] border border-blue-500/40 rounded-3xl max-w-4xl w-full p-6 sm:p-10 relative max-h-[92vh] overflow-y-auto shadow-2xl text-[var(--text-main)]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border-color)] mb-8 font-heading">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Calculator className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Project Scope & Cost Calculator</h2>
              <p className="text-xs text-blue-400 font-mono">Calculate estimated project timeline and budget range</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[var(--text-main)] flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-16 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading">Estimate Brief Received!</h3>
            <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto font-body">
              Thank you <span className="text-blue-400 font-bold">{clientName}</span>. Alexander Vance will review your brief (${totalPrice.toLocaleString()} estimated) and respond to <span className="text-cyan-400 font-bold">{clientEmail}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-xs font-heading"
            >
              Close Calculator
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-3 font-heading">
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
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isSel
                            ? 'bg-blue-950/80 border-blue-400 text-white shadow-lg'
                            : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-main)]'
                        }`}
                      >
                        <div className="text-xs font-bold font-heading">{opt.name}</div>
                        <div className="text-[10px] text-blue-300 font-mono mt-1">
                          From ${opt.price.toLocaleString()} • ~{Math.ceil(opt.timeDays / 7)}wks
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Add-on Features */}
              <div>
                <label className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-3 font-heading">
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
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                          isChecked
                            ? 'bg-cyan-950/70 border-cyan-400 text-white'
                            : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)]'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold font-heading">{opt.name}</div>
                          <div className="text-[9px] text-cyan-300 font-mono">+${opt.price.toLocaleString()}</div>
                        </div>

                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                          isChecked ? 'bg-cyan-500 border-cyan-400 text-black font-bold' : 'border-[var(--border-color)]'
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
                <label className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-3 font-heading">
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
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSel
                            ? 'bg-indigo-950/70 border-indigo-400 text-white'
                            : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-surface)]'
                        }`}
                      >
                        <div className="text-xs font-semibold font-heading">{opt.name}</div>
                        <div className="text-[10px] text-indigo-300 font-mono">
                          {opt.price > 0 ? `+$${opt.price.toLocaleString()}` : 'Standard Delivery'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Box & Brief Form */}
            <div className="lg:col-span-5 bg-[var(--bg-main)] p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] flex flex-col justify-between shadow-2xl">
              <div>
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-6 font-heading">
                  ESTIMATED INVESTMENT SUMMARY
                </div>

                <div className="space-y-4 mb-8 font-body">
                  <div className="flex justify-between items-baseline border-b border-[var(--border-color)] pb-3">
                    <span className="text-xs text-[var(--text-muted)]">Base Website Package:</span>
                    <span className="text-sm font-mono font-bold text-[var(--text-main)]">${basePrice.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-[var(--border-color)] pb-3">
                    <span className="text-xs text-[var(--text-muted)]">Add-On Modules ({featureOpts.length}):</span>
                    <span className="text-sm font-mono font-bold text-cyan-400">+${featuresPrice.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-[var(--border-color)] pb-3">
                    <span className="text-xs text-[var(--text-muted)]">Timeline Priority:</span>
                    <span className="text-sm font-mono font-bold text-indigo-400">+${speedPrice.toLocaleString()}</span>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs text-blue-400 font-mono">ESTIMATED TOTAL:</div>
                    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 font-mono mt-1">
                      ${totalPrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] font-mono mt-1">
                      Estimated Duration: <span className="text-[var(--text-main)] font-bold">{totalWeeks} Weeks</span>
                    </div>
                  </div>
                </div>

                {/* Direct Brief Form */}
                <form onSubmit={handleSubmitBrief} className="space-y-3 pt-4 border-t border-[var(--border-color)] font-body">
                  <div>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Your Name / Company"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 font-heading"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Estimate Brief</span>
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
