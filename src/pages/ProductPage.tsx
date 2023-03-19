import React from 'react';

import Features from '../sections/Features';
import ProductBlock from '../sections/ProductBlock';
import Products from '../sections/Products';
import SignUp from '../sections/SignUp';

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductBlock />
      <Products title="You might also like" />
      <Features />
      <SignUp />
    </>
  );
};

export default ProductPage;
