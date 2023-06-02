// Import the 'db' object from the Firebase configuration
import { db } from "../../firebase/config";
// Import Firestore functions for adding documents, accessing collections, and fetching documents
import { addDoc, collection, getDocs } from 'firebase/firestore';

// Function to create a product
const createProduct = async (productData) => {
  // Get a reference to the 'products' collection in Firestore
  const collectionRef = collection(db, 'products');
  // Add the product document to the 'products' collection
  const docRef = await addDoc(collectionRef, productData);

  // If the document ID doesn't exist, throw an error
  if (!docRef.id) throw new Error('Something went wrong');

  console.log(docRef);
  // Return the product object with the ID assigned by Firestore
  return { id: docRef.id, ...productData };
};

// Function to get all products from a collection
const getAllAsync = async (col) => {
  // Get a reference to the specified collection in Firestore
  const colRef = collection(db, col);
  // Fetch all documents in the collection
  const querySnapshot = await getDocs(colRef);

  const products = [];
  querySnapshot.forEach((doc) => {
    // Push each document's data into the products array
    products.push({ id: doc.id, ...doc.data() });
  });
  // Return the array of products
  return products;
};
// Service object for products
const productsService = {
  createProduct,
  getAllAsync,
};

// Export the productsService object for external usage
export default productsService;
