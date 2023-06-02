import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import useDoc from '../../hooks/useDoc'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import './orderDetails.scss'
import EditOrder from '../../components/orders/editOrder/EditOrder'

const OrderDetails = () => {

  const { id } = useParams()
  const { data : order, error, loading } = useDoc('orders', id)
  
  if(!order) return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
    </div>
  )
  
  let orderedProducts = []
  
  order.products.forEach(product => {
    orderedProducts.push(product)
  });
  

  return (

    <div className="my-5 py-5">
      <section className="detailedOrder-wrapper">
        <div className="detailedOrder-container">
          <h3>Order</h3>
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>User ID:</b> {order.userId}</p>
          <h5>Products:</h5>
          {console.log("order")}
          {console.log(order)}
          {/* <p>Order products: {order.products[0].title}</p> */}
          {
            orderedProducts.map((product) => (
              <div className="orderedProductCard" key={product.productId}>
              <p>Product Title: {product.title}</p>
              <img className='orderedProductImage' src={product.image} alt="Product image"/>
              <p>Product ID: {product.productId}</p>
              <p>Product price: {product.price}</p>
              <p>Amount: {product.quantity}</p>
            </div>
            ))
            
          }

          <p><b>Total price: {order.totalPrice}$</b></p>
          <p><b>Order status: {order.status}</b></p>
       
  
          
        <EditOrder order={order}/>
        </div>
      </section>
    </div>
  )
}

export default OrderDetails


// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { clearProduct, getProductById } from '../../store/products/singleProductSlice'
// import './productDetails.css'

// const ProductDetails = () => {

//   const dispatch = useDispatch()
//   const { id } = useParams()

//   useEffect(() => {
//     dispatch(getProductById(id))

//     return () => {
//       dispatch(clearProduct())
//     }

//   }, [])

//   const { product, loading, error } = useSelector(state => state.singleProduct)

//   if(error) {
//     return (
//       <div>
//         <h2>{error}</h2>
//       </div>
//     )
//   }

//   return (
//     <>
//      { loading && <p>Loading...</p> }
//      { product &&
//       <div>
//         <h2>{product.title}</h2>
//         <p>{product.price}$</p>
//         <p>{product.description}</p>
//         <div>
//         <img className='productDetailsImage-main' src={product.imageURL[0]} alt="Product image 1"/>
//           <div className='productDetailsSmallImageRow'>
//             <img className='productDetailsImage-small' src={product.imageURL[1]} alt="Product image 2"/>
//             <img className='productDetailsImage-small' src={product.imageURL[2]} alt="Product image 3"/>
//             <img className='productDetailsImage-small' src={product.imageURL[3]} alt="Product image 4"/>
//             <img className='productDetailsImage-small' src={product.imageURL[4]} alt="Product image 5"/>
//           </div>
//         </div>
//      </div>}
//     </>
//   )
// }

// export default ProductDetails