import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReCAPTCHA from "react-google-recaptcha";

import {
  faCheck,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import img1 from "../../../public/images/Property 1=1.png";
import img2 from "../../../public/images/Property 1=2.png";
import img3 from "../../../public/images/Property 1=3.png";
import img4 from "../../../public/images/Property 1=4.png";
import { FaBusinessTime } from "react-icons/fa";

const OurAddress = () => {
  //   function onChange(value) {
  //     console.log("Captcha value:", value);
  //   }
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-24 mb-16 lg:mx-32 text-gray-600">
        <div className="space-y-4 lg:pl-0 pl-4">
          <h2
            className="lg:text-5xl text-2xl font-bold  
      bg-gradient-to-r from-[#0F4C7C] to-[#229276] bg-clip-text text-transparent"
          >
            Headquarter
          </h2>
          <div className="flex items-start space-x-3 mb-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-custom"
              style={{ boxShadow: "0px 0px 10px 2px #00000026" }}
            />
            <div>
              <div className="text-[16px] text-gray-400 font-bold">
                Our Location
              </div>
              <p className="mb-4 font-semibold text-[12px] mt-1">
                Office 1207, Block–A,
                <br /> Centurion Star, Port Saeed,
                <br /> Opp. Deira City Center,
                <br /> Near Flora Creek Hotel, Deira, Dubai-U.A.E
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-custom"
              style={{ boxShadow: "0px 0px 10px 2px #00000026" }}
            />
            <div>
              <div className="text-[16px] text-gray-400 font-bold">
                Call To Us
              </div>
              <p className="mb-4 font-semibold text-[12px] mt-1">
                WhatsApp, mobile (0529751028) <br />
                landline (042241592)
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-custom"
              style={{ boxShadow: "0px 0px 10px 2px #00000026" }}
            />
            <div>
              <div className="text-[16px] text-gray-400 font-bold">
                Email To Us
              </div>
              <p className="mb-4 font-semibold text-[12px] mt-1">
                info@arianashippingline.com{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div
              className="text-[#0B3563] bg-white text-xl p-4 rounded-full shadow-custom"
              style={{ boxShadow: "0px 0px 10px 2px #00000026" }}
            >
              <FaBusinessTime />
            </div>
            <div>
              <div className="text-[16px] text-gray-400 font-bold">
                Business Hours
              </div>
              <p className="mb-4 font-semibold text-[12px] mt-1">
                Monday to Friday : 9 am to 6 pm
                <br />
                Saturday: 9 am to 2 pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mx-7">
          <h2
            className="lg:text-5xl text-2xl font-bold mb-4"
            style={{
              background:
                "linear-gradient(90deg, #0F4C7C 31.5%, #229276 98.52%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Leave A Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full p-4 border bg-white border-[#1C3A5F] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Enter  Phone"
              className="w-full p-2 border bg-white border-[#1C3A5F] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border bg-white border-[#1C3A5F] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Describe Your Needs"
              className="w-full p-2  border bg-white border-[#1C3A5F] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="5"
            ></textarea>
            <div className="flex flex-col lg:flex-row items-center  space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="not-robot"
                  className="h-4 w-4 bg-white"
                />
                <label htmlFor="not-robot" className="text-gray-600">
                  I&apos;m not a robot
                </label>
              </div>
              <div className="flex items-center bg-white border border-gray-300 p-2 rounded-md shadow-sm">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue-600 text-lg"
                />
                <span className="ml-2 text-gray-500">reCAPTCHA</span>
              </div>
              <div className="lg:pl-52">
                <button className="p-2 border border-teal-400  rounded-md text-[#1C3A5F] transition-colors duration-200">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-24 mb-16 lg:mx-32 text-gray-600">
        <div className="space-y-6 lg:pl-0 pl-4">
          <h2
            className="lg:text-5xl text-3xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-[#0F4C7C] to-[#229276] 
        transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-[#229276]"
          >
            Headquarter
          </h2>
          <div className="flex items-start space-x-4 mb-6">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#0B3563] bg-white text-2xl p-5 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Our Location
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 leading-relaxed text-gray-700">
                Office 1207, Block–A, <br /> Centurion Star, Port Saeed, <br />{" "}
                Opp. Deira City Center, <br /> Near Flora Creek Hotel, Deira,
                Dubai-U.A.E
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 mb-6">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#0B3563] bg-white text-2xl p-5 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Call To Us
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 text-gray-700">
                WhatsApp, mobile (0529751028) <br />
                Landline (042241592)
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 mb-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#0B3563] bg-white text-2xl p-5 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Email To Us
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 text-gray-700">
                info@arianashippingline.com
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 mb-6">
            <div className="text-[#0B3563] bg-white text-2xl p-5 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <FaBusinessTime />
            </div>
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Business Hours
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 text-gray-700">
                Monday to Friday: 9 am to 6 pm <br />
                Saturday: 9 am to 2 pm <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mx-7">
          <h2
            className="lg:text-5xl text-3xl font-extrabold text-transparent 
        bg-gradient-to-r from-[#0F4C7C] to-[#229276] 
        bg-clip-text mb-6 
        transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            Leave A Message
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full p-4 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Enter Phone"
              className="w-full p-4 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-4 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
            />
            <textarea
              placeholder="Describe Your Needs"
              className="w-full p-4 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
              rows="5"
            ></textarea>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="not-robot"
                  className="h-5 w-5 bg-white border-[#1C3A5F] focus:ring-teal-500"
                />
                <label
                  htmlFor="not-robot"
                  className="text-gray-600 font-medium"
                >
                  I&apos;m not a robot
                </label>
              </div>
              <div className="flex items-center bg-white border border-gray-300 p-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue-600 text-lg"
                />
                <span className="ml-2 text-gray-500">reCAPTCHA</span>
              </div>
              <div className="lg:pl-32">
                <button className="p-4 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 mb-16 lg:mx-32 text-gray-600">
        <div className="space-y-6 lg:pl-0 pl-4">
          <h2 className="lg:text-5xl text-3xl font-extrabold text-[#1C3A5F]">
            Headquarter
          </h2>
          <div className="flex items-start space-x-5 mb-6">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#0B3563] bg-white text-3xl p-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            />
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Our Location
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 text-gray-700 leading-relaxed">
                Office 1207, Block–A, <br /> Centurion Star, Port Saeed, <br />{" "}
                Opp. Deira City Center, <br /> Near Flora Creek Hotel, Deira,
                Dubai-U.A.E
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5 mb-6">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#0B3563] bg-white text-3xl p-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            />
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Call To Us
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 text-gray-700">
                WhatsApp, mobile (0529751028) <br />
                Landline (042241592)
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5 mb-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#0B3563] bg-white text-3xl p-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            />
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Email To Us
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 text-gray-700">
                info@arianashippingline.com
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5 mb-6">
            <div className="text-[#0B3563] bg-white text-3xl p-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              <FaBusinessTime />
            </div>
            <div>
              <div className="text-lg text-gray-400 font-medium">
                Business Hours
              </div>
              <p className="mb-4 text-sm font-semibold mt-2 text-gray-700">
                Monday to Friday: 9 am to 6 pm <br />
                Saturday: 9 am to 2 pm <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mx-7">
          <h2
            className="lg:text-5xl text-3xl font-extrabold text-[#1C3A5F]
         mb-6 
     "
          >
            Leave A Message
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full p-5 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-500 transition-all duration-300 shadow-md hover:shadow-lg"
            />
            <input
              type="text"
              placeholder="Enter Phone"
              className="w-full p-5 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-500 transition-all duration-300 shadow-md hover:shadow-lg"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-5 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-500 transition-all duration-300 shadow-md hover:shadow-lg"
            />
            <textarea
              placeholder="Describe Your Needs"
              className="w-full p-5 border border-[#1C3A5F] bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-500 transition-all duration-300 shadow-md hover:shadow-lg"
              rows="5"
            ></textarea>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="not-robot"
                  className="h-5 w-5 bg-white border-[#1C3A5F] focus:ring-teal-500"
                />
                <label
                  htmlFor="not-robot"
                  className="text-gray-600 font-medium"
                >
                  I&apos;m not a robot
                </label>
              </div>
              <div className="flex items-center bg-white border border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue-600 text-lg"
                />
                <span className=" text-gray-500">reCAPTCHA</span>
              </div>
              <div className="lg:pl-32">
                <button className="py-3 px-5 bg-[#1C3A5F] text-white rounded-lg shadow-xl  hover:shadow-2xl transition-all duration-300">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className=" mt-14 mb-8  space-y-10">
        <div className="space-y-4">
          <div className="w-full h-80  overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8094111539254!2d55.325214815281546!3d25.257568783887157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f684b0be31f7f%3A0x1b7b7f60fd5b2e5b!2sCenturion%20Star%2C%20Port%20Saeed%2C%20Opp.%20Deira%20City%20Center%2C%20Near%20Flora%20Creek%20Hotel%2C%20Deira%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1679525391975!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <hr className="h-8  bg-[#1C3A5F]" />
      <section className="text-center py-16 mb-16">
        <h2 className="text-3xl font-extrabold text-[#1C3A5F] my-12 text-center lg:px-[123px]">
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

      <hr className="h-8  bg-[#1C3A5F]" />
    </div>
  );
};

export default OurAddress;
