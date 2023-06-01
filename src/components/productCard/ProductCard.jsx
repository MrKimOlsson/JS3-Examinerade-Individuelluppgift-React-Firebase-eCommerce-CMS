import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100">

        <Link to={`/productDetails/${product.id}`} className='text-dark text-decoration-none'>
          <img src={product.imageURL} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description.slice(0, 50)}...</p>
          </div>
        </Link>
        <div className="d-flex justify-content-between align-items-center p-3">
          <button className="btn btn-info"><FaCartPlus /> Add To Cart</button>
          <p className="text-danger h5">{product.price} :-</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard