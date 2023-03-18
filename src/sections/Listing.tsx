import React from 'react';
import Product from '../components/Product';
import '../scss/sections/Listing.scss';
import { products } from '../constants';
import Button from '../components/UI/Button';

const Listing: React.FC = () => {
  return (
    <div className="listing">
      <h2 className="listing__title">New Ceramics</h2>
      <div className="listing__items">
        {products.map((product, index) => (
          <Product
            key={index}
            {...product}
          />
        ))}
      </div>
      <Button
        text="View collection"
        styles="light"
        className="listing__button"
      />
    </div>
  );
};

export default Listing;
