import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/products/productsSlice'
import Loader from '../../components/Loader/Loader'
import ProductGrid from '../../components/products/productGrid/ProductGrid'
import { Navigate } from 'react-router-dom'
import './products.scss'

const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    // Dispatches an action to fetch products
    dispatch(getProducts())
  }, [])
  
  // Extracts the 'products', 'loading', and 'error' states from the Redux store
  const { products, loading, error } = useSelector(state => state.productList)

  return (
    <div className='products-wrapper'>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <div className="">
        {
          <ProductGrid products={products} />
        }
      </div>
    </div>
  )
}

export default Products


// products.length > 0
// ? products.map(product => <ProductGrid key={product.id} product={product} />)
// : <h2>No products to show</h2>
// <ProductGrid key={products._id} products={products} />