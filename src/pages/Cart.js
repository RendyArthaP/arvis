import React from 'react'
import Navbar from '../components/Navbar'

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen p-4 lg:px-10">
        <div className="flex flex-row justify-between">
          <div className="w-8/12">
            <h1 className="font-bold text-2xl font-roboto text-blue-500">
              Your Carts:
            </h1>
          </div>
          <div className="w-1/3">
            <h1 className="font-bold text-2xl font-roboto text-blue-500">
              Your Sumarry:
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
