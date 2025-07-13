import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeCart } from '../Utils/cartSlice'

export default function Cart() {
  const cart = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

  function handleClearCart() {
    dispatch(clearCart())
  }

  function handleRemove() {
    dispatch(removeCart())
  }

  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-rose-800 mb-10">🛒 Your Cart</h1>

      {cart.map((product) => (
        <div
          key={product.id}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row mb-10 transition-transform hover:scale-[1.01] duration-300"
        >
          {/* Image Section */}
          <div className="lg:w-1/2 bg-rose-100 flex justify-center items-center p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-contain rounded-xl"
            />
          </div>

          {/* Info Section */}
          <div className="lg:w-1/2 p-8 space-y-6">
            <h1 className="text-2xl font-bold text-rose-700">{product.title}</h1>
            <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>

            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-semibold text-gray-800">Warranty:</span> {product.warrantyInformation}</p>
              <p><span className="font-semibold text-gray-800">Shipping:</span> {product.shippingInformation}</p>
              <p>
                <span className="font-semibold text-gray-800">Availability:</span>
                <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                  {product.availabilityStatus}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="text-xl font-bold text-gray-800">
                ₹{Math.floor(product.price * 80)}
              </span>
              <span className="text-sm text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded">
                {Math.floor(product.discountPercentage)}% OFF
              </span>
            </div>

            <p className="text-yellow-500 font-bold text-sm bg-green-600 w-fit px-3 py-1 rounded-lg mt-2">
              ⭐ {Math.floor(product.rating)}
            </p>

            <button
              onClick={handleRemove}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold shadow"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Clear Cart Button */}
      {cart.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={handleClearCart}
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  )
}
