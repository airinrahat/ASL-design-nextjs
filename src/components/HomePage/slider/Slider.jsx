"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ReactTyped } from "react-typed";

const slides = [
  {
    image: "https://i.ibb.co/DHX4THHY/f668265a-37e5-4efb-bb46-ec4feece42db.jpg",
  },
  {
    image: "https://i.ibb.co/SDbCpsQQ/24d0908b-63b4-436c-a298-7dda6abd58ae.jpg",
  },
  {
    image: "https://i.ibb.co/LzqsS9zD/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg",
  },
  {
    image: "https://i.ibb.co/WvytrxQn/8cb91cbf-023f-4b27-8006-0ce503fe0373.jpg",
  },
  {
    image: "https://i.ibb.co/8gydYK9J/c1fa5599-ca33-4c7c-bfde-c9dc52823198.jpg",
  },
  {
    image: "https://i.ibb.co/Qj8B2C4Z/9594bb0b-f431-49db-9016-6238b320d300.jpg",
  },
  {
    image: "https://i.ibb.co/HLwmDvfq/92ea30eb-19fc-43f7-b4c2-3721c8cf6694.jpg",
  },
];

export default function Banner() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-[550px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start px-4 lg:pl-52 bg-black bg-opacity-40 text-center lg:text-left">
              <h1 className="text-white text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold leading-tight sm:leading-[50px] md:leading-[65px]">
                <div>
                  <ReactTyped
                    backSpeed={50}
                    strings={[
                      "We Delivers high-quality, fast, and reliable shipping services",
                    ]}
                    typeSpeed={140}
                    loop
                    className="text-base sm:text-xl md:text-2xl lg:text-4xl"
                  />
                </div>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
