import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGsA0-WTtpuW0SdXev1QCh0LUoGuizjhs",
  authDomain: "mi-ecommerce-c8d3b.firebaseapp.com",
  projectId: "mi-ecommerce-c8d3b",
  storageBucket: "mi-ecommerce-c8d3b.firebasestorage.app",
  messagingSenderId: "920566702063",
  appId: "1:920566702063:web:689ae7d975f805a7bea01a",
  measurementId: "G-FH674CQXS7"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la base de datos
export const db = getFirestore(app);