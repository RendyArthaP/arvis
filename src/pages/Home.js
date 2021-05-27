import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import { useSelector, useDispatch} from 'react-redux';
import { getAllProduct } from '../redux/actions/product.actions';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.handleProducts.allProduct)
  const loadings = useSelector((state) => state.handleProducts.isLoading)

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <Hero />
      <Product 
        products = {products}
        loadings = {loadings}
      />
    </div>
  )
}

export default Home
