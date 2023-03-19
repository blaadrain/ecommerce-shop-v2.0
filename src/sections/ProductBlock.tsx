import React from 'react';
import axios from 'axios';
import '../scss/sections/ProductBlock.scss';
import { useNavigate, useParams } from 'react-router';
import { Product } from '../store/products/types';
import Button from '../components/UI/Button';
import Loader from '../components/UI/Loader';

const ProductBlock: React.FC = () => {
  const [product, setProduct] = React.useState<Product>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get<Product>(
          `https://6403a6883bdc59fa8f2a61db.mockapi.io/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    }

    fetchProduct();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="product-block">
      {product.id === id ? (
        <>
          <img
            src={product.imgUrl}
            className="product-block__img"
          />
          <div className="product-block__content">
            <div className="product-block__container">
              <h2 className="product-block__title">{product.title}</h2>
              <h3 className="product-block__price">£{product.price}</h3>
              <p className="product-block__description">
                {product.description}
              </p>
              <Button
                text="Add to cart"
                color="#FFF"
                background="#2A254B"
                className="product-block__btn"
              />
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductBlock;
