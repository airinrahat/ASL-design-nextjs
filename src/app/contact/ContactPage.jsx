import Image from "next/image";
import React from "react";
import img from "../../../public/images/map.jpg";
import {
  FaBusinessTime,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaRegCircle,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReCAPTCHA from "react-google-recaptcha";

import {
  faCheck,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 bg-gray-300 py-2 rounded-lg">
      <h3 className="text-3xl md:text-4xl font-extrabold my-5 text-center text-[#1C3A5F]">
        Contact Us
      </h3>
      <div className="mx-4 sm:mx-10 lg:mx-28">
        <div className="flex flex-col lg:flex-row items-center justify-center my-10 gap-5">
          <div className="relative w-full lg:w-3/5 lg:h-[500px] bg-gray-200 rounded-2xl shadow-lg flex flex-col p-6">
            <div className="flex items-center justify-center">
              <FaGlobeAmericas className="text-gray-600 w-8 h-10" />
              <h2 className="text-xl font-bold text-gray-600 ml-3">IN TOUCH</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* location  */}
              <a
                href="https://maps.google.com/?q=AMAYA+Shipping+Line+L.L.C+(ASL),+Dubai,+United+Arab+Emirates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#0B3563] bg-[#EFF6FF] text-xl p-3 rounded-full"
                />
                <div>
                  <div className="text-base text-gray-600 font-semibold">
                    Our Location
                  </div>
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                    Office 1207, Block–A, <br /> Centurion Star, Port Saeed,{" "}
                    <br /> Opp. Deira City Center, <br /> Near Flora Creek
                    Hotel, Deira, Dubai-U.A.E
                  </p>
                </div>
              </a>

              {/* Call To Us */}
              <a
                href="tel:0529751028"
                className="flex items-start space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#0B3563] bg-[#EFF6FF] text-xl p-3 rounded-full"
                />
                <div>
                  <div className="text-base text-gray-600 font-semibold">
                    Call To Us
                  </div>
                  <p className="text-sm text-gray-700 mt-1">
                    WhatsApp, mobile (0529751028) <br />
                    Landline (042241592)
                  </p>
                </div>
              </a>

              {/* Email To Us */}
              <a
                href="mailto:info@arianashippingline.com"
                className="flex items-start space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#0B3563] bg-[#EFF6FF] text-xl p-3 rounded-full"
                />
                <div>
                  <div className="text-base text-gray-600 font-semibold">
                    Email To Us
                  </div>
                  <p className="lg:text-sm md:text-[10px] text-xs text-gray-700 mt-1">
                    info@arianashippingline.com
                  </p>
                </div>
              </a>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-[#0B3563] bg-[#EFF6FF] text-xl p-3 rounded-full">
                  <FaBusinessTime />
                </div>
                <div>
                  <div className="text-base text-gray-600 font-semibold">
                    Business Hours
                  </div>
                  <p className="text-sm text-gray-700 mt-1">
                    Monday to Friday: 9 am to 6 pm <br />
                    Saturday: 9 am to 2 pm <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-2/5 gap-4">
            <div className="relative h-[240px] w-auto bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full">
                  <FaMapMarkerAlt className="text-gray-600 w-14 h-20" />
                </div>
                <h2 className="text-sm text-gray-600 ml-2">
                  <span className="text-lg font-medium">Los Angeles, CA</span>{" "}
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                  cum?
                </h2>
              </div>

              <p className="text-2xl font-bold text-[#475569] text-center">
                USA, USA
              </p>
              <div className="absolute bottom-4 flex justify-center items-center w-full">
                <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                  Get Touch
                  <div className="w-8 h-8 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                    <FaRegCircle size={24} />
                  </div>
                </button>
              </div>
            </div>
            <div className="relative h-[240px] w-auto bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full">
                  <FaMapMarkerAlt className="text-gray-600 w-14 h-20" />
                </div>
                <h2 className="text-sm text-gray-600 ml-2">
                  <span className="text-lg font-medium">Georgia, GA</span>{" "}
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                  cum?
                </h2>
              </div>

              <p className="text-2xl font-bold text-[#475569] text-center">
                USA, USA
              </p>
              <div className="absolute bottom-4 flex justify-center items-center w-full">
                <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                  Get Touch
                  <div className="w-8 h-8 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                    <FaRegCircle size={24} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-9">
          <div className="relative h-[240px] w-full bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-full">
                <FaMapMarkerAlt className="text-gray-600 w-14 h-20" />
              </div>
              <h2 className="text-sm text-gray-600 ml-2">
                <span className="text-lg font-medium">Texas, TX</span> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                cum?
              </h2>
            </div>

            <p className="text-2xl font-bold text-[#475569] text-center">
              USA, USA
            </p>
            <div className="absolute bottom-4 flex justify-center items-center w-full">
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                Get Touch
                <div className="w-8 h-8 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                  <FaRegCircle size={24} />
                </div>
              </button>
            </div>
          </div>
          <div className="relative h-[240px] w-full bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-full">
                <FaMapMarkerAlt className="text-gray-600 w-14 h-20" />
              </div>
              <h2 className="text-sm text-gray-600 ml-2">
                <span className="text-lg font-medium">Baltimore, BAL</span>{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                cum?
              </h2>
            </div>

            <p className="text-2xl font-bold text-[#475569] text-center">
              USA, USA
            </p>
            <div className="absolute bottom-4 flex justify-center items-center w-full">
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                Get Touch
                <div className="w-8 h-8 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                  <FaRegCircle size={24} />
                </div>
              </button>
            </div>
          </div>
          <div className="relative h-[240px] w-full bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
            <div className="flex items-center mb-2">
              <div className="p-2 rounded-full">
                <FaMapMarkerAlt className="text-gray-600 w-14 h-20" />
              </div>
              <h2 className="text-sm text-gray-600 ml-2">
                <span className="text-lg font-medium">New Jersey, NJ</span>{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                cum?
              </h2>
            </div>

            <p className="text-2xl font-bold text-[#475569] text-center">
              USA, USA
            </p>
            <div className="absolute bottom-4 flex justify-center items-center w-full">
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                Get Touch
                <div className="w-8 h-8 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                  <FaRegCircle size={24} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
