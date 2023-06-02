import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'

// Function to sign up a user with email and password
const signup = async (email, password) => {
  // Create a user with the provided email and password using the createUserWithEmailAndPassword function from the Firebase auth API
  const userCredential = await createUserWithEmailAndPassword(auth, email, password, firstName, lastName);

  // Create a user object with the UID and email of the authenticated user
  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email
  };
  
  // Return the user object
  return user;
}

// Function to log in a user with email and password
const login = async (email, password) => {
  // Sign in a user with the provided email and password using the signInWithEmailAndPassword function from the Firebase auth API
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  console.log(email);
  console.log(password);

  // Create a user object with the UID and email of the authenticated user
  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email
  };
  
  // Return the user object
  return user;
}

// Function to log out a user
const logout = async () => {
  // Sign out the current user using the signOut function from the Firebase auth API
  return await signOut(auth);
}

// Object that represents the authentication service, with the signup, login, and logout functions as properties
const authService = {
  signup,
  login,
  logout,
};

// Export the authService as the default export of the module
export default authService;