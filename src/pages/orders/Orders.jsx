import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../store/orders/ordersSlice'
import Loader from '../../components/Loader/Loader'
import OrderGrid from '../../components/orders/orderGrid/OrderGrid'
import { Navigate } from 'react-router-dom'
import './orders.scss'

const Orders = () => {

  const dispatch = useDispatch()
  
 // Fetch orders when the component mounts using the useEffect hook
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  
// Extract the 'orders', 'loading', and 'error' properties from the 'orderList' slice of the Redux store
  const { orders, loading, error } = useSelector(state => state.orderList)

  return (
    <div className='orderList'>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
        {
          orders.length > 0
          ? orders.map(order => <OrderGrid key={order.id} order={order} />)
          : <h2>No orders to show</h2>
        }
      </div>
    </div>
  )
}

export default Orders