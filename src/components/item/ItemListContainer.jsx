// src/components/item/ItemListContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { fetchProducts, fetchProductsByCategory } from "../../firebase/products";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = categoryId
          ? await fetchProductsByCategory(categoryId)
          : await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Catálogo completo"}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;