import { shoppingEnum } from "../action/type";

const initialState = { items: [] };
export default (state = initialState, action: any) => {
  switch (action.type) {
    case shoppingEnum.fetchProducts:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
