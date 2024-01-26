import './Header.scss';

import { useEffect, useState } from 'react';

import Container from '../../components/Container/Container';
import NavBar from '../../components/NavBar/NavBar';
import Logo from '../../components/Logo/Logo';

import menu from '../../assets/svg/burger-menu.svg';

const Header = ({ setIsBurgerOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <Container className="header__container">
        <div className="header__nav-container">
          <Logo
            setIsBurgerOpen={setIsBurgerOpen}
            iconClassName="header__logo"
          />
          <button
            className="header__menu-btn"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            МЕНЮ
          </button>
        </div>
        <button
          onClick={() => setIsBurgerOpen(true)}
          className="header__burger-btn"
        >
          <img src={menu} alt="меню" className="header__burger-icon" />
        </button>
      </Container>
      <div className={`header__menu-container ${isHovered ? 'show' : ''}`}>
        <div className="header__menu-backdrop"></div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`header__menu-content ${isHovered ? 'slide-in' : 'slide-out'}`}
        >
          <Container>
            <NavBar className="header__navbar" setIsHovered={setIsHovered} />
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
