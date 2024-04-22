import './Hero.scss';

import down from '../../assets/svg/arrow-down.svg';

import Container from '../../components/Container/Container';

import categoriesMediaData from '../../data/categoriesMedia';

import { Link } from 'react-router-dom';

const Hero = ({ categories }) => {
  return (
    <section className="hero scroll-snap__item">
      <Container className="hero__container">
        <ul className="hero__list">
          {categories?.map(({ Name, ID }) => {
            const link = `/${ID}`;
            return (
              <li key={ID} className="hero__item">
                <Link
                  to={link}
                  className="hero__link"
                  style={{
                    backgroundImage: `url(${categoriesMediaData[ID]})`,
                  }}
                >
                  <div className="hero__bg-overlay"></div>
                  <h2 className="hero__name">{Name}</h2>
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
