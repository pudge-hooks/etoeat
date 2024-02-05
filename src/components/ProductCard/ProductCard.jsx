import './ProductCard.scss';

import { useCart } from '../../data/CartContext';

import Container from '../Container/Container';

const ProductCard = ({ product, isProductSelected, setSelectedProducts }) => {
  const handleProductSelect = (productId, isSelected) => {
    setSelectedProducts(prevSelectedProducts => ({
      ...prevSelectedProducts,
      [productId]: isSelected,
    }));
  };

  const { addToCart } = useCart();

  const handleAddToCart = productId => addToCart(productId);

  return (
    <section className="products__item scroll-snap__item">
      <img
        src={product.img}
        alt={product.name}
        className="products__image"
        onClick={() => handleProductSelect(product.id, true)}
      />
      <div
        className={`products__info-wrapper ${isProductSelected ? 'show' : ''}`}
      >
        <div className="products__bg-overlay"></div>
        <div
          className="products__info-content"
          onClick={() => handleProductSelect(product.id, false)}
        >
          <Container className="products__container">
            <div
              className={`products__info ${isProductSelected ? 'slide-in' : 'slide-out'}`}
            >
              <h3 className="products__title">{product.name}</h3>
              <p className="products__description">{product.compound}</p>
              <div className="products__price-weight">
                <span className="products__span">({product.weight} грам)</span>
                <span className="products__span">{product.price} грн</span>
              </div>
              <button
                className="products__button"
                onClick={() => {
                  handleProductSelect(product.id, false);
                  handleAddToCart(product.id);
                }}
              >
                Додати до замовлення
              </button>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
