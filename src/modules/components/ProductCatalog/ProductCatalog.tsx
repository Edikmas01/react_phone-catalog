/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section } from '../Section';
import { ChangeEvent, useEffect, useState } from 'react';
import { ProductsList } from '../ProductsList/ProductsList';
import { Product } from '../../../types/Product';
import css from './ProductCatalog.module.scss';

type Props = {
  products: Product[];
};

export const ProductCatalog: React.FC<Props> = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const [currentPage, setCurrentPage] = useState(null);
  const [perPage, setPerPage] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const [pages, setPages] = useState(null);

  useEffect(() => {
    const value = searchParams.get('perPage');

    setPerPage(value);
  }, [perPage, searchParams]);

  useEffect(() => {
    console.log('changing sortBy', sortBy);

    const value = searchParams.get('sortBy');

    setSortBy(value);
  }, [sortBy, searchParams]);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name: filterName, value } = e.target;

    const params = Object.fromEntries(searchParams.entries()); // {sortBy: 'none' }

    params[filterName] = value; // getting new param from select [name: value], set in params

    console.log(params);

    for (const paramName in params) {
      searchParams.set(paramName, params[paramName]);
    }

    setSearchParams(searchParams);

    // if (perPageValue === 'all') {
    //   searchParams.delete('itemsPerPage');
    // } else {
    //   searchParams.set('itemsPerPage', perPage);
    // }

    setSearchParams(searchParams);
  };

  const visibleGoods = [...products].sort((x, y) => {
    switch (sortBy) {
      case 'cheapest':
        return x.price - y.price;

      case 'oldest':
        return x.year - y.year;

      case 'newest':
        return y.year - x.year;

      default:
        return x.id - y.id;
    }
  });

  return (
    <Section className={css.catalog}>
      <div className={css.filtersCatalog}>
        <div className={css.filter}>
          <span>Sort by</span>
          <select
            name="sortBy"
            onChange={handleSelect}
            value={searchParams.get('sortBy') || 'cheapest'}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="cheapest">Cheapest</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className={css.filter}>
          <span>Items on page</span>
          <select
            name="perPage"
            onChange={handleSelect}
            value={searchParams.get('perPage') || 'all'}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="all">All</option>
          </select>
        </div>
      </div>

      <ProductsList products={visibleGoods} />

      {}
    </Section>
  );
};
