import React from 'react';
import About from '../sections/About';
import Filters from '../sections/Filters';
import Heading from '../sections/Heading';
import Products from '../sections/Products';

const ProductsPage: React.FC = () => {
  return (
    <>
      {/* <Heading text="View all products" /> */}
      <Filters />
      <Products />
      <About
        title="Join the club and get the benefits"
        text="Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more"
        order="reversed"
        imgUrl="/images/about/02.jpg"
        element="input"
      />
    </>
  );
};

export default ProductsPage;
