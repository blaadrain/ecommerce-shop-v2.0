import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Listing from '../sections/Listing';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Listing />
    </>
  );
};

export default HomePage;
