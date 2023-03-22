import React from 'react';
import '../scss/sections/Header.scss';
import { categories } from '../constants';
import { Link } from 'react-router-dom';

type HeaderProps = {
  cropped?: boolean;
};

const Header: React.FC<HeaderProps> = ({ cropped }) => {
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
            to="/products"
            className="header__products"
          >
            Products
          </Link>
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
      {!cropped && (
        <div className="header__bottom">
          <div className="header__links">
            {categories.map((item, index) => {
              if (item !== 'All')
                return (
                  <Link
                    to="/products"
                    key={index}
                    className="header__link"
                  >
                    {item}
                  </Link>
                );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
