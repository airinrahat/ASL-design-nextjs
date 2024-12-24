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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-24 mb-16 lg:mx-32 text-gray-600">
        {/* Our Address Section */}
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

        {/* Leave A Message Form Section */}
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
              className="w-full p-4 border bg-white border-[#208A77] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Enter  Phone"
              className="w-full p-2 border bg-white border-[#208A77] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border bg-white border-[#208A77] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Describe Your Needs"
              className="w-full p-2  border bg-white border-[#208A77] rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                <button className="p-2 border border-teal-400  rounded-md text-[#208A77] transition-colors duration-200">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.556393826529!2d90.4130510744011!3d23.810331090124584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77a7a2b5d91%3A0xf18bf32d224aa3cb!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1690882799032!5m2!1sen!2sbd"
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
      <hr className="h-8  bg-[#0A3A60]" />
      <section className="text-center py-8 mb-8">
        <h2 className="text-4xl font-bold my-10 text-black text-start lg:pl-[123px] ">
          Latest News
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-14 lg:px-[123px] text-black">
          {/* First Card */}
          <div className="flex    ">
            <Image src={img1} alt="News Image 1" width={120} height={200} />
            <div className="ml-3">
              <h3 className="text-base font-medium text-start text-gray-400 mt-2">
                MARCH 25, 2024
              </h3>
              <h2 className="text-sm font-bold text-start py-1">
                Why Choose Our Warehousing Service?
              </h2>
              <p className=" text-xs text-start text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex    ">
            <Image src={img2} alt="News Image 1" width={120} height={200} />
            <div className="ml-3">
              <h3 className="text-base font-medium text-start text-gray-400 mt-2">
                May 11, 2024
              </h3>
              <h2 className="text-sm font-bold text-start py-1">
                Cintinually Engage Distributed Infrastructures
              </h2>
              <p className=" text-xs text-start text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex    ">
            <Image src={img3} alt="News Image 1" width={120} height={200} />
            <div className="ml-3">
              <h3 className="text-base font-medium text-start text-gray-400 mt-2">
                Feb 2 , 2024
              </h3>
              <h2 className="text-sm font-bold text-start py-1">
                Top Benefits Of Hiring Our Tracking Service{" "}
              </h2>
              <p className=" text-xs text-start text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="flex    ">
            <Image src={img4} alt="News Image 1" width={120} height={200} />
            <div className="ml-3">
              <h3 className="text-lg font-medium text-start text-gray-400 mt-2">
                MARCH 25, 2024
              </h3>
              <h2 className="text-sm font-bold text-start py-1">
                Personal Change Of Management{" "}
              </h2>
              <p className=" text-xs text-start text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-8  bg-[#0A3A60]" />
    </div>
  );
};

export default OurAddress;
