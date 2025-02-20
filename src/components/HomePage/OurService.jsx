import Image from "next/image";
import group3 from "../../../public/images/Group2.png";
import group1 from "../../../public/images/Group.png";
import group2 from "../../../public/images/Vector.png";
import group4 from "../../../public/images/Vector1.png";
import { FcServices } from "react-icons/fc";

const OurService = () => {
  return (
    <div>
      <div className="bg-white text-black py-16 text-center">
        {/* Section Title */}
        <div className="mb-5 text-center flex flex-col items-center justify-center">
          <div className="flex items-center justify-center  py-2 px-4 mb-2">
            <FcServices className="w-20 h-20" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg  font-normal text-[30px] leading-[45px]">
            We Offer Comprehensive Shipping Solutions
          </p>
        </div>

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
                Your vehicle is securely loaded into a shipping container,
                utilizing advanced techniques to prevent any movement during
                transit, thereby minimizing the risk of damage.
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

     
        <div className="border border-gray-400 text-black lg:mx-36 my-4 p-4 flex flex-col lg:flex-row items-center justify-between">
          <div className=" text-[16px] mb-4 lg:mb-0 text-start">
            <p>
              Ariana Shipping LLC specializes in providing seamless logistics
              and transportation services, focusing on shipping used cars from
              the USA to the UAE. With our expert team and advanced tracking
              systems, we ensure your vehicle arrives on time and in perfect
              condition.
            </p>
            <p></p>
          </div>
          {/* <button className="bg-[#323030] text-[#FFFFFFB2] px-14 py-2 border ">
            MORE INFO
          </button> */}
          <button className="bg-[#323030] text-[#FFFFFFB2] ml-10 px-10 py-2 flex items-center justify-center">
            <span>MORE</span>
            <span className="ml-2">INFO</span>
          </button>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row lg:gap-10 items-center justify-center gap-3 bg-[#F7F7F7] py-8 text-[#274A66] font-semibold text-3xl lg:text-3xl ">
          <p className="text-center ">
            FAST SHIPMENT DELIVERY FOR YOUR BUSINESS
          </p>
          <button className="bg-blue-400 text-white px-6 py-4 drop-shadow-xl text-sm rounded hover:bg-opacity-60 hover:text-black duration-200">
            GET A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurService;
