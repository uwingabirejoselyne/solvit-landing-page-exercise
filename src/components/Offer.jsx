import React from "react";

export const Offer = () => {
  return (
     <div className="flex flex-col text-center items-center justify-center space-y-3 sm:space-y-4 md:space-y-5 mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
        We Offer creative working <br className="hidden sm:block" /> environments
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
        Find your perfect workspace. Choose from versatile options <br className="hidden md:block" /> tailored to your
        needs.
      </p>
    </div>
  );
};
