import Image from "next/image";
import React from "react";
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import logo3 from "../../../public/logo3.png";
import logo4 from "../../../public/logo4.png";
import logo5 from "../../../public/logo5.png";

const OurPartner = () => {
  return (
    <div>
      <h3 className="text-gray-600 text-3xl font-bold lg:ml-[188px] mt-5">
        Our Trusted Partners
      </h3>
      <div className="flex justify-center py-5">
        <div className="bg-gray-300 px-4 shadow-lg w-11/12 md:w-3/4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
            <Image
              src={logo3}
              alt="Logo 1"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo1}
              alt="Logo 2"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo2}
              alt="Logo 3"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo4}
              alt="Logo 4"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo5}
              alt="Logo 5"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;