import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/Gp2zYRm/ship2.jpg)",
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
