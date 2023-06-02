import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const useDoc = (collection, id) => {
  const [data, setData] = useState(null); // State to store the document data
  const [loading, setLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(null); // State to store error message, if any

  useEffect(() => {
    const getDocAsync = async () => {
      setLoading(true);
      const docRef = doc(db, collection, id); // Create a reference to the specified document
      const docSnapshot = await getDoc(docRef); // Get the document snapshot

      if (!docSnapshot.exists()) {
        setLoading(false);
        setError('Could not find that document');
      } else {
        // Set the document data to state
        setData({ id: docSnapshot.id, ...docSnapshot.data() });
        setLoading(false);
      }
    };

    getDocAsync();
  }, []);

  return { data, error, loading }; // Return the document data, error, and loading state
};

export default useDoc;
