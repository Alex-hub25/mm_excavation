'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px- sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="M & M Excavation Logo"
              className="h-30 w-20 mr-3 object-contain"
              width={80}
              height={30}
            />
            <div className="text-2xl font-bold text-[#e67e22]">
              M & M Excavation
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-[#e67e22] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#e67e22] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#e67e22] transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-[#e67e22] transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#e67e22] transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <div className="font-semibold">Call Now</div>
              <a href="tel:+16365849335" className="text-[#e67e22] hover:underline">(636) 584-9335</a>
            </div>
            <a
              href="#contact"
              className="bg-[#e67e22] text-white px-6 py-2 rounded-lg hover:bg-[#d35400] transition-colors duration-200"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-300 hover:text-[#e67e22] hover:border-[#e67e22]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            suppressHydrationWarning
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path
                d={
                  isMenuOpen
                    ? "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                    : "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#e67e22] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#e67e22] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-[#e67e22] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-[#e67e22] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#e67e22] block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-5 py-4">
                <div className="text-xl text-gray-600 mb-5">
                  <div className="font-semibold">Call Now</div>
                  <a href="tel:+16365849335" className="text-[#e67e22] hover:underline">(636) 584-9335</a>
                </div>
                <a
                  href="#contact"
                  className="bg-[#e67e22] text-white px-4 py-2 rounded-lg hover:bg-[#d35400] transition-colors duration-200 inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}