import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  country: string;
  flag: string;
  rate: number; // multiplier against USD base
  symbolPosition: 'before' | 'after';
  roundTo: number; // rounding step (e.g. 5 for small currencies, 1000 for NGN)
}

export const SUPPORTED_CURRENCIES: Record<string, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    country: 'United States',
    flag: '🇺🇸',
    rate: 1.0,
    symbolPosition: 'before',
    roundTo: 10
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    country: 'European Union',
    flag: '🇪🇺',
    rate: 0.92,
    symbolPosition: 'before',
    roundTo: 10
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rate: 0.78,
    symbolPosition: 'before',
    roundTo: 10
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    country: 'Canada',
    flag: '🇨🇦',
    rate: 1.36,
    symbolPosition: 'before',
    roundTo: 10
  },
  AUD: {
    code: 'AUD',
    symbol: 'A$',
    name: 'Australian Dollar',
    country: 'Australia',
    flag: '🇦🇺',
    rate: 1.52,
    symbolPosition: 'before',
    roundTo: 10
  },
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
    country: 'Nigeria',
    flag: '🇳🇬',
    rate: 1550,
    symbolPosition: 'before',
    roundTo: 1000
  },
  AED: {
    code: 'AED',
    symbol: 'AED ',
    name: 'UAE Dirham',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    rate: 3.67,
    symbolPosition: 'before',
    roundTo: 50
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    name: 'Indian Rupee',
    country: 'India',
    flag: '🇮🇳',
    rate: 83.5,
    symbolPosition: 'before',
    roundTo: 100
  },
  ZAR: {
    code: 'ZAR',
    symbol: 'R ',
    name: 'South African Rand',
    country: 'South Africa',
    flag: '🇿🇦',
    rate: 18.2,
    symbolPosition: 'before',
    roundTo: 50
  }
};

interface CurrencyContextType {
  currency: CurrencyConfig;
  currencyCode: string;
  setCurrencyCode: (code: string) => void;
  formatPrice: (usdAmount: number) => string;
  convertAmount: (usdAmount: number) => number;
  currenciesList: CurrencyConfig[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

function detectUserCurrency(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
    if (tz.includes('lagos') || tz.includes('nigeria') || tz.includes('africa/accra') || tz.includes('africa/lagos')) return 'NGN';
    if (tz.includes('london') || tz.includes('belfast')) return 'GBP';
    if (tz.includes('europe') || tz.includes('berlin') || tz.includes('paris') || tz.includes('amsterdam') || tz.includes('madrid') || tz.includes('rome')) return 'EUR';
    if (tz.includes('toronto') || tz.includes('vancouver') || tz.includes('montreal') || tz.includes('edmonton')) return 'CAD';
    if (tz.includes('sydney') || tz.includes('melbourne') || tz.includes('brisbane') || tz.includes('perth')) return 'AUD';
    if (tz.includes('dubai')) return 'AED';
    if (tz.includes('kolkata') || tz.includes('calcutta') || tz.includes('delhi')) return 'INR';
    if (tz.includes('johannesburg')) return 'ZAR';
  } catch {
    // ignore
  }
  return 'USD';
}

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currencyCode, setCurrencyCodeState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('zenrixa_currency');
      if (saved && SUPPORTED_CURRENCIES[saved]) {
        return saved;
      }
      return detectUserCurrency();
    } catch {
      return 'USD';
    }
  });

  const setCurrencyCode = (code: string) => {
    if (SUPPORTED_CURRENCIES[code]) {
      setCurrencyCodeState(code);
      try {
        localStorage.setItem('zenrixa_currency', code);
      } catch {
        // ignore
      }
    }
  };

  const currentCurrency = SUPPORTED_CURRENCIES[currencyCode] || SUPPORTED_CURRENCIES.USD;

  const convertAmount = (usdAmount: number): number => {
    const raw = usdAmount * currentCurrency.rate;
    // Apply friendly roundTo step
    const step = currentCurrency.roundTo;
    if (step > 1) {
      return Math.round(raw / step) * step;
    }
    return Math.round(raw);
  };

  const formatPrice = (usdAmount: number): string => {
    const converted = convertAmount(usdAmount);
    const formattedNum = converted.toLocaleString();
    if (currentCurrency.symbolPosition === 'after') {
      return `${formattedNum} ${currentCurrency.symbol}`;
    }
    return `${currentCurrency.symbol}${formattedNum}`;
  };

  const currenciesList = Object.values(SUPPORTED_CURRENCIES);

  return (
    <CurrencyContext.Provider
      value={{
        currency: currentCurrency,
        currencyCode,
        setCurrencyCode,
        formatPrice,
        convertAmount,
        currenciesList
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
