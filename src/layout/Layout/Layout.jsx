import './Layout.scss';

import { useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const Layout = ({ children }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  if (isBurgerOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div>
      <Header isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      <main>{children}</main>
      <Footer />
      <BurgerMenu
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
    </div>
  );
};

export default Layout;
