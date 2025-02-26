import Image from "next/image";
import { FaArrowRight, FaShip, FaTruck } from "react-icons/fa";
import { FaPeopleCarryBox, FaTrainSubway } from "react-icons/fa6";
import icon from "../../../public/images/serviecIcon.png";
import OurService from "./Banner/OurService";

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Fast Shipping",
      logo: "https://i.ibb.co/tk3CQb6/Group.png",
      image: "https://i.ibb.co/ccZ4hrZ0/Fast-shipping-1.jpg",
      icon: <FaTruck className="text-6xl" />,
      description:
        "Road freight service is a mode of transporting various goods by road using trucks that can handle different loads and distances.",
    },
    {
      id: 2,
      name: "Clearance",
      logo: "https://i.ibb.co/gMCWVVGv/Group2.png",
      image: "https://i.ibb.co/hJ47N4vF/clearance-2.jpg",
      icon: <FaShip className="text-6xl" />,
      description:
        "Sea freight service is shipping goods overseas by sea using cargo ships of different sizes and capacities.",
    },
    {
      id: 3,
      name: "Half Cut Shipping",
      logo: "https://i.ibb.co/Gffx3XRC/Vector.png",
      image: "https://i.ibb.co/GfRPNVhx/half-cut-shipping-2.jpg",
      icon: <FaTrainSubway className="text-6xl" />,
      description:
        "Train freight service is transporting goods by rail using freight cars of different types and capacities.By rail using cars.",
    },
  ];

  return (
    <div>
      <div className="bg-gray-50 my-16">
        {/* Icon */}
        <div className="flex items-center justify-center py-5 px-5   ">
          <Image src={icon} alt="Play Icon" width={80} height={80} />
        </div>
        <div className="py-2 bg-gray-50 text-gray-800 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-[#1C3A5F]">
            Our Services
          </h2>
          <div className="lg:mx-60 mx-4">
            <p className="text-lg md:text-xl leading-relaxed md:leading-8 text-justify font-medium text-gray-700">
              At{" "}
              <span className="text-[#296B9F] font-bold">
                Ariana Shipping Line LLC
              </span>
              , we offer a comprehensive suite of services to ensure the safe
              and efficient shipping of your vehicle from the United States to
              the United Arab Emirates. Our process is carefully designed to
              provide you with a seamless and stress-free experience from start
              to finish.
            </p>
          </div>
        </div>
        {/* <div className=" m-auto flex justify-center items-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-7 p-2 xl:p-0">
            {services.map((service) => (
              <div
                key={service.id}
                className="w-[370px] lg:w-[300px] xl:w-[370px] h-[440px] bg-cover bg-center relative shadow-2xl"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="p-6">
                  <div>
                    <div className="bg-gray-200 h-[150px] translate-y-64">
                      <div className="flex justify-center items-center text-center p-4">
                        <div className="absolute p-6 bg-[#1C3A5F] rounded-full">
                          <div className="w-16 rounded-full text-black">
                            {typeof service.logo === "string" ? (
                              <Image
                                height={200}
                                width={200}
                                alt="img"
                                className="h-full w-full text-black"
                                src={service.logo}
                              />
                            ) : (
                              service.logo
                            )}
                          </div>
                        </div>
                        <div className="text-xl font-bold pt-[190px] absolute">
                          {service.name} <br />
                          <button
                            className="text-sm px-4 py-[6px]  font-bold text-white bg-[#274A66] rounded-full shadow-lg hover:bg-[#1F345D] transition-all duration-300
                                      "
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="m-auto flex justify-center items-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 p-2 xl:p-0">
            {services.map((service) => (
              <div
                key={service.id}
                className="w-[370px] lg:w-[300px] xl:w-[370px] h-[440px] bg-cover bg-center relative shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="p-6">
                  <div className="bg-gray-100 h-[150px] translate-y-64 rounded-lg shadow-md">
                    <div className="flex justify-center items-center text-center p-4">
                      {/* লোগো */}
                      <div className="absolute p-4 bg-[#1C3A5F] rounded-full -top-8">
                        <div className="w-12 h-12 rounded-full flex justify-center items-center">
                          {typeof service.logo === "string" ? (
                            <Image
                              height={80}
                              width={80}
                              alt="img"
                              className="h-10 w-10 object-contain"
                              src={service.logo}
                            />
                          ) : (
                            <div className="h-10 w-10 flex justify-center items-center">
                              {service.logo}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="text-xl font-bold pt-[190px] absolute">
                        <h3 className="text-[#1C3A5F]">{service.name}</h3>
                        <button className="text-sm px-4 py-2 mb-4 font-bold text-white bg-[#274A66] rounded-full shadow-lg hover:bg-[#1F345D] transition-all duration-300 mt-2">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <OurService />
      </div>
    </div>
  );
};

export default Service;
