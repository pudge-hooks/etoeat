import './Logo.scss';

import { Link } from 'react-router-dom';

import { logo } from '../../utils/icons';

const Logo = ({ setIsBurgerOpen, iconClassName = '' }) => {
  return (
    <Link
      to="/"
      onClick={() => (setIsBurgerOpen ? setIsBurgerOpen(false) : null)}
      className='logo'
    >
      <svg
        className={`logo__icon ${iconClassName}`}
        width="48"
        height="48"
        viewBox="0 0 375 374.999991"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {logo}
      </svg>
    </Link>
  );
};

export default Logo;
