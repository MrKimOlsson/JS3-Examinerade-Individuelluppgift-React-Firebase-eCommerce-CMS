import { db } from "../../firebase/config"
import { addDoc, collection, getDocs } from 'firebase/firestore'

const getAllAsync = async (col) => {
  const colRef = collection(db, col)
  const querySnapshot = await getDocs(colRef)

  const admins = []
  querySnapshot.forEach(doc => {
    admins.push({id: doc.id, ...doc.data()})
  })

  return admins
}

// const getAsync = async (col, id) => {
//   const docRef = doc(db, col, id)
//   const docSnapshot = await getDoc(docRef)
//   return { id: docSnapshot.id, ...docSnapshot.data() }
// }

const adminsService = {
  getAllAsync
}

export default adminsService


