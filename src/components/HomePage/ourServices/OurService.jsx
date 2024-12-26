"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./OurService.css";
import Image from "next/image";

import group3 from "../../../../public/images/Group2.png";
import { GrServices } from "react-icons/gr";
import group4 from "../../../../public/images/Vector1.png";
import group1 from "../../../../public/images/Group.png";
import group2 from "../../../../public/images/Vector.png";

const OurService = () => {
  return (
    <div className="my-10">
      {/* Section Title */}
      <div className="mb-5 text-center flex flex-col items-center justify-center">
        {/* Icon */}
        <div className="flex items-center justify-center py-5 px-5 mb-3 bg-[#F4F4F4] rounded-full shadow-md">
          <GrServices className="text-[#2A9D8F] text-[5rem]" />
        </div>

        <div className="py-2 bg-gray-50 text-gray-800 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-[#1C3A5F]">
            Our Services
          </h2>
          <div className="lg:mx-60 mx-4">
            <p className="text-lg md:text-xl leading-relaxed text-justify font-medium text-gray-700">
              At{" "}
              <span className="text-[#2A9D8F] font-bold">
                Ariana Shipping Line LLC
              </span>
              , we offer a comprehensive suite of services to ensure the safe
              and efficient shipping of your vehicle from the United States to
              the United Arab Emirates. Our process is carefully designed to
              provide you with a seamless and stress-free experience from start
              to finish.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-16 mb-8">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/y5J02w3/image.png')",
              }}
            >
              {/* Initial Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white px-4">
                  <div className="flex justify-center items-center text-4xl mb-3">
                    <Image src={group4} alt="Shipping" width={60} height={60} />
                  </div>
                  <h3 className="text-2xl font-bold mt-2">Towing</h3>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-center items-center text-4xl mb-3">
                  <Image src={group4} alt="Shipping" width={60} height={60} />
                </div>
                <h3 className="text-xl font-bold my-2">Towing</h3>
                <p className="text-sm text-center px-4">
                  We arrange for the pickup of your vehicle from over 300
                  locations across the USA, ensuring a convenient and efficient
                  start to the shipping process.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transition-all duration-500"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/cwsHkNN/unsplash-yf-TSNbgg-Fy-E.png')",
              }}
            >
              {/* Default State */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white px-4">
                  <div className="flex justify-center items-center text-4xl mb-3">
                    <Image src={group3} alt="Shipping" width={50} height={50} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-wide">Loading</h3>
                </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 px-6 text-center">
                <div className="text-4xl mb-3">
                  <Image src={group3} alt="Shipping" width={50} height={50} />
                </div>
                <h3 className="text-xl font-bold mb-3">Loading</h3>
                <p className="text-sm leading-relaxed">
                  Your vehicle is securely loaded into a shipping container,
                  utilizing advanced techniques to prevent any movement during
                  transit, thereby minimizing the risk of damage.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/TbbZ9Rr/contact.jpg')",
              }}
            >
              {/* Default State */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white px-4">
                  <div className="flex justify-center items-center text-4xl mb-3">
                    <Image src={group1} alt="Shipping" width={50} height={50} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-wide">
                    Fast Shipping
                  </h3>
                </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 px-1 text-center">
                <div className="text-4xl mb-1">
                  <Image src={group1} alt="Shipping" width={50} height={50} />
                </div>
                <h3 className="text-xl font-bold mb-1">Fast Shipping</h3>
                <p className="text-sm leading-relaxed">
                  We partner with renowned global shipping lines such as{" "}
                  <span className="font-semibold">MAERSK, EVERGREEN,</span> and{" "}
                  <span className="font-semibold">MSC</span> to ensure timely
                  and reliable transportation. Shipments are scheduled to arrive
                  at your destination port on time, depending on the carrier.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transition-all duration-500"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/gV0jdtx/Group-1.png')",
              }}
            >
              {/* Default State */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white px-4">
                  <div className="flex justify-center items-center text-4xl mb-3">
                    <Image src={group2} alt="Shipping" width={50} height={50} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-wide">
                    Shipment Tracking
                  </h3>
                </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 px-6 text-center">
                <div className="text-4xl mb-3">
                  <Image src={group2} alt="Shipping" width={50} height={50} />
                </div>
                <h3 className="text-xl font-bold mb-3">Shipment Tracking</h3>
                <p className="text-sm leading-relaxed">
                  Our official tracking system allows you to monitor the status
                  of your vehicle and container in real-time, ensuring
                  transparency and peace of mind throughout the shipping
                  journey.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/N6psp0v/bg2.png')",
              }}
            >
              {/* Default State */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white px-4">
                  <div className="flex justify-center items-center text-4xl mb-3">
                    <Image
                      src={group3}
                      alt="Offloading"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="text-2xl font-bold tracking-wide">
                    Offloading
                  </h3>
                </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 px-6 text-center">
                <div className="text-4xl mb-3">
                  <Image src={group3} alt="Offloading" width={50} height={50} />
                </div>
                <h3 className="text-xl font-bold mb-3">Offloading</h3>
                <p className="text-sm leading-relaxed">
                  Upon arrival at the destination port, your vehicle is
                  meticulously offloaded from the shipping container, ensuring
                  it remains in perfect condition for a seamless handover
                  experience.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/PwpjScn/bg3.png')",
              }}
            >
              {/* Default State */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white px-4">
                  <div className="flex justify-center items-center text-4xl mb-3">
                    <Image
                      src={group3}
                      alt="Clearance"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="text-2xl font-bold tracking-wide">
                    Clearance
                  </h3>
                </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 px-4 text-center">
                <div className="text-4xl mb-1 mt-1">
                  <Image src={group3} alt="Clearance" width={50} height={50} />
                </div>
                <h3 className="text-xl font-bold mb-1">Clearance</h3>
                <p className="text-sm leading-relaxed">
                  Our team manages all necessary customs clearance procedures,
                  ensuring full compliance with UAE regulations. We facilitate a
                  seamless transition for your vehicle into the country,
                  offering you peace of mind.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/jVKWyYn/bg.png')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">Half-Cut Vehicle Shipping</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-1">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mt-1">
                  Half-Cut Vehicle Shipping
                </h3>
                <p className="text-sm text-center">
                  We specialize in shipping used half-cut vehicles, which are
                  vehicles that have been professionally dismantled to include
                  the front section, typically from the front axle forward. This
                  service is particularly beneficial for clients seeking
                  specific parts or components for vehicle restoration or
                  modification projects.
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg rounded-lg overflow-hidden transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/jVKWyYn/bg.png')",
              }}
            >
              {/* Default State */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white px-4">
                  <div className="flex justify-center items-center text-4xl mb-3">
                    <Image src={group3} alt="Shipping" width={50} height={50} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-wide">
                    Half-Cut Vehicle Shipping
                  </h3>
                </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500  text-center">
                <div className="text-4xl mb-3">
                  <Image src={group3} alt="Shipping" width={50} height={50} />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Half-Cut Vehicle Shipping
                </h3>
                <p className="text-sm leading-relaxed">
                  We specialize in shipping used half-cut vehicles, which are
                  professionally dismantled to include the front section. This
                  service is ideal for clients seeking specific parts for
                  restoration or modification projects.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurService;
