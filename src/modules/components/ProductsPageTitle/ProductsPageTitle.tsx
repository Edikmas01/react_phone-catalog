import { Section } from '../Section';
import css from './ProductsPageTitle.module.scss';

type Props = {
  pageName: string;
};

export const ProductsPageTitle: React.FC<Props> = ({ pageName }) => {
  return (
    <Section className="section">
      <h1 className={css.title}>{pageName} page</h1>
    </Section>
  );
};
