import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

// Function to create a new subscriber in the 'subscribers' collection
const createSubscriber = async (subscriberData) => {
  // Reference to the 'subscribers' collection in the database
  const collectionRef = collection(db, 'subscribers');   
  // Add a new document with the subscriberData to the collection
  const docRef = await addDoc(collectionRef, subscriberData);

  // If the document reference doesn't have an ID, throw an error
  if (!docRef.id) throw new Error('Something went wrong');


  console.log(docRef);   
  // Return an object with the document ID and the subscriberData
  return { id: docRef.id, ...subscriberData };
}

// Function to fetch all subscribers from a specified collection
const getAllAsync = async (col) => {
  // Reference to the specified collection in the database
  const colRef = collection(db, col);
  // Get all documents in the collection
  const querySnapshot = await getDocs(colRef);

  const subscribers = [];
  querySnapshot.forEach(doc => {
    // Add each document's ID and data to the subscribers array
    subscribers.push({ id: doc.id, ...doc.data() });
  });

  // Return the array of subscribers
  return subscribers;
}

// Object containing the subscriber service functions
const subscribersService = {
  createSubscriber,   
  getAllAsync
};

export default subscribersService


