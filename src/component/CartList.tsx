import React from "react";
import formatMoney from "../util/formatMoney";
import totalPrice from "../util/totalPrice";

interface Props {
  cart: { id: number; name: string; price: number; count: number };
  handleRemoveItem: (cart: { id: number; name: string; price: number; count: number }) => void;
}

const CartList: React.FC<Props> = ({ cart, handleRemoveItem }) => {
  const { name, price, count } = cart;
  return (
    <div className="cart">
      <div className="info">
        <span className="name">
          <strong> {name}</strong>
        </span>
        <span className="quantity"> x {count}</span>
      </div>
      <div className="amount">
        Total : <strong> {formatMoney(totalPrice(price, count))} </strong>
      </div>
      <button className="btn btn-danger" onClick={() => handleRemoveItem(cart)}>
        Remove
      </button>
    </div>
  );
};

export default CartList;
