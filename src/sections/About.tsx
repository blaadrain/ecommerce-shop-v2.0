import React from 'react';
import Button from '../components/UI/Button';
import '../scss/sections/About.scss';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__container">
          <h3 className="about__title">
            From a studio in London to a global brand with over 400 outlets
          </h3>
          <p className="about__text">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="about__text--second">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <Button
            text="Get in touch"
            color="#2a254b"
            background="#f9f9f9"
            className="about__button"
          />
        </div>
      </div>
      <img
        src="/images/about/about.jpg"
        className="about__img"
      />
    </div>
  );
};

export default About;
