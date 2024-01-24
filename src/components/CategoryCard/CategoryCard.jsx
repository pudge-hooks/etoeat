import Container from '../Container/Container';
import './CategoryCard.scss';

const CategoryCard = ({ category }) => {
  return (
    <li className="category-card">
      <img
        className="category-card__image"
        src={category.img}
        alt="category_background"
      />
      <Container className="category-card__container">
        <h2 className="category-card__title">{category.name}</h2>
        <button className="category-card__button">Перейти до страв</button>
      </Container>
    </li>
  );
};

export default CategoryCard;
