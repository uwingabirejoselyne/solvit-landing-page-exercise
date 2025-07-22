import React from "react";
// import restaurant from""
export const Welcome = () => {
  return (
    <div className="relative">
      <img src="public/restaurant.jpg" alt="" className="w-full" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
        <p className="text-3xl">
          The Best WorkSpace in Kigali</p> <br />  <p className="text-5xl mb-4"><span className="text-primary">Professional</span>, Creative, <br /> Flexible,
          Scalable <span className="text-primary">Workspace</span>
        </p>
        <p>
          iscover your ideal workspace with us. Work smart, not hard in our
          fully-equipped office spaces. Elevate your business with flexible
          solutions tailored to your needs. Find your perfect office today!
        </p>
        <div className="flex justify-center">
  <button className="bg-primary py-2 px-9 font-bold text-2xl mt-8 rounded-sm">
    Explore
  </button>
</div>
      </div>
    </div>
  );
};
