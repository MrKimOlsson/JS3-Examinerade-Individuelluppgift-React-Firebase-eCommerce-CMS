import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { auth, db } from '../../firebase/config';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, setError } from '../../store/auth/authSlice';

const RegisterForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // State variable for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // Function to handle change in the form input
  const handleChange = e => {
    const { id, value } = e.target

    // Update the corresponding property in the form data state
    setFormData(data => ({ ...data, [id]: value }))

    // Update individual state variables for first name, last name, and email
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setEmail(formData.email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // Dispatch an action to set an error message
      dispatch(setError("the passwords don't match"))
      return
    }

    try {
      // Check if the email is registered/avalible
      const adminsCollection = collection(db, 'admins');
      const querySnapshot = await getDocs(adminsCollection);
      const isEmailExists = querySnapshot.docs.some((doc) => doc.data().email === formData.email);
      if (isEmailExists) {
        console.log('The email adress is already registered. Please use a different email or log in.');
        return;
      }

      // const auth = getAuth();
      await dispatch(registerUser(formData))
      // setSubmitted(true)

      // Collecting admin data to store in admins collection on the DB
      const adminData = {
        firstName,
        lastName,
        email,
      };
      
      // Getting the new user to get the user.uid
      const user = auth.currentUser;
      // Geting a reference to the collection on the database
      const collectionRef = collection(db, 'admins');
      const docRef = doc(collectionRef, user.uid);

      // Sending admin data to the collection reference
      await setDoc(docRef, adminData);

      
      navigate('/');

    } catch (error) {
      console.error(error);
    }
  };


  return (

    <div>
      <h1 className='text-center my-5'>Register a new account</h1>
       <p>Already a member? <Link to="/login">Login</Link> instead</p>
       <Form noValidate onSubmit={handleSubmit}>
         <div className="mb-3">
          <label htmlFor="firstName" className='form-label'>First name</label>
           <input type="text" className='form-control' id='firstName' value={formData.firstName} onChange={handleChange} />
         </div>
         <div className="mb-3">
          <label htmlFor="lastName" className='form-label'>Last name</label>
           <input type="text" className='form-control' id='lastName' value={formData.lastName} onChange={handleChange} />
         </div>
         <div className="mb-3">
          <label htmlFor="email" className='form-label'>Email address</label>
           <input type="email" className='form-control' id='email' value={formData.email} onChange={handleChange} />
         </div>
         <div className="mb-3">
           <label htmlFor="password" className='form-label'>Password</label>
           <input type="password" className='form-control' id='password' value={formData.password} onChange={handleChange} />
         </div>
         <div className="mb-3">
           <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
           <input type="password" className='form-control' id='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
         </div>
         { loading && <p>Loading...</p> }
         { error && <p className='text-danger'>{ error }</p> }
         <button className='btn btn-primary'>Register</button>
       </Form>
     </div>
  )
};

export default RegisterForm