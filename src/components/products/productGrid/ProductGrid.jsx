import React from 'react'
import './productGrid.scss'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import Product from '../../Product/Product'



const ProductGrid = ({products}) => {

  return (

    <div className='grid-wrapper'>
        <div className='grid-container'>

          {
            products.length > 0
            ? products.map(product => <Product key={product.id} product={product} />)
            : <h2>No products to show</h2>
          }
        
      </div>
    </div>
    // <div className="grid-wrapper">
    //   <div className="grid-container">

    //     <Link to={`/productDetails/${product.id}`} className='text-dark text-decoration-none'>
    //       <img src={product.imageURL} className="card-img-top" alt={product.name} />
    //       <div className="card-body">
    //         <h5 className="card-title">{product.title}</h5>
    //         <p className="card-text">{product.description.slice(0, 50)}...</p>
    //       </div>
    //     <div className="d-flex justify-content-between align-items-center p-3">
    //       <p className="text-danger h5">Price: {product.price}:-</p>
    //     </div>
    //     </Link>
    //   </div>
    // </div>
  )
}

export default ProductGrid