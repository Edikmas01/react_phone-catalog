import classNames from 'classnames';
import { ReactNode } from 'react';

import css from './Button.module.scss';

type Props = {
  size?: string;
  children: ReactNode;
  className?: string;
  medium?: boolean;
  small?: boolean;
};

export const Button: React.FC<Props> = ({
  small,
  className,
  children,
  medium,
}) => {
  return (
    <button
      type="button"
      className={classNames(className, css.button, {
        [css['button--medium']]: medium,
        [css['button--small']]: small,
      })}
    >
      {children}
    </button>
  );
};
