import React from 'react'
import { Link } from 'react-router-dom';

const ListProduct = ({product}) => {
  return (
    <Link to={`/product-details/${product.id}`}>
      <div 
        className="bg-blue-400 mb-4 w-72 rounded-xl flex flex-col md:mx-4"
      >
        <img 
          src={product.image}
          alt={product.titleProduct}
          className="w-full h-full object-fill rounded-xl"
        />
        <div className="p-4">
          <h1 className="text-white font-medium text-lg font-roboto">
            {product.titleProduct}
          </h1>
          <span className="text-white font-normal text-base font-roboto">
            $ {product.price}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ListProduct
