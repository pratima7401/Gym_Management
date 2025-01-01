// State for mobile menu and login dropdown
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  // State for mobile menu and login dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle login dropdown
  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: 'Plans', path: '/plans' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Login roles for dropdown
  const loginRoles = [
    { name: 'Member', path: '/login?role=member' },
    { name: 'Trainer', path: '/login?role=trainer' },
    { name: 'Sales', path: '/login?role=sales' },
    { name: 'Admin', path: '/login?role=admin' },
  ];

  return (
    <header className="bg-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 text-purple-500 mr-2" />
            <span className="text-2xl font-bold text-white">FitForge</span>
          </Link>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {/* Navigation items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-300 hover:text-purple-400 transition-colors ${
                  location.pathname === item.path ? 'text-purple-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Login dropdown */}
            <div className="relative">
              <button
                onClick={toggleLoginDropdown}
                className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
              >
                Login <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLoginDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-10">
                  {loginRoles.map((role) => (
                    <Link
                      key={role.name}
                      to={role.path}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      onClick={() => setIsLoginDropdownOpen(false)}
                    >
                      {role.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center py-4">
            {/* Mobile navigation items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-300 hover:text-purple-400 transition-colors py-2 ${
                  location.pathname === item.path ? 'text-purple-400' : ''
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile login dropdown */}
            <div className="relative w-full text-center">
              <button
                onClick={toggleLoginDropdown}
                className="text-gray-300 hover:text-purple-400 transition-colors py-2 flex items-center justify-center w-full"
              >
                Login <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLoginDropdownOpen && (
                <div className="w-full bg-gray-700 py-1">
                  {loginRoles.map((role) => (
                    <Link
                      key={role.name}
                      to={role.path}
                      className="block py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      onClick={() => {
                        setIsLoginDropdownOpen(false);
                        closeMenu();
                      }}
                    >
                      {role.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

