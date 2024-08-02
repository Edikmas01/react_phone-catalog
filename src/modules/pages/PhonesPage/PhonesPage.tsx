import React, { useEffect, useState } from 'react';

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useLocation } from 'react-router-dom';

import { Product } from '../../../types/Product';
import { ProductsPageTitle } from '../../components/ProductsPageTitle';
import { ProductCatalog } from '../../components/ProductCatalog';

export const PhonesPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { pathname } = useLocation();

  const pageName = pathname[1].toUpperCase() + pathname.slice(2);
  const category = pathname.slice(1);

  useEffect(() => {
    fetch('api/products.json')
      .then(res => res.json())
      .then(data =>
        setProducts(() =>
          data.filter((product: Product) => product.category === category),
        ),
      );
  }, []);

  return (
    <>
      <Breadcrumbs />
      <ProductsPageTitle pageName={pageName} />
      <ProductCatalog products={products} />
    </>
  );
};
