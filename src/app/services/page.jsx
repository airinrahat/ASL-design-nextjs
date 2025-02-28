import CallUs from "@/components/HomePage/CallUs";
import React from "react";
import FAQ from "@/components/HomePage/FAQ";
import BannerServices from "./BannerServices";
import Servicebg from "./Servicebg";
import SubmitMessage from "@/components/HomePage/SubmitMessage";
import OurService from "@/components/HomePage/ourServices/OurService";
import Service from "@/components/HomePage/Service";

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
