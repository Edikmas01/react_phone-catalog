
import React, { useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Product } from '../../../types/Product';
import css from './ProductSlider.module.scss';
import { SvgIcon } from '../SvgIcon';

type Props = {
  title: string;
  products: Product[];
};

export const SliderComponent: React.FC<Props> = ({ title, products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(Math.max(activeIndex - 4, 0));
  };

  const handleNextClick = () => {
    setActiveIndex(Math.min(activeIndex + 4, products.length - 4));
  };

  return (
    <div className={css.sliderBody}>
      <h2 className={css.catalogTitle}>{title}</h2>
      <ul className={css.catalogList}>
        {products.slice(activeIndex, activeIndex + 4).map(phone => (
          <li key={phone.id} className={css.productItem}>
            <ProductCard {...phone} />
          </li>
        ))}
      </ul>
      <div className={css.buttonsContainer}>
        <button className={css.sliderButtons} onClick={handlePrevClick}>
          <SvgIcon iconName="arrowLeft" />
        </button>
        <button className={css.sliderButtons} onClick={handleNextClick}>
          <SvgIcon iconName="arrowRight" />
        </button>
      </div>
    </div>
  );
};

