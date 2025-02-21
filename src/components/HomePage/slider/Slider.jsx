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
    text1: "From the heart of USA to the roads of UAE",
    text2: "Trust us to deliver excellence every time Car Shipping Experts",
    text3:
      "Reliable, fast, and secure transportation of your vehicles from the USA to the UAE",
  },
  {
    image: "https://i.ibb.co/SDbCpsQQ/24d0908b-63b4-436c-a298-7dda6abd58ae.jpg",
    text1: "From the heart of USA to the roads of UAE",
    text2: "Trust us to deliver excellence every time Car Shipping Experts",
    text3:
      "Reliable, fast, and secure transportation of your vehicles from the USA to the UAE",
  },
  {
    image: "https://i.ibb.co/LzqsS9zD/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg",
    text1: "From the heart of USA to the roads of UAE",
    text2: "Trust us to deliver excellence every time Car Shipping Experts",
    text3:
      "Reliable, fast, and secure transportation of your vehicles from the USA to the UAE",
  },
  {
    image: "https://i.ibb.co/WvytrxQn/8cb91cbf-023f-4b27-8006-0ce503fe0373.jpg",
    text1: "From the heart of USA to the roads of UAE",
    text2: "Trust us to deliver excellence every time Car Shipping Experts",
    text3:
      "Reliable, fast, and secure transportation of your vehicles from the USA to the UAE",
  },
  {
    image: "https://i.ibb.co/8gydYK9J/c1fa5599-ca33-4c7c-bfde-c9dc52823198.jpg",
    text1: "From the heart of USA to the roads of UAE",
    text2: "Trust us to deliver excellence every time Car Shipping Experts",
    text3:
      "Reliable, fast, and secure transportation of your vehicles from the USA to the UAE",
  },
  {
    image: "https://i.ibb.co/Qj8B2C4Z/9594bb0b-f431-49db-9016-6238b320d300.jpg",
    text1: "From the heart of USA to the roads of UAE",
    text2: "Trust us to deliver excellence every time Car Shipping Experts",
    text3:
      "Reliable, fast, and secure transportation of your vehicles from the USA to the UAE",
  },
  {
    image: "https://i.ibb.co/HLwmDvfq/92ea30eb-19fc-43f7-b4c2-3721c8cf6694.jpg",
    text1: "From the heart of USA to the roads of UAE",
    text2: "Trust us to deliver excellence every time Car Shipping Experts",
    text3:
      "Reliable, fast, and secure transportation of your vehicles from the USA to the UAE",
  },
];

export default function Banner() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="w-full h-[550px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[550px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start px-4 lg:pl-52 bg-black bg-opacity-40 text-center lg:text-left">
              <h1 className="text-white text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold leading-tight sm:leading-[50px] md:leading-[65px]">
                <p className="mb-2">Ariana Shipping Line LLC -</p>
                <div>
                  <ReactTyped
                    backSpeed={50}
                    strings={[
                      "The Auto-Shipping Solution Provider From USA to UAE",
                    ]}
                    typeSpeed={140}
                    loop
                    className="text-base sm:text-lg md:text-xl lg:text-2xl"
                  />
                </div>
              </h1>
              <hr className="w-4/5 border-white my-6 hidden lg:block" />

              <h2 className="text-white text-xs  md:text-lg lg:font-bold">
                {slide.text1}
              </h2>
              <h3 className="text-white text-xs  md:text-lg lg:font-bold mt-2">
                {slide.text2}
              </h3>
              <p className="text-white text-xs  md:text-lg lg:font-bold mt-2">
                {slide.text3}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
