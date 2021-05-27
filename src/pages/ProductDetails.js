import React, { useEffect } from 'react';
import { getProductById } from '../redux/actions/product.actions';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import Navbar from '../components/Navbar';

const ProductDetails = () => {
  let { id } = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.handleProducts.productByID)
 
  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])

  return (
    <>
     <Navbar />
     <div className="h-screen p-4 lg:px-10">
       <div className="flex flex-col items-center lg:flex-row">
          <img 
            src={productDetails.image}
            alt={productDetails.titleProduct}
            className="w-full max-w-lg object-fill"
          />
          <div className="flex flex-col py-4 lg:mx-10">
            <h1 className="font-bold text-2xl font-roboto text-blue-500">
              {productDetails.titleProduct}
            </h1>
            <div className="flex flex-row my-1">
              <p className="font-normal text-base font-roboto text-blue-400">
                $ {productDetails.price}
              </p>
              <div className="flex items-center mx-6">
                <p className="text-base font-roboto text-blue-400 font-medium">Stock: </p>
                <p className="text-sm font-roboto text-blue-400 font-normal ml-1">{productDetails.stock} Pcs</p>
              </div>
            </div>
            <p className="font-normal text-base w-full max-w-lg font-roboto text-gray-500">
              {productDetails.description}
            </p>
            <button className="bg-blue-400 my-2 w-full text-white p-1.5 font-roboto">
              Add To Cart
            </button>
          </div>
       </div>
     </div>
    </>
  )
}

export default ProductDetails
