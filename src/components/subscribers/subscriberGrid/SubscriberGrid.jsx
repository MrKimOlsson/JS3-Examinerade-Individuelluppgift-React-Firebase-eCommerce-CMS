import React from 'react'
import './subscriberGrid.scss'
import { Link, useNavigate } from 'react-router-dom'
// import { FaCartPlus } from 'react-icons/fa'



const SubscriberGrid = ({ subscriber }) => {


  
    const navigate = useNavigate();
    
    const deleteSubscriber = async () => {
      await deleteDoc(doc(db, 'subscribers', subscriber.id))
      navigate('/')
    }
  

  return (
    <div className="col">
      <div className="card h-100">
        {console.log(subscriber)}

        <Link to={`/subscriberDetails/${subscriber.id}`} className='text-dark text-decoration-none'>
          <div className="card-body">
            <h5 className="card-title">Subscriber</h5>
            <p>Email: {subscriber.email}</p>
            <button className="btn-main btn-delete" onClick={deleteSubscriber}> Delete subscriber</button>
          </div>
        </Link>
        </div>
      </div>

  )
}

export default SubscriberGrid