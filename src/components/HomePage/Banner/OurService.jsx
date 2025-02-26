import React from "react";
import Image from "next/image";
import "./OurService.css";

const OurMenu = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10">
        <div className="card menuCard">
          <div className="imgbox">
            <Image
              src="https://i.ibb.co/GfRPNVhx/half-cut-shipping-2.jpg"
              alt="Half Cut Shipping"
              width={400}
              height={250}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="-mt-0 mb-2 font-bold text-xl">Half Cut Shipping</h2>
          </div>
        </div>

        <div className="card menuCard">
          <div className="imgbox">
            <Image
              src="https://i.ibb.co/hJ47N4vF/clearance-2.jpg"
              alt="Clearance"
              width={400}
              height={250}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="-mt-0 font-bold text-xl">Clearance </h2>
          </div>
        </div>

        <div className="card menuCard">
          <div className="imgbox">
            <Image
              src="https://i.ibb.co/ccZ4hrZ0/Fast-shipping-1.jpg"
              alt="Fast Shipping"
              width={400}
              height={250}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="-mt-0 font-bold text-xl">Fast Shipping</h2>
          </div>
        </div>

        <div className="card menuCard">
          <div className="imgbox">
            <Image
              src="https://i.ibb.co/d0SKHGTv/Loading-1.jpg"
              alt="Salad"
              width={400}
              height={250}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="-mt-0 font-bold text-xl">Loading</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
