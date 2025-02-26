import React from "react";
import aboutBanner from "../../../public/images/aboutBanner.gif";

const Banner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBanner.src})`,
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white md:text-5xl font-bold text-4xl">
            WHO ARE WE?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
