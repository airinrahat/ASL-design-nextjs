import Image from "next/image";
import image from "../../../public/sh.png";

const SubmitMessage = () => {
  return (
    <div className="bg-white">
      <section className="flex flex-col bg-white lg:flex-row justify-center items-center my-2 gap-20 lg:px-36 mb-4">
        {/* Form Section */}
        <div className="bg-[#131F37] mx-6 text-white py-[24px] px-12 w-full lg:w-1/2 rounded">
          <form className="lg:px-8 ">
            <h3 className="uppercase text-white text-xl   font-bold mt-6 mb-12">
              Request a Quick Quote
            </h3>

            {/* First Column: Name, Email */}
            <div className="grid grid-cols-2 gap-4  ">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 text-gray-900 bg-white "
                  placeholder="Your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 text-gray-900 bg-white "
                  placeholder="Your email"
                />
              </div>
            </div>

            {/* Second Column: City, Dimension */}
            <div className="grid grid-cols-2 gap-4 mt-7">
              <div>
                <input
                  type="text"
                  id="dimension"
                  className="w-full p-2 text-gray-900 bg-white "
                  placeholder="Dimension"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="cityDeparture"
                  className="w-full p-2 text-gray-900 bg-white "
                  placeholder="City of departure"
                />
              </div>
            </div>

            {/* Third Column: Delivery City, Freight */}
            <div className="grid grid-cols-2 gap-4 mt-7">
              <div>
                <input
                  type="text"
                  id="deliveryCity"
                  className="w-full p-2 text-gray-900 bg-white "
                  placeholder="Delivery city"
                />
              </div>
              <div>
                <select
                  id="freightType"
                  className="w-full p-2 text-gray-900 bg-white"
                  defaultValue=""
                >
                  <option value="">Freight type</option>
                </select>
              </div>
            </div>

            {/* Fourth Column: Incoterm, Weight */}
            <div className="grid grid-cols-2 gap-4 mt-7">
              <div>
                <select
                  id="Incoterm"
                  className="w-full p-2 text-gray-900 bg-white"
                  defaultValue=""
                >
                  <option value="">Incoterm</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  id="weight"
                  className="w-full p-2 text-gray-900 bg-white "
                  placeholder="Total gross weight (KG)"
                />
              </div>
            </div>

            {/* Message Section */}
            <div className="mt-7">
              <textarea
                id="message"
                rows="2"
                className="w-full p-2 bg-white text-gray-900 "
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
        <div className="lg:w-1/2 lg:mt-0">
          <Image
            src={image}
            alt="Form Image"
            className="object-cover rounded"
            layout="responsive"
            width={800}
            height={800}
          />
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
