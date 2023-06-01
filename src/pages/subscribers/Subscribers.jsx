import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscribers } from '../../store/subscribers/subscribersSlice'
import Loader from '../../components/Loader/Loader'
import SubscriberGrid from '../../components/subscribers/subscriberGrid/SubscriberGrid'

const Subscribers = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSubscribers())
  }, [])

  const { subscribers, loading, error } = useSelector(state => state.subscriberList)
  
    return (
  
      <div className='subscriber-wrapper'>
          <div className='subscriber-container'>
  
          { loading && <p><Loader /></p> }
          { error && <p>{error}</p> }
  
          { subscribers && !loading && !error && subscribers.map(subscriber => (
            <SubscriberGrid key={subscriber._id} subscriber={subscriber} />
          ))}
          
        </div>
      </div>
    )
  }

export default Subscribers