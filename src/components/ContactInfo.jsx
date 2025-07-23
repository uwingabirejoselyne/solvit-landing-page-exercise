// ContactInfo.jsx
import React from 'react';

export const ContactInfo = ({ icon: Icon, title, content }) => {
  if (!Icon) {
    console.error("Icon is undefined for:", title);
    return null;
  }

  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <div className="relative">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <div className="absolute inset-0 border-2 border-teal-600 border-dashed rounded-full animate-pulse"></div>
      </div>
      <div className="space-y-1 sm:space-y-2">
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black">{title}</h4>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">{content}</p>
      </div>
    </div>
  );
};
