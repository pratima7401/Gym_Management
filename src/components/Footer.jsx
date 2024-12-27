import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react'; // Add the location icon

function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="#" className="text-blue-500 hover:text-blue-800 transition-colors">
            <Facebook className="h-10 w-10" />
          </Link>
          <Link to="#" className="text-pink-500 hover:text-pink-800 transition-colors">
            <Instagram className="h-10 w-10" />
          </Link>
          <Link to="#" className="text-blue-400 hover:text-blue-800 transition-colors">
            <Twitter className="h-10 w-10" />
          </Link>
        </div>

        {/* Gym Location */}
        <div className="flex justify-center items-center text-gray-400 text-sm mb-4">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" /> {/* Location Icon */}
          <p>123 Fitness Avenue, Wellness City, 12345</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>&copy; 2024 FitForge. All rights reserved to Pratima Palande.</p>
      </div>
    </footer>
  );
}

export default Footer;
