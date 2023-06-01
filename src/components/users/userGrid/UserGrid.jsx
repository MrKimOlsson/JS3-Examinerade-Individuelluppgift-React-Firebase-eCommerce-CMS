import React from 'react'
import './userGrid.scss'
import { Link } from 'react-router-dom'
// import { FaCartPlus } from 'react-icons/fa'



const UserGrid = ({ user }) => {
  

  return (
    <div className="col">
      <div className="card h-100">

        <Link to={`/userDetails/${user.id}`}>
          <img className="userGridImage" src={user.imageURL} alt="" />
          <h5>{user.firstName + ' ' + user.lastName}</h5>
          <p>{user.email}</p>
          <p>{user.adress}</p>
        </Link>
      </div>
    </div>
  )
}

export default UserGrid