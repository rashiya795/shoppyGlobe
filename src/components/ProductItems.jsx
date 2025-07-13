import { Link } from 'react-router-dom'
import React from 'react'

export default function ProductItems({ product }) {
  return (
    <div>
      <div
        key={product.id}
        className="w-80 bg-rose-100 border border-rose-300 rounded-xl shadow hover:shadow-2xl transition hover:scale-105"
      >
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 m-auto rounded-t-xl"
        />

        {/* Info section */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-lg font-bold text-rose-900 text-center">
            {product.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-rose-800 text-center mt-1">
            {product.description.slice(0, 50)}...
          </p>

          {/* Price + Discount */}
          <div className="flex justify-center gap-2 items-center mt-3">
            <p className="text-rose-900 font-bold text-md">
              <span className="text-rose-700 font-medium">Price:</span> ₹{Math.floor(product.price * 80)}
            </p>
            <span className="text-red-600 text-sm font-semibold bg-red-100 px-2 py-0.5 rounded">
              {Math.floor(product.discountPercentage)}% OFF
            </span>
          </div>

          {/* Ratings */}
          <p className="text-yellow-500 font-semibold text-sm text-center mt-2">
            <span className="text-rose-700 font-medium">Ratings:</span> {Math.floor(product.rating)}/5
          </p>

          {/* Button */}
          <div className="mt-4 flex justify-center">
            <Link to={`/products/${product.id}`}>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition font-semibold shadow">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
