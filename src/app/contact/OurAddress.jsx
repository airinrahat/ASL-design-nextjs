import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const OurAddress = () => {
  //   function onChange(value) {
  //     console.log("Captcha value:", value);
  //   }
  return (
    <div>
      <div className="flex flex-col md:flex-row  mt-16 max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-8 text-gray-600">
        {/* Our Address Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-teal-700">Our Address</h2>
          <div className="flex items-start space-x-3 mb-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-teal-600 bg-yellow-200 text-3xl p-2 rounded-full "
            />{" "}
            <div className="">
              <div>1234 Street Name</div>

              <p className="mb-4"> City, Country</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-teal-600 bg-yellow-200 text-3xl p-2 rounded-full mb-2"
            />{" "}
            <div className="">
              <div>Phone Number</div>

              <p className="mb-4">+123 456 7890</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-teal-600 bg-yellow-200 text-3xl p-2 rounded-full mb-2"
            />{" "}
            <div className="">
              <div>Email Address</div>

              <p className="mb-4">info@domain.com</p>
            </div>
          </div>
        </div>

        {/* Leave A Message Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Leave A Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border bg-white border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-2 border bg-white border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border bg-white border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Describe Your Needs"
              className="w-full p-2 border bg-white border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="2"
            ></textarea>

            {/* Checkbox and reCAPTCHA Section */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="not-robot"
                  className="h-4 w-4 bg-white"
                />
                <label htmlFor="not-robot" className="text-gray-600">
                  I'm not a robot
                </label>
              </div>
              {/* reCAPTCHA */}
              <div className="flex items-center bg-white border border-gray-300 p-2 rounded-md shadow-sm">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue-600 text-lg"
                />
                <span className="ml-2 text-gray-500">reCAPTCHA</span>
              </div>
              {/* <ReCAPTCHA sitekey="Your client site key" onChange={onChange} /> */}
              <div className="lg:pl-9">
                <button className="p-2 border border-teal-400  hover:bg-teal-500 hover:text-white transition-colors duration-200">
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

      <section className="text-center py-8">
        <h2 className="text-2xl font-bold mb-6 text-black text-start lg:pl-80 ">
          Latest News
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-4 lg:px-80 text-black">
          {/* First Card */}
          <div className="flex items-center  p-4 ">
            <Image src="/ship.jpg" alt="News Image 1" width={80} height={80} />
            <div className="ml-4 ">
              <h3 className="text-lg font-medium text-start">News Title 1</h3>
              <p className=" text-sm">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex  p-4 ">
            <Image src="/ship.jpg" alt="News Image 2" width={80} height={80} />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-start text-black">
                News Title 2
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex items-center  p-4 ">
            <Image src="/ship.jpg" alt="News Image 3" width={80} height={80} />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-start">News Title 3</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="flex items-center  p-4 ">
            <Image src="/ship.jpg" alt="News Image 4" width={80} height={80} />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-start">News Title 4</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAddress;
