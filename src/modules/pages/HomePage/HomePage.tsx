import React, { useEffect, useState } from 'react';
import { ProductSlider } from '../../components/ProductSlider';

import { NavLink } from 'react-router-dom';

import css from './HomePage.module.scss';
import { Section } from '../../components/Section';
import { HeroSlider } from './HeroSlider';
import { Product } from '../../../types/Product';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({
    phones: 0,
    tablets: 0,
    accessories: 0,
  });

  useEffect(() => {
    fetch('/api/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    setCategories({
      phones: products.filter((p: Product) => p.category === 'phones').length,
      tablets: products.filter((p: Product) => p.category === 'tablets').length,
      accessories: products.filter((p: Product) => p.category === 'accessories')
        .length,
    });
  }, [products]);

  return (
    <>
      <Section className={css.swiperContainer}>
        <h1 className={css.titleHome}>Welcome to Nice Gadgets store!</h1>
        <HeroSlider />
      </Section>
      <ProductSlider title="Brand new models" />
      <Section className={css.shopCategory}>
        <h1>Shop by category</h1>
        <div className={css.categories}>
          <NavLink to="/phones" className={css.category}>
            <img
              className={css.categoryImg}
              src="/img/phones-category.png"
              alt="Mobile phones"
            />
            <h3 className={css.categoryTitle}>Mobile phones</h3>
            <p>{categories.phones} models</p>
          </NavLink>
          <NavLink to="/tablets" className={css.category}>
            <img
              className={css.categoryImg}
              src="/img/tablets-category.png"
              alt="Tablets"
            />
            <h3 className={css.categoryTitle}>Tablets</h3>
            <p>{categories.tablets} models</p>
          </NavLink>
          <NavLink to="/accessories" className={css.category}>
            <img
              className={css.categoryImg}
              src="/img/accessories-category.png"
              alt="Accessories"
            />
            <h3 className={css.categoryTitle}>Accessories</h3>
            <p>{categories.accessories} models</p>
          </NavLink>
        </div>
      </Section>
      <ProductSlider title="Hot prices" />
    </>
  );
};
