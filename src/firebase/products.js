// src/firebase/products.js
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "./config";

export const fetchProducts = async () => {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
};

export const fetchProductsByCategory = async (category) => {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};