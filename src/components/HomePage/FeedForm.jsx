import React from "react";

const FeedForm = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl  text-[#1C3A5F] font-extrabold  text-center mb-4">
          Customer Feedback
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-2 border rounded bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 border rounded bg-white"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            required
            className="w-full p-2 border rounded bg-white"
          />

          <select
            name="service"
            required
            className="w-full p-2 border rounded bg-white"
          >
            <option value="">Select Service</option>
            <option value="Towing">Towing</option>
            <option value="Shipping">Shipping</option>
            <option value="Clearance">Clearance</option>
          </select>

          <select
            name="experience"
            required
            className="w-full p-2 border rounded bg-white"
          >
            <option value="">Select Experience</option>
            <option value="Normal">Normal</option>
            <option value="Good">Good</option>
            <option value="Excellent">Excellent</option>
            <option value="Bad">Bad</option>
            <option value="Worst">Worst</option>
          </select>

          <textarea
            name="feedback"
            placeholder="Your Feedback"
            required
            className="w-full p-2 border rounded h-24 bg-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#1C3A5F] text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedForm;
