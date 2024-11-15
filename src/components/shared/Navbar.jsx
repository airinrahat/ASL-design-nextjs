"use client";
import {
  faBars,
  faCaretDown,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
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
        <div className="px-8 lg:px-20 py-4 flex flex-col lg:flex-row items-center justify-between  text-gray-700 border-b  space-y-4 lg:space-y-0">
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
          <div className="flex items-center space-x-1 text-black text-sm">
            <FaFacebookF className="cursor-pointer" />
            <FaGoogle className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer font-normal" />
            <FaPinterestP className="cursor-pointer" />
          </div>
          <br />
        </div>
        {/* <hr className="bg-white py-2 border border-red-500 w-1/2 justify-center" /> */}
        {/* <div className="flex justify-center mx-4 bg-white">
          <hr className="w-16 border-t-2 border-black mt-4" />
        </div> */}
      </div>

      {/* <div className="text-center flex justify-center items-center bg-transparent">
       */}
      <div
        className="flex justify-center items-center py-12"
        style={{
          background:
            "linear-gradient(90deg, #507491 3.5%, #274A66 22%, #1F345D 49%, #274A66 75%, #4D718E 98.5%)",
        }}
      >
        <Image src={img} alt="logo img" className="w-80 h-20 bg-transparent" />
      </div>

      <nav className="bg-gray-300 text-gray-700 lg:pl-44">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex space-x-10">
              <Link href="/" className="hover:text-black hover:font-bold">
                Home
              </Link>
              <Link href="/about" className="hover:text-black hover:font-bold">
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-black hover:font-bold flex items-center gap-2 space-x-1"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
                <span>Our Services</span>
              </Link>
              <Link
                href="/contact"
                className="hover:text-black hover:font-bold flex items-center gap-2 space-x-1"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
                <span> Contacts</span>
              </Link>
              <Link
                href="/download"
                className="hover:text-black hover:font-bold flex items-center gap-2 space-x-1"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-[#2CACDD] "
                />
                <span> Downloads</span>
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
            <button className="text-black text-xl px-6 hover:text-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <div className="h-1 w-full lg:h-16 lg:w-[0.5px] bg-gray-600 hidden md:hidden lg:block"></div>

            <a
              href="#"
              className="text-white px-2 text-sm  hover:text-blue-300"
            >
              LOGIN
            </a>
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
