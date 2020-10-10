import React from "react";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import CartList from "./CartList";
import { removeFromCart } from "../redux/action/cartAction";
import { CartItems, Product, State } from "../redux/action/type";
import formatMoney from "../util/formatMoney";
import overAllTotal from "../util/overAllTotal";
import { API_KEY } from "../config/stripe";
import "../styles/Cart.css";

interface Props {
  cartItems: CartItems;
  removeFromCart: (product: Product, cartItems: CartItems) => void;
}

const stripePromise = loadStripe(API_KEY);

const Cart: React.FC<Props> = (props) => {
  const { cartItems, removeFromCart } = props;

  const handleRemoveItem = (product: Product) => {
    removeFromCart(product, cartItems);
  };

  const handleStripePayment = async () => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("/create-checkout-session", { method: "POST" });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe!.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
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
          <button className="btn btn-secondary" role="link" onClick={handleStripePayment}>
            Checkout
          </button>
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
