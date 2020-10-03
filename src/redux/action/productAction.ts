import { shoppingEnum } from "./type";
import products from "../../products";

export const fetchProducts = () => (dispatch: any) => {
  dispatch({
    type: shoppingEnum.fetchProducts,
    payload: products,
  });
};
