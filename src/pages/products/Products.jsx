import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/products/productsSlice'
import Loader from '../../components/Loader/Loader'
import ProductGrid from '../../components/products/productGrid/ProductGrid'
import { Navigate } from 'react-router-dom'

const Product = () => {

  const { user } = useSelector(state => state.auth)
  if(!user) return <Navigate to='/login'/>

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, loading, error } = useSelector(state => state.productList)

  return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
        {
          products.length > 0
          ? products.map(product => <ProductGrid key={product.id} product={product} />)
          : <h2>No products to show</h2>
          // <ProductGrid key={products._id} products={products} />
        }
      </div>
    </div>
  )
}

export default Product