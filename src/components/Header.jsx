import React from 'react';
import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Dumbbell className="h-8 w-8 text-purple-500 mr-2" />
          <span className="text-2xl font-bold text-white">FitForge</span>
        </div>

        {/* Centered Navigation with slight left alignment */}
        <nav className="flex ml-auto mr-4">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-purple-500 transition-colors text-white text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-500 transition-colors text-white text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/plans" className="hover:text-purple-500 transition-colors text-white text-lg">
                Plans
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-purple-500 transition-colors text-white text-lg">
                Register
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500 transition-colors text-white text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
