
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} width="200" />
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;