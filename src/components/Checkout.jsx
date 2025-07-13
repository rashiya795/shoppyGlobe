import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Checkout() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function getProductData() {
      const data = await fetch(`https://dummyjson.com/products/${id}`)
      const fullData = await data.json()
      setProduct(fullData)
    }
    getProductData()
  }, [id])

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  })

  if (!product) {
    return <p className="text-center min-h-screen mt-10 text-lg font-semibold m-auto flex justify-center items-center text-rose-700">Loading ...</p>
  }

  const total = product ? product.price : 0

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Order placed successfully!')
  }

  return (
    <div className="min-h-screen bg-rose-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-rose-800">Checkout</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Billing Info */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
          <h2 className="text-2xl font-semibold mb-6 text-rose-700">Billing Information</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-3 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full p-3 mb-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={form.zip}
            onChange={handleChange}
            className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
          <h2 className="text-2xl font-semibold mb-6 text-rose-700">Order Summary</h2>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-14 h-14 object-cover rounded-lg border"
              />
              <span className="text-gray-800 font-medium">{product.title}</span>
            </div>
            <span className="text-rose-600 font-semibold">₹{Math.floor(product.price * 80)}</span>
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="flex justify-between font-bold text-xl text-gray-800">
            <span>Total</span>
            <span>₹{Math.floor(product.price * 80)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
