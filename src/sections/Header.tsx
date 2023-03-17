import React from 'react';
import '../scss/sections/Header.scss';
import { headerLinks } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <img
          src="icons/header/search.svg"
          alt="Search"
          className="header__search"
        />
        <h2 className="header__title">Avion</h2>
        <img
          src="icons/header/cart.svg"
          alt="Cart"
          className="header__cart"
        />
        <img
          src="icons/header/menu.svg"
          alt="header__menu"
          className="header__menu"
        />
      </div>
      <div className="header__bottom">
        <div className="header__links">
          {headerLinks.map((link, index) => (
            <a
              key={index}
              className="header__link"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
