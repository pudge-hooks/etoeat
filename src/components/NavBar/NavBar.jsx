import './NavBar.scss';

import { Link } from 'react-router-dom';

import { useMenu } from '../../data/MenuContext';

const NavBar = ({ className = '', setIsBurgerOpen, setIsHovered }) => {
  const { menu } = useMenu();
  const categories = menu.Groups?.slice(0, menu.Groups?.length - 3);

  return (
    <nav className={`nav ${className}`}>
      <ul className="nav__list">
        {categories?.map(({ ID, Name }) => {
          const link = `/${ID}`;
          return (
            <li key={ID} className="nav__item">
              <Link
                to={link}
                className="nav__link"
                onClick={() => {
                  if (setIsBurgerOpen) setIsBurgerOpen(false);
                  if (setIsHovered) setIsHovered(false);
                }}
              >
                {Name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
