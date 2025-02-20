import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="my-2">
      <div className="bg-gradient-to-r from-[#E3F2F9] via-white to-[#E3F2F9] py-12 px-6 lg:px-24 shadow-lg rounded-xl">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-[#1C3A5F]">
          About Us
        </h3>

        {/* Grid Layout for Content and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 text-gray-700">
            <p className="text-sm leading-5">
              Welcome to{" "}
              <span className="text-[#296B9F] font-bold">
                Ariana Shipping Line LLC
              </span>
              , your premier ocean shipping company specializing in the
              transportation of used cars from the USA to Jebel Ali. With over a
              decade of experience, we have been a trusted name in the industry
              since our establishment in 2008.
            </p>

            <p className="text-sm leading-5">
              At{" "}
              <span className="text-[#296B9F] font-bold">
                Ariana Shipping Line LLC
              </span>
              , we are committed to providing reliable and efficient shipping
              services for used cars. Our dedicated team understands the unique
              requirements of shipping vehicles overseas and ensures a seamless
              and secure transportation process from the USA to Jebel Ali. In
              addition to our specialized car shipping services, we also offer
              professional towing services from the USA. Whether you need to
              transport a single vehicle or a full container, our experienced
              drivers and well-equipped tow trucks are ready to handle your
              towing needs with care and efficiency. We understand that
              navigating customs procedures in the UAE can be complex. That’s
              why we offer comprehensive clearance services to ensure your
              shipments are smoothly processed through customs. Our
              knowledgeable team will guide you through the documentation
              requirements and ensure a hassle-free customs clearance process.
            </p>

            <p className="text-sm leading-5">
              With a strong focus on customer satisfaction,{" "}
              <span className="text-[#296B9F] font-bold">
                Ariana Shipping Line LLC
              </span>{" "}
              is dedicated to providing exceptional service and reliable support
              throughout your shipping experience. We pride ourselves on our
              attention to detail, transparent communication, and commitment to
              meeting your unique shipping requirements.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative mx-auto w-full  bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl shadow-2xl overflow-hidden p-4">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100 to-gray-200 opacity-20"></div>

            {/* Image */}
            <Image
              src="https://i.ibb.co/Kc2dFQXY/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg"
              alt="Shipping Illustration"
              className="w-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
              width={2000} // Increased width
              height={1600} // Increased height
              layout="responsive"
            />

            {/* Image Caption */}
            {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-md shadow-md">
              <p className="text-gray-800 font-bold text-lg">
                Your Trusted Shipping Partner
              </p>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-r from-[#E3F2F9] via-white to-[#E3F2F9] py-10 px-6 lg:px-24 shadow-md rounded-lg">
        <h3
          className="lg:text-5xl text-3xl font-bold text-center mb-8 mt-2 
  bg-gradient-to-r from-[#0F4C7C] to-[#229276] bg-clip-text text-transparent"
        >
          About Us
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700">
            <p className="text-sm leading-6">
              Welcome to{" "}
              <span className="text-[#296B9F] font-bold">
                Ariana Shipping Line LLC
              </span>
              , your premier ocean shipping company specializing in the
              transportation of used cars from the USA to Jebel Ali. With over a
              decade of experience, we have been a trusted name in the industry
              since our establishment in 2008.
            </p>

            <p className="text-sm leading-6">
              At{" "}
              <span className="text-[#296B9F] font-bold">
                Ariana Shipping Line LLC
              </span>{" "}
              , we are committed to providing reliable and efficient shipping
              services for used cars. Our dedicated team understands the unique
              requirements of shipping vehicles overseas and ensures a seamless
              and secure transportation process from the USA to Jebel Ali. In
              addition to our specialized car shipping services, we also offer
              professional towing services from the USA. Whether you need to
              transport a single vehicle or a full container, our experienced
              drivers and wellequipped tow trucks are ready to handle your
              towing needs with care and efficiency. We understand that
              navigating customs procedures in the UAE can be complex. That’s
              why we offer comprehensive clearance services to ensure your
              shipments are smoothly processed through customs. Our
              knowledgeable team will guide you through the documentation
              requirements and ensure a hassle-free customs clearance process.
            </p>

            <p className="text-sm leading-6">
              With a strong focus on customer satisfaction,
              <span className="text-[#296B9F] font-bold">
                Ariana Shipping Line LLC
              </span>
              is dedicated to providing exceptional service and reliable support
              throughout your shipping experience. We pride ourselves on our
              attention to detail, transparent communication, and commitment to
              meeting your unique shipping requirements.
            </p>
          </div>
          <div
            className="relative mx-auto max-w-4xl bg-gradient-to-r from-blue-50 to-gray-50
           rounded-xl shadow-2xl overflow-hidden p-4"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100 
            to-gray-200 opacity-20"
            ></div>
            <Image
              src="https://i.ibb.co/Kc2dFQXY/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg"
              alt="Shipping Illustration"
              className="w-full rounded-lg shadow-xl transform hover:scale-105
               transition-transform duration-500"
              width={1500}
              height={1200}
              layout="responsive"
            />
            <div
              className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2
             rounded-md shadow-md"
            >
              <p className="text-gray-800 font-bold text-lg">
                Your Trusted Shipping Partner
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
