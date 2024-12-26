"use client";
import React, { useState } from "react";

const SubmitFeedback = () => {
  const [activeField, setActiveField] = useState("name");

  const handleCardClick = (field) => {
    setActiveField(field);
  };
  return (
    // <section className="bg-gray-100 lg:mx-40 my-10 py-6">
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
    //     <div
    //       className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
    //         activeField === "name"
    //           ? "bg-[#131F37] text-white"
    //           : "text-gray-500 hover:bg-gray-200"
    //       }`}
    //       onClick={() => handleCardClick("name")}
    //     >
    //       Name...
    //     </div>

    //     <div
    //       className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
    //         activeField === "services"
    //           ? "bg-[#131F37] text-white"
    //           : "text-gray-500 hover:bg-gray-200"
    //       }`}
    //       onClick={() => handleCardClick("services")}
    //     >
    //       Services...
    //     </div>

    //     <div
    //       className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
    //         activeField === "feedback"
    //           ? "bg-[#131F37] text-white"
    //           : "text-gray-500 hover:bg-gray-200"
    //       }`}
    //       onClick={() => handleCardClick("feedback")}
    //     >
    //       Feedback...
    //     </div>

    //     <div
    //       className={`py-4 text-center font-bold text-lg cursor-pointer rounded-lg ${
    //         activeField === "submit"
    //           ? "bg-[#131F37] text-white"
    //           : "text-gray-500 hover:bg-gray-200"
    //       }`}
    //       onClick={() => handleCardClick("submit")}
    //     >
    //       Submit Feedback
    //     </div>
    //   </div>

    //   <div className="mt-6">
    //     {activeField === "name" && (
    //       <div className="text-center">
    //         <input
    //           type="text"
    //           placeholder="Enter your name"
    //           className="w-1/2 p-3 border border-gray-300 bg-white rounded-md text-lg mx-auto"
    //         />
    //       </div>
    //     )}

    //     {activeField === "services" && (
    //       <div className="text-center">
    //         <input
    //           type="text"
    //           placeholder="Enter your service"
    //           className="w-1/2 p-3 border border-gray-300 bg-white rounded-md text-lg mx-auto"
    //         />
    //       </div>
    //     )}

    //     {activeField === "feedback" && (
    //       <div className="text-center">
    //         <input
    //           type="text"
    //           placeholder="Enter your feedback"
    //           className="w-1/2 p-3 border border-gray-300 bg-white rounded-md text-lg mx-auto"
    //         />
    //       </div>
    //     )}

    //     {activeField === "submit" && (
    //       <div className="text-center">
    //         <button className="w-1/2 p-3 bg-blue-500 text-white rounded-md text-lg mx-auto">
    //           Submit Feedback
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </section>

    <section className="bg-gray-100 lg:mx-40 my-10 py-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mx-3">
        {/* Card One - Name */}
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

        {/* Card Two - Services */}
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

        {/* Card Three - Feedback */}
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

        {/* Card Four - Submit Feedback */}
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

      {/* Conditional Input Fields */}
      <div className="mt-6">
        {activeField === "name" && (
          <div className="text-center">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-1/2 p-3 border border-[#131F37] bg-white rounded-md text-lg mx-auto"
            />
          </div>
        )}

        {activeField === "services" && (
          <div className="text-center">
            <input
              type="text"
              placeholder="Enter your service"
              className="w-1/2 p-3 border border-[#131F37] bg-white rounded-md text-lg mx-auto"
            />
          </div>
        )}

        {activeField === "feedback" && (
          <div className="text-center">
            <input
              type="text"
              placeholder="Enter your feedback"
              className="w-1/2 p-3 border border-[#131F37] bg-white rounded-md text-lg mx-auto"
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
  );
};

export default SubmitFeedback;
