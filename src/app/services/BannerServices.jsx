import React from "react";

const BannerServices = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/Gp2zYRm/ship2.jpg)",
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-white md:text-5xl font-bold text-4xl">
          ONE SHOP <br /> SHIPPING SOLUTION
        </h1>
      </div>
    </div>
  );
};

export default BannerServices;
