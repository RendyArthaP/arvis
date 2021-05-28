import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import { useSelector, useDispatch} from 'react-redux';
import { getAllProduct } from '../redux/actions/product.actions';
import { logOutActions } from '../redux/actions/auth.actions';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.handleProducts.allProduct)
  const loadings = useSelector((state) => state.handleProducts.isLoading)
  const getToken = useSelector((state) => state.firebaseReducer.auth)

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  return (
    <div>
      <Navbar 
        getToken = {getToken}
        logOutActions = {logOutActions}
      />
      <Hero />
      <Product 
        products = {products}
        loadings = {loadings}
      />
    </div>
  )
}

export default Home
