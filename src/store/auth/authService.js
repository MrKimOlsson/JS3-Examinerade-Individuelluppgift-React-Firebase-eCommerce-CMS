import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
// import { collection, doc, setDoc } from 'firebase/firestore'

const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password, firstName, lastName)
  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email
  }
  
  return user
}

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  console.log(email)
  console.log(password)
  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email
  }
  
  return user
}

const logout = async () => {
  return await signOut(auth)
}

const authService = {
  signup,
  login,
  logout,
}

export default authService
