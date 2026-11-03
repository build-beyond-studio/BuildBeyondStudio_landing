export type Currency = 'INR' | 'GBP' | 'USD';

export interface ServicePriceItem {
  id: string;
  name: string;
  unit?: string;
  description: string;
  prices: Record<Currency, number>;
}

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  GBP: '£',
  USD: '$',
};

export const PRICING_NOTE = 'Starting prices. Your final fixed quote follows scope review.';

export const PRICING: Record<string, ServicePriceItem> = {
  proofSprint: {
    id: 'proof-sprint',
    name: 'Proof Sprint',
    description: 'One client requirement. Fixed scope, fixed price, 7-10 days. No long contracts.',
    prices: {
      INR: 25000,
      GBP: 590,
      USD: 750,
    },
  },
  website: {
    id: 'website',
    name: 'Website (marketing site, Next.js)',
    description: 'Marketing websites, landing pages, client portals, and web applications scoped and delivered under your agency brand.',
    prices: {
      INR: 40000,
      GBP: 940,
      USD: 1200,
    },
  },
  ecommerce: {
    id: 'ecommerce',
    name: 'E-commerce or headless store',
    description: 'Custom e-commerce stores and headless setups built to sell and convert.',
    prices: {
      INR: 75000,
      GBP: 1950,
      USD: 2500,
    },
  },
  customWebApp: {
    id: 'custom-web-app',
    name: 'Custom web app',
    description: 'Complex web platforms, dashboards, and custom client web tools.',
    prices: {
      INR: 125000,
      GBP: 3120,
      USD: 4000,
    },
  },
  tracking: {
    id: 'tracking-conversion-setup',
    name: 'Tracking and Conversion Setup',
    description: 'GA4, Meta Conversions API (CAPI), and server-side tracking setup.',
    prices: {
      INR: 15000,
      GBP: 350,
      USD: 450,
    },
  },
  dedicatedPod: {
    id: 'dedicated-dev-pod',
    name: 'Dedicated Dev Pod, per month',
    unit: 'per month',
    description: 'One managed developer integrated into your agency workflow.',
    prices: {
      INR: 60000,
      GBP: 1720,
      USD: 2200,
    },
  },
  maintenance: {
    id: 'maintenance',
    name: 'Maintenance, per site per month',
    unit: 'per site / month',
    description: 'Ongoing updates, fixes, security monitoring, and uptime care.',
    prices: {
      INR: 3500,
      GBP: 90,
      USD: 120,
    },
  },
};

/**
 * Format a number using Indian grouping for INR or standard international grouping for GBP/USD
 */
export function formatCurrency(amount: number, currency: Currency): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  if (currency === 'INR') {
    return `${symbol}${amount.toLocaleString('en-IN')}`;
  }
  return `${symbol}${amount.toLocaleString('en-US')}`;
}

