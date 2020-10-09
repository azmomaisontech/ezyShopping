import { shoppingEnum } from "../action/type";

const initState = { items: [] };
export default (state = initState, action: any) => {
  switch (action.type) {
    case shoppingEnum.fetchProducts:
      return { ...state, items: [...action.payload] };
    default:
      return state;
  }
};
