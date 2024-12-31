import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faMobileScreenButton,
  faPlaneDeparture,
  faCarSide,
  faHandshakeAngle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ship from "../../../public/images/sss.jpg";

const ChooseUs = () => {
  return (
    <div className="my-12 mx-5 text-black">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
        {/* Left Column with Cards */}
        <div className="lg:col-span-3">
          <div>
            <h2
              className="lg:text-5xl text-3xl font-extrabold text-center mb-6 mt-2 
        bg-gradient-to-r from-[#0F4C7C] to-[#229276] bg-clip-text text-transparent tracking-wide"
            >
              Why Choose Us
            </h2>

            <p className="lg:text-lg text-base text-center mb-12 text-gray-600 leading-relaxed">
              Ariana Shipping LLC is dedicated to building genuine,
              <br /> long-lasting relationships with our customers. Our reliable
              and sustainable shipping <br />
              services ensure exceptional client satisfaction at every step.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:mx-24">
            {[
              {
                title: "Expertise and Experience",
                icon: faDollarSign,
                bgColor: "bg-gradient-to-r from-[#273C75] to-[#4C74BE]",
                description:
                  "With over ten years in the industry, we bring extensive knowledge of international shipping regulations and procedures, ensuring your vehicle is in capable hands.",
              },
              {
                title: "Comprehensive Services",
                icon: faMobileScreenButton,
                bgColor: "bg-gradient-to-r from-[#2B7A78] to-[#76C7C5]",
                description:
                  "We offer a full suite of services, including vehicle pickup, secure loading, shipping, export documentation, and customs clearance for a hassle-free experience.",
              },
              {
                title: "Competitive Pricing",
                icon: faPlaneDeparture,
                bgColor: "bg-gradient-to-r from-[#6F42C1] to-[#C26EFF]",
                description:
                  "Top-quality shipping services at affordable prices. Our transparent pricing ensures no hidden fees, providing value without compromising quality.",
              },
              {
                title: "Customer Satisfaction",
                icon: faCarSide,
                bgColor: "bg-gradient-to-r from-[#D7263D] to-[#FF6F61]",
                description:
                  "Customer satisfaction is our priority. We provide personalized service, transparent communication, and prompt assistance for a seamless experience.",
              },
              {
                title: "Online Tracking System",
                icon: faHandshakeAngle,
                bgColor: "bg-gradient-to-r from-[#1D3557] to-[#457B9D]",
                description:
                  "Track your vehicle's location in real-time with our advanced tracking system, ensuring transparency and peace of mind throughout the shipping journey.",
              },
              {
                title: "Reliability and Security",
                icon: faUsers,
                bgColor: "bg-gradient-to-r from-[#FF8800] to-[#FFBF47]",
                description:
                  "Strict security measures ensure safe handling and transportation of your valuable assets. Trust us to protect your vehicles during the entire shipping process.",
              },
            ].map((card, index) => (
              <div
                className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
                key={index}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div
                    className={`${card.bgColor} text-white rounded-full flex justify-center items-center w-20 h-20 mb-4`}
                  >
                    <FontAwesomeIcon icon={card.icon} className="text-4xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column with Image */}
        <div className="lg:col-span-1  row-span-2 mt-8">
          <Image
            src={ship}
            alt="Description"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
