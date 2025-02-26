import React from "react";
import serviceBanner from "../../../public/images/Slider1.gif";

const BannerServices = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          // "url(https://i.ibb.co/WvytrxQn/8cb91cbf-023f-4b27-8006-0ce503fe0373.jpg)",
          `url(${serviceBanner.src})`,
      }}
    >
      {/* <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
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
      </div> */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          ONE SHOP
        </h1>
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
          SHIPPING SOLUTION
        </h1>
      </div>
    </div>
  );
};

export default BannerServices;
