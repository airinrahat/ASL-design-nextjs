"use client";

import { ReactTyped } from "react-typed";

const HeroContent = () => {
  return (
    <h1 className="text-white text-2xl mb-4 font-extrabold leading-[75px]  md:text-6xl ">
      <p className="lg:mb-4">Full-service</p>
      <ReactTyped
        backSpeed={50}
        strings={[" International Freight", " United Arab Emirates Freight"]}
        typeSpeed={140}
        loop
        style={{
          display: "inline-block",
          color: "#ffffff",
          marginLeft: "3px",
          fontSize: "48px",
        }}
      />
    </h1>
  );
};

export default HeroContent;
