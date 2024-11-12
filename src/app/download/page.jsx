import React from "react";
import DownloadBanner from "./DownloadBanner";
import FAQ from "@/components/HomePage/FAQ";
import CallUs from "@/components/HomePage/CallUs";

const page = () => {
  return (
    <div className="bg-white ">
      <DownloadBanner />
      <FAQ />
      <CallUs />
    </div>
  );
};

export default page;
