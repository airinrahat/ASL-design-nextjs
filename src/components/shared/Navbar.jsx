/* eslint-disable @next/next/no-img-element */
"use client";
import {
  faBars,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FcPhone } from "react-icons/fc";
import { TbDeviceLandlinePhone } from "react-icons/tb";

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
import { IoLogoTiktok } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

import img from "../../../public/images/asl-log.GIF";

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
      <div className="bg-white hidden lg:block ">
        <div className="px-8  py-4 flex flex-col lg:flex-row items-center justify-between  text-gray-700 border-b  lg:space-y-0 sticky top-0 ml-14">
          {/* Language Selector */}
          <div className=" flex items-center space-x-2">
            <span className="text-[13px]">Language</span>
            <select className="text-[12px] text-gray-600 outline-none bg-white border border-gray-300 rounded-md px-1 py-1">
              <option>English</option>
              <option>Arabic</option>
              <option>Russian</option>
            </select>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center  md:space-y-1 md:space-x-8">
            <div className="flex items-center space-x-1 lg:flex">
              <FaWhatsapp className="text-green-500 w-6 h-6 sm:w-5 sm:h-5" />
              <span className="text-xs">0581035771</span>
            </div>
            <div className="flex items-center space-x-1 lg:flex">
              <FcPhone className="w-6 h-6 sm:w-5 sm:h-5 text-green-600" />
              <span className="text-xs text-gray-700">0529751028</span>
            </div>

            <div className="flex items-center space-x-1 lg:flex">
              <TbDeviceLandlinePhone className="w-6 h-6 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs text-gray-700">042241592</span>
            </div>

            <div className="flex md:hidden xl:flex items-center space-x-1">
              <MailIcon className="w-6 h-6 sm:w-5 sm:h-5 text-red-600" />
              <span className="text-xs text-gray-700">
                info@arianshippingline.com
              </span>
            </div>

            <div className="flex md:hidden xl:flex items-center space-x-1">
              <LocationMarkerIcon className="w-6 h-6 text-green-600" />
              <span className="text-xs text-gray-700">
                Dubai, United Arab Emirates
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 text-black text-sm px-2">
            <FaLinkedinIn className="cursor-pointer font-normal hover:text-blue-600 transition-all duration-300" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600 transition-all duration-300" />
            <RiInstagramFill className="cursor-pointer hover:text-pink-600 transition-all duration-300" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition-all duration-300" />

            <IoLogoTiktok className="cursor-pointer hover:text-red-600 transition-all duration-300" />
          </div>

          <div className="relative">
            <a
              href="#"
              className="text-sm px-4 py-[6px] font-bold text-white bg-[#274A66] rounded-full shadow-lg hover:bg-[#1F345D] transition-all duration-300"
            >
              Login
            </a>
          </div>

          <br />
        </div>
      </div>

      {/* <div
        className="flex justify-center items-center py-2"
        style={{
          background:
            "linear-gradient(90deg, #51788E 3.5%, #3E6078 22%, #2F4E66 49%, #3E6078 75%, #4E6C83 98.5%)",
        }}
      >
        <Image src={img} alt="logo img" className="w-80 h-32 bg-transparent" />
      </div> */}
      {/* <div
        className="flex justify-center items-center py-2"
        style={{
          background:
            "linear-gradient(90deg, #6C8FA0 3.5%, #5A7A8E 22%, #4A677D 49%, #5A7A8E 75%, #6C8FA0 98.5%)",
        }}
      >
        <Image src={img} alt="logo img" className="w-80 h-32 bg-transparent" />
      </div> */}
      <div
        className="flex justify-center items-center py-2"
        style={{
          background:
            "linear-gradient(90deg,rgb(126, 139, 147) 3.5%,rgb(133, 146, 157) 22%,rgb(139, 151, 161) 49%, #2C485E 75%,rgb(99, 131, 151) 98.5%)",
        }}
      >
        <Image src={img} alt="logo img" className="w-80 h-32 bg-transparent" />
      </div>

      <nav className="bg-gray-300 lg:text-gray-900 text-gray-500  lg:font-bold xl:pl-44 lg:pl-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex space-x-16">
              <Link
                href="/"
                className="hover:text-black hover:font-extrabold uppercase  "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-black hover:font-extrabold uppercase"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-black hover:font-extrabold uppercase "
              >
                <span>Our Services</span>
              </Link>
              <Link
                href="/contact"
                className="hover:text-black hover:font-extrabold  uppercase"
              >
                <span>Contact</span>
              </Link>

              <div className="relative group">
                <button className="hover:text-black hover:font-extrabold flex items-center gap-2 uppercase">
                  <span>Downloads</span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="text-[#2CACDD]"
                  />
                </button>

                <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md p-2 z-10">
                  <Link
                    href="/download/android"
                    className="block px-4 py-1 hover:bg-gray-200 rounded"
                  >
                    Android
                  </Link>
                  <Link
                    href="/download/ios"
                    className="block px-4 py-1 hover:bg-gray-200 rounded"
                  >
                    IOS
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                id="mobile-menu-toggle"
                className="text-[#1C3A5F] focus:outline-none"
              >
                <FontAwesomeIcon icon={faBars} size="2x" />
              </button>
            </div>
          </div>

          <div
            className="flex  lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 pl-4 pr-8"
            style={{
              background:
                "linear-gradient(123.27deg, #296B9F 16.22%, #296B9F 25.48%, #154D79 41.8%, #013965 55.96%, #04335A 68.42%, #043359 69.18%)",
            }}
          >
            <p
              href="#"
              className="py-2 text-white sm:mr-3 font-bold text-center"
            >
              Request a Quote
            </p>
            <div className="h-1 w-full lg:h-16 lg:w-[3px] bg-white  hidden xl:flex "></div>

            <button className="text-xl px-6  text-white hidden lg:flex">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        {/* mobile menu */}

        <div
          id="mobile-menu"
          className="hidden lg:hidden bg-gray-800 py-3 px-3  shadow-2xl "
        >
          {/* Home Link */}
          <Link
            href="/"
            className="block text-white py-3 hover:text-blue-400 transition-all duration-300 text-lg font-semibold"
          >
            Home
          </Link>

          {/* About Us Link */}
          <Link
            href="/about"
            className="block text-white py-3 hover:text-blue-400 transition-all duration-300 text-lg font-semibold"
          >
            About Us
          </Link>

          {/* Our Services Link */}
          <Link
            href="/services"
            className="block text-white py-3 hover:text-blue-400 transition-all duration-300 text-lg font-semibold"
          >
            Our Services
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            className="block text-white py-3 hover:text-blue-400 transition-all duration-300 text-lg font-semibold"
          >
            Contact
          </Link>

          {/* Downloads Dropdown */}
          <div className="mt-2">
            <Link
              href="/download"
              className="block text-white py-3 hover:text-blue-400 transition-all duration-300 text-lg font-semibold"
            >
              Downloads
            </Link>
            <div className="ml-6 border-l-2 border-gray-600 pl-4">
              <Link
                href="/download/android"
                className="block text-gray-300 py-2 hover:text-blue-400 transition-all duration-300"
              >
                Android
              </Link>
              <Link
                href="/download/ios"
                className="block text-gray-300 py-2 hover:text-blue-400 transition-all duration-300"
              >
                IOS
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
