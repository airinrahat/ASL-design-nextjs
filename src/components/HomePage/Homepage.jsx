import CallUs from "./CallUs";
import FAQ from "./FAQ";
import SubmitMessage from "./SubmitMessage";
import Partner from "@/components/HomePage/partner/Partner";
import Barnch from "./Barnch";
import Certified from "./certififd/Certified";

import Review from "./Review";
import FeedForm from "./FeedForm";
import ScrollUp from "./scroll/ScrollUp";
import Slider from "./slider/Slider";
import Service from "./Service";

const Homepage = () => {
  return (
    <div className="bg-white ">
      <Slider />
      <Service />

      <SubmitMessage />
      <Partner />
      <Certified />
      <Barnch />
      <Review />

      <FeedForm />

      <FAQ />
      <CallUs />
      <ScrollUp />
    </div>
  );
};

export default Homepage;
