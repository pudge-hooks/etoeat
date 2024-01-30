import './CategoryBanner.scss';

import Container from '../../components/Container/Container';

import down from '../../assets/svg/arrow-down.svg';

const CategoryBanner = ({ image, name, icon }) => {
  return (
    <section className="category-banner">
      <img src={image} alt={name} className="category-banner__img" />
      <div className="category-banner__bg-overlay"></div>
      <Container className="category-banner__container">
        <img src={icon} alt={name} className="category-banner__icon" />
        <h2 className="category-banner__title">{name}</h2>
        <img src={down} alt="вниз" className="category-banner__down-icon" />
      </Container>
    </section>
  );
};

export default CategoryBanner;
