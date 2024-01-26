import './BurgerMenu.scss';

import NavBar from '../NavBar/NavBar';
import Container from '../Container/Container';

import close from '../../assets/svg/close.svg';

import { createPortal } from 'react-dom';

const BurgerMenu = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return createPortal(
    <div className={`burger ${isBurgerOpen ? 'open' : ''}`}>
      <div className={`burger__content ${isBurgerOpen ? 'open' : ''}`}>
        <Container className="burger__container">
          <button
            onClick={() => setIsBurgerOpen(false)}
            className="burger__close"
          >
            <img src={close} alt="close" />
          </button>
          <NavBar setIsBurgerOpen={setIsBurgerOpen} className='burger__nav' />
        </Container>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default BurgerMenu;
