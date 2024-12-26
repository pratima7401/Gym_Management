import React from 'react';
import { Dumbbell } from 'lucide-react';

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Dumbbell className="h-8 w-8 text-purple-500 mr-2" />
          <span className="text-2xl font-bold">FitForge</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-purple-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Plans</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Register</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

