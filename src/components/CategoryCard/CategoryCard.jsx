import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import './CategoryCard.scss';

import categoriesMediaData from '../../data/categoriesMedia';

const CategoryCard = ({ category, link }) => {
  return (
    <section className="category-card scroll-snap__item">
      <img
        className="category-card__image"
        src={categoriesMediaData[category.ID]}
        alt="category_background"
      />
      <Container className="category-card__container">
        <h2 className="category-card__title">{category.Name}</h2>
        <Link to={link} className="category-card__button">
          Вибрати →
        </Link>
      </Container>
    </section>
  );
};

export default CategoryCard;
