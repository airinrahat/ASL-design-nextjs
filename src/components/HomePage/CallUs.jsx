import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

import iconOne from "../../../public/images/footer icon.png";
import iconTwo from "../../../public/images/footer icon (1).png";
import iconThree from "../../../public/images/footer icon (2).png";
import apps from "../../../public/images/Apps.png";
import { SlUserFollow } from "react-icons/sl";

const CallUs = () => {
  return (
    <div>
      <section
        className="contact-info flex flex-col  lg:flex-row lg:justify-evenly justify-center items-center text-white py-16 px-6"
        style={{
          background:
            "linear-gradient(87.18deg, #131F37 0%, #14466F 35.44%, #15588E 76.87%, #1969AA 99.33%)",
        }}
      >
        {/* Call Center Section */}
        <div className="flex items-center space-x-4 mb-8  lg:mb-0">
          <div>
            <Image
              src={iconOne}
              alt="Phone icon"
              width={35}
              height={35}
              className="text-[#0F465B]"
            />
            <h3
              className="text-base font-bold mt-3 mb-4  text-[18px] leading-[21.78px]
"
            >
              Get Intouch
            </h3>

            <p className="text-xs text-[#9780BD]">099435372</p>
            <p className="text-xs text-[#9780BD]">042241372</p>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="flex items-center space-x-4 mb-8 lg:mt-8 lg:mb-0">
          <div>
            <Image
              src={iconTwo}
              alt="Working hours icon"
              width={35}
              height={35}
              className="text-[#0F465B]"
            />
            <h3
              className="text-base font-bold mt-3 mb-4  text-[18px] leading-[21.78px]
"
            >
              Opening hours
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
              width={35}
              height={35}
              className="text-[#0F465B]"
            />
            <h3
              className="text-base font-bold mt-3 mb-4  text-[18px] leading-[21.78px]
"
            >
              {" "}
              Locations
            </h3>
            <p className="text-xs text-[#9780BD]">Dubai</p>
            <p className="text-xs text-[#9780BD]">United Arab Emirates</p>
          </div>
        </div>
        {/* Follow us on */}
        <div className="flex items-center space-x-4 mb-8 lg:mb-0">
          <div>
            <Image
              src={iconOne}
              alt="Phone icon"
              width={35}
              height={35}
              className="text-[#0F465B]"
            />

            <h3 className="text-base font-bold mt-3 mb-4 text-[18px] leading-[21.78px]">
              Follow us on
            </h3>

            <div className="flex space-x-3 text-[#9780BD]">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-sm  mb-1 font-[600] text-[20px] leading-[26.63px]">
              Downloads
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
