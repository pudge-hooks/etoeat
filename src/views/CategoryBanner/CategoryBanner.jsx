import './CategoryBanner.scss';

import Container from '../../components/Container/Container';

import down from '../../assets/svg/arrow-down.svg';

import { forwardRef } from 'react';

const CategoryBanner = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="category-banner scroll-snap__item">
      <img
        src={props.image}
        alt={props.name}
        className="category-banner__img"
      />
      <div className="category-banner__bg-overlay"></div>
      <Container className="category-banner__container">
        <img
          src={props.icon}
          alt={props.name}
          className="category-banner__icon"
        />
        <h2 className="category-banner__title">{props.name}</h2>
        <img src={down} alt="вниз" className="category-banner__down-icon" />
      </Container>
    </section>
  );
});

export default CategoryBanner;
