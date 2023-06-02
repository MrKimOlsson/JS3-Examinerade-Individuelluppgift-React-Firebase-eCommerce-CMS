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
  )
}

export default ProductGrid