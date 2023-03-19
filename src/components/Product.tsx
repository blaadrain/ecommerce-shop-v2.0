import React from 'react';
import '../scss/components/Product.scss';
import { Product } from '../store/products/types';

const Product: React.FC<Product> = ({ imgUrl, title, price }) => {
  return (
    <div className="product">
      <img
        src={imgUrl}
        alt={title}
        className="product__img"
      />
      <h4 className="product__title">{title}</h4>
      <p className="product__price">£{price}</p>
    </div>
  );
};

export default Product;
