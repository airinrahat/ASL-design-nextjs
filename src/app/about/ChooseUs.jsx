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
import ship from "../../../public/sss.jpg";

const ChooseUs = () => {
  return (
    <div className="my-12 mx-5 text-black">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
        {/* Left Column with Cards */}
        <div className="lg:col-span-3 ">
          <div>
            <h2
              className="lg:text-5xl text-3xl font-bold text-center mb-2 mt-2 
  bg-gradient-to-r from-[#0F4C7C] to-[#229276] bg-clip-text text-transparent"
            >
              Why Choose Us
            </h2>

            <p className="lg:text-xl text-lg text-center text-[#00000080]">
              Ariana Shipping LLC Company is committed to building a true and
              long-lasting relationship with the customers, providing reliable
              and sustainable shipping services which result an excellent client
              satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Expertise and Experience",
                icon: faDollarSign,
                bgColor: "bg-[#313D7D]",
                description:
                  "With more than ten years in the industry, our extensive knowledge of international shipping regulations and procedures ensures your vehicle is in capable hands.",
              },
              {
                title: "Comprehensive Services",
                icon: faMobileScreenButton,
                bgColor: "bg-[#559392]",
                description:
                  "We offer a full suite of services, including vehicle pickup, secure loading, Shipping, export documentation,and customs clearance, providing a hassle-free experience for our clients.",
              },
              {
                title: "Competitive Pricing",
                icon: faPlaneDeparture,
                bgColor: "bg-[#7B087B]",
                description:
                  "We believe that top-quality shipping services should be accessible and affordable. We offer competitive pricing without compromising on the quality of our services. Our transparent pricing structure ensures that you receive a fair and comprehensive quote, free from hidden fees or surprises.",
              },
              {
                title: "Customer Satisfaction",
                icon: faCarSide,
                bgColor: "bg-[#E14D4F]",
                description:
                  "At ARIANASHIPPING LINE LLC, customer satisfaction is at the core of everything we do. We prioritize your needs and go the extra mile to ensure a seamless shipping experience. Our team is committed to providing personalized service, transparent communication, and prompt assistance to exceed your expectations.",
              },
              {
                title: "Online Tracking System",
                icon: faHandshakeAngle,
                bgColor: "bg-[#344086]",
                description:
                  "Our state-of-the-art vehicle tracking system allows you to monitor your vehicle's location in real-time,providing transparency and peace of mind throughout the shipping journey. ",
              },
              {
                title: "Reliability and Security",
                icon: faUsers,
                bgColor: "bg-[#CE6B07]",
                description:
                  "We understand the importance of securely transporting your valuable assets. That's why we haveimplemented strict security measures and best practices to ensure the safe handling and transportation of used cars. You can trust us to protect your vehicles throughout the entire shipping process.",
              },
            ].map((card, index) => (
              <div className="w-full" key={index}>
                <div className="p-2 flex flex-col items-center">
                  <div
                    className={`${card.bgColor} text-gray-800 rounded-full flex justify-center items-center w-20 h-20 text-center mb-4`}
                  >
                    <FontAwesomeIcon
                      icon={card.icon}
                      className="text-white text-4xl"
                    />
                  </div>
                  <h2
                    className="text-base font-bold text-center mb-2 text-[#00000080]
"
                  >
                    {card.title}
                  </h2>
                  {/* <p className="text-sm text-center">{card.description}</p> */}
                  <p className="text-sm text-center text-gray-700 shadow-md shadow-gray-100 rounded-md p-2">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column with Image */}
        <div className="lg:col-span-1 row-span-2 my-4">
          <Image
            src={ship}
            alt="Description"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
