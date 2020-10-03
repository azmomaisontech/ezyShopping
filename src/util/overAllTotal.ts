import { CartItems } from "../redux/action/type";

export default (items: CartItems) => {
  return items.reduce((acc, item) => item.price * item.count + acc, 0);
};
