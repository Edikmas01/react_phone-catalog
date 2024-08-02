import React, { ReactNode } from 'react';
import css from './Section.module.scss';

type Props = {
  className: string;
  children: ReactNode;
};

export const Section: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={className}>
      <div className={css.container}>{children}</div>
    </section>
  );
};
