import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/item/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/Checkout/CheckoutForm";





function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;