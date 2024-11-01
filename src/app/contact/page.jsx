import React from "react";
import ContactBanner from "./ContactBanner";
import OurAddress from "./OurAddress";
import FAQ from "@/components/HomePage/FAQ";

const page = () => {
  return (
    <div className="bg-white ">
      <ContactBanner />
      <OurAddress />
      <FAQ />
    </div>
  );
};

export default page;
