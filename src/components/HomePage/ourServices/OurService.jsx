"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./OurService.css";
import Image from "next/image";

import group3 from "../../../../public/Group 2.png";
import { GrServices } from "react-icons/gr";
import group4 from "../../../../public/Vector1.png";
import group1 from "../../../../public/Group.png";
import group2 from "../../../../public/Vector.png";

const OurService = () => {
  return (
    <div className="my-12">
      {/* Section Title */}
      <div className="mb-5 text-center flex flex-col items-center justify-center">
        <div className="flex items-center justify-center  py-2 px-4 mb-2">
          <GrServices className="w-20 h-20" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <div className="flex items-center justify-center lg:mx-52">
          <p className=" text-center font-normal text-[20px]">
            At ARIANA SHIPPING LINE LLC, we offer a comprehensive suite of
            services to ensure the safe and efficient shipping of your vehicle
            from the United States to the United Arab Emirates. Our process is
            designed to provide you with a seamless experience from start to
            finish.
          </p>
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
              className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/y5J02w3/image.png')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group4} alt="Shipping" width={50} height={50} />
                  </div>
                  <h3 className="text-2xl mt-2">Towing</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group4} alt="Shipping" width={20} height={20} />
                </div>
                <h3 className="text-xl font-bold my-2">Towing</h3>
                <p className="text-sm text-center">
                  We arrange for the pickup of your vehicle from over 300
                  locations across the USA, ensuring a convenient and efficient
                  start to the shipping process.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/cwsHkNN/unsplash-yf-TSNbgg-Fy-E.png')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">Loading</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">Loading</h3>
                <p className="text-sm text-center">
                  Your vehicle is securely loaded into a shipping container,
                  utilizing advanced techniques to prevent any movement during
                  transit, thereby minimizing the risk of damage.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/TbbZ9Rr/contact.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group1} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">Fast Shipping</h3>
                </div>
              </div>
              <div className="absolute inset-0  bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group1} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">Fast Shipping</h3>
                <p className="text-sm text-center">
                  We partner with renowned global shipping lines such as MAERSK,
                  EVERGREEN, and MSC to ensure timely and reliable
                  transportation. Shipments are scheduled to arrive at your
                  destination port on time, depending on the carrier
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/gV0jdtx/Group-1.png')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group2} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">Shipment Tracking</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group2} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">Shipment Tracking</h3>
                <p className="text-sm text-center">
                  Our official tracking system allows you to monitor the status
                  of your vehicle and container in real-time, providing
                  transparency and peace of mind throughout the shipping
                  journey.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/N6psp0v/bg2.png')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">Offloading</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">Offloading</h3>
                <p className="text-sm text-center">
                  Upon arrival at the destination port, your vehicle is
                  carefully offloaded from the shipping container, ensuring it
                  remains in pristine condition.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co/PwpjScn/bg3.png')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">Clearance</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">Clearance</h3>
                <p className="text-sm text-center">
                  We handle all necessary customs clearance procedures, ensuring
                  compliance with UAE regulations and facilitating a smooth
                  transition for your vehicle into the country.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurService;
