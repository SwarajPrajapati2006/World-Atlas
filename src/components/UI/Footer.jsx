import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white py-16 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Explore The World
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            With Us.
          </h1>

          {/* Description */}
          <p className="text-gray-400 max-w-xl mb-8 text-lg leading-relaxed">
            Discover countries, cultures, and amazing facts about our world. Your journey to global knowledge starts here.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-900/50 border border-gray-700 hover:border-pink-500/50 px-6 py-3 rounded-xl outline-none text-white placeholder-gray-500 transition duration-300 focus:ring-2 focus:ring-pink-500/20"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-pink-400">Explore</h3>
            <ul className="space-y-3">
              <li><NavLink to="/country" className="text-gray-400 hover:text-pink-400 transition duration-300">All Countries</NavLink></li>
              <li><p className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300">By Region</p></li>
              <li><p className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300">By Population</p></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-pink-400">Company</h3>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="text-gray-400 hover:text-pink-400 transition duration-300">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-pink-400 transition duration-300">Contact</NavLink></li>
              <li><p className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300">Careers</p></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-pink-400">Resources</h3>
            <ul className="space-y-3">
              <li><p className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300">Blog</p></li>
              <li><p className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300">Newsletter</p></li>
              <li><p className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300">Help Center</p></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-pink-400">Connect</h3>
            <div className="flex gap-4 text-xl">
              <FaTwitter className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300 transform hover:scale-110" />
              <FaLinkedin className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300 transform hover:scale-110" />
              <FaGithub className="text-gray-400 hover:text-pink-400 cursor-pointer transition duration-300 transform hover:scale-110" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-gray-400 text-sm">
          <p className="hover:text-gray-300 transition duration-300"> 2026 My World. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full hover:border-pink-500/50 hover:text-pink-400 transition duration-300 cursor-pointer text-xs">Privacy Policy</span>
            <span className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full hover:border-pink-500/50 hover:text-pink-400 transition duration-300 cursor-pointer text-xs">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer