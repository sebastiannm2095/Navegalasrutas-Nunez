import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; // <-- Agregamos import

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Mi Tienda Online!" /> {/* Pasamos la prop */}
    </div>
  );
}

export default App;