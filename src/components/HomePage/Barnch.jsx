import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHatCowboySide,
  faShip,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";
import icon1 from "../../../public/Frame 15.png";
import icon2 from "../../../public/Frame 17.png";
import icon3 from "../../../public/Frame 18.png";
import icon4 from "../../../public/Frame 19.png";

const Barnch = () => {
  return (
    <div>
      <section className="bg-[#131F37] text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-12 mt-10 text-center">
          <div className="flex justify-center items-center space-x-4">
            <Image
              src={icon1}
              alt="branch icon"
              width={90}
              height={90}
              className="object-cover"
            />
            <div>
              <div className="font-bold text-5xl leading-[75px]">50</div>
              <p className=" mt-2 font-semibold text-[26px] leading-[39px]">
                BRANCHES
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 ">
            <Image
              src={icon2}
              alt="branch icon"
              width={90}
              height={90}
              className="object-cover"
            />
            <div>
              <div className="font-bold text-5xl leading-[75px]">+500</div>{" "}
              <p className=" mt-2 font-semibold text-[26px] leading-[39px]">
                No of SHIPMENTS
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-16">
            <Image
              src={icon3}
              alt="branch icon"
              width={90}
              height={90}
              className="object-cover"
            />
            <div>
              <div className="font-bold text-5xl leading-[75px]">+95K</div>
              <p className=" mt-2 font-semibold text-[26px] leading-[39px]">
                No of VEHICLES DELIVERED
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-16">
            <Image
              src={icon4}
              alt="branch icon"
              width={90}
              height={90}
              className="object-cover"
            />
            <div>
              <div className="font-bold text-5xl leading-[75px]">452</div>
              <p className=" mt-2 font-semibold text-[26px] leading-[39px]">
                Satisfied Customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Barnch;
