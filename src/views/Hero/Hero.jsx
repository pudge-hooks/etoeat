import './Hero.scss';

import down from '../../assets/svg/arrow-down.svg';
import logo from '../../assets/img/preview-logo.png';

import categories from '../../data/categories';

import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';

const Hero = () => {
  let radius;
  if (window.innerWidth <= 480) {
    radius = 100;
  } else if (window.innerWidth <= 1024) {
    radius = 200;
  } else if (window.innerWidth <= 1600) {
    radius = 400;
  } else {
    radius = 500; // Значення за замовчуванням для більших екранів
  }

  return (
    <section className="hero scroll-snap__item">
      <Container className="hero__container">
        <div className="hero__categories">
          <img src={logo} alt="логотип" className="hero__logo" />
          <ul className="hero__list">
            {categories.map(({ name, id }, idx) => {
              const link = `/${id}`;
              const angle = (Math.PI / (categories.length - 1)) * idx;
              // const radius = 500;
              const posX = Math.cos(angle) * radius;
              const posY = Math.sin(angle) * radius;
              return (
                <li
                  key={id}
                  className="hero__item"
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${posX}px)`,
                    top: `calc(50% - ${posY}px)`,
                  }}
                >
                  <Link to={link} className="hero__link hero__subtitle">
                    <img src={logo} alt="логотип" className="hero__link-logo" />
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hero__about">
          <h1 className="hero__title">
            e<span className="hero__title-span">T</span>o ea
            <span className="hero__title-span">T</span>
          </h1>
          <p className="hero__subtitle">Найкраща доставка їжі у твоєму місті</p>
          <a href="tel:+380980000000" className="hero__subtitle">
            +380 98 000 00 00
          </a>
          <img src={down} alt="вниз" className="hero__down-icon" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
