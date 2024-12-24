"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./OurService.css";
import Image from "next/image";

import group3 from "../../../../public/Group 2.png";
import group4 from "../../../../public/Vector1.png";
import { FcServices } from "react-icons/fc";

const OurService = () => {
  return (
    <div className="my-25">
      {/* Section Title */}
      <div className="mb-5 text-center flex flex-col items-center justify-center">
        <div className="flex items-center justify-center  py-2 px-4 mb-2">
          <FcServices className="w-20 h-20" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg  font-normal text-[30px] leading-[45px]">
          We Offer Comprehensive Shipping Solutions
        </p>
      </div>
      <div className="mx-16">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
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
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">LOADING</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">LOADING</h3>
                <p className="text-sm text-center">
                  Efficient shipping and delivery services across international
                  borders.
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
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">LOADING</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">LOADING</h3>
                <p className="text-sm text-center">
                  Efficient shipping and delivery services across international
                  borders.
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
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">LOADING</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">LOADING</h3>
                <p className="text-sm text-center">
                  Efficient shipping and delivery services across international
                  borders.
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
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">LOADING</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">LOADING</h3>
                <p className="text-sm text-center">
                  Efficient shipping and delivery services across international
                  borders.
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
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">LOADING</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">LOADING</h3>
                <p className="text-sm text-center">
                  Efficient shipping and delivery services across international
                  borders.
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
                    <Image src={group3} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2">LOADING</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group3} alt="Shipping" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold my-2">LOADING</h3>
                <p className="text-sm text-center">
                  Efficient shipping and delivery services across international
                  borders.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="relative w-full h-78 bg-cover bg-center shadow-lg transition-all duration-500"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/ZTLF5mR/Group-1.png')",
              }}
            >
              {/* Initial Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                <div className="text-center text-white">
                  <div className="flex justify-center items-center text-3xl mb-2">
                    <Image src={group4} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-2xl mt-2"> TOWING</h3>
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-blue-500 flex flex-col text-white items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-3xl mb-2">
                  <Image src={group4} alt="Shipping" width={40} height={40} />
                </div>{" "}
                <h3 className="text-xl font-bold my-2"> TOWING</h3>
                <p className="text-sm text-center">
                  Efficient shipping and delivery services across international
                  borders.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlide>
              <div
                className="relative w-full h-78 bg-cover bg-center shadow-lg transition-all duration-500"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/TbbZ9Rr/contact.jpg')",
                }}
              >
                {/* Initial Content */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
                  <div className="text-center text-white">
                    <div className="flex justify-center items-center text-3xl mb-2">
                      <Image
                        src={group4}
                        alt="Shipping"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3 className="text-2xl mt-2">TOWING</h3>
                  </div>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 bg-blue-500 flex flex-col text-white items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="text-3xl mb-2">
                    <Image src={group4} alt="Shipping" width={40} height={40} />
                  </div>
                  <h3 className="text-xl font-bold my-2">TOWING</h3>
                  <p className="text-sm text-center">
                    Efficient shipping and delivery services across
                    international borders.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurService;
