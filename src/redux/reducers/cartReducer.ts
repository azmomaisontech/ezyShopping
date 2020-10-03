import { shoppingEnum } from "../action/type";

export default (
  state = {
    items: JSON.parse(localStorage.getItem("cartItems")!) || [],
  },
  action: any
) => {
  switch (action.type) {
    case shoppingEnum.addToCart:
      return { ...state, items: [...action.payload] };
    case shoppingEnum.removeFromCart:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
