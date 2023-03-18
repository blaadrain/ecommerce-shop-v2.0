export type Feature = {
  imgUrl: string;
  title: string;
  text: string;
};

export type Product = {
  imgUrl: string;
  title: string;
  price: number;
};

export const headerLinks: string[] = [
  'Plant pots',
  'Ceramics',
  'Tables',
  'Chairs',
  'Crockery',
  'Tableware',
  'Cultery',
];

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

export const products: Product[] = [
  {
    imgUrl: '/images/product/product01.jpg',
    title: 'The Dandy Chair',
    price: 250,
  },
  {
    imgUrl: '/images/product/product02.jpg',
    title: 'Rustic Vase Set',
    price: 155,
  },
  {
    imgUrl: '/images/product/product03.jpg',
    title: 'The Silky Vase',
    price: 125,
  },
  {
    imgUrl: '/images/product/product04.jpg',
    title: 'The Lucy Lamp',
    price: 300,
  },
];
