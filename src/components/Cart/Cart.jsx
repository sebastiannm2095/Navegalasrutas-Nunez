import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeItem, totalQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (totalQuantity === 0) {
    return (
      <div className="container">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Carrito de compras</h2>
      <ul className="list-group mb-4">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button onClick={() => removeItem(item.id)} className="btn btn-danger">Eliminar</button>
          </li>
        ))}
      </ul>
      <h4>Total: ${totalPrice}</h4>
      <button onClick={clearCart} className="btn btn-warning me-2">Vaciar carrito</button>
      <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
    </div>
  );
};

export default Cart;