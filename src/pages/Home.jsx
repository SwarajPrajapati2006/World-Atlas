import React from 'react'
import About from './About'
import earth from "../../src/assets/earth.png"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
     <>
    <main className='w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-linear-to-br from-gray-950 via-black to-gray-900 px-6 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className='max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 relative z-10'>
        
        {/* Text Section */}
        <div className='text-center md:text-left space-y-6 max-w-xl'>
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-2">
            <span className="text-pink-400 text-sm font-medium">Discover the World</span>
          </div>
          
          <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight'>
            Explore the World, <br />
            <span className='bg-linear-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent'>One Country at a Time</span>
          </h1>

          <h2 className='text-lg md:text-xl text-gray-400 leading-relaxed'>
            Discover the history, culture and beauty of every nation. Your journey to global knowledge starts here.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className='px-8 py-4 bg-linear-to-r from-blue-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300 font-semibold'>
              <NavLink to="/country" >Get Started</NavLink> 
            </button>
            <button className='px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold'>
              <NavLink to="/about" >Learn More</NavLink> 
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex justify-center relative'>
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
          <img 
            src={earth} 
            alt="Earth" 
            className='w-72 md:w-96 lg:w-md drop-shadow-[0_0_50px_rgba(59,130,246,0.4)] rounded-full relative z-10 animate-pulse-slow'
          />
        </div>

      </div>
    </main>
      <About/>
     </>
  )
}

export default Home