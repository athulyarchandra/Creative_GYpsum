import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

<nav className="border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-20">
      <div className="flex items-center">
        <div className="rounded-full text-white text-xl"><img src={logo} width={120} alt="logo" /></div>
        <div>
          <h1 className=" font-bold text-lg">Creative Gypsum</h1>
          <p className=" text-xs text-gray-500"> Where style meets comfort</p>
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        <li className="text-red-900">Home</li>
       <Link to={'/about'}><li className="hover:text-red-900 cursor-pointer">About us</li></Link>
        <li className="hover:text-red-900 cursor-pointer">Products</li>
        <li className="hover:text-red-900 cursor-pointer">Blog</li>
        <li className="hover:text-red-900 cursor-pointer">Gallery</li>
        <li className="hover:text-red-900 cursor-pointer">Contacts</li>
        <li className="hover:text-red-900 cursor-pointer">Pages</li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <div className="bg-red-900 text-white p-3 font-bold rounded-full cursor-pointer">
          +91 +91 80862 25742
        </div>
      </div>

      <label for="menu-toggle" className="md:hidden text-2xl cursor-pointer">☰</label>
    </div>
  </div>

  <input type="checkbox" id="menu-toggle" className="hidden peer" />
  <div className="peer-checked:block hidden md:hidden bg-white border-t">
    <ul className="flex flex-col p-4 gap-4 font-medium text-gray-700">
      <li>Home</li>
      <li>About us</li>
      <li>Products</li>
      <li>Blog</li>
      <li>Gallery</li>
      <li>Contacts</li>
      <li>Pages</li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar