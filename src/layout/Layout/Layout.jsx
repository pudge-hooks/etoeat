import { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import CartModal from '../../components/CartModal/CartModal';
import Preview from '../../components/Preview/Preview';

const Layout = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPreView, setShowPreView] = useState(false);

  if (isBurgerOpen || isCartOpen || showPreView) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    setShowPreView(true);
  }, []);

  useEffect(() => {
    const preViewTimer = setTimeout(() => {
      setShowPreView(false);
    }, 4000);
    return () => clearTimeout(preViewTimer);
  }, []);

  return (
    <div>
      <Header
        setIsBurgerOpen={setIsBurgerOpen}
        setCartModalOpen={setIsCartOpen}
      />
      <main>{children}</main>
      <BurgerMenu
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
      {isCartOpen && (
        <CartModal isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
      {showPreView && <Preview/>}
      <Footer />
    </div>
  );
};

export default Layout;
