import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetailsPage = () => {
  const { productId } = useParams();

  useEffect(() => {
    fetch(`_old/v2/api/products/${productId}.json`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <h1>This is {productId} page</h1>;
};
