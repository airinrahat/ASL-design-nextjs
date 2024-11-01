import React from "react";
import DownloadBanner from "./DownloadBanner";
import FAQ from "@/components/HomePage/FAQ";

const page = () => {
  return (
    <div className="bg-white ">
      <DownloadBanner />
      <FAQ />
    </div>
  );
};

export default page;
