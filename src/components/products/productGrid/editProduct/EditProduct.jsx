import React, { useState } from 'react';
import './editProduct.scss';
// import '../../form/addProductForm/addProductForm.scss'
// import { useDispatch, useSelector } from 'react-redux';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useNavigate } from 'react-router-dom';

const EditProduct = ({ product }) => {

  // Get navigate to redirect user after delete
  const navigate = useNavigate();

  // Delete product function
  const deleteProduct = async () => {
    await deleteDoc(doc(db, 'products', product.id))
    navigate('/products')
  }

  // Set input fields to match the product data
  const [productData, setProductData] = useState({
    title:            product.title,
    category:         product.category,
    price:            product.price,
    shortDescription: product.shortDescription,
    description:      product.description,
    imageURL:         product.imageURL,
  });

  // Handle change in input fields
  const handleChange = e => {
    const { id, value } = e.target;
    setProductData(form => ({
      ...form,
      [id]: value,
    }));
  };

  // Handle new images added to the imageURL array
  const handleImageChange = (e, index) => {
    const { value } = e.target
    const images = productData.imageURL
    images[index] = value
    setProductData(form => ({
      ...form,
      imageURL: images
    }))
  }

  // Update product function
  const updateProduct = async (e) => {
    e.preventDefault()
    try {
      const docRef = doc(db, 'products', product.id); 

      // Update the product data with input field data
      await updateDoc(docRef, {
        title:              productData.title,
        category:           productData.category,
        price:              productData.price,
        shortDescription:   productData.shortDescription,
        description:        productData.description,
        imageURL:           productData.imageURL,
      });

      // Redirect the user to the products page after submit
      navigate('/products');

      // Catch errors
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='updateForm-wrapper'>
        <div className='updateForm-container'>
          
              <h4 className='text-center title-update'>Uppdatera Produkten</h4>

              <form className="updateForm" onSubmit={updateProduct}>
                <div className="input-group">
                  <label htmlFor="name" className="form-label">Title:</label>
                  <input type="text" className="form-control" id='title' value={productData.title} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="shortDescription" className="form-label">Short Description:</label>
                  <textarea className='form-control' id="shortDescription" rows="3" value={productData.shortDescription} onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="price" className="form-label">Price:</label>
                  <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="category" className="form-label">Category:</label>
                  <textarea className='form-control' id="category" rows="1" value={productData.category} onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
                </div>
                {productData.imageURL.map((img, index) => (
                  <div key={index} className="input-group">
                    <label htmlFor={"imageURL" + index + 1} className="form-label">Image Url {index + 1}:</label>
                    <input type="text" className="form-control" id={"imageURL" + index + 1} value={productData.imageURL[index]}  onChange={(e) => handleImageChange(e, index)} />
                  </div>
                ))
                }
                <div className='btn-div'>
                  <button className="btn-main btn-update">Update product</button>
                  <button className="btn-main btn-delete" onClick={deleteProduct}> Delete product</button>
                </div>
              </form>
        </div>
      </div>
    </>
  )
}

export default EditProduct