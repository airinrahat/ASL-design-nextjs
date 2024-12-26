import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="my-10">
        <div className="lg:px-40 px-6 py-16 bg-[#F9FAFB] text-gray-800 shadow-xl rounded-lg">
          <h3 className="font-extrabold text-5xl mb-10 text-center text-[#1C3A5F] uppercase tracking-wide">
            Contact Us
          </h3>

          <p className="text-lg leading-relaxed text-justify mb-6">
            We’re glad you’re interested in reaching out to{" "}
            <span className="text-[#2A9D8F] font-bold">
              Ariana Shipping Line LLC
            </span>
            . Contacting us is easy, and we’re here to assist you with any
            inquiries or shipping needs you may have. Here’s the information you
            need to get in touch with us:
          </p>

          <p className="text-lg leading-relaxed text-justify mb-8">
            We have multiple branches to serve you better. Here are the details
            of our locations:
          </p>

          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-[#1C3A5F] underline">
              Branches in the USA
            </h4>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Los Angeles, CA</li>
              <li>Georgia, GA</li>
              <li>Texas, TX</li>
              <li>Baltimore, BAL</li>
              <li>New Jersey, NJ</li>
            </ul>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            Please note that our branches in the USA operate according to their
            respective local timings and working days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
