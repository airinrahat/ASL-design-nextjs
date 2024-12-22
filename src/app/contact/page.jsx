import React from "react";
import ContactBanner from "./ContactBanner";
import OurAddress from "./OurAddress";
import FAQ from "@/components/HomePage/FAQ";
import CallUs from "@/components/HomePage/CallUs";
import ContactUs from "./ContactUs";

const page = () => {
  return (
    <div className="bg-white ">
      <ContactBanner />
      <ContactUs />
      <OurAddress />
      <FAQ />
      <CallUs />
    </div>
  );
};

export default page;
