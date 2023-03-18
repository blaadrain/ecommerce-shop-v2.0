import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Products from '../sections/Products';
import SignUp from '../sections/SignUp';
import About from '../sections/About';
import Footer from '../sections/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <SignUp />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
