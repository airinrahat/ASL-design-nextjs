import React from "react";

const Servicebg = () => {
  return (
    <div>
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/jJPNfpq/5f20c6d87ad56aaa2eceee290bec12ef.jpg)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
          <p className="text-white lg:text-4xl text-xl font-bold md:text-lg mt-4">
            Here at Ariana Shipping LLC
            <br /> we can help you
            <br /> with purchasing your brand new
            <br /> or used vehicles, boats,
            <br />
            bikes, ATVs and <br /> custom made cars and
            <br /> trucks.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-center gap-3 bg-slate-200 py-8 text-[#274A66] font-semibold text-3xl lg:text-3xl ">
        <p className="text-center ">
          FAST SHIPMENT DELIVERY FOR YOUR BUSINESS{" "}
        </p>
        <button className="bg-blue-400 text-white px-6 py-4 text-sm">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Servicebg;
