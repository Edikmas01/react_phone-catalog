import { NavLink } from 'react-router-dom';
import css from './Header.module.scss';
import { SvgIcon } from '../SvgIcon';
// import { Button } from '../Button';
import cn from 'classnames';

export const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <div className={css.leftSection}>
        <NavLink to="/" className={css.logo}>
          <img src="/img/logo/logo.png" />
        </NavLink>
        <div className={css.xx}></div>
        <nav className={css.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(css.menuLink, {
                [css.NavLinkActive]: isActive,
              })
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/phones"
            className={({ isActive }) =>
              cn(css.menuLink, {
                [css.NavLinkActive]: isActive,
              })
            }
          >
            PHONES
          </NavLink>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              cn(css.menuLink, {
                [css.NavLinkActive]: isActive,
              })
            }
          >
            TABLETS
          </NavLink>
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              cn(css.menuLink, {
                [css.NavLinkActive]: isActive,
              })
            }
          >
            ACCESSORIES
          </NavLink>
        </nav>
      </div>
      <div className={css.bloc}>
        <div className={css.iconContainer}>
          <SvgIcon iconName="favorites" />
        </div>
        <div className={css.iconContainer}>
          <SvgIcon iconName="basket" />
        </div>
      </div>
    </header>
  );
};
