import Image from "next/image";
import icon1 from "../../../public/images/Frame 15.png";
import icon2 from "../../../public/images/Frame 17.png";
import icon3 from "../../../public/images/Frame 18.png";
import icon4 from "../../../public/images/Frame 19.png";

const Barnch = () => {
  return (
    <div className="mb-16">
      <section className="bg-[#131F37]  text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:pr-10 lg:pl-56 mt-10 text-center gap-8">
          {/* First Card */}
          <div className=" p-6 ">
            <div className="flex  items-center space-x-4">
              <Image
                src={icon1}
                alt="branch icon"
                width={90}
                height={90}
                className="object-cover"
              />
              <div>
                <div className="text-start font-bold text-5xl leading-[75px]">
                  50
                </div>
                <p className="text-start mt-2 font-semibold text-[26px] leading-[39px]">
                  BRANCHES
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className=" p-6 ">
            <div className="flex  items-center space-x-4">
              <Image
                src={icon2}
                alt="branch icon"
                width={90}
                height={90}
                className="object-cover"
              />
              <div className="text-start">
                <div className="font-bold text-5xl leading-[75px]">+500</div>
                <p className="mt-2 font-semibold text-[26px] leading-[39px]">
                  No of SHIPMENTS
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className=" p-6 ">
            <div className="flex  items-center space-x-4">
              <Image
                src={icon3}
                alt="branch icon"
                width={90}
                height={90}
                className="object-cover"
              />
              <div>
                <div className="font-bold text-start text-5xl leading-[75px]">
                  107k+
                </div>
                <p className="text-start mt-2 font-semibold text-[26px] leading-[39px] ">
                  Cars Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className=" p-6 ">
            <div className="flex  items-center space-x-4">
              <Image
                src={icon4}
                alt="branch icon"
                width={90}
                height={90}
                className="object-cover"
              />
              <div className="text-start">
                <div className="font-bold text-5xl leading-[75px]">900+</div>
                <p className="mt-2 font-semibold text-[26px] leading-[39px]">
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Barnch;
