import React, { useState, useRef, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface CurrencySelectorProps {
  variant?: 'navbar' | 'inline' | 'compact';
  className?: string;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const { currency, currencyCode, setCurrencyCode, currenciesList } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    soundFx.playClick();
    setCurrencyCode(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => {
          soundFx.playClick();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => soundFx.playHover()}
        className={`flex items-center gap-1.5 rounded-full transition-all cursor-pointer font-display ${
          variant === 'navbar'
            ? 'px-3 py-1.5 text-xs font-semibold bg-white/90 hover:bg-white border border-black/[0.08] text-[#0E1015] shadow-sm hover:border-[#FF7A00]'
            : variant === 'inline'
            ? 'px-3.5 py-2 text-xs font-semibold bg-[#F5F6F8] hover:bg-white border border-black/[0.08] text-[#0E1015] shadow-xs'
            : 'px-2.5 py-1 text-[11px] font-semibold bg-white border border-black/[0.08] text-[#0E1015]'
        }`}
        title={`Current Currency: ${currency.name} (${currency.code})`}
        aria-expanded={isOpen}
      >
        <span className="text-sm leading-none">{currency.flag}</span>
        <span className="font-bold tracking-tight">{currency.code}</span>
        <span className="text-[10px] text-[#FF7A00] font-mono font-bold">({currency.symbol.trim()})</span>
        <ChevronDown className={`w-3 h-3 text-[#5B606D] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-black/[0.08] shadow-[0_20px_45px_rgba(0,0,0,0.12)] p-2 z-[100] animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-2 border-b border-black/[0.06] mb-1">
            <div className="flex items-center gap-1.5 text-[11px] font-bold font-display uppercase tracking-wider text-[#FF7A00]">
              <Globe className="w-3.5 h-3.5" />
              <span>Select Country & Currency</span>
            </div>
            <p className="text-[10px] text-[#5B606D] font-display mt-0.5">
              All prices update instantly to your region
            </p>
          </div>

          <div className="max-h-60 overflow-y-auto space-y-0.5 py-1">
            {currenciesList.map((c) => {
              const isSelected = c.code === currencyCode;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => handleSelect(c.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#FF7A00]/10 text-[#0E1015] font-bold'
                      : 'hover:bg-[#F5F6F8] text-[#5B606D] hover:text-[#0E1015]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{c.flag}</span>
                    <div>
                      <div className="font-display font-semibold text-[#0E1015] flex items-center gap-1.5">
                        <span>{c.code}</span>
                        <span className="text-[10px] font-mono text-[#FF7A00] font-bold">({c.symbol.trim()})</span>
                      </div>
                      <div className="text-[10px] text-[#747884] font-display">
                        {c.country}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#FF7A00] text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-1 pt-1.5 border-t border-black/[0.06] px-3 py-1 text-center">
            <span className="text-[10px] text-[#747884] font-mono">
              Live equivalent conversion • Base $500+
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
