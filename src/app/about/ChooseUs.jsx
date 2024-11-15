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
    <div className="my-9 mx-5 text-black">
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
                title: "QUALITY EXCELLENCE",
                icon: faDollarSign,
                bgColor: "bg-[#313D7D]",
              },
              {
                title: "DIVERSITY AND INCLUSION",
                icon: faMobileScreenButton,
                bgColor: "bg-[#559392]",
              },
              {
                title: "AUTHENTICITY & ACCOUNTABILITY",
                icon: faPlaneDeparture,
                bgColor: "bg-[#7B087B]",
              },
              {
                title: "INTEGRITY",
                icon: faCarSide,
                bgColor: "bg-[#E14D4F]",
              },
              {
                title: "RELIABILITY",
                icon: faHandshakeAngle,
                bgColor: "bg-[#344086]",
              },
              {
                title: "TEAMWORK",
                icon: faUsers,
                bgColor: "bg-[#CE6B07]",
              },
            ].map((card, index) => (
              <div className="w-full" key={index}>
                <div className="p-10 flex flex-col items-center">
                  <div
                    className={`${card.bgColor} text-gray-800 rounded-full flex justify-center items-center w-16 h-16 text-center mb-4`}
                  >
                    <FontAwesomeIcon
                      icon={card.icon}
                      className="text-white text-3xl"
                    />
                  </div>
                  <h2
                    className="text-base font-bold text-center text-[#00000080]
"
                  >
                    {card.title}
                  </h2>
                  <p className="text-base text-center">
                    An affordable price for a luxury car may be significantly
                    higher than an affordable price for
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
