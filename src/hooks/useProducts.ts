import React from 'react';

import { Product } from '../interfaces/product';
import { readProducts } from '../services/api/productsService';

const useProducts = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState<Product>();

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      setProducts(await readProducts());
      setIsLoading(false);
    })();
  }, []);

  return {
    isLoading,
    products,
  };
};
export default useProducts;
