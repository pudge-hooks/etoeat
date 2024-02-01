import './Layout.scss';

import { useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import CartModal from '../../components/CartModal/CartModal';

const Layout = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (isBurgerOpen || isCartOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="layout">
      <div className="layout__container">
        <Header
          setIsBurgerOpen={setIsBurgerOpen}
          setCartModalOpen={setIsCartOpen}
        />
      </div>
      <div className="layout__container">
        <main>{children}</main>
      </div>
      <div className="layout__container">
        <Footer />
      </div>
      <BurgerMenu
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
      {isCartOpen && (
        <CartModal isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
    </div>
  );
};

export default Layout;
