import React from "react";

const ServiceBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/Gp2zYRm/ship2.jpg)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Full-service <br />
            International Freight
          </h1>
          <hr className="w-2/5 border-white mt-4 hidden lg:block" />
          <p className="text-white text-sm md:text-lg mt-4">
            What we're doing for our customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
