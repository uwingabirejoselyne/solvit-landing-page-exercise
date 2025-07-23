import React from "react";

export const About = () => {
  return (
   <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10 hidden lg:flex gap-3">
            <div className="w-4 h-4 rounded-full bg-teal-600"></div>
            <div className="w-4 h-4 rounded-full border-2 border-teal-600 bg-white"></div>
          </div>

          <div className="flex justify-center mb-8 sm:mb-12 gap-3 lg:hidden">
            <div className="w-4 h-4 rounded-full bg-teal-600"></div>
            <div className="w-4 h-4 rounded-full border-2 border-teal-600 bg-white"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start pt-8 lg:pt-12">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-teal-600 font-semibold text-lg sm:text-xl">About Us</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                We offer creative working environments that suit your business
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:pl-8">
              <div className="lg:hidden w-full h-px bg-gray-300 my-6"></div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, conubia leo rutrum praesent dui turpis
                lobortis, vulputate pellentesque tristique primis cum tincidunt placerat maecenas, velit metus fermentum
                eget
              </p>
              <a
                href="#"
                className="inline-block text-teal-600 hover:text-teal-700 font-semibold text-base sm:text-lg transition-colors duration-200"
              >
                More About Us
              </a>
            </div>
          </div>

          {/* Vertical divider line - only visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};
