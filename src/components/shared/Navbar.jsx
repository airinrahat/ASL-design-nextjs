/* eslint-disable @next/next/no-img-element */
"use client";
import {
  faBars,
  faCaretDown,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FcPhone } from "react-icons/fc";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

import img from "../../../public/asl-log.GIF";

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
      <div className="bg-white ">
        <div className="px-8 lg:px-20 py-4 flex flex-col lg:flex-row items-center justify-between  text-gray-700 border-b space-y-4 lg:space-y-0 sticky top-0">
          {/* Language Selector */}
          <div className="ml-20 flex items-center space-x-2 ">
            <span className="font-semibold text-lg">Language</span>
            <select className="text-gray-600 outline-none text-lg bg-white">
              <option>English</option>

              <option>Arabic</option>
              <option>Russian</option>
            </select>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-1">
              <FaWhatsapp className="text-green-500  w-6 h-6 sm:w-5 sm:h-5" />
              <span className="text-xs">0581035771</span>
            </div>
            <div className="flex items-center space-x-1">
              <FcPhone className="w-6 h-6 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs text-gray-700">0529751028</span>
            </div>

            <div className="flex items-center space-x-1">
              <TbDeviceLandlinePhone className="w-6 h-6 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs text-gray-700">042241592</span>
            </div>

            <div className="flex items-center space-x-1">
              <MailIcon className="w-6 h-6 sm:w-5 sm:h-5 text-red-600" />
              <span className="text-xs text-gray-700">
                info@arianshippingline.com
              </span>
            </div>

            <div className="flex items-center space-x-1">
              <LocationMarkerIcon className="w-6 h-6 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs text-gray-700">
                Dubai, United Arab Emirates
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 text-black text-sm">
            <FaLinkedinIn className="cursor-pointer font-normal" />
            <FaFacebookF className="cursor-pointer" />
            <RiInstagramFill className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />

            <IoLogoTiktok className="cursor-pointer" />
          </div>

          <div className="relative">
            <a
              href="#"
              className="text-sm px-6 py-2 font-bold text-white bg-[#274A66] rounded-full shadow-lg hover:bg-[#1F345D] transition-all duration-300"
            >
              LOGIN
            </a>
          </div>

          <br />
        </div>
      </div>

      {/* <div
        className="flex justify-center items-center py-2"
        style={{
          background:
            "linear-gradient(90deg, #507491 3.5%, #274A66 22%, #1F345D 49%, #274A66 75%, #4D718E 98.5%)",
        }}
      > */}
      {/* <div
        className="flex justify-center items-center py-2"
        style={{
          background:
            "linear-gradient(90deg, #5E7E96 3.5%, #3D5C79 22%, #2E4768 49%, #3D5C79 75%, #58738E 98.5%)",
        }}
      >
        <Image src={img} alt="logo img" className="w-80 h-32 bg-transparent" />
      </div> */}
      <div
        className="flex justify-center items-center py-2"
        style={{
          background:
            "linear-gradient(90deg, #51788E 3.5%, #3E6078 22%, #2F4E66 49%, #3E6078 75%, #4E6C83 98.5%)",
        }}
      >
        <Image src={img} alt="logo img" className="w-80 h-32 bg-transparent" />
      </div>

      <nav className="bg-gray-300 text-gray-700 lg:pl-44">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex space-x-10">
              <Link
                href="/"
                className="hover:text-black hover:font-bold  uppercase"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-black hover:font-bold uppercase"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-black hover:font-bold flex items-center gap-2 space-x-1 uppercase"
              >
                <span>Our Services</span>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
              </Link>
              <Link
                href="/contact"
                className="hover:text-black hover:font-bold flex items-center gap-2 space-x-1 uppercase"
              >
                <span>Contact</span>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
              </Link>

              <div className="relative group">
                <button className="hover:text-black hover:font-bold flex items-center gap-2 uppercase">
                  <span>Downloads</span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="text-[#2CACDD]"
                  />
                </button>

                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md p-2 z-10">
                  <Link
                    href="/download/android"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Android
                  </Link>
                  <Link
                    href="/download/ios"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    IOS
                  </Link>
                </div>
              </div>
              <Link
                href="/"
                className="hover:text-black hover:font-bold flex items-center gap-2 space-x-1 uppercase"
              >
                <span> CAREERS</span>
              </Link>
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

          <div
            className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 pl-4 pr-8"
            style={{
              background:
                "linear-gradient(123.27deg, #296B9F 16.22%, #296B9F 25.48%, #154D79 41.8%, #013965 55.96%, #04335A 68.42%, #043359 69.18%)",
            }}
          >
            <p href="#" className="py-2 text-white font-bold text-center">
              Request a Quote
            </p>
            <div className="h-1 w-full lg:h-16 lg:w-[3px] bg-white hidden md:hidden lg:block"></div>
            <button className=" text-xl px-6 text-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className="h-1 w-full lg:h-16 lg:w-[0.5px] bg-gray-600 hidden md:hidden lg:block"></div>

            {/* <a href="#" className="text-white px-2 text-sm hover:text-blue-300">
              LOGIN
            </a> */}
            <FontAwesomeIcon
              icon={faUserCircle}
              size="2x"
              className="text-white"
            />
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
            Contact
          </a>
          <div>
            <a
              href="/download"
              className="block text-white py-2 hover:text-blue-300"
            >
              Downloads
            </a>
            <div className="ml-4">
              <a
                href="/download/android"
                className="block text-white py-2 hover:text-blue-300"
              >
                Android
              </a>
              <a
                href="/download/ios"
                className="block text-white py-2 hover:text-blue-300"
              >
                IOS
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
