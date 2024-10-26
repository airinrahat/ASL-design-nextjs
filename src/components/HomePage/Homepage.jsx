import React from "react";

import FAQ from "./FAQ";
import CallUs from "./CallUs";
import OurService from "./OurService";
import SubmitMessage from "./SubmitMessage";
import ServiceBanner from "./ServiceBanner";
import Barnch from "./Barnch";

const Homepage = () => {
  return (
    <div className="bg-white">
      <ServiceBanner />

      <OurService />
      <SubmitMessage />
      <Barnch />

      <FAQ />
      <CallUs />
    </div>
  );
};

export default Homepage;
