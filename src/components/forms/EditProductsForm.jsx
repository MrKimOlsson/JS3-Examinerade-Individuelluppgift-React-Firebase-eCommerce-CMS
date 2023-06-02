import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteDoc, updateDoc, setDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useParams, useNavigate } from 'react-router-dom'

const EditProductForm = () => {

  // State variables for image URLs
  const [imageURL1, setImageURL1] = useState('');
  const [imageURL2, setImageURL2] = useState('');
  const [imageURL3, setImageURL3] = useState('');
  const [imageURL4, setImageURL4] = useState('');
  const [imageURL5, setImageURL5] = useState('');

  const dispatch = useDispatch()

  // State variable for product data
  const [productData, setProductData] = useState({
    title: '',
    category: '',
    price: '',
    shortDescription: '',
    description: '',
    imageURL: []
  })

  // Create a reference to the product we want to edit
  const productDocRef = doc(db, 'products', product.id)

  // Updates the referenced product and navigates back to products
  const updateProduct = async () => {
    await updateDoc(productDocRef, {
      productData
    });
    navigate('/products')
  }

  const handleChange = e => {
    const { id, value } = e.target

    // Update the corresponding property in the form state
    setProductData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateProduct()
  }

  return (
    <div>
      <h1 className='text-center my-5'>Add a new product</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Title:</label>
          <input type="text" className="form-control" id='title' value={productData.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="shortDescription" className="form-label">Short Description:</label>
          <textarea className='form-control' id="shortDescription" rows="1" value={productData.shortDescription} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Product Price:</label>
          <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <textarea className='form-control' id="category" rows="1" value={productData.category} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description:</label>
          <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL1" className="form-label">Image Url 1:</label>
          <input type="text" className="form-control" id='imageURL1' value={imageURL1} onChange={(e) => setImageURL1(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL2" className="form-label">Image Url 2:</label>
          <input type="text" className="form-control" id='imageURL2' value={imageURL2} onChange={(e) => setImageURL2(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL3" className="form-label">Image Url 3:</label>
          <input type="text" className="form-control" id='imageURL3' value={imageURL3} onChange={(e) => setImageURL3(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL4" className="form-label">Image Url 4:</label>
          <input type="text" className="form-control" id='imageURL4' value={imageURL4} onChange={(e) => setImageURL4(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageURL5" className="form-label">Image Url 5:</label>
          <input type="text" className="form-control" id='imageURL5' value={imageURL5} onChange={(e) => setImageURL5(e.target.value)} />
        </div>
        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  )
}

export default EditProductForm