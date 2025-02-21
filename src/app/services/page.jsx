import CallUs from "@/components/HomePage/CallUs";
import React from "react";
import FAQ from "@/components/HomePage/FAQ";
import BannerServices from "./BannerServices";
import Servicebg from "./Servicebg";
import SubmitMessage from "@/components/HomePage/SubmitMessage";
import OurService from "@/components/HomePage/ourServices/OurService";
// import OurService from "@/components/HomePage/OurService";

const page = () => {
  return (
    <div className="bg-white">
      <BannerServices />
      <OurService />

      <Servicebg />

      <SubmitMessage />
      <FAQ />
      <CallUs />
    </div>
  );
};

export default page;
