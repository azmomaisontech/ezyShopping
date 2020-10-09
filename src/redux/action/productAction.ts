import { shoppingEnum } from "./type";
import products from "../../products";

export const fetchProducts = () => ({
  type: shoppingEnum.fetchProducts,
  payload: products,
});
