import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

const createSubscriber = async (subscriberData) => {
  const collectionRef = collection(db, 'subscribers')
  const docRef = await addDoc(collectionRef, subscriberData)

  if(!docRef.id) throw new Error('Something went wrong')

  console.log(docRef)
  return {id: docRef.id, ...subscriberData}

}

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const subscribers = []
  querySnapshot.forEach(doc => {
    subscribers.push({id: doc.id, ...doc.data()})
  })

  return subscribers
}


const subscribersService = {
  createSubscriber,
  getAllAsync
}

export default subscribersService


