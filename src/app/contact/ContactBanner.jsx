import React from "react";

const ContactBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Qj8B2C4Z/9594bb0b-f431-49db-9016-6238b320d300.jpg)",
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
