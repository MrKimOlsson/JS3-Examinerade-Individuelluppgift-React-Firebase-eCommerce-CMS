import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/products/productsSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  // Accessing the 'user' state from the Redux store
  const { user } = useSelector(state => state.auth);

  // Accessing the 'error' state from the Redux store
  const { error } = useSelector(state => state.productList);

  // Initializing the 'navigate' function from react-router-dom
  const navigate = useNavigate();

  // Initializing the 'dispatch' function from react-redux
  const dispatch = useDispatch();

  // State variables to manage image URLs
  const [imageURL1, setImageURL1] = useState('');
  const [imageURL2, setImageURL2] = useState('');
  const [imageURL3, setImageURL3] = useState('');
  const [imageURL4, setImageURL4] = useState('');
  const [imageURL5, setImageURL5] = useState('');

  // State variable to manage the product data
  const [productData, setProductData] = useState({
    title: '',
    category: '',
    price: '',
    shortDescription: '',
    description: '',
    imageURL: []
  });

  // Event handler for input changes
  const handleChange = e => {
    const { id, value } = e.target;
    setProductData(form => {
      return {
        ...form,
        [id]: value
      };
    });
  };

  // Event handler for form submission
  const handleSubmit = e => {
    e.preventDefault();
    try {
      const data = {
        ...productData,
        imageURL: [imageURL1, imageURL2, imageURL3, imageURL4, imageURL5],
        price: +productData.price
      };

      // Dispatching the 'addProduct' action with the product data
      dispatch(addProduct(data));

      // Navigating to the '/products' route
      navigate('/products');
    } catch (error) {
      console.log(error);
    }
  };

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

export default AddProduct