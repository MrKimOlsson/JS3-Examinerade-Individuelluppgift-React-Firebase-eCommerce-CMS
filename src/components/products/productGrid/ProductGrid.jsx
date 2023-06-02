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
          // Check if there are products available
          products.length > 0
          ? (
            // If there are products, map over them and render a Product component for each product
            products.map(product => <Product key={product.id} product={product} />)
          )
          : (
            // If there are no products, display a message indicating no products to show
            <h2>No products to show</h2>
          )
        }
        
      </div>
    </div>
  )
}

export default ProductGrid