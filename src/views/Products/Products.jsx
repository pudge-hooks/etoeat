import './Products.scss';

import Container from '../../components/Container/Container';

import { useState } from 'react';
import { useCart } from '../../data/CartContext';

const Products = ({ productsArray }) => {
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleProductSelect = (productId, isSelected) => {
    setSelectedProducts(prevSelectedProducts => ({
      ...prevSelectedProducts,
      [productId]: isSelected,
    }));
  };

  const { addToCart } = useCart();

  const handleAddToCart = productId => addToCart(productId);

  return (
    <section className="products">
      <ul className="products__list">
        {productsArray.map(({ id, name, compound, weight, price, img }) => {
          const isProductSelected = selectedProducts[id];
          return (
            <li key={id} className="products__item">
              <img
                src={img}
                alt={name}
                className="products__image"
                onClick={() => handleProductSelect(id, true)}
              />
              {/* <button
                className="products__details-btn"
                onClick={() => handleProductSelect(id, true)}
              >
                Вибрати
              </button> */}
              <div
                className={`products__info-wrapper ${isProductSelected ? 'show' : ''}`}
              >
                <div className="products__bg-overlay"></div>
                <div
                  className="products__info-content"
                  onClick={() => handleProductSelect(id, false)}
                >
                  <Container className="products__container">
                    <div
                      className={`products__info ${isProductSelected ? 'slide-in' : 'slide-out'}`}
                    >
                      <h3 className="products__title">{name}</h3>
                      <p className="products__description">{compound}</p>
                      <div className="products__price-weight">
                        <span className="products__span">({weight} грам)</span>
                        <span className="products__span">{price} грн</span>
                      </div>
                      <button
                        className="products__button"
                        onClick={() => {
                          handleProductSelect(id, false);
                          handleAddToCart(id);
                        }}
                      >
                        Додати до замовлення
                      </button>
                    </div>
                  </Container>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
