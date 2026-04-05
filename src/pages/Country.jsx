import React, { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/postApi";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  const handleReadMore = (countryData) => {
    navigate(`/country/${countryData.name.common.toLowerCase().replace(/\s+/g, "-")}`, {
      state: { country: countryData }
    });
  };

  const filterData = country.filter((val) =>
    val.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-10 px-4">

      {/* 🔄 Loader */}
      {isPending && (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
          <div className="relative">
            <FaSpinner className="animate-spin text-5xl text-pink-500" />
            <div className="absolute inset-0 blur-xl bg-pink-500/20 rounded-full"></div>
          </div>
          <h1 className="text-xl mt-6 font-medium">Loading Countries...</h1>
        </div>
      )}

      {!isPending && (
        <>
          {/* 🔍 Search + Buttons */}
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-4 mb-12">
            <div className="relative">
              <input
                className="px-5 py-3 pl-12 rounded-xl bg-gray-900/80 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 w-64"
                placeholder="Search country..."
                type="text"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <button
              className="px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 font-medium"
              onClick={() => {
                const sorted = [...country].sort((a, b) =>
                  a.name.common.localeCompare(b.name.common)
                );
                setCountry(sorted);
              }}
            >
              Ascending
            </button>

            <button
              className="px-5 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300 font-medium"
              onClick={() => {
                const desc = [...country].sort((a, b) =>
                  b.name.common.localeCompare(a.name.common)
                );
                setCountry(desc);
              }}
            >
              Descending
            </button>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-pink-500 font-semibold text-sm uppercase tracking-wider mb-2">Explore Nations</h2>
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
              🌍 Countries Explorer
            </h1>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Discover detailed information about countries from around the world
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filterData.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-white text-xl font-medium">
                  No country found
                </h2>
                <p className="text-gray-400 mt-2">Try a different search term</p>
              </div>
            ) : (
              filterData.map((val, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-lg border border-gray-800 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/30 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={val.flags?.png}
                      alt={val.name?.common}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    {val.flag && (
                      <span className="absolute top-3 right-3 text-3xl drop-shadow-lg">{val.flag}</span>
                    )}
                  </div>

                  <div className="p-5">
                    <h2 className="text-xl font-bold mb-3 text-pink-400 group-hover:text-pink-300 transition-colors">
                      {val.name?.common}
                    </h2>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        <span className="font-medium text-gray-300">Population:</span>{" "}
                        {val.population.toLocaleString()}
                      </p>

                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        <span className="font-medium text-gray-300">Region:</span>{" "}
                        {val.region}
                      </p>

                      <p className="text-sm text-gray-400 flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                        <span className="font-medium text-gray-300">Capital:</span>{" "}
                        {val.capital?.[0] || "N/A"}
                      </p>
                    </div>

                    <button
                      onClick={() => handleReadMore(val)}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] transition-all duration-300"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Country;