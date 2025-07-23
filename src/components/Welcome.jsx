import React from "react";

export const Welcome = () => {
  return (
    <div className="relative">
      <img
        src="public/restaurant1.avif"
        alt="Modern workspace in Kigali"
        className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
      />
      <div className="absolute inset-0  bg-opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 sm:px-6 md:px-8 max-w-6xl w-full">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4">The Best WorkSpace in Kigali</p>

        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 md:mb-8 font-bold leading-tight">
          <span className="text-teal-400">Professional</span>, Creative, <br className="hidden sm:block" />
          Flexible, Scalable <span className="text-teal-400">Workspace</span>
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
          Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces. Elevate your
          business with flexible solutions tailored to your needs. Find your perfect office today!
        </p>

        <div className="flex justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 transition-colors duration-300 py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-12 font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
