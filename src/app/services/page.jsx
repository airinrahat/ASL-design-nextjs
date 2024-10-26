import CallUs from "@/components/HomePage/CallUs";
import React from "react";
import SubmitMessage from "./SubmitMessage";
import FAQ from "@/components/HomePage/FAQ";
import BannerServices from "./BannerServices";
import Servicebg from "./Servicebg";
import Service from "./Service";

const page = () => {
  return (
    <div className="bg-white">
      <BannerServices />
      <Service />
      <Servicebg />
      <SubmitMessage />
      <FAQ />
      <CallUs />
    </div>
  );
};

export default page;
