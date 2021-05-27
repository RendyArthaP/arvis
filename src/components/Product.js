import React from 'react'
import ListProduct from './ListProduct'

const Product = ({products, loadings}) => {
  return (
    <div className="h-screen p-4 lg:px-10">
      <div>
        <h1 className="font-roboto text-blue-400 text-2xl font-bold">
          Our Products
        </h1>
        
          {loadings 
            ?
              <>
                <h1 className="text-center font-bold text-2xl font-roboto items-center">
                  Please Wait...
                </h1>
              </>
            :
            <div className="py-4 flex-wrap flex flex-col w-full md:flex-row md:justify-center">
              {products.map((product) => {
                return (
                  <ListProduct 
                    product = {product}
                    key = {product.id}
                  />
                )
              })}
            </div>
          }
      </div>
    </div>
  )
}

export default Product
