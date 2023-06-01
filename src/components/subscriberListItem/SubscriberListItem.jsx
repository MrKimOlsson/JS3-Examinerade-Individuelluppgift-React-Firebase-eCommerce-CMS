import React from 'react'
import { Link } from 'react-router-dom'
import './subscriberListItem.css'

const SubscriberListItem = ({ subscriber }) => {
  return (
    <Link to={`/subscriberDetails/${subscriber._id}`}>
      <h3>{subscriber.email}</h3>
    </Link>
  )
}

export default SubscriberListItem