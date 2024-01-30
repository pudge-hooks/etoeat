import './Products.scss';

import Container from '../../components/Container/Container';

const Products = ({ productsArray }) => {
  return (
    <section className="products">
      <ul className="products__list">
        {productsArray.map(({ id, name, compound, weight, price, img }) => {
          return (
            <li key={id} className="products__item">
              <img src={img} alt={name} className="products__image" />
              <div className="products__bg-overlay"></div>
              <Container className="products__container">
                <div className="products__info">
                  <h3 className="products__title">{name}</h3>
                  <p className="products__description">{compound}</p>
                  <div className="products__price-weight">
                    <span className="products__span">({weight} грам)</span>
                    <span className="products__span">{price} грн</span>
                  </div>
                  <div className="products__price-weight">
                    <span className="products__span">к-сть: - 1 +</span>
                    <button className="products__button">
                      Додати до замовлення
                    </button>
                  </div>
                </div>
              </Container>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
