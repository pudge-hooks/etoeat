import './Hero.scss';

import down from '../../assets/svg/arrow-down.svg';
import logo from '../../assets/img/preview-logo.png';
import preViewLogo from '../../assets/img/preview-logo.png';

import categories from '../../data/categories';

import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';

const Hero = () => {
  let radius;
  if (window.innerWidth <= 480) {
    radius = 150;
  } else if (window.innerWidth <= 1024) {
    radius = 180;
  } else if (window.innerWidth <= 1280) {
    radius = 350;
  } else if (window.innerWidth <= 1600) {
    radius = 400;
  } else {
    radius = 500;
  }

  return (
    <section className="hero scroll-snap__item">
      <Container className="hero__container">
        <div className="hero__categories">
          <div className="preview__container hero__logo">
            <div className="preview__container-inner">
              <img className="preview__logo" src={preViewLogo} alt="preview" />
              <label className="preview__eto-label">
                <span className="preview__small-leter">e</span>
                <span className="preview__big-leter">T</span>
                <span className="preview__small-leter">o</span>
              </label>
            </div>
            <label className="preview__eat-label">
              <span className="preview__small-leter">e</span>
              <span className="preview__small-leter">a</span>
              <span className="preview__big-leter">T</span>
            </label>
          </div>
          <ul className="hero__list">
            {categories.map(({ name, id }, idx) => {
              const link = `/${id}`;
              const angle =
                window.innerWidth <= 1024
                  ? (idx / categories.length) * 360
                  : (Math.PI / (categories.length - 1)) * idx;
              const posX =
                window.innerWidth <= 1024
                  ? Math.cos((angle * Math.PI) / 180) * radius
                  : Math.cos(angle) * radius;
              const posY =
                window.innerWidth <= 1024
                  ? Math.sin((angle * Math.PI) / 180) * radius
                  : Math.sin(angle) * radius;
              return (
                <li
                  key={id}
                  className="hero__item"
                  style={
                    window.innerWidth <= 1024
                      ? {
                          transform: `translate(${posX}px, ${posY}px)`,
                        }
                      : {
                          position: 'absolute',
                          left: `calc(50% + ${posX}px)`,
                          top: `calc(50% - ${posY}px)`,
                        }
                  }
                >
                  <Link to={link} className="hero__link">
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
          <a href="tel:+380980000000" className="hero__subtitle hero__number">
            +380 98 000 00 00
          </a>
          <img src={down} alt="вниз" className="hero__down-icon" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
