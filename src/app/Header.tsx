import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to track the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu state
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

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger 
            className="lg:hidden text-gray-800 text-2xl hover:text-gray-600 transition duration-200"
            onClick={toggleMenu} // Trigger toggle when clicked
          >
            <Menu />
          </SheetTrigger>

          <SheetContent
            side="left"
            className={`p-6 bg-white text-gray-800 w-3/4 h-full shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`} // Conditionally render based on menu state
          >
            <div className="text-center mb-8">
              <Link
                href="/"
                className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-200"
              >
                Ameer Hamza
              </Link>
            </div>
            <ul className="space-y-6 text-center">
              {['About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition duration-200"
                    onClick={() => setIsMenuOpen(false)} // Close the menu on item click
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

