import React, { useState } from 'react'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { FiMenu, FiX } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
  const cart = useSelector((store) => store.cart.items)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-rose-900 shadow-md border-b border-rose-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <span className="text-orange-400">Shoppy</span>
          <span className="text-rose-200">Globe</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-rose-100 font-medium text-md">
          <Link to='/'><p>Home</p></Link>
          <Link to='/products'><p>Products</p></Link>
          <Link to='/checkout/1'><p>Checkout</p></Link>

           {/* Cart Icon */}
        <div className="flex items-center gap-2 bg-rose-800 px-3 py-1.5 rounded-full shadow hover:bg-rose-700 transition cursor-pointer">
          <PiShoppingCartSimpleBold className="text-xl text-orange-300" />
          <Link to='/Cart'>
            <p className="text-orange-100 font-semibold">Cart: {cart.length}</p>
          </Link>
        </div>
        </nav>

       

        {/* Hamburger Icon */}
        <button
          className="md:hidden ml-4 text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-rose-800 text-white px-6 pb-4 space-y-2 flex m-auto justify-center items-center gap-5">
          <Link to='/' onClick={() => setMenuOpen(false)} className='m-auto'>Home</Link>
          <Link to='/products' onClick={() => setMenuOpen(false)} className='m-auto'>Products</Link>
          <Link to='/checkout/1' onClick={() => setMenuOpen(false)} className='m-auto'>Checkout</Link>
           <Link to='/Cart'>
            <p className="text-orange-100 font-semibold m-auto">Cart: {cart.length}</p>
          </Link>
        </div>
      )}
    </header>
  )
}
