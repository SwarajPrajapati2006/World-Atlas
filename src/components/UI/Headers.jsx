import React from 'react'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 border-b border-gray-700/50 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>

          <div className="logo flex items-center gap-3">
            <img src={logo} alt="logo" className='h-10 w-10 rounded-full ring-2 ring-pink-500/50' />
            <h1 className='text-white font-bold text-2xl tracking-tight'>
              My <span className="text-pink-500">World</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink 
              to="/home"
              className={({ isActive }) =>
                isActive 
                  ? "px-4 py-2 text-pink-500 text-sm font-semibold border-b-2 border-pink-500 transition-all"
                  : "px-4 py-2 text-gray-300 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all"
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about"
              className={({ isActive }) =>
                isActive 
                  ? "px-4 py-2 text-pink-500 text-sm font-semibold border-b-2 border-pink-500 transition-all"
                  : "px-4 py-2 text-gray-300 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all"
              }
            >
              About
            </NavLink>

            <NavLink 
              to="/country"
              className={({ isActive }) =>
                isActive 
                  ? "px-4 py-2 text-pink-500 text-sm font-semibold border-b-2 border-pink-500 transition-all"
                  : "px-4 py-2 text-gray-300 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all"
              }
            >
              Country
            </NavLink>

            <NavLink 
              to="/contact"
              className={({ isActive }) =>
                isActive 
                  ? "px-4 py-2 text-pink-500 text-sm font-semibold border-b-2 border-pink-500 transition-all"
                  : "px-4 py-2 text-gray-300 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile menu button - simplified */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Headers