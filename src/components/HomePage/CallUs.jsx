import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {
  faPhoneSlash,
  faUserNurse,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

const CallUs = () => {
  return (
    <div>
      <section className="contact-info flex flex-col lg:flex-row lg:justify-between justify-center items-center bg-gradient-to-r from-[#243136] to-[#274A66] text-white py-8 px-6 lg:px-16">
        {/* Call Center Section */}
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <div>
            <FontAwesomeIcon
              icon={faPhoneSlash}
              className="text-[#0F465B] text-2xl"
            />
            <h3 className="text-sm font-bold mt-3 mb-4">Call Center</h3>
            <p className="text-xs">Give us a free call</p>
            <p className="text-xs">099435372</p>
            <p className="text-xs">042241372</p>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <div>
            <FontAwesomeIcon
              icon={faUserNurse}
              className="text-[#0F465B] text-2xl"
            />
            <h3 className="text-sm font-bold mt-3 mb-4">Working Hours</h3>
            <p className="text-xs">Monday-Friday</p>
            <p className="text-xs">8:00 am - 5:00 pm</p>
            <p className="text-xs">Saturday</p>
            <p className="text-xs">8:00 am - 1:00 pm</p>
            <p className="text-xs">Sunday Closed</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <div>
            <FontAwesomeIcon
              icon={faCompass}
              className="text-[#0F465B] text-2xl"
            />
            <h3 className="text-sm font-bold mt-3 mb-4">Our Location</h3>
            <p className="text-xs">Dubai</p>
            <p className="text-xs">United Arab Emirates</p>
            <p className="text-xs">Address: Sheikh Zayed Road</p>
            <p className="text-xs">Postal Code: 12345</p>
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-sm font-bold">Download Our Apps</h3>
            <a href="#" className="text-xs">
              <Image
                src="/images.png"
                alt="GET it on Google Play"
                width={160}
                height={48}
                className="w-40 h-12 mt-2"
              />
            </a>
            <a href="#" className="text-xs">
              <Image
                src="/images.png"
                alt="GET it on App Store"
                width={160}
                height={48}
                className="w-40 h-12 mt-2"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallUs;
