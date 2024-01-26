import './NavBar.scss';

import { Link } from 'react-router-dom';

import categories from '../../data/categories';

const NavBar = ({ className = '', setIsBurgerOpen, setIsHovered }) => {
  return (
    <nav className={`nav ${className}`}>
      <ul className="nav__list">
        {categories.map(({ id, name }) => {
          const link = `/${id}`;
          return (
            <li key={id} className="nav__item">
              <Link
                to={link}
                className="nav__link"
                onClick={() => {
                  if (setIsBurgerOpen) setIsBurgerOpen(false);
                  if (setIsHovered) setIsHovered(false);
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
