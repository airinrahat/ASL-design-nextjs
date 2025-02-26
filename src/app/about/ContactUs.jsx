import about1 from "../../../public/images/about3.jpg";

const ContactUs = () => {
  return (
    <div className="my-12">
      <section
        className="contact-us bg-image bg-cover bg-fixed bg-center py-20 relative"
        style={{
          backgroundImage: `url(${about1.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center px-4">
          <h2 className="lg:text-5xl text-3xl font-extrabold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-white mb-8">
            Get the best quotation for your shipment today.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
