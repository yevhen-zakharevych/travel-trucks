import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import logo from '../../assets/logo.png';

import style from './Head.module.scss';

const buildLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(style.navLink, isActive && style.active);

function Head() {
  return (
    <header className={style.header}>
      <div className={style.container + ' container'}>
        <Link className={style.logoLink} to="/">
          <img src={logo} className={style.logoImg} alt="Travel Tricks logo" />
        </Link>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <NavLink className={buildLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink className={buildLinkClass} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Head;
