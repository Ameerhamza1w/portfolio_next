import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-200"
        >
          Ameer Hamza
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-800 text-2xl hover:text-gray-600 transition duration-200"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-gray-800 p-6 shadow-lg absolute top-16 left-0 w-full">
          <ul className="space-y-6 text-center">
            {['About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition duration-200"
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking an item
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
