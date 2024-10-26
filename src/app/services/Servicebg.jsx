import React from "react";

const Servicebg = () => {
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/Gp2zYRm/ship2.jpg)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
          <p className="text-white text-lg font-bold md:text-lg mt-4">
            What we're doing for our customers Lorem,
            <br /> ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Praesentium sunt doloribus blanditiis velit quia eaque.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-center bg-slate-200 py-8 text-blue-500 font-bold text-2xl lg:text-3xl ">
        <p className="text-center ">FAST SHIPMENT DELIVERY FOR YOUR BUSINESS</p>
        <button className="bg-blue-400 text-white px-6 py-2 text-sm">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Servicebg;
