import Image from "next/image";
import image from "../../../public/images/sh.png";

const SubmitMessage = () => {
  return (
    <div className="bg-white my-20 ">
      <section className="flex flex-col md:flex-col lg:flex-row bg-white justify-center items-center my-2 gap-20 mb-4">
        <div className="flex flex-col md:flex-col lg:flex-row items-stretch lg:mx-28 lg:gap-32 w-full">
          {/* Quote Form */}
          <div className="bg-[#131F37] text-white py-[24px] px-12 w-full lg:w-1/2 rounded">
            <form className="lg:px-8">
              <h3 className="uppercase text-white text-xl font-bold mt-6 mb-12">
                Request a Quick Quote
              </h3>

              {/* First Column: Name, Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 text-gray-900 bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 text-gray-900 bg-white"
                    placeholder="Your email"
                  />
                </div>
              </div>

              {/* Second Column: contact, loading */}
              <div className="grid grid-cols-2 gap-4 mt-7">
                <div>
                  <input
                    type="tel"
                    id="contact"
                    className="w-full p-2 text-gray-900 bg-white"
                    placeholder="Contact"
                  />
                </div>
                <div>
                  <select
                    id="loading"
                    className="w-full p-2 text-gray-900 bg-white"
                  >
                    <option value="">Port Of Loading</option>
                    <option value="port1">USA</option>
                    <option value="port2">UK</option>
                    <option value="port3">UAS</option>
                  </select>
                </div>
              </div>

              {/* Third Column: destination , Freight */}
              <div className="grid grid-cols-2 gap-4 mt-7">
                <div>
                  <input
                    type="text"
                    id="destination"
                    className="w-full p-2 text-gray-900 bg-white"
                    placeholder="DESTINATION"
                  />
                </div>
                <div>
                  <select
                    id="freight"
                    className="w-full p-2 text-gray-900 bg-white"
                  >
                    <option value="">Freight In</option>
                    <option value="port1">USA</option>
                    <option value="port2">UK</option>
                    <option value="port3">UAS</option>
                  </select>
                </div>
              </div>

              {/* Message Section */}
              <div className="mt-7">
                <textarea
                  id="message"
                  rows="2"
                  className="w-full p-2 bg-white text-gray-900"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-4 mb-8">
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white p-2 rounded hover:bg-gray-900"
                >
                  SUBMIT MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center items-stretch mt-6 md:mt-6 lg:mt-0">
            <Image
              src={image}
              alt="Form Image"
              className="object-cover rounded"
              layout="responsive"
              width={800}
              height={800}
            />
          </div>
        </div>
      </section>

      <div
        className="relative w-full h-[500px] bg-cover bg-center mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/y5J02w3/image.png)",
        }}
      ></div>
    </div>
  );
};

export default SubmitMessage;
