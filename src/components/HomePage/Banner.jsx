import React from "react";
import HeroContent from "./HeroContent";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[550px]">
        {/* Slide 1 */}
        <div
          id="slide1"
          className="carousel-item relative w-full h-[550px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/HLwmDvfq/92ea30eb-19fc-43f7-b4c2-3721c8cf6694.jpg)",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
            {/* Hero Content */}
            <HeroContent />

            <hr className="w-4/5 border-white my-8 hidden lg:block" />

            {/* First Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                From the heart of USA to the roads of UAE
              </p>
            </div>

            {/* Second Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Trust us to deliver excellence every time Car Shipping Experts
              </p>
            </div>

            {/* Third Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Reliable, fast, and secure transportation of your vehicles from
                the USA to the UAE
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          id="slide2"
          className="carousel-item relative w-full h-[550px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/8gydYK9J/c1fa5599-ca33-4c7c-bfde-c9dc52823198.jpg)",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
            {/* Hero Content */}
            <HeroContent />

            <hr className="w-4/5 border-white my-8 hidden lg:block" />

            {/* First Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                From the heart of USA to the roads of UAE
              </p>
            </div>

            {/* Second Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Trust us to deliver excellence every time Car Shipping Experts
              </p>
            </div>

            {/* Third Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Reliable, fast, and secure transportation of your vehicles from
                the USA to the UAE
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          id="slide3"
          className="carousel-item relative w-full h-[550px] bg-cover bg-center"
          style={{
            backgroundImage: "url(https://i.ibb.co/PwpjScn/bg3.png)",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
            {/* Hero Content */}
            <HeroContent />

            <hr className="w-4/5 border-white my-8 hidden lg:block" />

            {/* First Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                From the heart of USA to the roads of UAE
              </p>
            </div>

            {/* Second Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Trust us to deliver excellence every time Car Shipping Experts
              </p>
            </div>

            {/* Third Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Reliable, fast, and secure transportation of your vehicles from
                the USA to the UAE
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          id="slide4"
          className="carousel-item relative w-full h-[550px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/Kc2dFQXY/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg)",
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
            {/* Hero Content */}
            <HeroContent />

            <hr className="w-4/5 border-white my-8 hidden lg:block" />

            {/* First Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                From the heart of USA to the roads of UAE
              </p>
            </div>

            {/* Second Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Trust us to deliver excellence every time Car Shipping Experts
              </p>
            </div>

            {/* Third Text with Icon */}
            <div className="flex items-center md:text-center gap-4 mt-4">
              {/* <FontAwesomeIcon
                icon={faChevronDown} // Correct usage
                size="1x"
                className="text-white"
              /> */}

              <p className="text-white text-sm md:text-center md:text-xl font-bold">
                Reliable, fast, and secure transportation of your vehicles from
                the USA to the UAE
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
