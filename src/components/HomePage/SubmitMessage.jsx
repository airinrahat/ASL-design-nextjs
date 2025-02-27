import Image from "next/image";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import serviceBanner from "../../../public/images/Slider2.gif";
// import serviceBanner from "../../../public/images/slider3.gif";

const SubmitMessage = () => {
  const portLoadingData = [
    { id: "", title: "Select port of loading" },
    { id: 1, title: "NEW JERSEY, NWJ" },
    { id: 2, title: "HOUSTON, TX" },
    { id: 3, title: "LOS ANGELES, CA" },
    { id: 4, title: "NEWARK, NJ" },
    { id: 5, title: "SAVANNAH, GA" },
    { id: 6, title: "HOUSTON, TEXAS" },
    { id: 7, title: "HONOLULU, HI" },
    { id: 8, title: "BALTIMORE, MD" },
  ];
  return (
    <div className="bg-white  ">
      <section
        id="quote-section"
        className="flex flex-col md:flex-col lg:flex-row bg-white justify-center items-center gap-20 mb-4"
      >
        <div className="flex flex-col md:flex-col my-10 lg:flex-row items-stretch max-w-screen-xl mx-auto px-4 lg:gap-32 w-full">
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
                    className="w-full p-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="Email"
                    id="email"
                    className="w-full p-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Second Column: contact, loading */}
              <div className="grid grid-cols-2 gap-4 mt-7">
                <div>
                  <input
                    type="tel"
                    id="contact"
                    className="w-full p-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contact"
                  />
                </div>

                <div className="">
                  <select
                    id="loading"
                    className="w-full p-2 text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {portLoadingData.map((port) => (
                      <option key={port.id} value={port.id}>
                        {port.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* <div className="grid grid-cols-2 gap-4 mt-7">
                <div>
                
                  <PhoneInput
                    country={"ae"} 
                    onlyCountries={["ae", "us", "gb"]} 
                    placeholder="+971" 
                    disableSearchIcon={true} 
                    enableSearch={true} 
                    countryCodeEditable={false} 
                    value={dialCode + formik.values.primary_phone} 
                    onChange={(phone, e) => {
                      setDialCode(`+${e.dialCode}`); 
                      formik.setValues({
                        ...formik.values,
                        primary_phone: phone.slice(
                          e.dialCode.length,
                          phone.length
                        ),
                      });
                    }}
                  />
                </div>

                <div>
                 
                  <select
                    id="loading"
                    className="w-full p-2 text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {portLoadingData.map((port) => (
                      <option key={port.id} value={port.id}>
                        {port.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div> */}

              {/* Third Column: destination , message */}
              <div className="grid grid-cols-2 gap-4 mt-7">
                <div>
                  <select
                    id="destination"
                    className="w-full p-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Destination</option>
                    <option value="port1">Dubai</option>
                  </select>
                </div>

                <div>
                  <textarea
                    id="message"
                    rows="1"
                    className="w-full p-2 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 mb-8">
                <button
                  type="submit"
                  className="w-full uppercase bg-blue-400 text-white p-2 rounded hover:bg-opacity-70 duration-200"
                >
                  Get Quote
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center items-stretch mt-6 md:mt-6 lg:mt-0">
            <Image
              src={
                "https://i.ibb.co/Kc2dFQXY/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg"
              }
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
        className="relative w-full h-[450px] bg-cover bg-center mt-10 mb-20 shadow-xl overflow-hidden hidden md:block"
        style={{
          backgroundImage: `url(${serviceBanner.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
};

export default SubmitMessage;
