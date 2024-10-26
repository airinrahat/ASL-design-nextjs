"use client";
import { useEffect } from "react";
import {
  faBars,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  useEffect(() => {
    const toggleButton = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    // Check if elements are available
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
      });

      // Cleanup the event listener on component unmount
      return () => {
        toggleButton.removeEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");
        });
      };
    }
  }, []);

  return (
    <>
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
              <a href="/services" className="hover:text-blue-300">
                Our Services
              </a>
              <a href="#" className="hover:text-blue-300">
                Contacts
              </a>
              <a href="#" className="hover:text-blue-300">
                Downloads
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
          <a href="#" className="block text-white py-2 hover:text-blue-300">
            Contacts
          </a>
          <a href="#" className="block text-white py-2 hover:text-blue-300">
            Downloads
          </a>
        </div>
      </nav>
    </>
  );
}
