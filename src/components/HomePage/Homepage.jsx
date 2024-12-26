import React from "react";

import FAQ from "./FAQ";
import CallUs from "./CallUs";
import SubmitMessage from "./SubmitMessage";
import ServiceBanner from "./ServiceBanner";
import Barnch from "./Barnch";
import Review from "./Review";
import Partner from "@/components/HomePage/partner/Partner";
import OurService from "./ourServices/OurService";
// import OurService from "./OurService";
import Certified from "./certififd/Certified";
import SubmitFeedback from "./SubmitFeedback";

const Homepage = () => {
  return (
    <div className="bg-white">
      <ServiceBanner />
      <OurService />
      {/* <OurService /> */}
      <SubmitMessage />
      <Partner />

      <Certified />
      <Barnch />
      <Review />
      <SubmitFeedback />

      <FAQ />
      <CallUs />
    </div>
  );
};

export default Homepage;
