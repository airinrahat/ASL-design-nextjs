import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroContent from "./HeroContent";

const ServiceBanner = () => {
  return (
    <div>
      <div
        className="relative w-full h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/ZTLF5mR/Group-1.png)",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center lg:items-start lg:pl-52 items-center bg-black bg-opacity-40">
          <HeroContent />
          <hr className="w-4/5 border-white my-8 hidden lg:block" />
          <div className="flex items-center gap-4 mt-4">
            <FontAwesomeIcon
              icon={faChevronDown}
              size="1x"
              className="text-white"
            />
            <p className="text-white text-sm md:text-xl  font-bold">
              What we&apos;re doing for our customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
