"use client";
import React, { useState } from "react";

const SubmitFeedback = () => {
  const [activeField, setActiveField] = useState(null);

  const handleCardClick = (field) => {
    setActiveField(field);
  };
  return (
    <section className="bg-gray-100 lg:mx-40 my-10 py-6">
      {/* Conditional Input Fields */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {/* Card One - Name */}
        <div
          className="py-4 text-center font-bold text-lg text-gray-500 cursor-pointer hover:bg-gray-200 rounded-lg"
          onClick={() => handleCardClick("name")}
        >
          Name...
        </div>

        {/* Card Two - Services */}
        <div
          className="py-4 text-center font-bold text-lg text-gray-500 cursor-pointer hover:bg-gray-200 rounded-lg"
          onClick={() => handleCardClick("services")}
        >
          Services...
        </div>

        {/* Card Three - Feedback */}
        <div
          className="py-4 text-center font-bold text-lg text-gray-500 cursor-pointer hover:bg-gray-200 rounded-lg"
          onClick={() => handleCardClick("feedback")}
        >
          Feedback...
        </div>

        {/* Card Four - Submit Feedback */}
        <div
          className="bg-[#131F37] text-center font-bold text-lg text-white text-opacity-90 py-4 cursor-pointer hover:bg-[#0f2a3a] rounded-lg"
          onClick={() => handleCardClick("submit")}
        >
          Submit Feedback
        </div>
      </div>
    </section>
  );
};

export default SubmitFeedback;
