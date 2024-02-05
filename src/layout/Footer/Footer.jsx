import './Footer.scss';
import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';
import Social from '../../components/Social/Social';

const Footer = () => {
  return (
    <footer className="footer scroll-snap__item">
      <Container className="footer__container">
        <Logo />
        <a className="footer__order-number" href="tel:+380630000000">
          Замовити: +380 98 000 00 00
        </a>
        <Social />
        <p className="footer__release">@2024 Усі права захищено</p>
      </Container>
    </footer>
  );
};

export default Footer;
