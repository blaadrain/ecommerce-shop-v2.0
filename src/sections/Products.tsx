import React from 'react';
import '../scss/sections/Products.scss';

import Product from '../components/Product';
import Button from '../components/UI/Button';
import Loader from '../components/UI/Loader';

import { useSelector } from 'react-redux';
import { fetchProducts } from '../store/products/slice';
import { selectProducts } from '../store/products/selectors';
import { useAppDispatch } from '../store/store';

type ProductsProps = {
  title: string;
};

const Products: React.FC<ProductsProps> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectProducts);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = items.map((product: Product, index: number) => (
    <Product
      key={product.id}
      {...product}
    />
  ));

  return (
    <div className="listing">
      <h2 className="listing__title">{title}</h2>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <div className="loader">Some error occured while loading.</div>
      ) : (
        <div className="listing__items">{products}</div>
      )}
      <Button
        text="View collection"
        color="#2A254B"
        background="#F9F9F9"
        className="listing__button"
      />
    </div>
  );
};

export default Products;
