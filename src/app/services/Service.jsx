import { MdLocalShipping } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import imag from "../../../public/service-h.png";
import group1 from "../../../public/Group.png";
import group2 from "../../../public/Vector.png";
import group3 from "../../../public/Group 2.png";
import group4 from "../../../public/Vector1.png";
import { FcServices } from "react-icons/fc";

const Service = () => {
  return (
    <div>
      <div className="bg-white text-black py-16 text-center">
        {/* Section Title */}
        <div className="mb-5 text-center flex flex-col items-center justify-center">
          <div className="flex items-center justify-center  py-2 px-4 mb-2">
            <FcServices className="w-20 h-20" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="flex items-center justify-center lg:mx-52">
            <p className=" text-center font-normal text-[20px]">
              At ARIANA SHIPPING LINE LLC, we offer a comprehensive suite of
              services to ensure the safe and efficient shipping of your vehicle
              from the United States to the United Arab Emirates. Our process is
              designed to provide you with a seamless experience from start to
              finish.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:px-36">
          {/* Card One */}
          <div
            className="relative w-full h-78 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/servic.jpg')" }}
          >
            {/* Initial Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <div className="flex justify-center items-center text-3xl mb-2">
                  <Image src={group4} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-2xl mt-2">Towing</h3>
              </div>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-blue-500 flex flex-col text-white items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="text-3xl mb-2">
                <Image src={group4} alt="Shipping" width={40} height={40} />
              </div>{" "}
              <h3 className="text-xl font-bold my-2">Towing</h3>
              <p className="text-sm text-center">
                We arrange for the pickup of your vehicle from over 300
                locations across the USA, ensuring a convenient and efficient
                start to the shipping process.
              </p>
            </div>
          </div>

          {/* Card Two */}
          <div
            className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/bg.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <div className="flex justify-center items-center text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-2xl mt-2">Loading</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="text-3xl mb-2">
                <Image src={group3} alt="Shipping" width={40} height={40} />
              </div>{" "}
              <h3 className="text-xl font-bold my-2">Loading</h3>
              <p className="text-sm text-center">
                Your vehicle is securely loaded into a shipping container,
                utilizing advanced techniques to prevent any movement during
                transit, thereby minimizing the risk of damage.
              </p>
            </div>
          </div>

          {/* Card Three */}
          <div
            className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/bg3.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <div className="flex justify-center items-center text-3xl mb-2">
                  <Image src={group2} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-2xl mt-2"> Fast Shipping</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="text-3xl mb-2">
                <Image src={group2} alt="Shipping" width={40} height={40} />
              </div>{" "}
              <h3 className="text-xl font-bold my-2"> Fast Shipping</h3>
              <p className="text-sm text-center">
                We partner with renowned global shipping lines such as MAERSK,
                EVERGREEN, and MSC to ensure timely and reliable transportation.
                Shipments are scheduled to arrive at your destination port on
                time, depending on the carrier.
              </p>
            </div>
          </div>

          {/* Card Four */}
          <div
            className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
            style={{ backgroundImage: "url('/bg2.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
              <div className="text-center text-white">
                <div className="flex justify-center items-center text-3xl mb-2">
                  <Image src={group1} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-2xl mt-2">Shipment Tracking </h3>
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="text-3xl mb-2">
                <Image src={group1} alt="Shipping" width={40} height={40} />
              </div>{" "}
              <h3 className="text-xl font-bold my-2"> Shipment Tracking</h3>
              <p className="text-sm text-center">
                Our official tracking system allows you to monitor the status of
                your vehicle and container in real-time, providing transparency
                and peace of mind throughout the shipping journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
