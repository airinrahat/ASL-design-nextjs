import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="py-8 lg:pl-[17rem] px-8 text-black">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <ul className="mt-4 list-disc">
          <li className="mb-2 underline">
            How does the car shipping process work?
          </li>
          <li className="mb-2 underline">
            How much does it cost to ship a car?
          </li>
          <li className="mb-2 underline">
            What is the difference between open and enclosed car transport?
          </li>
          <li className="mb-2 underline">
            How long does it take to ship a car?
          </li>
          <li className="mb-2 underline">
            Will my car be insured during transport?
          </li>
          <li className="mb-2 underline">Can I track my shipment?</li>
        </ul>
      </section>
    </div>
  );
};

export default FAQ;
