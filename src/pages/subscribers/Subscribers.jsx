import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscribers } from '../../store/subscribers/subscribersSlice'
import Loader from '../../components/Loader/Loader'
import SubscriberGrid from '../../components/subscribers/subscriberGrid/SubscriberGrid'

const Subscribers = () => {

  const dispatch = useDispatch();

  // Fetch subscribers when the component mounts
  useEffect(() => {
  // Dispatches the action to fetch subscribers
  dispatch(getSubscribers());
}, []);

// Retrieve subscribers, loading, and error from the Redux store
const { subscribers, loading, error } = useSelector(state => state.subscriberList);

  
    return (
  
      <div className='subscriber-wrapper'>
          <div className='subscriber-container'>
  
          { loading && <Loader /> }
          { error && <p>{error}</p> }
  
          { subscribers && !loading && !error && subscribers.map(subscriber => (
            <SubscriberGrid key={subscriber.id} subscriber={subscriber} />
          ))}
          
        </div>
      </div>
    )
  }

export default Subscribers