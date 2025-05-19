import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>${product.price}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
};

export default ItemDetail;