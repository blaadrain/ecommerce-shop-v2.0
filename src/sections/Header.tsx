import React from 'react';
import '../scss/sections/Header.scss';
import { categories } from '../constants';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Link
          to="/"
          className="header__title"
        >
          Avion
        </Link>
        <nav className="header__navbar">
          <Link
            to="/about"
            className="header__about"
          >
            About us
          </Link>
          <img
            src="images/header/search.svg"
            alt="Search"
            className="header__search"
          />
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
        </nav>
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
