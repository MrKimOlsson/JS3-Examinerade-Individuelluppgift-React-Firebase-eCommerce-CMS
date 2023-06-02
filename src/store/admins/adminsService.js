import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

// Function to asynchronously fetch all documents from a collection
const getAllAsync = async (col) => {
  // Get a reference to the collection using the Firestore collection function
  const colRef = collection(db, col);

  // Retrieve the query snapshot asynchronously using the getDocs function
  const querySnapshot = await getDocs(colRef);

  // Initialize an empty array to store the fetched data
  const admins = [];

  // Iterate through each document in the query snapshot
  querySnapshot.forEach(doc => {
    // Extract the document ID and data, and add it to the admins array
    admins.push({ id: doc.id, ...doc.data() });
  });

  // Return the admins array
  return admins;
};

// Object that represents the admins service, with the getAllAsync function as a property
const adminsService = {
  getAllAsync
};

export default adminsService


