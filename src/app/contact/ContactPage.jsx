import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMapMarkerAlt, FaRegCircle } from "react-icons/fa";
// import ReCAPTCHA from "react-google-recaptcha";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 bg-gray-300 py-2 rounded-lg">
      <h3 className="text-3xl md:text-4xl font-extrabold my-5 text-center text-[#1C3A5F]">
        Contact Us
      </h3>
      <div className="mx-4 sm:mx-10 lg:mx-20">
        <div className="flex flex-col lg:flex-row items-center justify-center my-10 gap-5">
          <div className="relative w-full lg:w-2/3 bg-gray-200 rounded-2xl shadow-lg flex flex-col p-5">
            <div className="flex items-center justify-center">
              {/* <FaMapMarkerAlt className="text-[#0B3563] w-5 h-5" /> */}
              <h2 className="text-xl font-bold text-[#0B3563] ml-3 my-1">
                Our Main Office
              </h2>
            </div>

            <div className="flex justify-between">
              <div className="mb-10 w-1/2 flex flex-col items-start justify-center font-semibold text-lg">
                <h3>Office 1207, Block–A, </h3>
                <h3>Centurion Star, Port Saeed, </h3>
                <h3>Opp. Deira City Center, </h3>
                <h3>Near Flora Creek Hotel, Deira, Dubai-U.A.E</h3>
              </div>
              <div className="w-1/2 mb-10 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=AMAYA+Shipping+Line+L.L.C+(ASL),+Dubai,+United+Arab+Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 bg-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[#0B3563] bg-[#EFF6FF] text-base p-2 rounded-full"
                  />
                  <div>
                    <div className="text-sm text-[#0B3563] font-semibold">
                      Office Location
                    </div>
                    <p>Deira City Center</p>
                    {/* <p className="text-[10px] text-gray-900">
                      Office 1207, Block–A, <br /> Centurion Star, Port Saeed,{" "}
                      <br /> Opp. Deira City Center, <br /> Near Flora Creek
                      Hotel, Deira, Dubai-U.A.E
                    </p> */}
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute bottom-2 flex justify-center items-center w-full">
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                Get Touch
                <div className="w-6 h-6 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                  <FaRegCircle size={20} />
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <div className="relative w-auto bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
              <div className="flex items-center">
                <div className="p-2 rounded-full">
                  <FaMapMarkerAlt className="text-gray-600 w-8 h-8" />
                </div>
                <h2 className="text-xs text-gray-600 ml-2">
                  <span className="text-base font-medium">Los Angeles, CA</span>{" "}
                  <br />
                  Lorem ipsum dolor sit amet
                </h2>
              </div>

              <p className="text-base font-bold text-[#475569] text-center">
                USA, USA
              </p>
              <div className="absolute bottom-2 flex justify-center items-center w-full">
                <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                  Get Touch
                  <div className="w-6 h-6 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                    <FaRegCircle size={20} />
                  </div>
                </button>
              </div>
            </div>
            <div className="relative w-auto bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
              <div className="flex items-center">
                <div className="p-2 rounded-full">
                  <FaMapMarkerAlt className="text-gray-600 w-8 h-8" />
                </div>
                <h2 className="text-xs text-gray-600 ml-2">
                  <span className="text-base font-medium">Georgia, GA</span>{" "}
                  <br />
                  Lorem ipsum dolor sit amet
                </h2>
              </div>

              <p className="text-base font-bold text-[#475569] text-center">
                USA, USA
              </p>
              <div className="absolute bottom-2 flex justify-center items-center w-full">
                <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                  Get Touch
                  <div className="w-6 h-6 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                    <FaRegCircle size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* নিচের ৩টি সমান কার্ড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-9">
          <div className="relative h-[150px] w-full bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
            <div className="flex items-center">
              <div className="p-2 rounded-full">
                <FaMapMarkerAlt className="text-gray-600 w-8 h-8" />
              </div>
              <h2 className="text-xs text-gray-600 ml-2">
                <span className="text-base font-medium">Texas, TX</span> <br />
                Lorem ipsum dolor sit amet consectetur,
              </h2>
            </div>

            <p className="text-base font-bold text-[#475569] text-center">
              USA, USA
            </p>
            <div className="absolute bottom-2 flex justify-center items-center w-full">
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                Get Touch
                <div className="w-6 h-6 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                  <FaRegCircle size={20} />
                </div>
              </button>
            </div>
          </div>
          <div className="relative h-[150px] w-full bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
            <div className="flex items-center">
              <div className="p-2 rounded-full">
                <FaMapMarkerAlt className="text-gray-600 w-8 h-8" />
              </div>
              <h2 className="text-xs text-gray-600 ml-2">
                <span className="text-base font-medium">Baltimore, BAL</span>{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur,
              </h2>
            </div>

            <p className="text-base font-bold text-[#475569] text-center">
              USA, USA
            </p>
            <div className="absolute bottom-2 flex justify-center items-center w-full">
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                Get Touch
                <div className="w-6 h-6 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                  <FaRegCircle size={20} />
                </div>
              </button>
            </div>
          </div>
          <div className="relative h-[150px] w-full bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]">
            <div className="flex items-center">
              <div className="p-2 rounded-full">
                <FaMapMarkerAlt className="text-gray-600 w-8 h-8" />
              </div>
              <h2 className="text-xs text-gray-600 ml-2">
                <span className="text-base font-medium">New Jersey, NJ</span>{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur,
              </h2>
            </div>

            <p className="text-base font-bold text-[#475569] text-center">
              USA, USA
            </p>
            <div className="absolute bottom-2 flex justify-center items-center w-full">
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                Get Touch
                <div className="w-6 h-6 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                  <FaRegCircle size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
