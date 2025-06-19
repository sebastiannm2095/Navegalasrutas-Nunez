import { createContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agrega un producto al carrito
  const addItem = (item, quantity) => {
    const exists = cart.find(prod => prod.id === item.id);
    if (exists) {
      setCart(cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Elimina un producto del carrito
  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  // Vacía el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de productos
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Precio total
  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      totalQuantity,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};