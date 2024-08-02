import { useLocation } from 'react-router-dom';
import { Section } from '../Section';
import { SvgIcon } from '../SvgIcon';
import css from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const breadcrumbsLocation = pathname[1].toUpperCase() + pathname.slice(2);

  return (
    <Section className="breadcrumbs">
      <div className={css.container}>
        <SvgIcon iconName="home" />
        <SvgIcon iconName="arrowRight" />
        <span className={css.text}>{breadcrumbsLocation}</span>
      </div>
    </Section>
  );
};
