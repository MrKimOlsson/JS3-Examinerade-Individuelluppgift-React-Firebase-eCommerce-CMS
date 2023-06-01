import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

const createOrder = async (orderData) => {
  const collectionRef = collection(db, 'orders')
  const docRef = await addDoc(collectionRef, orderData)

  if(!docRef.id) throw new Error('Something went wrong')

  console.log(docRef)
  return {id: docRef.id, ...orderData}

}

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const orders = []
  querySnapshot.forEach(doc => {
    orders.push({id: doc.id, ...doc.data()})
  })

  return orders
}

const ordersService = {
  createOrder,
  getAllAsync
}

export default ordersService


