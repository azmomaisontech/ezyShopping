import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/action/cartAction";
import { fetchProducts } from "../redux/action/productAction";
import { CartItems, Product, State } from "../redux/action/type";
import ProductItem from "./ProductItem";
import "../styles/Products.css";

interface Props {
  products: { id: number; name: string; price: number }[];
  cartItems: CartItems;
  fetchProducts: () => void;
  addToCart: (product: Product, cartItem: CartItems) => void;
}

const Products: React.FC<Props> = (props) => {
  const { products, cartItems, fetchProducts, addToCart } = props;

  const handleAddToCart = (product: Product) => {
    addToCart(product, cartItems);
  };

  useEffect(() => {
    if (fetchProducts) {
      fetchProducts();
    }

    //eslint-disable-next-line
  }, []);

  return (
    <section id="products">
      <div className="flex-container">
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
          ))}
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
};

const mapStateToProps = (state: State) => ({
  products: state.products.items,
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
