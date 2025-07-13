import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Checkout from './Checkout'
import { useDispatch } from 'react-redux'
import { addCart } from '../Utils/cartSlice'

export default function Productdetails() {
  let dispatch = useDispatch()
const [error, setError] = useState('');

  function handleClick(item) {
    dispatch(addCart(item))
  }

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function getProductData() {

    try{

      const data = await fetch(`https://dummyjson.com/products/${id}`)
      const fullData = await data.json()
      setProduct(fullData)
    

    }
  catch(error){
  setError('Failed to load products. Please try again later.');

    }
  }
    getProductData()
  }, [id])


  

  if (!product) {
    return <p className="text-center mt-10 text-lg font-semibold">Loading product details...</p>
  }

  return (
    <div className="min-h-screen bg-rose-50 px-6 py-10">


      {/* Product Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="lg:w-1/2 bg-rose-100 flex justify-center items-center p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-contain rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 p-8 space-y-6">
          <h1 className="text-3xl font-bold text-rose-900">{product.title}</h1>
          <p className="text-rose-800 text-sm leading-relaxed">{product.description}</p>

          <div className="space-y-1 text-sm text-rose-700">
            <p><span className="font-semibold text-rose-900">Warranty:</span> {product.warrantyInformation}</p>
            <p><span className="font-semibold text-rose-900">Shipping:</span> {product.shippingInformation}</p>
            <p>
              <span className="font-semibold text-rose-900">Availability:</span>
              <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                {product.availabilityStatus}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-rose-900">₹{Math.floor(product.price * 80)}</span>
            <span className="text-sm text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded">
              {Math.floor(product.discountPercentage)}% OFF
            </span>
          </div>

          <p className="text-yellow-400 font-bold text-sm bg-rose-800 w-fit px-3 py-1 rounded-lg">
            ⭐ {Math.floor(product.rating)}
          </p>

          <div className="flex gap-4 mt-4">
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition font-semibold shadow"
              onClick={() => handleClick(product)}
            >
              Add to Cart
            </button>
            <Link to={`/checkout/${product.id}`}>
              <button className="border border-orange-500 text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-100 transition font-semibold">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-rose-800">Customer Reviews</h2>
        {product.reviews?.length > 0 ? (
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b pb-4">
                <p className="text-yellow-400 font-bold text-sm bg-rose-800 w-fit px-3 py-1 rounded-lg mb-2">
                  ⭐ {Math.floor(review.rating)}
                </p>
                <p className="italic text-rose-800 mb-1">"{review.comment}"</p>
                <p className="text-sm text-rose-600">
                  - {review.reviewerName} ({review.reviewerEmail}) |{" "}
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-rose-600">No reviews available for this product.</p>
        )}
      </div>
      {error && (
  <p className="text-center text-red-600 font-semibold mb-6">{error}</p>
)}

    </div>
  )
}
