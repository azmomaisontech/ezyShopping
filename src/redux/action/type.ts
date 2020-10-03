export enum shoppingEnum {
  addToCart = "ADD_TO_CART",
  removeFromCart = "REMOVE_FROM_CART",
  fetchProducts = "FETCH_PRODUCTS",
}

export type CartItems = { id: number; name: string; price: number; count: number }[];
export interface Product {
  id: number;
  name: string;
  price: number;
}
