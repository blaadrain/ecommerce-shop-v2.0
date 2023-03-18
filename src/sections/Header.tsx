import React from 'react';
import '../scss/sections/Header.scss';
import { categories } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <img
          src="images/header/search.svg"
          alt="Search"
          className="header__search"
        />
        <h2 className="header__title">Avion</h2>
        <img
          src="images/header/cart.svg"
          alt="Cart"
          className="header__cart"
        />
        <img
          src="images/header/menu.svg"
          alt="header__menu"
          className="header__menu"
        />
      </div>
      <div className="header__bottom">
        <div className="header__links">
          {categories.map((category, index) => (
            <a
              key={index}
              className="header__link"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
