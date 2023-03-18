import React from 'react';
import Input from '../components/UI/Input';
import '../scss/sections/Footer.scss';
import { categories, menu, info, footerIcons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__content">
          <ul className="footer__menu">
            <li className="menu__title">Menu</li>
            {menu.map((item, index) => (
              <li
                key={index}
                className="item"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="footer__categories">
            <li className="categories__title">Categories</li>
            {categories.map((item, index) => (
              <li
                key={index}
                className="item"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="footer__info">
            <li className="info__title">Our company</li>
            {info.map((item, index) => (
              <li
                key={index}
                className="item"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__form">
          <p className="form__title">Join our mailing list</p>
          <Input
            text="your@email.com"
            color="#FFFFFF"
            background="rgba(255, 255, 255, 0.15)"
            textButton="Sign up"
            colorButton="#2a254b"
            backgroundButton="#FFFFFF"
            className="form__input"
          />
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copyright">Copyright 2022 Avion LTD</span>
        <div className="footer__links">
          {footerIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="Link"
              className="footer__link"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
