import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../store/auth/authSlice'

const LoginForm = () => {
  const navigate = useNavigate()

  // Retrieve user, loading, and error state from the Redux store
  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // State variables for form submission
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { id, value } = e.target

    // Update the corresponding property in the form data state
    setFormData(data => ({ ...data, [id]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)

    // Dispatch the loginUser action with the form data
    await dispatch(loginUser(formData))
    setSubmitted(true)
  }

  useEffect(() => {
    // If form is submitted and user is authenticated, navigate to home page
    if (submitted && user) {
      navigate('/')
    }
  }, [submitted, user])

  return (
    <div>
      <h1 className='text-center my-5'>Login to your account</h1>
      <p>Not a member? <Link to="/register">Register</Link> instead</p>
      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className='form-label'>Email address</label>
          <input type="email" className='form-control' id='email' value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" className='form-control' id='password' value={formData.password} onChange={handleChange} />
        </div>
        { loading && <p>Loading...</p> }
        { error && <p className='text-danger'>{ error }</p> }
        <button className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm