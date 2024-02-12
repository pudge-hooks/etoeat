import './Hero.scss';

import down from '../../assets/svg/arrow-down.svg';

import categories from '../../data/categories';

import Container from '../../components/Container/Container';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero scroll-snap__item">
      <Container className="hero__container">
        <ul className="hero__list">
          {categories.map(({ name, id, img }) => {
            const link = `/${id}`;
            return (
              <li key={id} className="hero__item">
                <Link
                  to={link}
                  className="hero__link"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div className="hero__bg-overlay"></div>
                  <h2 className="hero__name">{name}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hero__about">
          <h1 className="hero__title">
            e<span className="hero__title-span">T</span>o ea
            <span className="hero__title-span">T</span>
          </h1>
          <img src={down} alt="вниз" className="hero__down-icon" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
