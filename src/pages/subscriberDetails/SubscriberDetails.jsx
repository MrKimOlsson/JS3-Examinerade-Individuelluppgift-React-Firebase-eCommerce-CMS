import React from 'react'
import useDoc from '../../hooks/useDoc'
import { deleteDoc, updateDoc, setDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

import './productDetails.scss'

const SubscriberDetails = () => {

  const navigate = useNavigate();

  // Function to delete a product
  const deleteProduct = async () => {
    await deleteDoc(doc(db, 'products', product.id))
    navigate('/products')
  }

  // Get the product id from the URL params
  const { id } = useParams()

  // Fetch the product data using the custom hook 'useDoc'
  const { data: product, error, loading } = useDoc('products', id)

  // If product data is not available, show loading spinner or error message
  if (!product) return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )

  return (
    <div className="wrapper">
      <section className="container">
        <div className="row">
          {/* Display the product title */}
          <h3>{product.title}</h3>

          <div className="col-lg-6">
            {/* Display the product image */}
            <img src={product.imageURL} alt={product.name} className="img-fluid" />

            {/* Button to delete the product */}
            <button className="btn-main btn-deleteProduct" onClick={deleteProduct}> Delete product</button>
          </div>
          <div className="col-lg-6">
            {/* Display the EditSubscriber component */}
            <EditSubscriber product={product} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubscriberDetails