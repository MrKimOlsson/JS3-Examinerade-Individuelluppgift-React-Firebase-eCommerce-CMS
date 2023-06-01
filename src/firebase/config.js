import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ecommerce-7c817.firebaseapp.com",
  projectId: "ecommerce-7c817",
  storageBucket: "ecommerce-7c817.appspot.com",
  messagingSenderId: "61035998092",
  appId: "1:61035998092:web:a9560dd19d806149e404a9"
};

initializeApp(firebaseConfig); 

const db = getFirestore()
const auth = getAuth()


export { db , auth }