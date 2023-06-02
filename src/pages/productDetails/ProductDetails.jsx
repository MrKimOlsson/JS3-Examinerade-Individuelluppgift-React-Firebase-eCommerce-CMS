import React from 'react'
// import { FaCartPlus } from 'react-icons/fa'
import useDoc from '../../hooks/useDoc'
import { deleteDoc, updateDoc, setDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import EditProductForm from '../../components/forms/EditProductsForm'
import EditProduct from '../../components/products/productGrid/editProduct/EditProduct'
import './productDetails.scss'

const ProductDetails = () => {
  
  // const navigate = useNavigate();
  
  // const deleteProduct = async () => {
  //   await deleteDoc(doc(db, 'products', product.id))
  //   navigate('/products')
  // }

  const { id } = useParams()
  const { data : product, error, loading } = useDoc('products', id)

  if(!product) return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
    </div>
  )

// Create a reference to the product we want to edit
// const productDocRef = doc(db, 'products', product.id)

// // Updates the referense product and navigates back to products
//   const updateProduct = async () => {
//     await updateDoc(productDocRef, {
//       "price": 17
//     });
//     navigate('/products')
//   }


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


// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { clearProduct, getProductById } from '../../store/products/singleProductSlice'
// import './productDetails.css'

// const ProductDetails = () => {

//   const dispatch = useDispatch()
//   const { id } = useParams()

//   useEffect(() => {
//     dispatch(getProductById(id))

//     return () => {
//       dispatch(clearProduct())
//     }

//   }, [])

//   const { product, loading, error } = useSelector(state => state.singleProduct)

//   if(error) {
//     return (
//       <div>
//         <h2>{error}</h2>
//       </div>
//     )
//   }

//   return (
//     <>
//      { loading && <p>Loading...</p> }
//      { product &&
//       <div>
//         <h2>{product.title}</h2>
//         <p>{product.price}$</p>
//         <p>{product.description}</p>
//         <div>
//         <img className='productDetailsImage-main' src={product.imageURL[0]} alt="Product image 1"/>
//           <div className='productDetailsSmallImageRow'>
//             <img className='productDetailsImage-small' src={product.imageURL[1]} alt="Product image 2"/>
//             <img className='productDetailsImage-small' src={product.imageURL[2]} alt="Product image 3"/>
//             <img className='productDetailsImage-small' src={product.imageURL[3]} alt="Product image 4"/>
//             <img className='productDetailsImage-small' src={product.imageURL[4]} alt="Product image 5"/>
//           </div>
//         </div>
//      </div>}
//     </>
//   )
// }

// export default ProductDetails