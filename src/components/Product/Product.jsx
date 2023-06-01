import './product.scss'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className='product'>
      <Link to={`/productDetails/${product.id}`}>
        <h2 className='productTitle'>{product.title}</h2>
        <div className='flex-row'>
        <img className='productGridImage' src={product.imageURL[0]} alt="Product image"/>
        <p className="card-text">{product.description.slice(0, 350)}...</p>
        </div>
        <p className="price">Price: {product.price}:-</p>
        {/* <p>{product.description.slice(0,40)}...</p> */}
      </Link>
    </div>
  )
}


export default Product