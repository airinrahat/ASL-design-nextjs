import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="carousel w-full h-[550px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/gV0jdtx/Group-1.png"
            alt="Slide 1"
            width={1200}
            height={600}
            className="w-full"
          />
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
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/PwpjScn/bg3.png"
            alt="Slide 2"
            width={1200}
            height={600}
            className="w-full"
          />
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
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/PwpjScn/bg3.png"
            alt="Slide 3"
            width={1200}
            height={600}
            className="w-full"
          />
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
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="https://i.ibb.co/Kc2dFQXY/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg"
            alt="Slide 4"
            width={1200}
            height={600}
            className="w-full"
          />
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

export default HomeBanner;
