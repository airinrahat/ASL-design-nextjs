import React from "react";

const ContactBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/gV0jdtx/Group-1.png)",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white md:text-5xl font-bold text-4xl uppercase">
            Contact us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
