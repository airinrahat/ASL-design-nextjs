import React from "react";

const ContactUs = () => {
  return (
    <div className="my-12">
      <section
        className="contact-us bg-image bg-cover bg-center py-16"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/TbbZ9Rr/contact.jpg)",
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-5 mt-5">
            Contact Us
          </h2>
          <p className="text-lg mb-8 text-white ">
            Get the best quotation for your shipment
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white mb-8 font-bold py-2 px-4 rounded-lg">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
