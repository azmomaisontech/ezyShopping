import { shoppingEnum, CartItems, Product } from "./type";

export const addToCart = (product: Product) => (dispatch: any, getState: any) => {
  const cartItems: CartItems = getState().cart.items;
  let AlreadyExistInCart = false;

  cartItems.forEach((item) => {
    if (item.id === product.id) {
      AlreadyExistInCart = true;
      item.count += 1;
    }
  });

  if (!AlreadyExistInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  dispatch({
    type: shoppingEnum.addToCart,
    payload: cartItems,
  });
};

export const removeFromCart = (product: Product) => (dispatch: any, getState: any) => {
  const cartItems: CartItems = getState().cart.items;
  const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

  dispatch({
    type: shoppingEnum.removeFromCart,
    payload: updatedCartItems,
  });
};
