import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">FitForge</h3>
          <p className="text-gray-400">Transform your body and mind with our state-of-the-art facilities and expert trainers.</p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Plans</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Register</a></li>
            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 FitForge. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

