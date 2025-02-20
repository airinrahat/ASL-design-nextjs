"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./partner.css";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="mb-16 max-w-screen-xl mx-auto ">
      <h3 className=" text-3xl  text-[#1C3A5F] my-5  md:text-4xl font-extrabold mb-5 text-center ">
        Our Trusted Partners
      </h3>
      <div className="  partner">
        <div className=" shadow-lg rounded-md px-4 py-8">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
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
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center w-32 h-32">
                <Image
                  src="https://i.ibb.co/qDjR9w6/msc.jpg"
                  alt="MSC Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-32 h-32">
                <Image
                  src="https://i.ibb.co/q01MF5C/logo2.png"
                  alt="Logo 2"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-32 h-32">
                <Image
                  src="https://i.ibb.co/3YFJ0hT/evergreen.jpg"
                  alt="Evergreen"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-32 h-32">
                <Image
                  src="https://i.ibb.co/D746y7P/yangmine.png"
                  alt="Yangmine"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-32 h-32">
                <Image
                  src="https://i.ibb.co/VTZMV1K/hmm.png"
                  alt="HMM Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center w-32 h-32">
                <Image
                  src="https://i.ibb.co/SKFysJm/cma2.png"
                  alt="CMA Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partner;
