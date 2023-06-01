import React from 'react'
import RegisterForm from '../../components/forms/RegisterForm'

const Register = () => {
  return (
    <>
      <RegisterForm />
    </>
  )
}

export default Register

// import { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { registerUser, setError } from '../../store/auth/authSlice'

// const Register = () => {

  // const { user, loading, error } = useSelector(state => state.auth)
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const [submitted, setSubmitted] = useState(false)
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // })

  // const handleChange = e => {
  //   const { id, value } = e.target
  //   setFormData(data => ({ ...data, [id]: value }))
  // }

//   const handleSubmit = async e => {
//     e.preventDefault()
    // if(formData.password != formData.confirmPassword) {
    //   dispatch(setError("the passwords don't match"))
    //   return
//     }

//     await dispatch(registerUser(formData))
//     setSubmitted(true)
//   }

//   useEffect(() => {
//     if(submitted && user) {
//       navigate('/')
//     }
//   }, [submitted, user])

//   return (
//     <div>
//       <h1 className='text-center my-5'>Register a new account</h1>
//       <p>Already a member? <Link to="/login">Login</Link> instead</p>
//       <form noValidate onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className='form-label'>Email address</label>
//           <input type="email" className='form-control' id='email' value={formData.email} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className='form-label'>Password</label>
//           <input type="password" className='form-control' id='password' value={formData.password} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
//           <input type="password" className='form-control' id='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
//         </div>
//         { loading && <p>Loading...</p> }
//         { error && <p className='text-danger'>{ error }</p> }
//         <button className='btn btn-primary'>Register</button>
//       </form>
//     </div>
//   )
// }

// export default Register
