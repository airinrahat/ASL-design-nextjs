import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHatCowboySide,
  faShip,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Barnch = () => {
  return (
    <div>
      <section className="bg-[#131F37] text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 text-center">
          <div className="flex justify-center items-center space-x-4">
            <FontAwesomeIcon
              icon={faHatCowboySide}
              className="text-4xl text-blue-400"
            />
            <div>
              <div className="text-4xl font-bold">50</div>
              <p className="text-blue-400 mt-2">BRANCHES</p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <FontAwesomeIcon icon={faShip} className="text-4xl text-blue-400" />
            <div>
              <div className="text-4xl font-bold">+500</div>
              <p className="text-blue-400 mt-2">No of SHIPMENTS</p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-10">
            <FontAwesomeIcon
              icon={faTruck}
              className="text-4xl text-blue-400"
            />
            <div>
              <div className="text-4xl font-bold">+95K</div>
              <p className="text-blue-400 mt-2">No of VEHICLES DELIVERED</p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-10">
            <FontAwesomeIcon
              icon={faHatCowboySide}
              className="text-4xl text-blue-400"
            />
            <div>
              <div className="text-4xl font-bold">452</div>
              <p className="text-blue-400 mt-2 uppercase">
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
