import React from 'react';
import css from './ProductCard.module.scss';
import { Button } from '../Button/Button';
import { Product } from '../../../types/Product';
import { SvgIcon } from '../SvgIcon';
import { Link } from 'react-router-dom';

type Props = Product;

export const ProductCard: React.FC<Props> = ({
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
  image,
  itemId,
}) => {
  console.log(itemId);
  
  return (
    <Link to={itemId} className={css.card}>
      <div className={css.imageContainer}>
        <img className={css.image} src={image} alt={name} />
      </div>

      <h2 className={css.title}>{name}</h2>
      <div className={css.price}>
        ${price}
        {fullPrice && <span className={css.fullPrice}>${fullPrice}</span>}
      </div>
      <div className={css.divider}></div>
      <div className={css.specs}>
        <div className={css.spec}>
          <span>Screen:</span> <span>{screen}</span>
        </div>
        <div className={css.spec}>
          <span>Capacity:</span> <span>{capacity}</span>
        </div>
        <div className={css.spec}>
          <span>RAM:</span> <span>{ram}</span>
        </div>
      </div>
      <div className={css.card__buttons}>
        <Button className={css.addToCart}>Add to cart</Button>
        <Button medium>
          <SvgIcon iconName="favorites" />
        </Button>
      </div>
    </Link>
  );
};
