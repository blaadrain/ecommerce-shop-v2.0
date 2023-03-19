export type Feature = {
  imgUrl: string;
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    imgUrl: '/images/features/delivery.svg',
    title: 'Next day as standard',
    text: 'Order before 3pm and get your order the next day as standard',
  },
  {
    imgUrl: '/images/features/checkmark.svg',
    title: 'Made by true artisans',
    text: 'Handmade crafted goods made with real passion and craftmanship',
  },
  {
    imgUrl: '/images/features/purchase.svg',
    title: 'Unbeatable prices',
    text: 'For our materials and quality you won’t find better prices anywhere',
  },
  {
    imgUrl: '/images/features/sprout.svg',
    title: 'Recycled packaging',
    text: 'We use 100% recycled to ensure our footprint is more manageable',
  },
];

export const categories: string[] = [
  'Plant pots',
  'Ceramics',
  'Tables',
  'Chairs',
  'Crockery',
  'Tableware',
  'Cultery',
];

export const footerIcons: string[] = [
  '/images/footer/linkedin.svg',
  '/images/footer/facebook.svg',
  '/images/footer/instagram.svg',
  '/images/footer/skype.svg',
  '/images/footer/twitter.svg',
  '/images/footer/pinterest.svg',
];

export const menu: string[] = [
  'New arrivals',
  'Best sellers',
  'Recently viewed',
  'Popular this week',
  'All products',
];

export const info: string[] = [
  'About us',
  'Vacancies',
  'Contact us',
  'Privacy',
  'Returns policy',
];
