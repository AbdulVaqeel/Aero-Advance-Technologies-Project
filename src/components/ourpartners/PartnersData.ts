// ── Partner data ──────────────────────────────────────────────────────────────
export const partners = [
  {
    name: 'Gulfstream',
    logo: 'https://logo.clearbit.com/gulfstream.com',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=480&q=70&auto=format&fit=crop',
    description: 'World leader in business jet manufacturing',
    category: 'Aircraft Manufacturer',
  },
  {
    name: 'Bombardier',
    logo: 'https://logo.clearbit.com/bombardier.com',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=480&q=70&auto=format&fit=crop',
    description: 'Premium business and commercial aircraft',
    category: 'Aircraft Manufacturer',
  },
  {
    name: 'Dassault Falcon',
    logo: 'https://logo.clearbit.com/dassaultfalcon.com',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=70&auto=format&fit=crop',
    description: 'French excellence in business aviation',
    category: 'Aircraft Manufacturer',
  },
  {
    name: 'Honeywell',
    logo: 'https://logo.clearbit.com/honeywell.com',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=480&q=70&auto=format&fit=crop',
    description: 'Aviation electronics & auxiliary power units',
    category: 'Avionics & Systems',
  },
  {
    name: 'Rolls-Royce',
    logo: 'https://logo.clearbit.com/rolls-royce.com',
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=480&q=70&auto=format&fit=crop',
    description: 'World-class aircraft engines',
    category: 'Engine Manufacturer',
  },
  {
    name: 'Garmin',
    logo: 'https://logo.clearbit.com/garmin.com',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=480&q=70&auto=format&fit=crop',
    description: 'Advanced navigation & communication systems',
    category: 'Avionics',
  },
  {
    name: 'Universal Avionics',
    logo: 'https://logo.clearbit.com/uasc.com',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=480&q=70&auto=format&fit=crop',
    description: 'Next-generation flight management systems',
    category: 'Avionics',
  },
  {
    name: 'Signature Flight',
    logo: 'https://logo.clearbit.com/signatureaviation.com',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=480&q=70&auto=format&fit=crop',
    description: 'Global network of FBO services',
    category: 'Ground Services',
  },
];

// Shared type — used by PartnerCard.tsx
export type Partner = (typeof partners)[0];