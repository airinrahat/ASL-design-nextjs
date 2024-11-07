import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

import iconOne from "../../../public/footer icon.png";
import iconTwo from "../../../public/footer icon (1).png";
import iconThree from "../../../public/footer icon (2).png";
import apps from "../../../public/Apps.png";

const CallUs = () => {
  return (
    <div>
      <section className="contact-info flex flex-col lg:flex-row lg:justify-evenly justify-center items-center bg-gradient-to-r from-[#243136] to-[#274A66] text-white py-8 px-6 ">
        {/* Call Center Section */}
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <div>
            <Image
              src={iconOne}
              alt="Phone icon"
              width={24}
              height={24}
              className="text-[#0F465B]"
            />
            <h3
              className="text-sm font-bold mt-3 mb-4  text-[18px] leading-[21.78px]
"
            >
              Call Center
            </h3>

            <p className="text-xs text-[#9780BD]">099435372</p>
            <p className="text-xs text-[#9780BD]">042241372</p>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <div>
            <Image
              src={iconTwo}
              alt="Working hours icon"
              width={24}
              height={24}
              className="text-[#0F465B]"
            />
            <h3
              className="text-sm font-bold mt-3 mb-4  text-[18px] leading-[21.78px]
"
            >
              Working Hours
            </h3>
            <p className="text-xs text-[#9780BD] ">Monday-Friday</p>
            <p className="text-xs text-[#9780BD]">8:00 am - 5:00 pm</p>
            <p className="text-xs text-[#9780BD]">Saturday</p>
            <p className="text-xs text-[#9780BD]">8:00 am - 1:00 pm</p>
            <p className="text-xs text-[#9780BD]">Sunday Closed</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <div>
            <Image
              src={iconThree}
              alt="Location icon"
              width={24}
              height={24}
              className="text-[#0F465B]"
            />
            <h3
              className="text-sm font-bold mt-3 mb-4  text-[18px] leading-[21.78px]
"
            >
              {" "}
              Our Location
            </h3>
            <p className="text-xs text-[#9780BD]">Dubai</p>
            <p className="text-xs text-[#9780BD]">United Arab Emirates</p>
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-sm  mb-1 font-[600] text-[20px] leading-[26.63px]">
              Download Our Apps
            </h3>
            <a href="#" className="text-xs">
              <Image
                src={apps}
                alt="GET it on Google Play"
                width={200}
                height={200}
                className="w-42 h-22 "
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallUs;
