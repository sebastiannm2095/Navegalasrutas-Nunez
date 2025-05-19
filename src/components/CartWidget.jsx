import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => { 
  return (
    <div style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}>
      <FaShoppingCart />
      <span style={{ marginLeft: "5px", fontSize: "1rem" }}>3</span>
    </div>
  );
};

export default CartWidget;