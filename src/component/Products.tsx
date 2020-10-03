import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/action/cartAction";
import { fetchProducts } from "../redux/action/productAction";
import { CartItems, Product } from "../redux/action/type";
import ProductItem from "./ProductItem";
import "../styles/Products.css";

interface Props {
  products: { id: number; name: string; price: number }[];
  cartItems: CartItems;
  fetchProducts: () => void;
  addToCart: (product: Product) => void;
}

const Products: React.FC<Props> = (props) => {
  const { products, cartItems, fetchProducts, addToCart } = props;

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  useEffect(() => {
    if (fetchProducts) {
      fetchProducts();
    }

    //eslint-disable-next-line
  }, []);

  return (
    <section id="products">
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} handleAddToCart={handleAddToCart} cartItems={cartItems} />
        ))}
    </section>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products.items,
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
