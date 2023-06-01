import React from 'react'
import './orderGrid.scss'
import { Link } from 'react-router-dom'
// import { FaCartPlus } from 'react-icons/fa'



const OrderGrid = ({ order }) => {
  

  return (
    <div className="col">
      <div className="card h-100">

        <Link to={`/orderDetails/${order.id}`} className='text-dark text-decoration-none'>
          <div className="card-body">
            <h5 className="card-title">Order</h5>
            <p>Order ID: {order.id}</p>
            <p>User ID: {order.userId}</p>
          </div>
        </Link>
        </div>
      </div>

  )
}

export default OrderGrid