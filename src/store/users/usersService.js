import { db } from "../../firebase/config";   // Import the db object from the Firebase config
import { addDoc, collection, getDocs } from 'firebase/firestore';   // Import Firestore functions

const createUser = async (userData) => {
  const collectionRef = collection(db, 'users');   // Get the reference to the 'users' collection in Firestore
  const docRef = await addDoc(collectionRef, orderData);   // Add a new document to the 'users' collection

  if(!docRef.id) throw new Error('Something went wrong');   // Throw an error if the document reference does not have an ID

  console.log(docRef);   // Log the document reference to the console
  return {id: docRef.id, ...userData};   // Return an object with the document ID and user data
}

const getAllAsync = async (col) => {
  const colRef = collection(db, col);   // Get the reference to the specified collection in Firestore
  const querySnapshot = await getDocs(colRef);   // Fetch all documents from the collection

  const users = [];
  querySnapshot.forEach(doc => {
    users.push({id: doc.id, ...doc.data()});   // Add each document's ID and data to the users array
  });

  return users;   // Return the array of users
}

const usersService = {
  createUser,
  getAllAsync
}

export default usersService;   // Export the usersService object as the default export
