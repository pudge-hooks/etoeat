import { useEffect, useState } from 'react';

// import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import CartModal from '../../components/CartModal/CartModal';
import Preview from '../../components/Preview/Preview';

const Layout = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPreView, setShowPreView] = useState(true);

  if (isBurgerOpen || isCartOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    const preViewTimer = setTimeout(() => {
      setShowPreView(false);
    }, 3000);
    return () => clearTimeout(preViewTimer);
  }, [])

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
      {showPreView && <Preview/>}
    </div>
  );
};

export default Layout;
