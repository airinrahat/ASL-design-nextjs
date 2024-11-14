import React from "react";

import FAQ from "./FAQ";
import CallUs from "./CallUs";
import OurService from "./OurService";
import SubmitMessage from "./SubmitMessage";
import ServiceBanner from "./ServiceBanner";
import Barnch from "./Barnch";
import OurPartner from "./OurPartner";
import Review from "./Review";
// import Partner from "./Partner";

const Homepage = () => {
  return (
    <div className="bg-white">
      <ServiceBanner />

      <OurService />
      <SubmitMessage />
      <OurPartner />
      <Barnch />
      <Review />
      <OurPartner />
      {/* <Partner /> */}
      <FAQ />
      <CallUs />
    </div>
  );
};

export default Homepage;
