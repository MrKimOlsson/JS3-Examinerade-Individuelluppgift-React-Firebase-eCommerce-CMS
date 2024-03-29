import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../images/logo/Logo.svg'
import './navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../store/auth/authSlice'



const Navbar = () => {

  // Get the user from the auth state
const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  console.log(user)

    
    return (
      <>
      
      <nav className='navbar'>
        <div className='navContent-container'>

            <div className="logo">
              <Link to='/' ><img src={Logo} alt={<h1>Bmerketo</h1>} /></Link>
            </div>
            <p className='Dashboard'><b>Dashboard</b></p>
            <ul>
              <li><NavLink className='nav-link' to='/'>Home</NavLink></li>

              {/* Links below are only avalible while logged in */}
         
              {/* If there is a users show the links below */
                user
                ? <> 
                    <li><NavLink className='nav-link' to='/products'>Products</NavLink></li>
                    <li><NavLink className='nav-link' to='/orders'>Orders</NavLink></li>
                    <li><NavLink className='nav-link' to='/users'>Users</NavLink></li>
                    <li><NavLink className='nav-link' to='/subscribers'>Subscribers</NavLink></li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/addProduct">Add-Product</NavLink>
                    </li>
                    <li className="nav-item">
                      <button className='nav-link' onClick={() => dispatch(logoutUser())} >Logout</button>
                    </li>
                  </>
                  /* If no user is found, only show the links below */
                  : <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                    </li>
                }
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
