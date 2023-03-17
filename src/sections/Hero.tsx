import React from 'react';
import Button from '../components/UI/Button';
import '../scss/sections/Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img
        src="/images/hero/hero.jpg"
        alt="Hero"
        className="hero__bg"
      />
      <div className="hero__block">
        <div className="block__container">
          <h2 className="block__title">
            Luxury homeware for people who love timeless design quality
          </h2>
          <p className="block__description">
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
          <Button
            text="View collection"
            styles="light"
            className="block__button"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
