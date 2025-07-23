"use client"

import { useState } from "react"
import { Grid2X2, X, Menu } from "lucide-react"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="flex justify-between items-center h-16 sm:h-20 md:h-24 bg-white text-black px-4 sm:px-8 md:px-16 lg:px-24 py-4 font-bold text-base sm:text-lg md:text-xl shadow-sm relative z-50">
        <div className="flex items-center">
          <Grid2X2 className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mr-2 sm:mr-3" />
          <span className="text-lg sm:text-xl md:text-2xl">
            Business <span className="text-teal-600">Cafe</span>
          </span>
        </div>

        <nav className="hidden sm:flex gap-2 md:gap-4 lg:gap-6">
          <a href="#" className="hover:text-teal-600 transition-colors duration-200">
            <span className="text-teal-600">Home</span>
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors duration-200">
            Space
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors duration-200">
            About
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors duration-200">
            Contact
          </a>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="sm:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
          <nav className="flex flex-col py-4">
            <a
              href="#"
              onClick={closeMobileMenu}
              className="px-4 sm:px-8 py-3 text-teal-600 font-semibold hover:bg-teal-50 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              onClick={closeMobileMenu}
              className="px-4 sm:px-8 py-3 text-gray-700 font-semibold hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
            >
              Space
            </a>
            <a
              href="#"
              onClick={closeMobileMenu}
              className="px-4 sm:px-8 py-3 text-gray-700 font-semibold hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              onClick={closeMobileMenu}
              className="px-4 sm:px-8 py-3 text-gray-700 font-semibold hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-black bg-opacity-25 z-30" onClick={closeMobileMenu} />
      )}
    </>
  )
}
