import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="my-12">
        <div className="lg:px-44 px-6 py-10 text-black bg-[#0A0A0A08] ">
          <h3 className="font-bold text-4xl mt-5 mb-6 text-[#000000B2]">
            ABOUT US
          </h3>
          <p className="font-semibold text-lg text-[#000000B2]">
            We’re glad you’re interested in reaching out to ARIANA SHIPPING LINE
            LLC. Contacting us is easy, and we’re here to assist you with any
            inquiries or shipping needs you may have. Here’s the information you
            need to get in touch with us:
          </p>

          <p className="my-4 font-semibold text-lg text-gray-700">
            We have multiple branches to serve you better. Here are the details
            of our locations:
          </p>

          <b className="underline text-xl font-bold my-4">
            {" "}
            Branches in the USA
          </b>
          <ul className="my-4">
            <li className="">&#8226; Los Angeles, CA</li>
            <li>&#8226; Georgia, GA</li>
            <li>&#8226; A Texas, TX</li>
            <li>&#8226; Baltimore, BAL</li>
            <li>&#8226; New Jersey, NJ</li>
          </ul>

          <p className="font-semibold text-base text-[#000000B2]">
            Please note that our branches in the USA operate according to their
            respective local timings and working days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
