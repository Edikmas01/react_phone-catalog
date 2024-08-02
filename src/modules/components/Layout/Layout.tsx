import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';

import css from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
