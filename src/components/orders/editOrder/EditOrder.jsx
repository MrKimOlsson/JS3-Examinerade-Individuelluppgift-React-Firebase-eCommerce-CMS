import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';


const EditOrder = ({ order }) => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // State for storing the updated order data
  const [orderData, setOrderData] = useState({
    status: order.status
  });

  // Event handler for input changes
  const handleChange = e => {
    const { id, value } = e.target;
    setOrderData(form => ({
      ...form,
      [id]: value,
    }));
  };

  // Updates the order with the new status
  const updateOrder = async (e) => {
    e.preventDefault()
    try {
      // Get a reference to the order document in the database
      const docRef = doc(db, 'orders', order.id); 

      // Update the order document with the new status
      await updateDoc(docRef, {
        status: orderData.status
      });

      // Navigate back to the orders page
      navigate('/orders');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='updateForm-wrapper'>
        <div className='updateForm-container'>
          
              <h4 className='text-center'>Uppdate order</h4>

              <form onSubmit={updateOrder}>
                <div className="input-group">
                  <label htmlFor="status" className="form-label">Order Status:</label>
                  <input type="text" className="form-control" id='status' value={orderData.status} onChange={handleChange} />
                </div>
                {/* <div className="input-group">
                  <label htmlFor="shortDescription" className="form-label">Short Description:</label>
                  <textarea className='form-control' id="shortDescription" rows="1" value={productData.shortDescription} onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="price" className="form-label">Product Price:</label>
                  <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="category" className="form-label">Category:</label>
                  <textarea className='form-control' id="category" rows="1" value={productData.category} onChange={handleChange}></textarea>
                </div>
                <div className="input-group">
                  <label htmlFor="description" className="form-label">Product Description:</label>
                  <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
                </div> */}
            
              
                <div className='center'>
                  <button className="btn btn-primary addProductFormBtn">Uppdatera</button>
                </div>
              </form>
        </div>
      </div>
    </>
  )
}

export default EditOrder