"use client";

import { ReactTyped } from "react-typed";

const HeroContent = () => {
  return (
    <h1 className="text-white text-2xl mb-4 font-extrabold leading-[75px] sm:text-xl sm:leading-[50px] md:text-5xl md:leading-[65px]">
      <p className="lg:mb-4">Ariana shipping Line LLC -</p>
      <ReactTyped
        backSpeed={50}
        strings={["The Auto-Shipping Solution provider from USA to UAE"]}
        typeSpeed={140}
        loop
        style={{
          display: "inline-block",
          color: "#ffffff",
          marginLeft: "3px",
        }}
        className="text-lg sm:text-base md:text-xl lg:text-2xl xl:text-3xl"
      />
    </h1>
  );
};

export default HeroContent;
