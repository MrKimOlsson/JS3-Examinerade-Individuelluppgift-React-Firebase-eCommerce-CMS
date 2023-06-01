import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/products/productsSlice'

const AddProductForm = () => {

  const [imageURL, setImageURL] = useState('');
  const [imageURL1, setImageURL1] = useState('');
  const [imageURL2, setImageURL2] = useState('');
  const [imageURL3, setImageURL3] = useState('');
  const [imageURL4, setImageURL4] = useState('');
  const [imageURL5, setImageURL5] = useState('');

  const dispatch = useDispatch()

  const [productData, setProductData] = useState({
    
    title: '',
    category: '',
    price: '',
    shortDescription: '',
    description: '',
    imageURL: []
  })

  const handleChange = e => {
    const { id, value } = e.target
    // setImageURL(['"' + imageURL1 + '", "' + imageURL2 + '", "' + imageURL3 + '", "' + imageURL4 + '", "' + imageURL5 + '"'])
    // console.log(imageURL)
    setProductData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      ...productData,
      imageURL: [imageURL1, imageURL2, imageURL3, imageURL4, imageURL5],
      price: +productData.price
    }

    dispatch(addProduct(data))
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

export default AddProductForm

// import React from 'react'
// import { Form } from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
// import './form.css'

// const AddProductForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [shortDescription, setShortDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [imageURL, setImageURL] = useState('');
//   const [imageURL1, setImageURL1] = useState('');
//   const [imageURL2, setImageURL2] = useState('');
//   const [imageURL3, setImageURL3] = useState('');
//   const [imageURL4, setImageURL4] = useState('');
//   const [imageURL5, setImageURL5] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setImageURL("'" + imageURL1 + "', '" + imageURL2 + "', '" + imageURL3 + "', '" + imageURL4 + "', '" + imageURL5 + "'")
//     console.log(imageURL)
//     try {
//       const response = await axios.post('http://localhost:9999/api/product', {
//         title,
//         description,
//         shortDescription,
//         category,
//         price,
//         imageURL
//       });

//       console.log('New product:', {
//         title,
//         description,
//         shortDescription,
//         category,
//         price
//       });

//       console.log(response.data);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   return (
//     // <div className='form-register-wrapper'>
//     <div className='form-container'>
//         <Form onSubmit={handleSubmit}>
//             <h4>Add a new product</h4>
//             <div className='formInput-wrapper'>
//                 <div>
//                     <div className="input-group">
//                         <label htmlFor="title">Title*</label>
//                         <input className='form-inputField' type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="description">Description*</label>
//                         <input className='form-inputField' type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="shortDescription">Short Description</label>
//                         <input className='form-inputField' type="text" id="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="category">Category</label>
//                         <input className='form-inputField' type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
//                     </div>

//                     <div className='input-group'>
//                         <label htmlFor="price">Price*</label>
//                         <input className="form-inputField" type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
//                     </div>
//                     <div className='input-group'>
//                         <input type="checkbox" name="" id="" />
//                         <p>Add product</p>
//                     </div>                
//                 </div>
        
//                 <div>

//                     <div className="input-group">
//                         <label htmlFor="imageURL1">Image URL 1</label>
//                         <input className='form-inputField' type="text" id="imageURL1" value={imageURL1} onChange={(e) => setImageURL1(e.target.value)} />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="imageURL2">Image URL 2</label>
//                         <input className='form-inputField' type="text" id="imageURL2" value={imageURL2} onChange={(e) => setImageURL2(e.target.value)} />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="imageURL3">Image URL 3</label>
//                         <input className='form-inputField' type="text" id="imageURL3" value={imageURL3} onChange={(e) => setImageURL3(e.target.value)} />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="imageURL4">Image URL 4</label>
//                         <input className='form-inputField' type="text" id="imageURL4" value={imageURL4} onChange={(e) => setImageURL4(e.target.value)} />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="imageURL5">Image URL 5</label>
//                         <input className='form-inputField' type="text" id="imageURL5" value={imageURL5} onChange={(e) => setImageURL5(e.target.value)} />
//                     </div>
                    
//                 </div>
//             </div>
//             <button className='form-submitBtn' onSubmit={handleSubmit}>Submit</button>
//         </Form>
//     </div>
//     // </div>
//   )
// }

// export default AddProductForm