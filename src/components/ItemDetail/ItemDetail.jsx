import React, { useState, useContext } from "react";
import ItemCount from "../item/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>${product.price}</p>
      <p>Categoría: {product.category}</p>
      {!addedToCart ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <p style={{ color: "green" }}>Producto agregado al carrito ✅</p>
      )}
    </div>
  );
};

export default ItemDetail;
