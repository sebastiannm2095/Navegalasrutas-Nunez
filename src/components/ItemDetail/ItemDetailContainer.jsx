import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../firebase/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetchProductById(itemId)
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