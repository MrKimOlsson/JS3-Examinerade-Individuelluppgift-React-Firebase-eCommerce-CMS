// import React, { useState } from 'react';
// import { Form, Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import './form.css'

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const navigate = useNavigate();
  
//     const handleLogin = async (e) => {
//       e.preventDefault();
//       try {
//         const res = await axios.post('http://localhost:9999/api/user/login', {
//           email,
//           password,
//         });
//         console.log(res.data.token); // log the token
//         setIsLoggedIn(true); // update the login status in the parent component
//         navigate('/');
//       } catch (error) {
//         console.log(error); // handle error
//       }
//     };



//     return (
//           <div className="form-container">
//             <Form onSubmit={handleLogin}>
//               <h4>Please Login to Your Account</h4>
//               <div className="input-group">
//                 <label className='form-label' htmlFor="email">E-mail* <Link className='form-lable' to='/register'>Don't have an Account yet?</Link></label>
//                 <input type="email" name="email" id="email" className='form-inputField' value={email} onChange={(e) => setEmail(e.target.value)} />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="password" className='form-label'>Password* <Link to='/forgotpassword' className='form-lable'>Forgot your password?</Link></label>
//                 <input type="current-password" name="password" id="password" className='form-inputField' value={password} onChange={(e) => setPassword(e.target.value)} />
//               </div>
//               <button className='form-submitBtn' onSubmit={handleLogin}>Submit</button>
//             </Form>
//           </div>
//       );
//     };

// export default LoginForm