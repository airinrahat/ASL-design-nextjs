import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="my-0">
        <div className="lg:px-40 px-6 py-8 bg-gradient-to-br from-[#F9FAFB] to-[#E3F2F9] text-gray-800 shadow-lg rounded-xl">
          <h3
            className="lg:text-5xl text-3xl font-bold text-center mb-8 mt-2 
  bg-gradient-to-r from-[#0F4C7C] to-[#229276] bg-clip-text text-transparent"
          >
            Contact Us
          </h3>

          <p className="text-lg leading-relaxed text-justify mb-6 text-gray-700">
            We’re glad you’re interested in reaching out to{" "}
            <span className="text-[#154D79] font-bold">
              Ariana Shipping Line LLC
            </span>
            . Contacting us is easy, and we’re here to assist you with any
            inquiries or shipping needs you may have. Here’s the information you
            need to get in touch with us:
          </p>

          <p className="text-lg leading-relaxed text-justify mb-8 text-gray-700">
            We have multiple branches to serve you better. Here are the details
            of our locations:
          </p>

          <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold text-[#154D79] underline decoration-dotted">
              Branches in the USA
            </h4>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
              <li>Los Angeles, CA</li>
              <li>Georgia, GA</li>
              <li>Texas, TX</li>
              <li>Baltimore, BAL</li>
              <li>New Jersey, NJ</li>
            </ul>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Please note that our branches in the USA operate according to their
            respective local timings and working days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
