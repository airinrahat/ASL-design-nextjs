import React from "react";
import contactBanner from "../../../public/images/contactBanner.gif";

const ContactBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactBanner.src})`,
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white md:text-5xl font-extrabold text-5xl uppercase">
            Contact us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
