import React from "react";

const Servicebg = () => {
  return (
    <div>
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Qj8B2C4Z/9594bb0b-f431-49db-9016-6238b320d300.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center lg:justify-start px-6 lg:px-24">
          <p className="text-white lg:text-3xl text-lg font-bold md:text-lg mt-4">
            Ariana Shipping LLC specializes in providing <br /> seamless
            logistics and transportation services,
            <br /> focusing on shipping used cars from the USA to
            <br /> the UAE. With our expert team and advanced tracking <br />
            systems, we ensure your vehicle arrives on time and
            <br /> in perfect condition
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row lg:gap-10 items-center justify-center gap-3 bg-[#F7F7F7] py-8 text-[#274A66] font-semibold text-3xl lg:text-3xl ">
        <p className="text-center ">FAST SHIPMENT DELIVERY FOR YOUR BUSINESS</p>
        <button className="bg-blue-400 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg hover:from-blue-600 hover:to-blue-800 hover:scale-105 transform duration-300 text-white px-6 py-4 drop-shadow-xl text-sm rounded hover:bg-opacity-60  ">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Servicebg;
