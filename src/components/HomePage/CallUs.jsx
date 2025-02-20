import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import apps from "../../../public/images/Apps.png";
import iconTwo from "../../../public/images/footer icon (1).png";
import iconThree from "../../../public/images/footer icon (2).png";
import iconOne from "../../../public/images/footer icon.png";

const CallUs = () => {
  return (
    <div>
      <section
        className="contact-info flex flex-col lg:flex-row lg:justify-evenly justify-center text-white py-16 px-6"
        style={{
          background:
            "linear-gradient(90deg,rgb(56, 78, 98) 0%,rgb(59, 94, 116) 50%, #2880A7 100%)",
        }}
      >
        {/* Call Center Section */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
          <Image
            src={iconOne}
            alt="Phone icon"
            width={50}
            height={50}
            className="mb-3"
          />
          <h3 className="text-md font-semibold text-[#D1E8F2]">Get In Touch</h3>
          <p className="text-sm text-gray-300 mt-2">099435372</p>
          <p className="text-sm text-gray-300">042241372</p>
        </div>

        {/* Working Hours Section */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
          <Image
            src={iconTwo}
            alt="Working hours icon"
            width={50}
            height={50}
            className="mb-3"
          />
          <h3 className="text-md font-semibold text-[#D1E8F2]">
            Opening Hours
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Monday-Friday: 8:00 am - 5:00 pm
          </p>
          <p className="text-sm text-gray-300">Saturday: 8:00 am - 1:00 pm</p>
          <p className="text-sm text-gray-300">Sunday: Closed</p>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
          <Image
            src={iconThree}
            alt="Location icon"
            width={50}
            height={50}
            className="mb-3"
          />
          <h3 className="text-md font-semibold text-[#D1E8F2]">Locations</h3>
          <p className="text-sm text-gray-300 mt-2">Dubai</p>
          <p className="text-sm text-gray-300">United Arab Emirates</p>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
          <Image
            src={iconOne}
            alt="Follow us icon"
            width={50}
            height={50}
            className="mb-3"
          />
          <h3 className="text-md font-semibold text-[#D1E8F2]">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            {/* Facebook */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="text-xl">
                <FaFacebookF />
              </i>
            </a>
            {/* Twitter */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="text-xl">
                <FaTwitter />
              </i>
            </a>
            {/* Instagram */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="text-xl">
                <FaInstagram />
              </i>
            </a>
            {/* LinkedIn */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="text-xl">
                <FaLinkedinIn />
              </i>
            </a>
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-[#D1E8F2] mb-3">
            Downloads
          </h3>
          <a href="#" className="block">
            <Image
              src={apps}
              alt="GET it on Google Play"
              width={150}
              height={50}
              className="hover:opacity-90 transition"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CallUs;
