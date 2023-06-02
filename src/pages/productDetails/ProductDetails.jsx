import React from 'react'
import useDoc from '../../hooks/useDoc'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import EditProduct from '../../components/products/productGrid/editProduct/EditProduct'
import './productDetails.scss'

const ProductDetails = () => {
  
  // Extract the 'id' parameter from the URL using the useParams() hook
  const { id } = useParams()
  // Use the useDoc() custom hook to fetch data for a specific product with the given 'id' from the 'products' collection
  const { data : product, error, loading } = useDoc('products', id)

 // If the product data is null or undefined, render the loader indicator and the error message
  if(!product) return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
    </div>
  )

  return (
    <section className="wrapper">
      <div className="productDetails-wrapper">
        {console.log(product)}
        <h3>{product.title}</h3>
        <div className="productDetails-container">
          <div className="productDetails-image-container">
            <img src={product.imageURL} alt={product.name} className="productDetails-image" />
          </div>
          <div className="productDetails-edit-container">
            <EditProduct product={product}/>
          </div>
        </div>
      </div>
    </section>   
  )
}

export default ProductDetails