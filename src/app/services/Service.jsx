import { MdLocalShipping } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import React from "react";

const Service = () => {
  return (
    <div>
      <div className="bg-white text-black py-16 text-center">
        {/* Section Title */}
        <div className="mb-5 text-center flex flex-col items-center justify-center">
          <FaServicestack className="text-white bg-blue-500 text-5xl p-2 rounded-full mb-2" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg md:text-xl">
            We Have a Wide Range of Shipping Solutions for You
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:px-36">
          {/* Card One */}
          <div
            className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/servic.jpg')" }}
          >
            {/* Initial Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <MdLocalShipping className="text-3xl mb-2" />
                <h3 className="text-2xl mt-2">Logistics</h3>
              </div>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-blue-500 flex flex-col text-white items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <MdLocalShipping className="text-3xl mb-2" />
              <h3 className="text-xl font-bold my-2">Transport</h3>
              <p className="text-sm text-center">
                Efficient shipping and delivery services across international
                borders.
              </p>
            </div>
          </div>

          {/* Card Two */}
          <div
            className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/servic.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <MdLocalShipping className="text-3xl mb-2" />
                <h3 className="text-2xl mt-2">Logistics</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <MdLocalShipping className="text-3xl mb-2" />
              <h3 className="text-xl font-bold my-2">Transport</h3>
              <p className="text-sm text-center">
                Efficient shipping and delivery services across international
                borders.
              </p>
            </div>
          </div>

          {/* Card Three */}
          <div
            className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/servic.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <MdLocalShipping className="text-3xl mb-2" />
                <h3 className="text-2xl mt-2">Logistics</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <MdLocalShipping className="text-3xl mb-2" />
              <h3 className="text-xl font-bold my-2">Transport</h3>
              <p className="text-sm text-center">
                Efficient shipping and delivery services across international
                borders.
              </p>
            </div>
          </div>

          {/* Card Four */}
          <div
            className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/servic.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <MdLocalShipping className="text-3xl mb-2" />
                <h3 className="text-2xl mt-2">Logistics</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <MdLocalShipping className="text-3xl mb-2" />
              <h3 className="text-xl font-bold my-2">Transport</h3>
              <p className="text-sm text-center">
                Efficient shipping and delivery services across international
                borders.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-center bg-slate-200 py-8 text-blue-500 font-bold text-2xl lg:text-3xl ">
          <p className="text-center ">
            FAST SHIPMENT DELIVERY FOR YOUR BUSINESS
          </p>
          <button className="bg-blue-400 text-white px-6 py-2 text-sm">
            GET A QUOTE
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
