// HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

const HomePage = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">SIDDHI ARCHITECTS</div>
        <ul className="flex space-x-6">
          <li className="relative group">
            <button className="text-gray-800 hover:text-pink-600 focus:outline-none">
              Interiors
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li><Link to="/modular-kitchens" className="block px-4 py-2 hover:bg-gray-100">Modular Kitchens</Link></li>
              <li><Link to="/wardrobes" className="block px-4 py-2 hover:bg-gray-100">Wardrobes</Link></li>
              <li><Link to="/living-rooms" className="block px-4 py-2 hover:bg-gray-100">Living Rooms</Link></li>
              <li><Link to="/bedrooms" className="block px-4 py-2 hover:bg-gray-100">Bedrooms</Link></li>
              <li><Link to="/full-home-interiors" className="block px-4 py-2 hover:bg-gray-100">Full Home Interiors</Link></li>
              <li><Link to="/commercial-projects" className="block px-4 py-2 hover:bg-gray-100">Commercial Projects</Link></li>
            </ul>
          </li>
          <li><Link to="/design-ideas" className="text-gray-800 hover:text-pink-600">Design Ideas</Link></li>
          <li><Link to="/magazine" className="text-gray-800 hover:text-pink-600">Magazine</Link></li>
          <li><Link to="/siddhiarchitects-tv" className="text-gray-800 hover:text-pink-600">SiddhiArchitects TV</Link></li>
          <li><Link to="/cities" className="text-gray-800 hover:text-pink-600">Cities</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HomePage;
