import React from 'react'
import countryFacts from "../api/countryapi.json"

const About = () => {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black min-h-screen py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-pink-500 font-semibold text-sm uppercase tracking-wider mb-2">Learn About</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Country Information
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore fascinating facts and information about countries from around the world
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {countryFacts.map((values) => {
          return (
            <div
              key={values.id}
              className="group bg-gradient-to-br from-gray-900 to-gray-950 text-white p-6 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors">
                  {values.countryName}
                </h2>
                <span className="text-3xl">{values.flag}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="font-medium text-white">Capital:</span> {values.capital}
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="font-medium text-white">Population:</span> {values.population}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-gray-400 text-sm italic leading-relaxed">
                    "{values.interestingFact}"
                  </p>
                </div>
              </div>
            </div>
          )
        })}

      </div>

    </main>
  )
}

export default About