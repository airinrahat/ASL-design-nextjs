"use client";

import { ReactTyped } from "react-typed";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    image: "https://i.ibb.co/35p5pjgG/slider-1-without-logo.png",
  },
  {
    image: "https://i.ibb.co/LzBjF3TW/Untitled-design-5.jpg",
  },
  {
    image: "https://i.ibb.co/gZ6P0PrQ/Untitled-design-6.jpg",
  },

  {
    image: "https://i.ibb.co/Rp9j0cCp/Untitled-design-8.jpg",
  },
  {
    image: "https://i.ibb.co/HTdJzmpH/Untitled-design-9.jpg",
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
            className="relative w-full h-[640px] bg-cover bg-center"
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
                    className="text-base sm:text-xl uppercase md:text-2xl lg:text-5xl"
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
