import { useState } from 'react';

// import Footer from '../Footer/Footer';
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
    <div>
      <Header
        setIsBurgerOpen={setIsBurgerOpen}
        setCartModalOpen={setIsCartOpen}
      />
      <main>{children}</main>
      {/* <Footer /> */}
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
