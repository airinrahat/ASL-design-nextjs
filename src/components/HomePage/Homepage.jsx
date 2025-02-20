import CallUs from "./CallUs";
import FAQ from "./FAQ";
import SubmitMessage from "./SubmitMessage";
// import ServiceBanner from "./ServiceBanner";
import Partner from "@/components/HomePage/partner/Partner";
import Barnch from "./Barnch";
import Certified from "./certififd/Certified";
import OurService from "./ourServices/OurService";
import Review from "./Review";
// import SubmitFeedback from "./SubmitFeedback";
import Banner from "./Banner";
import FeedForm from "./FeedForm";
import ScrollUp from "./scroll/ScrollUp";
// import Slider from "./slider/Slider";

const Homepage = () => {
  return (
    <div className="bg-white ">
      {/* <ServiceBanner /> */}
      <Banner />
      {/* <NewBanner /> */}
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
