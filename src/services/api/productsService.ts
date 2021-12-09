import http from "../http";
import { Product } from '../../interfaces/product';

/**
 * read the product list from the service.
 */
export const readProducts = async () => {
  const { data } = await http.get<Product>('cuarentena/products');
  return data;
};
