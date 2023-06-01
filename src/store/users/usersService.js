import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

const createUser = async (userData) => {
  const collectionRef = collection(db, 'users')
  const docRef = await addDoc(collectionRef, orderData)

  if(!docRef.id) throw new Error('Something went wrong')

  console.log(docRef)
  return {id: docRef.id, ...userData}

}

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const users = []
  querySnapshot.forEach(doc => {
    users.push({id: doc.id, ...doc.data()})
  })

  return users
}


const usersService = {
  createUser,
  getAllAsync
}

export default usersService


