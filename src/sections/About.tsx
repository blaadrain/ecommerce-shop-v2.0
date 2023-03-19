import React from 'react';
import Button from '../components/UI/Button';
import '../scss/sections/About.scss';

type AboutProps = {
  title: string;
  text: string;
  extraText?: string;
  order: 'default' | 'reversed';
  imgUrl: string;
};

const About: React.FC<AboutProps> = ({
  title,
  text,
  extraText,
  order,
  imgUrl,
}) => {
  return (
    <div className="about">
      <div
        className="about__content"
        style={{ order: order === 'default' ? -1 : 1 }}
      >
        <div
          className="about__container"
          style={{
            textAlign: order === 'default' ? 'left' : 'right',
            alignItems: order === 'default' ? 'start' : 'end',
          }}
        >
          <h3 className="about__title">{title}</h3>
          <p className="about__text">{text}</p>
          <p className="about__text--second">{extraText}</p>
          <Button
            text="Get in touch"
            color="#2a254b"
            background="#f9f9f9"
            className="about__button"
          />
        </div>
      </div>
      <img
        src={imgUrl}
        className="about__img"
      />
    </div>
  );
};

export default About;
