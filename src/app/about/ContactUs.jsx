import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section
        className="contact-us bg-image bg-cover bg-center py-8"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/8cbRMc4/ship.jpg)",
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mt-5">Contact Us</h2>
          <p className="text-lg mb-4 text-white my-5">
            Get the best quotation for your shipment
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white mb-5 font-bold py-2 px-4 rounded">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
