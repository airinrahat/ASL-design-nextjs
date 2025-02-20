"use client";
import React, { useState } from "react";

const SubmitFeedback = () => {
  const [activeField, setActiveField] = useState("name");

  const handleCardClick = (field) => {
    setActiveField(field);
  };
  //todo service e drop down
  return (
    <div>
      <section className="bg-gray-100 lg:mx-40 my-10 py-6 lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          <div
            className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
              activeField === "name"
                ? "bg-[#131F37] text-white"
                : "text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleCardClick("name")}
          >
            Name...
          </div>

          <div
            className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
              activeField === "services"
                ? "bg-[#131F37] text-white"
                : "text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleCardClick("services")}
          >
            Services...
          </div>

          <div
            className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
              activeField === "feedback"
                ? "bg-[#131F37] text-white"
                : "text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleCardClick("feedback")}
          >
            Feedback...
          </div>

          <div
            className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
              activeField === "submit"
                ? "bg-[#131F37] text-white"
                : "text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleCardClick("submit")}
          >
            Submit Feedback
          </div>
        </div>

        <div className="mt-6">
          {activeField === "name" && (
            <div className="text-center">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-1/2 p-3 border border-gray-300 bg-white rounded-md text-lg mx-auto"
              />
            </div>
          )}

          {activeField === "services" && (
            <div className="text-center">
              <input
                type="text"
                placeholder="Enter your service"
                className="w-1/2 p-3 border border-gray-300 bg-white rounded-md text-lg mx-auto"
              />
            </div>
          )}

          {activeField === "feedback" && (
            <div className="text-center">
              <input
                type="text"
                placeholder="Enter your feedback"
                className="w-1/2 p-3 border border-gray-300 bg-white rounded-md text-lg mx-auto"
              />
            </div>
          )}

          {activeField === "submit" && (
            <div className="text-center">
              <button className="w-1/2 p-3 bg-blue-500 text-white rounded-md text-lg mx-auto">
                Submit Feedback
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="mb-32 hidden lg:block">
        <div className="max-w-screen-xl mx-auto px-4 rounded-md my-10 py-6">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mx-3">
            {/* Card One - Name */}
            <div className="relative bg-gray-100">
              <div
                className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
                  activeField === "name"
                    ? "bg-[#131F37] text-white"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => handleCardClick("name")}
              >
                Name...
              </div>
              {activeField === "name" && (
                <div className="absolute top-full left-0 right-0 mt-3 pb-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-[#131F37] bg-white rounded-md text-lg"
                  />
                </div>
              )}
            </div>

            {/* Card Two - Services */}
            <div className="relative bg-gray-100">
              <div
                className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
                  activeField === "services"
                    ? "bg-[#131F37] text-white"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => handleCardClick("services")}
              >
                Services...
              </div>
              {activeField === "services" && (
                <div className="absolute top-full left-0 right-0 mt-3 pb-4">
                  <input
                    type="text"
                    placeholder="Enter your service"
                    className="w-full p-3 border border-[#131F37] bg-white rounded-md text-lg"
                  />
                </div>
              )}
            </div>

            {/* Card Three - Feedback */}
            <div className="relative bg-gray-100">
              <div
                className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
                  activeField === "feedback"
                    ? "bg-[#131F37] text-white"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => handleCardClick("feedback")}
              >
                Feedback...
              </div>
              {activeField === "feedback" && (
                <div className="absolute top-full left-0 right-0 mt-3 pb-4">
                  <input
                    type="text"
                    placeholder="Enter your feedback"
                    className="w-full p-3 border border-[#131F37] bg-white rounded-md text-lg"
                  />
                </div>
              )}
            </div>

            {/* Card Four - Submit Feedback */}
            <div className="relative bg-gray-100">
              <div
                className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
                  activeField === "submit"
                    ? "bg-[#131F37] text-white"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => handleCardClick("submit")}
              >
                Submit Feedback
              </div>
              {activeField === "submit" && (
                <div className="absolute top-full left-0 right-0 mt-3 pb-4">
                  <button className="w-full p-3 bg-blue-500 text-white rounded-md text-lg">
                    Submit Feedback
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitFeedback;
