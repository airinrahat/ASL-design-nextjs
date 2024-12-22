import React from "react";

const pratice = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:px-36">
        {/* Card One */}
        <div
          className="relative w-full h-78 bg-cover bg-center shadow-lg transition-all duration-500"
          style={{ backgroundImage: "url('/servic.jpg')" }}
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

        {/* Card Two */}
        <div
          className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
          style={{ backgroundImage: "url('/bg.png')" }}
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
            </div>{" "}
            <h3 className="text-xl font-bold my-2">LOADING</h3>
            <p className="text-sm text-center">
              Efficient shipping and delivery services across international
              borders.
            </p>
          </div>
        </div>

        {/* Card Three */}
        <div
          className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
          style={{ backgroundImage: "url('/bg3.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Image src={group2} alt="Shipping" width={40} height={40} />
              </div>
              <h3 className="text-2xl mt-2">SHIPPING</h3>
            </div>
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="text-3xl mb-2">
              <Image src={group2} alt="Shipping" width={40} height={40} />
            </div>{" "}
            <h3 className="text-xl font-bold my-2">SHIPPING</h3>
            <p className="text-sm text-center">
              Efficient shipping and delivery services across international
              borders.
            </p>
          </div>
        </div>

        {/* Card Four */}
        <div
          className="relative w-full h-64 bg-cover bg-center shadow-lg transition-all duration-500"
          style={{ backgroundImage: "url('/bg2.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Image src={group1} alt="Shipping" width={40} height={40} />
              </div>
              <h3 className="text-2xl mt-2">SHIPPMENT TRACKING</h3>
            </div>
          </div>

          <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="text-3xl mb-2">
              <Image src={group1} alt="Shipping" width={40} height={40} />
            </div>{" "}
            <h3 className="text-xl font-bold my-2">SHIPPMENT TRACKING</h3>
            <p className="text-sm text-center">
              Efficient shipping and delivery services across international
              borders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pratice;

<div className="container mx-auto  ">
  <div className="slider-container mx-40">
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="relative w-80 h-80 bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url('https://i.ibb.co/TbbZ9Rr/contact.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-4">
                {/* Logo image with smaller size */}
                <Image src={group4} alt="Shipping" width={10} height={10} />
              </div>
              <h3 className="text-2xl font-bold mt-2">TRANSPORT</h3>
              <p className="text-sm mt-2">
                Reliable and timely transportation of goods.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="relative w-80 h-80 bg-cover bg-center shadow-lg transition-all duration-500"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/Gp2zYRm/ship2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 hover:opacity-0">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-xl mb-2">
                <Image src={group3} alt="Shipping" width={20} height={20} />
              </div>
              <h3 className="text-2xl mt-2">LOADING</h3>
            </div>
          </div>
          <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="text-3xl mb-2">
              <Image src={group3} alt="Shipping" width={40} height={40} />
            </div>{" "}
            <h3 className="text-xl font-bold my-2">LOADING</h3>
            <p className="text-sm text-center">
              Efficient shipping and delivery services across international
              borders.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative w-full h-80 bg-cover bg-center shadow-lg rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Image src={group4} alt="Shipping" width={40} height={40} />
              </div>
              <h3 className="text-2xl mt-2">DELIVERY</h3>
              <p className="text-sm mt-2">
                Fast and safe delivery of packages to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="relative w-full h-80 bg-cover bg-center shadow-lg rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Image src={group4} alt="Shipping" width={40} height={40} />
              </div>
              <h3 className="text-2xl mt-2">LOGISTICS</h3>
              <p className="text-sm mt-2">
                Comprehensive logistics solutions for all your needs.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 5 */}
      <SwiperSlide>
        <div className="relative w-full h-80 bg-cover bg-center shadow-lg rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Image src={group4} alt="Shipping" width={40} height={40} />
              </div>
              <h3 className="text-2xl mt-2">SHIPPING</h3>
              <p className="text-sm mt-2">
                Global shipping services to all major ports.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 6 */}
      <SwiperSlide>
        <div className="relative w-full h-80 bg-cover bg-center shadow-lg rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Image src={group4} alt="Shipping" width={40} height={40} />
              </div>
              <h3 className="text-2xl mt-2">FREIGHT</h3>
              <p className="text-sm mt-2">
                Reliable freight services to move your cargo.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 7 */}
      <SwiperSlide>
        <div className="relative w-full h-80 bg-cover bg-center shadow-lg rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex justify-center items-center text-3xl mb-2">
                <Image src={group4} alt="Shipping" width={40} height={40} />
              </div>
              <h3 className="text-2xl mt-2">CUSTOMS</h3>
              <p className="text-sm mt-2">
                Smooth and hassle-free customs clearance services.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>;
