// import Image from "next/image";
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMobileScreenButton,
//   faPlaneDeparture,
//   faCarSide,
//   faHandshakeAngle,
//   faUsers,
// } from "@fortawesome/free-solid-svg-icons";

// const ChooseUs = () => {
//   return (
//     <div>
//       <div className="my-9 mx-5 text-black bg-white">
//         <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
//           <div className="lg:col-span-3">
//             <div>
//               <h2 className="lg:text-5xl text-3xl font-bold text-center mb-2 mt-2">
//                 Why Choose Us
//               </h2>
//               <p className="lg:text-xl text-xl text-center">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Laudantium, veniam? Lorem ipsum dolor sit amet consectetur
//                 adipisicing elit. Eaque, iste?
//               </p>
//             </div>

//             {/* First Row of Cards */}
//             <div className="grid md:grid-cols-3 gap-4">
//               {[
//                 {
//                   title: "QUALITY EXCELLENCE",
//                   description:
//                     "An affordable price for a luxury car may be significantly higher than an affordable price for",
//                   icon: "$",
//                   iconClass: "bg-blue-700",
//                 },
//                 {
//                   title: "DIVERSITY AND INCLUSION",
//                   description:
//                     "An affordable price for a luxury car may be significantly higher than an affordable price for",
//                   icon: "fa-solid fa-mobile-screen-button",
//                   iconClass: "bg-teal-500",
//                 },
//                 {
//                   title: "AUTHENTICITY & ACCOUNTABILITY",
//                   description:
//                     "An affordable price for a luxury car may be significantly higher than an affordable price for",
//                   icon: "fa-solid fa-plane-departure",
//                   iconClass: "bg-purple-700",
//                 },
//               ].map((card, index) => (
//                 <div className="w-full" key={index}>
//                   <div className="p-10 flex flex-col items-center">
//                     <div
//                       className={`${card.iconClass} text-gray-800 rounded-full flex justify-center items-center w-16 h-16 text-center mb-4`}
//                     >
//                       {typeof card.icon === "string" ? (
//                         <i className={`${card.icon} text-black text-3xl`}></i>
//                       ) : (
//                         <span className="text-3xl text-white">{card.icon}</span>
//                       )}
//                     </div>
//                     <h2 className="text-base font-bold text-center">
//                       {card.title}
//                     </h2>
//                     <p className="text-base text-center">{card.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Second Row of Cards */}
//             <div className="grid md:grid-cols-3 gap-4 mt-4">
//               {[
//                 {
//                   title: "INTEGRITY",
//                   icon: "fa-solid fa-car-side",
//                   iconClass: "bg-pink-600",
//                 },
//                 {
//                   title: "RELIABILITY",
//                   icon: "fa-solid fa-handshake-angle",
//                   iconClass: "bg-blue-950",
//                 },
//                 {
//                   title: "TEAMWORK",
//                   icon: "fa-solid fa-users",
//                   iconClass: "bg-yellow-600",
//                 },
//               ].map((card, index) => (
//                 <div className="w-full" key={index}>
//                   <div className="p-10 flex flex-col items-center">
//                     <div
//                       className={`${card.iconClass} text-gray-800 rounded-full flex justify-center items-center w-16 h-16 text-center mb-4`}
//                     >
//                       <i className={`${card.icon} text-white text-3xl`}></i>
//                     </div>
//                     <h2 className="text-base font-bold text-center">
//                       {card.title}
//                     </h2>
//                     <p className="text-base text-center">
//                       An affordable price for a luxury car may be significantly
//                       higher than an affordable price for
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column with Image */}
//           <div className="lg:col-span-1 row-span-2">
//             {/* <Image
//               src="/ship.jpg" // Correct path in the public folder
//               alt="Description"
//               layout="fill" // Use this for responsive behavior
//               objectFit="cover" // For object-cover effect
//               className="w-full h-full"
//             /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseUs;
// components/ChooseUs.js
// components/ChooseUs.js
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

const ChooseUs = () => {
  return (
    <div className="my-9 mx-5 text-black">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {/* Left Column with Cards */}
        <div className="lg:col-span-3">
          <div>
            <h2 className="lg:text-5xl text-3xl font-bold text-center mb-2 mt-2">
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
            src="/ship.jpg"
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
