"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./partner.css";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="mb-16">
      <h3 className="text-gray-600 text-3xl font-bold my-5 lg:ml-[150px]">
        Our Trusted Partners
      </h3>
      <div className="max-w-screen-xl mx-auto partner">
        <div className="bg-[#F7F7F7] shadow-lg px-4 py-8">
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

      {/* <div className="my-16">
          <h3 className="text-gray-600 text-3xl font-bold mt-5 lg:ml-[205px]">
            Our Trusted Partners
          </h3>
          <div className="flex justify-center py-5">
            <div className="bg-[#F7F7F7] shadow-lg w-11/12 md:w-3/4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 ml-8 justify-items-center">
                <Image
                  src={logo1}
                  alt="Logo 1"
                  className="w-40 h-16 md:w-60 md:h-20 object-contain"
                />
                <Image
                  src={logo2}
                  alt="Logo 2"
                  className="w-40 h-16 md:w-60 md:h-20 object-contain"
                />
                <Image
                  src={logo3}
                  alt="Logo 3"
                  className="w-40 h-16 md:w-60 md:h-20 object-contain"
                />
                <Image
                  src={logo4}
                  alt="Logo 4"
                  className="w-40 h-16 md:w-60 md:h-20 object-contain"
                />
                <Image
                  src={logo5}
                  alt="Logo 5"
                  className="w-40 h-16 md:w-60 md:h-20 object-contain"
                />
                <Image
                  src={logo6}
                  alt="Logo 5"
                  className="w-40 h-16 md:w-60 md:h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Partner;
