import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import user1 from "../../../public/person=1.png";
import user2 from "../../../public/person=2.png";
import user3 from "../../../public/person=3.png";
import user4 from "../../../public/person=4.png";

const Review = () => {
  return (
    <div>
      <h3 className="text-gray-600 text-3xl font-bold mt-5 lg:ml-[170px]">
        Client Feedback / Reviews
      </h3>
      <section className="bg-gray-100 py-10 lg:mx-40 lg:px-12 my-10 rounded-md">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* card one  */}
          <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
            <div className="flex justify-center mb-4">
              <FcGoogle className="text-4xl" />
            </div>

            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-center text-gray-700 text-sm mb-14">
              Excellent service and delivery of bulk SMS in Bangalore. Must
              recommended.service and delivery
            </p>

            <div className="flex flex-col items-center">
              <Image
                src={user1}
                alt="User"
                className="w-14 h-14 rounded-full mb-2 border"
              />
              <p className="font-semibold text-gray-800">Sonu Dadhich</p>
              <p className="text-sm text-gray-500">
                @SonuDadhich · 17 days ago
              </p>
            </div>
          </div>
          {/* card two  */}
          <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
            <div className="flex justify-center mb-4">
              <FcGoogle className="text-4xl" />
            </div>

            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-center text-gray-700 text-sm mb-14">
              Thank you for support and great service. Highly recommended. Best
              and cheapest bulk SMS...
            </p>

            <div className="flex flex-col items-center">
              <Image
                src={user2}
                alt="User"
                className="w-14 h-14 rounded-full mb-2 border"
              />
              <p className="font-semibold text-gray-800">Priya Sharma</p>
              <p className="text-sm text-gray-500">
                @Priya Sharma . 23 days ago
              </p>
            </div>
          </div>
          {/* card three  */}
          <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
            <div className="flex justify-center mb-4">
              <FcGoogle className="text-4xl" />
            </div>

            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-center text-gray-700 text-sm mb-14">
              Best support and service. Best bulk SMS company in Dubai. Thank
              you team of GetItSMS
            </p>

            <div className="flex flex-col items-center">
              <Image
                src={user3}
                alt="User"
                className="w-14 h-14 rounded-full mb-2 border"
              />
              <p className="font-semibold text-gray-800">Vkumar kumar</p>
              <p className="text-sm text-gray-500">
                @vkumar kumar . 23 days ago
              </p>
            </div>
          </div>{" "}
          {/* card four  */}
          <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
            <div className="flex justify-center mb-4">
              <FcGoogle className="text-4xl" />
            </div>

            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-center text-gray-700 text-sm mb-14">
              Thanks a lot GetItSMS for providing me the best service providing
              me provider in ...............
            </p>

            <div className="flex flex-col items-center">
              <Image
                src={user4}
                alt="User"
                className="w-14 h-14 rounded-full mb-2 border"
              />
              <p className="font-semibold text-gray-800">lohit sharma</p>
              <p className="text-sm text-gray-500">
                @lohit sharma . 24 days ago
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100  lg:mx-40 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {/* card one  */}
          <div className="py-1 w-80 text-center font-bold text-xl text-gray-500">
            Name...
          </div>{" "}
          {/* card two  */}
          <div className="py-1 w-80  text-center font-bold text-xl text-gray-500">
            {" "}
            Services...
          </div>
          {/* card three  */}
          <div className="py-1 w-80  text-center font-bold text-xl text-gray-500">
            {" "}
            Feedback...
          </div>{" "}
          {/* card four  */}
          <div className="bg-[#131F37] text-center font-bold text-xl text-white text-opacity-90 py-1">
            Submit Feedback
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
