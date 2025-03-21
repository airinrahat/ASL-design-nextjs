import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReCAPTCHA from "react-google-recaptcha";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FaBusinessTime } from "react-icons/fa";
import img1 from "../../../public/images/Property 1=1.png";
import img2 from "../../../public/images/Property 1=2.png";
import img3 from "../../../public/images/Property 1=3.png";
import img4 from "../../../public/images/Property 1=4.png";

const OurAddress = () => {
  return (
    <div className="">
      <div className="mt-14 mb-8 space-y-10">
        <div className="space-y-4">
          <div className="w-full h-80 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4853787610223!2d55.3286325!3d25.254252599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4ecfb7e8cf%3A0x5b5eb3d9363cd1c9!2sAMAYA%20Shipping%20Line%20L.L.C%20(ASL)!5e0!3m2!1sen!2sbd!4v1740474157680!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto font-roboto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 mb-16 lg:mx-32 text-gray-600">
          <div className="space-y-6 lg:pl-0 pl-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A5F]">
              Headquarter
            </h2>
            <div className="flex items-start space-x-5 mb-6">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              />
              <div>
                <div className="text-base text-gray-400 font-medium">
                  Our Location
                </div>
                <p className=" text-xs font-semibold mt-1 text-gray-700 leading-relaxed">
                  Office 1207, Block–A, <br /> Centurion Star, Port Saeed,{" "}
                  <br /> Opp. Deira City Center, <br /> Near Flora Creek Hotel,
                  Deira, Dubai-U.A.E
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5 ">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              />
              <div>
                <div className="text-base text-gray-400 font-medium">
                  Call To Us
                </div>
                <p className=" text-xs font-semibold mt-1 text-gray-700">
                  <a href="tel:+971529751028"> +971529751028 </a> <br />
                  <a href="tel:+97142241592">+97142241592</a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5 ">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              />
              <div>
                <div className="text-base text-gray-400 font-medium">
                  Email To Us
                </div>
                <p className=" text-xs font-semibold mt-1 text-gray-700">
                  <a href="mailto:info@arianashippingline.com">
                    info@arianashippingline.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5 ">
              <div className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
                <FaBusinessTime />
              </div>
              <div>
                <div className="text-[16px] text-gray-400 font-medium">
                  Business Hours
                </div>
                <p className=" text-xs font-semibold mt-1 text-gray-700">
                  Monday to Friday: 9 am to 6 pm <br />
                  Saturday: 9 am to 2 pm <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="mx-7">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C3A5F] mb-6 ">
              Leave A Message
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Enter First Name"
                className="w-full p-2 border border-[#1C3A5F] bg-white rounded-lg "
              />
              <input
                type="text"
                placeholder="Enter Phone"
                className="w-full p-2 border border-[#1C3A5F] bg-white rounded-lg  "
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 border border-[#1C3A5F] bg-white rounded-lg "
              />
              <textarea
                placeholder="Describe Your Needs"
                className="w-full p-2 border border-[#1C3A5F] bg-white rounded-lg "
                rows="5"
              ></textarea>
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="not-robot"
                    className="h-5 w-5 bg-white border-[#1C3A5F] "
                  />
                  <label
                    htmlFor="not-robot"
                    className="text-gray-600 font-medium"
                  >
                    I&apos;m not a robot
                  </label>
                </div>
                {/* <div className="flex items-center bg-white border border-gray-300 p-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-blue-600 text-lg"
                  />
                  <span className=" text-gray-500">reCAPTCHA</span>
                </div> */}
                <div className="lg:pl-24">
                  <button className="py-3 px-5 bg-[#1C3A5F] text-white rounded-lg shadow-xl  hover:shadow-2xl transition-all duration-300">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <hr className="h-[2px]  bg-[#1C3A5F]" /> */}
      </div>

      <section className="text-center py-16 mb-16 bg-gray-100">
        <h2 className="text-3xl font-extrabold text-[#1C3A5F] mb-6 text-center lg:px-[123px]">
          Latest News
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 lg:px-[123px] text-black">
          {/* First Card */}
          <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 transform">
            <Image
              src={img1}
              alt="News Image 1"
              width={120}
              height={200}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            />
            <div className="ml-4 text-start">
              <h3 className="text-base font-medium text-gray-400 mt-2">
                MARCH 25, 2024
              </h3>
              <h2 className="text-lg font-semibold text-gray-800 py-2 transition-all duration-300 hover:text-[#0F4C7C]">
                Why Choose Our Warehousing Service?
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 transform">
            <Image
              src={img2}
              alt="News Image 2"
              width={120}
              height={200}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            />
            <div className="ml-4 text-start">
              <h3 className="text-base font-medium text-gray-400 mt-2">
                MAY 11, 2024
              </h3>
              <h2 className="text-lg font-semibold text-gray-800 py-2 transition-all duration-300 hover:text-[#0F4C7C]">
                Continuously Engage Distributed Infrastructures
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 transform">
            <Image
              src={img3}
              alt="News Image 3"
              width={120}
              height={200}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            />
            <div className="ml-4 text-start">
              <h3 className="text-base font-medium text-gray-400 mt-2">
                FEB 2, 2024
              </h3>
              <h2 className="text-lg font-semibold text-gray-800 py-2 transition-all duration-300 hover:text-[#0F4C7C]">
                Top Benefits Of Hiring Our Tracking Service
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 transform">
            <Image
              src={img4}
              alt="News Image 4"
              width={120}
              height={200}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            />
            <div className="ml-4 text-start">
              <h3 className="text-base font-medium text-gray-400 mt-2">
                MARCH 25, 2024
              </h3>
              <h2 className="text-lg font-semibold text-gray-800 py-2 transition-all duration-300 hover:text-[#0F4C7C]">
                Personal Change Of Management
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAddress;
