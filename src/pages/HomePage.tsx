import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Products from '../sections/Products';
import SignUp from '../sections/SignUp';
import About from '../sections/About';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <SignUp />
      <About title="From a studio in London to a global brand with over 400 outlets" />
    </>
  );
};

export default HomePage;
