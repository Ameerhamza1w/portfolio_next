"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-200">
          Ameer Hamza
        </Link>

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

        <Sheet>
          <SheetTrigger className="lg:hidden text-gray-800 text-2xl hover:text-gray-600 transition duration-200">
            <Menu />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="p-6 bg-white text-gray-800 w-3/4 h-full shadow-lg"
          >
            <div className="text-center mb-8">
              <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-200">
                Ameer Hamza
              </Link>
            </div>
            <ul className="space-y-6 text-center">
              {['About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition duration-200"
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
