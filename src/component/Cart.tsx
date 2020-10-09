import React from "react";
import { connect } from "react-redux";
import CartList from "./CartList";
import { removeFromCart } from "../redux/action/cartAction";
import { CartItems, Product, State } from "../redux/action/type";
import formatMoney from "../util/formatMoney";
import overAllTotal from "../util/overAllTotal";
import "../styles/Cart.css";

interface Props {
  cartItems: CartItems;
  removeFromCart: (product: Product, cartItems: CartItems) => void;
}

const Cart: React.FC<Props> = (props) => {
  const { cartItems, removeFromCart } = props;

  const handleRemoveItem = (product: Product) => {
    removeFromCart(product, cartItems);
  };

  return (
    <section id="carts">
      <div className="cartItems">
        {cartItems.map((item) => (
          <CartList key={item.id} cart={item} handleRemoveItem={handleRemoveItem} />
        ))}
      </div>
      {cartItems.length === 0 ? (
        <h3>"Cart is empty"</h3>
      ) : (
        <div className="checkout">
          <h2>Total:</h2>
          <h2>{formatMoney(overAllTotal(cartItems))}</h2>
          <button className="btn btn-secondary">Checkout</button>
        </div>
      )}
    </section>
  );
};

const mapDispatchToProps = {
  removeFromCart,
};

const mapStateToProps = (state: State) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
