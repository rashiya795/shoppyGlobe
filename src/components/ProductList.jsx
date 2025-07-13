import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductItems from './ProductItems';

export default function ProductList() {
  const { category } = useParams();

  const [arr, setArr] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function getProductData() {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();

        setArr(data.products);

        if (category) {
          const filtered = data.products.filter(
            (product) => product.category === category
          );
          setSelectedProduct(filtered);
        } else {
          setSelectedProduct(data.products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getProductData();
  }, [category]);

  function handleSearch() {
    const searchProduct = arr.filter((product) =>
      product.tags.some(tag =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      ) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setSelectedProduct(searchProduct);
  }

  return (
    <div className="bg-rose-50 min-h-screen py-10 px-5">
      {/* Search Bar */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-10">
        <input
          type="text"
          className="p-4 lg:w-[50vw] border border-rose-300 bg-rose-100 placeholder-rose-500 text-rose-900 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Search products"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 hover:shadow-lg transition"
        >
          Search
        </button>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap gap-10 justify-center">
        {selectedProduct.length > 0 ? (
          selectedProduct.map((product) => (
            <Link to={`/productdetails/${product.id}`} key={product.id}>
              <ProductItems product={product} />
            </Link>
          ))
        ) : (
          <p className="text-center text-lg text-rose-700 font-semibold">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
