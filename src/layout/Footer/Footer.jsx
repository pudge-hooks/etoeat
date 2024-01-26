import './Footer.scss';
import Container from '../../components/Container/Container';
import Logo from '../../assets/svg/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='footer__container'>
        <div>
          <img className='footer__logo' src={Logo} alt='логотип'/>
          <h2 className='footer__title'>ETO EAT</h2>
        </div>
        <p className='footer__order-number'>Замовити: +380637383933</p>
        <p className='footer__release'>@2024 release</p>
      </Container>
    </footer>
  );
};

export default Footer;
