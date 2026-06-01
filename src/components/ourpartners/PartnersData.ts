// ── Partner data ──────────────────────────────────────────────────────────────
export const partners = [
  {
    name: 'Gulfstream',
    logo: 'https://logo.clearbit.com/gulfstream.com',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.gulfstream.description',
    categoryKey: 'partners.cards.gulfstream.category',
  },
  {
    name: 'Bombardier',
    logo: 'https://logo.clearbit.com/bombardier.com',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.bombardier.description',
    categoryKey: 'partners.cards.bombardier.category',
  },
  {
    name: 'Dassault Falcon',
    logo: 'https://logo.clearbit.com/dassaultfalcon.com',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.dassaultFalcon.description',
    categoryKey: 'partners.cards.dassaultFalcon.category',
  },
  {
    name: 'Honeywell',
    logo: 'https://logo.clearbit.com/honeywell.com',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.honeywell.description',
    categoryKey: 'partners.cards.honeywell.category',
  },
  {
    name: 'Rolls-Royce',
    logo: 'https://logo.clearbit.com/rolls-royce.com',
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.rollsRoyce.description',
    categoryKey: 'partners.cards.rollsRoyce.category',
  },
  {
    name: 'Garmin',
    logo: 'https://logo.clearbit.com/garmin.com',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.garmin.description',
    categoryKey: 'partners.cards.garmin.category',
  },
  {
    name: 'Universal Avionics',
    logo: 'https://logo.clearbit.com/uasc.com',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.universalAvionics.description',
    categoryKey: 'partners.cards.universalAvionics.category',
  },
  {
    name: 'Signature Flight',
    logo: 'https://logo.clearbit.com/signatureaviation.com',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=480&q=70&auto=format&fit=crop',
    descriptionKey: 'partners.cards.signatureFlight.description',
    categoryKey: 'partners.cards.signatureFlight.category',
  },
];

export type Partner = {
  name: string;
  logo: string;
  image: string;
  descriptionKey: string;
  categoryKey: string;
};