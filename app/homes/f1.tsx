'use client';

import { useState } from "react";
import { MapPin } from "lucide-react";

const mockResults = [
  {
    name: "SolarEdge Nigeria",
    address: "Ikeja, Lagos",
    rating: "4.8",
    services: "Solar panel installation, battery backup",
  },
  {
    name: "GreenSun Energy",
    address: "Lekki, Lagos",
    rating: "4.6",
    services: "Off-grid solar systems",
  },
  {
    name: "PowerNaija Solutions",
    address: "Abuja",
    rating: "4.9",
    services: "Residential & commercial solar services",
  },
];

const Hero = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (!query || !location) return alert("Please fill both fields.");
    setShowResults(true); // ✅ Corrected: moved inside function body
  };

  return (
    <section className="bg-green-600 min-h-[60vh] flex items-center justify-center px-4 md:px-12 py-12">
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Find Reliable Solar Installers Near You
        </h1>
        <p className="text-lg text-white">
          Search through trusted vendors across Nigeria and power your home with clean energy.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <input
            type="text"
            placeholder="What are you looking for? e.g. Solar Panel"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-[280px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            placeholder="Enter your location e.g. Ikeja"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-[220px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300"
          >
            <MapPin className="w-5 h-5" />
            Search Nearby
          </button>
        </div>
      </div>

      {showResults && (
        <div className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          {mockResults.map((vendor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{vendor.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{vendor.address}</p>
              <p className="text-sm text-gray-600 mt-2">{vendor.services}</p>
              <div className="mt-3 text-yellow-600 font-medium">⭐ {vendor.rating}</div>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                View Vendor
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
