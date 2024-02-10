import './Logo.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

const Logo = ({ setIsBurgerOpen, iconClassName = '' }) => {
  return (
    <Link
      to="/"
      onClick={() => (setIsBurgerOpen ? setIsBurgerOpen(false) : null)}
      className="logo"
    >
      <img src={logo} alt="логотип" className="logo__icon" />
    </Link>
  );
};

export default Logo;
