import React from 'react';
import { Product } from '../../../types/Product';
import { ProductCard } from '../ProductCard';
import css from './ProductsList.module.scss';

type Props = {
  products: Product[];
};

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ul className={css.ProductsList}>
      {products.map(product => (
        <li key={product.id} className={css.phoneItem}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );
};
