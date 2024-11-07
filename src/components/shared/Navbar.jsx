"use client";
import { useEffect } from "react";
import {
  faBars,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import {
  FaWhatsapp,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  useEffect(() => {
    const toggleButton = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    // Check if elements are available
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
      });

      return () => {
        toggleButton.removeEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");
        });
      };
    }
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white text-gray-700 px-6 lg:px-14 py-2 border-b border-gray-300 space-y-4 lg:space-y-0">
        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg">Language</span>
          <select className="text-gray-600 outline-none text-lg bg-white">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Arabic</option>
            <option>Chinese</option>
            <option>Japanese</option>
            <option>Hindi</option>
            <option>Bengali</option>
            <option>Portuguese</option>
          </select>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-1">
            <FaWhatsapp className="text-green-500 text-2xl sm:text-3xl" />
            <span className="text-sm">0581035771</span>
          </div>
          <div className="flex items-center space-x-1">
            <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            <span className="text-sm">0581035772</span>
          </div>
          <div className="flex items-center space-x-1">
            <MailIcon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            <span className="text-sm">info@arianshippingline.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <LocationMarkerIcon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            <span className="text-sm">Dubai, United Arab Emirates</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3 text-black text-xl">
          <FaFacebookF className="cursor-pointer" />
          <FaGoogle className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <FaPinterestP className="cursor-pointer" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-800 to-blue-500 flex justify-center items-center pt-5 pb-5">
        <div className="flex items-center space-x-2">
          <div className="text-4xl font-bold text-blue-300">
            <span>ASL</span>
          </div>
        </div>
      </div>

      <nav className="bg-gradient-to-r from-gray-600 to-[#626963] text-white lg:pl-44">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex space-x-6">
              <a href="" className="hover:text-blue-300">
                Home
              </a>
              <a href="/about" className="hover:text-blue-300">
                About Us
              </a>
              <a
                href="/services"
                className="hover:text-blue-300 flex items-center gap-2 space-x-1"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
                <span>Our Services</span>
              </a>
              <a
                href="/contact"
                className="hover:text-blue-300 flex items-center gap-2 space-x-1"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
                <span> Contacts</span>
              </a>
              <a
                href="/download"
                className="hover:text-blue-300 flex items-center gap-2 space-x-1"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
                <span> Downloads</span>
              </a>
            </div>

            <div className="lg:hidden">
              <button
                id="mobile-menu-toggle"
                className="text-white focus:outline-none"
              >
                <FontAwesomeIcon icon={faBars} size="2x" />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 bg-gradient-to-r from-[#2CACDD] to-[#131F37] px-4">
            <a
              href="#"
              className="px-4 py-2 hover:bg-blue-700 rounded text-center"
            >
              Request a Quote
            </a>
            <div className="h-1 w-full lg:h-16 lg:w-px bg-white hidden md:hidden lg:block"></div>
            <button className="text-white ">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <a href="#" className="text-white hover:text-blue-300">
              LOGIN
            </a>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden lg:hidden bg-gray-700 p-4">
          <a href="#" className="block text-white py-2 hover:text-blue-300">
            Home
          </a>
          <a
            href="/about"
            className="block text-white py-2 hover:text-blue-300"
          >
            About Us
          </a>
          <a
            href="/services"
            className="block text-white py-2 hover:text-blue-300"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="block text-white py-2 hover:text-blue-300"
          >
            Contacts
          </a>
          <a
            href="/download"
            className="block text-white py-2 hover:text-blue-300"
          >
            Downloads
          </a>
        </div>
      </nav>
    </>
  );
}
