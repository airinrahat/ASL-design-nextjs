import React from "react";

import FAQ from "./FAQ";
import CallUs from "./CallUs";
import SubmitMessage from "./SubmitMessage";
// import ServiceBanner from "./ServiceBanner";
import Barnch from "./Barnch";
import Review from "./Review";
import Partner from "@/components/HomePage/partner/Partner";
import OurService from "./ourServices/OurService";
import Certified from "./certififd/Certified";
// import SubmitFeedback from "./SubmitFeedback";
import ScrollUp from "./scroll/ScrollUp";
import Banner from "./Banner";
import FeedForm from "./FeedForm";
// import Slider from "./slider/Slider";

const Homepage = () => {
  return (
    <div className="bg-white ">
      {/* <ServiceBanner /> */}
      <Banner />
      {/* <Slider /> */}
      <OurService />
      <SubmitMessage />
      <Partner />
      <Certified />
      <Barnch />
      <Review />

      {/* <SubmitFeedback /> */}
      <FeedForm />

      <FAQ />
      <CallUs />
      <ScrollUp />
    </div>
  );
};

export default Homepage;
