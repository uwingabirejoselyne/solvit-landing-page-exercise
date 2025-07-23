import React from 'react'

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 sm:h-20 md:h-24 bg-white text-black px-4 sm:px-8 md:px-16 lg:px-24 py-4 font-bold text-base sm:text-lg md:text-xl shadow-sm">
      <div className="flex items-center">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
          <span className="text-white font-bold text-xs sm:text-sm">BC</span>
        </div>
        <span className="text-lg sm:text-xl md:text-2xl">
          Business <span className="text-teal-600">Cafe</span>
        </span>
      </div>

      <div className="hidden sm:flex gap-2 md:gap-4 lg:gap-6">
        <a href="" className="hover:text-teal-600 transition-colors duration-200">
          <span className="text-teal-600">Home</span>
        </a>
        <a href="" className="hover:text-teal-600 transition-colors duration-200">
          Space
        </a>
        <a href="" className="hover:text-teal-600 transition-colors duration-200">
          About
        </a>
        <a href="" className="hover:text-teal-600 transition-colors duration-200">
          Contact
        </a>
      </div>

      {/* Mobile menu indicator */}
      <div className="sm:hidden flex flex-col gap-1 cursor-pointer">
        <div className="w-5 h-0.5 bg-gray-700"></div>
        <div className="w-5 h-0.5 bg-gray-700"></div>
        <div className="w-5 h-0.5 bg-gray-700"></div>
      </div>
    </header>
  )
}
