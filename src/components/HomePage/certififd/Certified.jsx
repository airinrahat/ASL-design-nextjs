"use client";

import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "./Certified.css";

const Certified = () => {
  return (
    <div className="my-20">
      <h2 className=" text-3xl  text-[#1C3A5F]   md:text-4xl font-extrabold text-center    mb-9">
        CERTIFIED BY
      </h2>
      <div className="flex justify-center items-center w-full">
        <div className="w-1/2">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            spaceBetween={60}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="https://i.ibb.co/FHvn3s3/images-q-tbn-ANd9-Gc-TSKVZBGu-QHCpfpo2-Amcltflr1-IYsblbc-PAG8a-AB0-D7-A-v-Ightel-PIu-IUw-Hz8-Pcv18-i.jpg"
                alt="Swiper Image"
                width={200}
                height={100}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="https://i.ibb.co/yn1BQ9d/images-q-tbn-ANd9-Gc-S2-Pmzzw-G7-UB-CY0wx26r4-BC-u7shvz-HVYefa3-CGRn0w2h2-Ed-AEAa-Dsbds-CLLXVDPQ2-4.jpg"
                alt="Swiper Image"
                width={200}
                height={100}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Certified;
