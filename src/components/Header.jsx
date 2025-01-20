import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: 'Plans', path: '/plans' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const loginRoles = [
    { name: 'Member', path: '/login?role=member' },
    { name: 'Trainer', path: '/login?role=trainer' },
    { name: 'Sales', path: '/login?role=sales' },
    { name: 'Admin', path: '/login?role=admin' },
  ];

  return (
    <header className="bg-gray-800 shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 text-purple-500 mr-2" />
            <span className="text-2xl font-bold text-white">FitForge</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
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
          <button
            className="md:hidden text-gray-300 focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>
          <div className={`md:hidden fixed top-0 right-0 bottom-0 w-1/2 bg-gray-800 shadow-lg z-50 overflow-y-auto transition-transform transform ease-in-out duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-xl font-bold text-white">Menu</span>
              <button
                className="text-gray-300 focus:outline-none"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4">
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
              <div className="relative mt-4">
                <button
                  onClick={toggleLoginDropdown}
                  className="text-gray-300 hover:text-purple-400 transition-colors py-2 flex items-center w-full"
                >
                  Login <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isLoginDropdownOpen && (
                  <div className="bg-gray-700 py-1">
                    {loginRoles.map((role) => (
                      <Link
                        key={role.name}
                        to={role.path}
                        className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
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
        </>
      )}
    </header>
  );
}

export default Header;

