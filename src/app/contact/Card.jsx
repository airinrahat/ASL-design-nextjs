import React from "react";
import { FaGlobeAmericas, FaMapMarkerAlt, FaRegCircle } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-28 my-10">
        {/* বড় কার্ড */}
        <div className="relative w-full h-auto bg-gray-200 rounded-2xl shadow-lg flex flex-col p-6">
          <div className="flex items-center justify-center my-4">
            <FaGlobeAmericas className="text-gray-600 w-10 h-10" />
            <h2 className="text-2xl font-bold text-gray-600 ml-3">IN TOUCH</h2>
          </div>

          {/* ৬টা ছোট কার্ড */}
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative h-[240px] w-full bg-gray-200 p-4 rounded-2xl shadow-lg border border-[#D1E9FF]"
              >
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-full">
                    <FaMapMarkerAlt className="text-gray-600 w-14 h-20" />
                  </div>
                  <h2 className="text-sm text-gray-600 ml-2">
                    <span className="text-lg font-medium">
                      State {index + 1}
                    </span>{" "}
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ab, cum?
                  </h2>
                </div>

                <p className="text-2xl font-bold text-[#475569] text-center">
                  USA, USA
                </p>
                <div className="absolute bottom-4 flex justify-center items-center w-full">
                  <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-400 transition flex gap-2 items-center">
                    Get Touch
                    <div className="w-8 h-8 bg-gray-200 text-gray-700 border border-[#1E3A8A] rounded-full flex justify-center items-center">
                      <FaRegCircle size={24} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
