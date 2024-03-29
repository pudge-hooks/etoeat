import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import './CategoryCard.scss';

const CategoryCard = ({ category, link }) => {
  return (
    <section className="category-card scroll-snap__item">
      <img
        className="category-card__image"
        src={category.img}
        alt="category_background"
      />
      <Container className="category-card__container">
        <h2 className="category-card__title">{category.name}</h2>
        <Link to={link} className="category-card__button">
          Обрати категорію →
        </Link>
      </Container>
    </section>
  );
};

export default CategoryCard;
