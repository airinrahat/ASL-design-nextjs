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
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {/* Left Column with Cards */}
        <div className="lg:col-span-3">
          <div>
            <h2 className="lg:text-5xl text-3xl font-bold text-[#0F4C7C] text-center mb-2 mt-2">
              Why Choose Us
            </h2>
            <p className="lg:text-xl text-xl text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, veniam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque, iste?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "QUALITY EXCELLENCE",
                icon: faDollarSign,
                bgColor: "bg-blue-700",
              },
              {
                title: "DIVERSITY AND INCLUSION",
                icon: faMobileScreenButton,
                bgColor: "bg-teal-500",
              },
              {
                title: "AUTHENTICITY & ACCOUNTABILITY",
                icon: faPlaneDeparture,
                bgColor: "bg-purple-700",
              },
              {
                title: "INTEGRITY",
                icon: faCarSide,
                bgColor: "bg-pink-600",
              },
              {
                title: "RELIABILITY",
                icon: faHandshakeAngle,
                bgColor: "bg-blue-950",
              },
              {
                title: "TEAMWORK",
                icon: faUsers,
                bgColor: "bg-yellow-600",
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
                  <h2 className="text-base font-bold text-center">
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
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
