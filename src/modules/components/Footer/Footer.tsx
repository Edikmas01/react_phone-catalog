import { NavLink } from 'react-router-dom';
import css from './Footer.module.scss';
import { Button } from '../Button';
import { SvgIcon } from '../SvgIcon';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <NavLink to="/">
        <img src="/img/logo/logo.png" className={css.l} />
      </NavLink>
      <nav className={css.navigationFooter}>
        <NavLink to="/github" className={css.nvigationLink}>
          GITHUB
        </NavLink>
        <NavLink to="/contacts" className={css.nvigationLink}>
          CONTACTS
        </NavLink>
        <NavLink to="/rights" className={css.nvigationLink}>
          RIGHTS
        </NavLink>
      </nav>
      <div className={css.backToTop}>
        <p>Back to top</p>
        <Button small>
          <SvgIcon iconName="arrowUp" />
        </Button>
      </div>
    </footer>
  );
};
