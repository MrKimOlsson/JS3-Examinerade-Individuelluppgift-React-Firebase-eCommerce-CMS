import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../images/logo/Logo.svg'
import './navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../store/auth/authSlice'
import { getAdmins } from '../../../store/admins/adminsSlice'
import Loader from '../../Loader/Loader'


const Navbar = () => {

const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()


    useEffect(() => {
      dispatch(getAdmins())
    }, [])
  

    const { admins, loading, error } = useSelector(state => state.adminList)
    console.log(admins)


    // if(user){

    //     const loggedInAdmin = []
    //     const serachFunction = () => {
    //     admins.forEach(admin => {
    //       if(admin.email.includes(user.email)){
    //         return loggedInAdmin.push(admin)
    //       }
    //     });
    //   }
    //   serachFunction()
    // }
    // Searching the admin list to find logged in admin



  return (
    <>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <nav className='navbar'>
        <div className='navContent-container'>

            <div className="logo">
              <Link to='/' ><img src={Logo} alt={<h1>Bmerketo</h1>} /></Link>
            </div>
            <h2 className='Dashboard'>Dashboard</h2>
            {/* <p className='userName'><b>Logged in as: {loggedInAdmin[0].firstName}</b></p> */}
            <ul>
              <li><NavLink className='nav-link' to='/'>Home</NavLink></li>

              {/* Links below are only avalible while logged in */}
              {
                user
                ? <>
                    {/* <li><NavLink className='nav-link' to='/addProduct'>Add-Product</NavLink></li> */}
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
