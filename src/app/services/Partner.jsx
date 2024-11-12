// pages/partner.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
];

const Partner = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Our Partners</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={150}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partner;
