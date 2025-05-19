import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../data/mockProducts";
import ItemDetail from "./ItemDetail";
console.log("Tipo:", typeof ItemDetail);

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then(res => setProducts(res))
        .catch(err => console.error(err));
    } else {
      getProducts()
        .then(res => setProducts(res))
        .catch(err => console.error(err));
    }
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Catálogo completo"}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;