import './product.scss'
import { Link } from 'react-router-dom'

// Component for displaying a single product
const Product = ({ product }) => {
  // Return null if the product is undefined or null
  if (!product) {
    return null;
  }

  return (
    <div className="product-wrapper">
      <Link to={`/productDetails/${product.id}`}>
        <div className='product'>
          <h2 className='productTitle'>{product.title}</h2>
          <div className='flex-row'>
            <img className='productGridImage' src={product.imageURL[0]} alt="Product image"/>
            <p className="card-text">{product.description.slice(0, 350)}...</p>
          </div>
          <p className="price">Price: {product.price}:-</p>
        </div>
      </Link>
    </div>
  )
}

export default Product