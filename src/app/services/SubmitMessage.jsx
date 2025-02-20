import Image from "next/image";
import image from "../../../public/images/sh.png";

const SubmitMessage = () => {
  return (
    <div className="bg-white">
      <section className="flex flex-col bg-white lg:flex-row justify-center items-center my-8 gap-4 lg:px-36 mb-4">
        {/* Form Section */}
        <div className="bg-[#131F37] text-white py-[48px] px-12 w-full lg:w-1/2">
          <form>
            <h3 className="uppercase text-white text-xl  font-bold mb-5">
              Request a Quick Quote
            </h3>

            {/* First Column: Name, Email */}
            <div className="grid grid-cols-2 gap-4 ">
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
                  <option value="" disabled>
                    Freight type
                  </option>
                  <option value="air">Air</option>
                  <option value="sea">Sea</option>
                  <option value="land">Land</option>
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
                  <option value="" disabled>
                    Incoterm
                  </option>
                  <option value="EXW">EXW</option>
                  <option value="FOB">FOB</option>
                  <option value="CIF">CIF</option>
                  <option value="DDP">DDP</option>
                  <option value="CFR">CFR</option>
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
            <div className="mt-4">
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
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <Image
            src={image}
            alt="Form Image"
            className="w-full h-full object-cover"
            layout="responsive"
            width={500}
            height={600}
          />
        </div>
      </section>
      {/* <hr className="w-full border-black my-8 mt-14  bg-black" /> */}
    </div>
  );
};

export default SubmitMessage;
