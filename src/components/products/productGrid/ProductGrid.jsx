import React from 'react'
import './productGrid.css'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'



const ProductGrid = ({ product }) => {
  
  // const dispatch = useDispatch()
  // const { products, error, loading } = useSelector(state => state.products)

  // useEffect(() => {
  //   dispatch(getAllProducts())
  // }, [])

  

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
          <p className="text-danger h5">Price: {product.price}:-</p>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid