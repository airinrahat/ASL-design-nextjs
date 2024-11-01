import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { faShip } from "@fortawesome/free-solid-svg-icons";

const DownloadBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/Gp2zYRm/ship2.jpg)",
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
          src="/app.png"
          alt="Form Image"
          className="w-full h-full object-cover"
          layout="responsive"
          width={500}
          height={300}
        />
      </div>

      <div className="ml-14 text-gray-600">
        <h2 className="text-2xl font-bold  my-4 ">Downloads</h2>
        <h4 className="underline text-xl"> Download Your Quotations </h4>
        <p className="text-xl">
          {" "}
          Need a quick copy of your shipping quote? Click below to download your
          personalized quotation document
          <br /> and keep track of your estimated shipping costs anytime.
        </p>
        <h4 className="underline text-xl mt-5 mb-10">
          {" "}
          Download Your Quotations{" "}
        </h4>
        <p className="text-xl">
          <span>Shipping Guidelines</span> –
          <a className="ml-1">
            <span className="underline"> Download</span> our complete guide for
            packaging and shipping requirements.
          </a>
        </p>
        <p className="text-xl">
          <span>Customs Documentation</span> –
          <a className="ml-1">
            Get necessary customs forms and documentation guides.
          </a>
        </p>
        <p className="text-xl">
          <span>Rate Sheets</span> –
          <a className="ml-1">
            Access up-to-date rate sheets for our various shipping services.
          </a>
        </p>
        <p className="text-xl">Manage Your Downloads</p>
        <p className="mt-5 mb-9 text-xl">
          {" "}
          Log in to access your history and keep track of your documents in one
          place.
        </p>
      </div>

      <div
        className="flex justify-start items-center space-x-4 text-gray-600 lg:ml-32 
      "
      >
        <FontAwesomeIcon icon={faShip} className="text-6xl " />
        <div>
          <p className=" mt-2 text-xl ml-5">Downloads</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
