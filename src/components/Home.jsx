import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
  const[product,setProduct]=useState([])

useEffect(() => {
  async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setProduct(data.products); // store products in state
  }

  fetchProducts();
}, []);

const uniqueCategories = [...new Set(product.map(p => p.category))];

const categoryImages = uniqueCategories.map(category => {
  const matchedProduct = product.find(p => p.category === category);
  return {
    category,
    image: matchedProduct?.thumbnail || '',
  };
});


  return (
    <div className="bg-rose-50">
      
      <div className="bg-rose-900 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-orange-300 mb-4">Welcome to ShoppyGlobe</h1>
        <p className="text-lg text-rose-200 mb-6">Your one-stop destination for quality products</p>
        <Link to="/products">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold shadow-md">
            Browse Products
          </button>
        </Link>
      </div>

      {/* Categories */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-900 mb-10 text-center">Shop by Category</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">


   {categoryImages.map(({ category, image }, index) => (
  <Link to={`/products/category/${category}`} key={index}>
    <div className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
      <img
        src={image}
        alt={category}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-rose-800">{category}</h3>
    </div>
  </Link>
))}

        </div>
      </div>

    
    </div>
  )
}
