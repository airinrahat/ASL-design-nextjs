import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import ChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import FAQ from "@/components/HomePage/FAQ";
import CallUs from "@/components/HomePage/CallUs";

const page = () => {
  return (
    <div className="bg-white text-black">
      <Banner />
      <AboutUs />
      <ChooseUs />
      <ContactUs />
      <FAQ />
      <CallUs />
    </div>
  );
};

export default page;
