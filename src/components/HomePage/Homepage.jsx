import React from "react";

import FAQ from "./FAQ";
import CallUs from "./CallUs";
import SubmitMessage from "./SubmitMessage";
import ServiceBanner from "./ServiceBanner";
import Barnch from "./Barnch";
// import OurPartner from "./OurPartner";
import Review from "./Review";
import Partner from "@/components/HomePage/partner/Partner";
import OurService from "./ourServices/OurService";
// import OurService from "./OurService";
// import Certified from "./certififd/Certified";

const Homepage = () => {
  return (
    <div className="bg-white">
      <ServiceBanner />
      <OurService />
      {/* <OurService /> */}
      <SubmitMessage />
      <Partner />
      {/* <OurPartner /> */}
      {/* <Certified /> */}
      <Barnch />
      <Review />

      <FAQ />
      <CallUs />
    </div>
  );
};

export default Homepage;
