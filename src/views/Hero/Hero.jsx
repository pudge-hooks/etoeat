import './Hero.scss';

import bgVideo from '../../assets/video/promo.mp4';
import logo from '../../assets/svg/logo.svg';
import down from '../../assets/svg/arrow-down.svg';

import Container from '../../components/Container/Container';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg-container">
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          className="hero__bg-video"
        />
      </div>
      <div className="hero__bg-overlay"></div>
      <Container className="hero__container">
        <img src={logo} alt="логотип" className="hero__logo" />
        <h1 className="hero__title">Eto Eat</h1>
        <p className="hero__subtitle">Найкраща доставка їжі у твоєму місті</p>
        <img src={down} alt="вниз" className="hero__down-icon" />
      </Container>
    </section>
  );
};

export default Hero;
