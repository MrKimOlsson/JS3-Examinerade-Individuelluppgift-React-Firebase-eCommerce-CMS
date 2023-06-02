import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

// Function to create an order in the 'orders' collection
const createOrder = async (orderData) => {
  // Get a reference to the 'orders' collection in the Firestore database
  const collectionRef = collection(db, 'orders');

  // Add a new document with the orderData to the 'orders' collection
  const docRef = await addDoc(collectionRef, orderData);

  // If the document ID is not available, throw an error
  if (!docRef.id) throw new Error('Something went wrong');

  // Output the document reference to the console (for debugging purposes)
  console.log(docRef);

  // Return an object with the ID of the created document and the orderData
  return { id: docRef.id, ...orderData };
}

// Function to get all documents from a collection asynchronously
const getAllAsync = async (col) => {
  // Get a reference to the specified collection in the Firestore database
  const colRef = collection(db, col);

  // Retrieve all documents from the collection using getDocs
  const querySnapshot = await getDocs(colRef);

  // Create an empty array to store the orders
  const orders = [];

  // Loop through each document in the querySnapshot
  querySnapshot.forEach(doc => {
    // Push an object with the document ID and data to the orders array
    orders.push({ id: doc.id, ...doc.data() });
  });

  // Return the array of orders
  return orders;
}

// Object that represents the orders service, with the createOrder and getAllAsync functions as properties
const ordersService = {
  createOrder,
  getAllAsync
};

export default ordersService


