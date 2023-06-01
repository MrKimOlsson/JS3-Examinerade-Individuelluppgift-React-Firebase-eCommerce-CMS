import React from 'react'
import './subscriberGrid.scss'
import { Link } from 'react-router-dom'
// import { FaCartPlus } from 'react-icons/fa'



const SubscriberGrid = ({ subscriber }) => {
  

  return (
    <div className="col">
      <div className="card h-100">

        <Link to={`/subscriberDetails/${subscriber.id}`} className='text-dark text-decoration-none'>
          <div className="card-body">
            <h5 className="card-title">Subscriber</h5>
            <p>ID: {subscriber.userId}</p>
          </div>
        </Link>
        </div>
      </div>

  )
}

export default SubscriberGrid