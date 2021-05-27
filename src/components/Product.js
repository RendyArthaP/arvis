import React from 'react'

const Product = ({products, loadings}) => {
  return (
    <div className="h-screen p-4 lg:px-10">
      <div>
        <h1 className="font-roboto text-blue-400 text-2xl font-bold">
          Our Products
        </h1>
        <div className="py-4 flex-wrap flex flex-col w-full md:flex-row md:justify-center">
          {products.map((product) => {
            return (
              <div 
                key={product.id}
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
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product
