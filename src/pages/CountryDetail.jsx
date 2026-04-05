import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CountryDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state?.country;

  if (!country) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center text-white px-4">
        <div className="text-6xl mb-4">🌍</div>
        <h1 className="text-4xl font-bold mb-4">Country Details</h1>
        <p className="text-gray-400 mb-6 text-center max-w-md">
          Please select a country from the countries list first.
        </p>
        <button
          onClick={() => navigate("/country")}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition duration-300"
        >
          Go to Countries
        </button>
      </section>
    );
  }

  const { name, flags, population, region, capital } = country;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-6">
        <button
          onClick={() => navigate("/country")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition duration-300" />
          <span className="font-medium">Back to Countries</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-lg border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={flags?.png}
              alt={name?.common}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {name?.common}
              </h1>
              <p className="text-xl text-gray-300">{name?.official}</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-lg font-semibold text-white mb-4">Basic Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Population</span>
                    <span className="text-gray-300 font-medium">{population?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Region</span>
                    <span className="text-gray-300 font-medium">{region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capital</span>
                    <span className="text-gray-300 font-medium">{capital?.[0] || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
