import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/mockProducts";
import ItemDetail from "./ItemDetail";
console.log("Tipo:", typeof ItemDetail);

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((res) => setProduct(res))
      .catch((err) => console.error(err));
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;