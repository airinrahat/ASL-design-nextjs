// import Image from "next/image";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";
// import apps from "../../../public/images/Apps.png";
// import iconTwo from "../../../public/images/footer icon (1).png";
// import iconThree from "../../../public/images/footer icon (2).png";
// import iconOne from "../../../public/images/footer icon.png";

// const CallUs = () => {
//   return (
//     <div>
//       <section
//         className="contact-info flex flex-col lg:flex-row lg:justify-evenly justify-center text-white py-16 px-6"
//         style={{
//           background:
//             "linear-gradient(90deg,rgb(56, 78, 98) 0%,rgb(59, 94, 116) 50%, #2880A7 100%)",
//         }}
//       >
//         {/* Call Center Section */}
//         <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
//           <Image
//             src={iconOne}
//             alt="Phone icon"
//             width={50}
//             height={50}
//             className="mb-3"
//           />
//           <h3 className="text-md font-semibold text-[#D1E8F2]">Get In Touch</h3>
//           <p className="text-sm text-gray-300 mt-2">099435372</p>
//           <p className="text-sm text-gray-300">042241372</p>
//         </div>

//         {/* Working Hours Section */}
//         <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
//           <Image
//             src={iconTwo}
//             alt="Working hours icon"
//             width={50}
//             height={50}
//             className="mb-3"
//           />
//           <h3 className="text-md font-semibold text-[#D1E8F2]">
//             Opening Hours
//           </h3>
//           <p className="text-sm text-gray-300 mt-2">
//             Monday-Friday: 8:00 am - 5:00 pm
//           </p>
//           <p className="text-sm text-gray-300">Saturday: 8:00 am - 1:00 pm</p>
//           <p className="text-sm text-gray-300">Sunday: Closed</p>
//         </div>

//         {/* Location Section */}
//         <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
//           <Image
//             src={iconThree}
//             alt="Location icon"
//             width={50}
//             height={50}
//             className="mb-3"
//           />
//           <h3 className="text-md font-semibold text-[#D1E8F2]">Locations</h3>
//           <p className="text-sm text-gray-300 mt-2">Dubai</p>
//           <p className="text-sm text-gray-300">United Arab Emirates</p>
//         </div>

//         {/* Follow Us Section */}
//         <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
//           {/* <Image
//             src={img5}
//             alt="Follow us icon"
//             width={50}
//             height={50}
//             className="mb-3"
//           /> */}
//           <Image
//             src={iconOne}
//             alt="Working hours icon"
//             width={50}
//             height={50}
//             className="mb-3"
//           />
//           <h3 className="text-md font-semibold text-[#D1E8F2]">Follow Us</h3>
//           <div className="flex space-x-4 mt-3">
//             {/* Facebook */}
//             <a href="" target="_blank" rel="noopener noreferrer">
//               <i className="text-xl">
//                 <FaFacebookF />
//               </i>
//             </a>
//             {/* Twitter */}
//             <a href="" target="_blank" rel="noopener noreferrer">
//               <i className="text-xl">
//                 <FaTwitter />
//               </i>
//             </a>
//             {/* Instagram */}
//             <a href="" target="_blank" rel="noopener noreferrer">
//               <i className="text-xl">
//                 <FaInstagram />
//               </i>
//             </a>
//             {/* LinkedIn */}
//             <a href="" target="_blank" rel="noopener noreferrer">
//               <i className="text-xl">
//                 <FaLinkedinIn />
//               </i>
//             </a>
//           </div>
//         </div>

//         {/* Download Apps Section */}
//         <div className="flex flex-col items-center text-center">
//           <h3 className="text-lg font-semibold text-[#D1E8F2] mb-3">
//             Downloads
//           </h3>
//           <a href="#" className="block">
//             <Image
//               src={apps}
//               alt="GET it on Google Play"
//               width={150}
//               height={50}
//               className="hover:opacity-90 transition"
//             />
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CallUs;
import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import apps from "../../../public/images/Apps.png";
import iconOne from "../../../public/images/footer icon.png";
import iconTwo from "../../../public/images/footer icon (1).png";
import iconThree from "../../../public/images/footer icon (2).png";

// Contact Info Section Component
const ContactInfoSection = ({ icon, title, details }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
      <Image
        src={icon}
        alt={`${title} icon`}
        width={50}
        height={50}
        className="mb-3"
      />
      <h3 className="text-md font-semibold text-[#D1E8F2]">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-sm text-gray-300 mt-2">
          {detail}
        </p>
      ))}
    </div>
  );
};

// Social Media Icons Component
const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 mt-3">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-xl hover:text-blue-500 transition" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-xl hover:text-blue-400 transition" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-xl hover:text-pink-500 transition" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-xl hover:text-blue-600 transition" />
      </a>
    </div>
  );
};

// Main Component
const CallUs = () => {
  // Data for Contact Info Sections
  const contactInfo = [
    {
      icon: iconOne,
      title: "Get In Touch",
      details: ["099435372", "042241372"],
    },
    {
      icon: iconTwo,
      title: "Opening Hours",
      details: [
        "Monday-Friday: 8:00 am - 5:00 pm",
        "Saturday: 8:00 am - 1:00 pm",
        "Sunday: Closed",
      ],
    },
    {
      icon: iconThree,
      title: "Locations",
      details: ["Dubai", "United Arab Emirates"],
    },
  ];

  return (
    <div>
      <section
        className="contact-info flex flex-col lg:flex-row lg:justify-evenly justify-center text-white py-16 px-6"
        style={{
          background:
            "linear-gradient(90deg, rgb(56, 78, 98) 0%, rgb(59, 94, 116) 50%, #2880A7 100%)",
        }}
      >
        {/* Contact Info Sections */}
        {contactInfo.map((info, index) => (
          <ContactInfoSection key={index} {...info} />
        ))}

        {/* Follow Us Section */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-0">
          <Image
            src={iconOne}
            alt="Follow us icon"
            width={50}
            height={50}
            className="mb-3"
          />
          <h3 className="text-md font-semibold text-[#D1E8F2]">Follow Us</h3>
          <SocialMediaIcons />
        </div>

        {/* Download Apps Section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-[#D1E8F2] mb-3">
            Downloads
          </h3>
          <a href="#" className="block hover:opacity-90 transition">
            <Image
              src={apps}
              alt="GET it on Google Play"
              width={150}
              height={50}
              className="hover:opacity-90 transition"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CallUs;
