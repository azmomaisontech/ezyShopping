import React from "react";
import Products from "./Products";
import Cart from "./Cart";
import "../styles/Shopping.css";

const Shopping: React.FC = () => {
  return (
    <main id="shopping">
      <Products />
      <Cart />
    </main>
  );
};

export default Shopping;
