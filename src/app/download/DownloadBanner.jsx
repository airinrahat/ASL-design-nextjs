import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import download from "../../../public/app download section.png";
import downIcon from "../../../public/attachment 1.png";

const DownloadBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/gV0jdtx/Group-1.png)",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white md:text-5xl font-bold text-4xl uppercase">
            Downloads
          </h1>
        </div>
      </div>
      <div>
        <Image
          src={download}
          alt="Form Image"
          className="w-full h-full object-cover"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>

      <div className="ml-32 mt-10 text-[#053C78]">
        <h2 className="text-3xl font-bold mb-8 my-4 uppercase ">Downloads</h2>
        <h4 className="underline text-2xl font-semibold">
          {" "}
          Download Your Quotations{" "}
        </h4>
        <p className="text-xl font-semibold">
          {" "}
          Need a quick copy of your shipping quote? Click below to download your
          personalized quotation document
          <br /> and keep track of your estimated shipping costs anytime.
        </p>
        <h4 className="underline text-2xl font-semibold mb-5 mt-10">
          {" "}
          Download Your Quotations{" "}
        </h4>
        <p className="text-xl font-semibold">
          <span>Shipping Guidelines</span> –
          <a className="ml-1">
            <span className=" font-semibold"> Download</span> our complete guide
            for packaging and shipping requirements.
          </a>
        </p>
        <p className="text-xl font-semibold">
          <span>Customs Documentation</span> –
          <a className="ml-1 ">
            Get necessary customs forms and documentation guides.
          </a>
        </p>
        <p className="text-xl font-semibold">
          <span>Rate Sheets</span> –
          <a className="ml-1">
            Access up-to-date rate sheets for our various shipping services.
          </a>
        </p>
        <p className="text-xl font-semibold">Manage Your Downloads</p>
        <p className="mt-5 mb-9 text-2xl font-bold">
          {" "}
          Log in to access your history and keep track of your documents in one
          place.
        </p>
      </div>

      <div className="flex justify-start items-center space-x-4 text-gray-600 lg:ml-32">
        <Image src={downIcon} alt="Ship icon" width={100} height={100} />
        <div>
          <p className="mt-2 text-3xl font-bold text-[#053C78] ml-2">
            Downloads
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
