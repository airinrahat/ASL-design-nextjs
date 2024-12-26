import React from "react";

const AboutUs = () => {
  return (
    <div className="my-10">
      <div className="lg:px-40 px-6 py-16 bg-[#F5F7FA] text-gray-800 shadow-xl rounded-lg">
        <h3 className="font-extrabold text-5xl mb-10 text-center text-[#1C3A5F] uppercase tracking-wider">
          About Us
        </h3>

        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-justify">
            Welcome to{" "}
            <span className="text-[#2A9D8F] font-bold">
              Ariana Shipping Line LLC
            </span>
            , your premier ocean shipping company specializing in the
            transportation of used cars from the USA to Jebel Ali. With over a
            decade of experience, we have been a trusted name in the industry
            since our establishment in 2008.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            At{" "}
            <span className="text-[#2A9D8F] font-bold">
              Ariana Shipping Line LLC
            </span>
            , we are committed to providing reliable and efficient shipping
            services for used cars. Our dedicated team understands the unique
            requirements of shipping vehicles overseas and ensures a seamless
            and secure transportation process from the USA to Jebel Ali. In
            addition to our specialized car shipping services, we also offer
            professional towing services from the USA. Whether you need to
            transport a single vehicle or a full container, our experienced
            drivers and well-equipped tow trucks are ready to handle your towing
            needs with care and efficiency. We understand that navigating
            customs procedures in the UAE can be complex. That’s why we offer
            comprehensive clearance services to ensure your shipments are
            smoothly processed through customs. Our knowledgeable team will
            guide you through the documentation requirements and ensure a
            hassle-free customs clearance process.
          </p>

          <p className="text-lg leading-relaxed text-justify">
            With a strong focus on customer satisfaction,{" "}
            <span className="text-[#2A9D8F] font-bold">
              Ariana Shipping Line LLC
            </span>{" "}
            is dedicated to providing exceptional service and reliable support
            throughout your shipping experience. We pride ourselves on our
            attention to detail, transparent communication, and commitment to
            meeting your unique shipping requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
