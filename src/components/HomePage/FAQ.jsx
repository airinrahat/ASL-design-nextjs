import Image from "next/image";
import React from "react";
import faq from "../../../public/images/faq.png";

const FAQ = () => {
  return (
    <div>
      <section className="py-16 lg:pl-[17rem] px-8 text-black ">
        <Image src={faq} alt="FAQ icon" width={100} height={100} />
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
