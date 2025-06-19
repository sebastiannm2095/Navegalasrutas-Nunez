import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, totalQuantity, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: { name, email },
      items: cart,
      total,
      date: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart(); // Limpiamos el carrito tras guardar
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  if (orderId) {
    return <p>¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong></p>;
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar Compra</h2>
      <p>Total de productos: {totalQuantity}</p>
      <p>Total a pagar: ${total}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <button type="submit">Confirmar compra</button>
      </form>

      <h4>Resumen:</h4>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckoutForm;