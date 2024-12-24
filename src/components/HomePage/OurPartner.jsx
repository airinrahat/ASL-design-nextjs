import Image from "next/image";
import logo1 from "../../../public/images/logo2.png";
import logo2 from "../../../public/images/logo3.png";
import logo3 from "../../../public/images/evergreen.jpg";
import logo4 from "../../../public/images/yangmine.png";
import logo5 from "../../../public/images/hmm.png";
import logo6 from "../../../public/images/cma2.png";

const OurPartner = () => {
  return (
    <div className="my-16">
      <h3 className="text-gray-600 text-3xl font-bold mt-5 lg:ml-[205px]">
        Our Trusted Partners
      </h3>
      <div className="flex justify-center py-5">
        <div className="bg-[#F7F7F7] shadow-lg w-11/12 md:w-3/4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 ml-8 justify-items-center">
            <Image
              src={logo1}
              alt="Logo 1"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo2}
              alt="Logo 2"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo3}
              alt="Logo 3"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo4}
              alt="Logo 4"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo5}
              alt="Logo 5"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
            <Image
              src={logo6}
              alt="Logo 5"
              className="w-40 h-16 md:w-60 md:h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
