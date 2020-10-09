import { shoppingEnum } from "../action/type";

const initState = { items: [...JSON.parse(localStorage.getItem("cartItems")!)] || [] };

export default (state = initState, action: any) => {
  switch (action.type) {
    case shoppingEnum.addToCart:
      return { ...state, items: [...action.payload] };
    case shoppingEnum.removeFromCart:
      return { ...state, items: [...action.payload] };
    default:
      return state;
  }
};
