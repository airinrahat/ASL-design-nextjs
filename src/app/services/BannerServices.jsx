import React from "react";

const BannerServices = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/gV0jdtx/Group-1.png)",
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div>
          <h1 className="text-white md:text-5xl font-bold text-4xl mb-6 text-center">
            ONE SHOP
          </h1>
          <h1>
            {" "}
            <span className=" text-white md:text-5xl font-bold text-4xl ">
              {" "}
              SHIPPING SOLUTION
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerServices;
