import React from "react";
import formatMoney from "../util/formatMoney";
import { CartItems, Product } from "../redux/action/type";
import "../styles/ProductItem.css";

interface Prop {
  product: Product;
  cartItems: CartItems;
  handleAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<Prop> = (props) => {
  const { product, handleAddToCart } = props;
  return (
    <section className="product">
      <h3> {product.name} </h3>
      <h4>{formatMoney(product.price)} </h4>
      <button className="btn  btn-primary" onClick={() => handleAddToCart(product)}>
        Add to cart
      </button>
    </section>
  );
};

export default ProductItem;
