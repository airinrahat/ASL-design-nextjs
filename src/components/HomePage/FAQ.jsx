/* eslint-disable @next/next/no-img-element */
"use client";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
// import faq from "../../../public/images/faq.png";
import chevronDown from "../../../public/images/chevron-down.svg";
import styles from "./styles.module.css";

const FAQ = () => {
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <Image
            className={styles.chevron}
            src={chevronDown}
            alt="Chevron Down"
            height={20}
            width={20}
          />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

  return (
    <div className="">
      <div className="bg-gray-100 pt-10 pb-20">
        <div className=" max-w-screen-xl mx-auto ">
          <div className=" justify-center items-center px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="-m-1 flex flex-wrap md:-m-2  ">
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-1/2 p-1 md:p-2">
                    <Image
                      height={200}
                      width={200}
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400 "
                      src="https://i.ibb.co/PwpjScn/bg3.png"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <Image
                      height={200}
                      width={200}
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                      src="https://i.ibb.co/TbbZ9Rr/contact.jpg"
                    />
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <Image
                      height={200}
                      width={200}
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                      src="https://i.ibb.co/HLwmDvfq/92ea30eb-19fc-43f7-b4c2-3721c8cf6694.jpg"
                    />
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <Image
                      height={200}
                      width={200}
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center shadow-2xl  hover:shadow-orange-400 "
                      src="https://i.ibb.co/Y3tM7LL/sssip.jpg"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <Image
                      height={200}
                      width={200}
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                      src="https://i.ibb.co/ZTLF5mR/Group-1.png"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <Image
                      height={200}
                      width={200}
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                      src="https://i.ibb.co/LzqsS9zD/ca89b58a-c8e9-4d9b-987b-7ad522604792.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-2">
                <p className="text-center font-medium text-[#1C3A5F] mb-2">
                  Still have questions ?
                </p>
                <h1 className="text-center text-3xl md:text-3xl font-extrabold mb-2  text-[#1C3A5F] uppercase">
                  {/* <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-center text-[#1C3A5F]"> */}
                  most commonly asked questions
                </h1>
              </div>
              <div className={styles.accordion}>
                <Accordion transition transitionTimeout={250}>
                  <AccordionItem
                    header={
                      <span className=" font-semibold ">
                        How does the car shipping process work?
                      </span>
                    }
                  >
                    The car shipping process begins with researching and
                    selecting a reputable shipping company that aligns with your
                    specific requirements. Once you’ve chosen a service
                    provider, you’ll request a quote, confirm the details, and
                    decide on the type of transport—such as open or enclosed
                    carriers—that best suits your needs.
                  </AccordionItem>

                  <AccordionItem
                    header={
                      <span className=" font-semibold ">
                        How much does it cost to ship a car?
                      </span>
                    }
                  >
                    The cost to ship a car can vary widely depending on several
                    factors, including the distance, the type of transport, the
                    size and weight of the vehicle, and whether you choose an
                    open or enclosed carrier. On average, shipping a car within
                    the same region can cost between $500 and $1,000, while
                    shipping across the country can range from $1,000 to $2,000
                    or more. For international shipping, costs can rise
                    significantly, often exceeding $3,000. Additionally,
                    expedited shipping, insurance, and other optional services
                    can increase the overall cost. To get an accurate quote,
                    it’s best to contact a few shipping companies and provide
                    specific details about your shipment.
                  </AccordionItem>

                  <AccordionItem
                    header={
                      <span className=" font-semibold ">
                        What is the difference between open and enclosed car
                        transport?
                      </span>
                    }
                  >
                    Open car transport is the more common and economical option.
                    Vehicles are shipped on an open-air trailer, usually with no
                    covering or protection. This method is less expensive
                    because it can accommodate more vehicles and is quicker.
                    However, the vehicle is exposed to the elements (like rain,
                    dust, and debris), which may lead to potential damage during
                    transport.
                  </AccordionItem>
                  <AccordionItem
                    header={
                      <span className=" font-semibold ">
                        Will my car be insured during transport?
                      </span>
                    }
                  >
                    Basic Coverage: Most auto transport companies provide basic
                    liability insurance, which covers damage to your car during
                    transit. This coverage is often included in the cost of
                    shipping, but it may not cover everything (e.g., cosmetic
                    damage or theft). Coverage Limits: The standard insurance
                    typically has a deductible, and the coverage amount may
                    vary. It’s important to ask the transport company about
                    their insurance policy to know the specifics (e.g., how much
                    coverage is provided and what is excluded).
                  </AccordionItem>
                  <AccordionItem
                    header={
                      <span className=" font-semibold ">
                        How long does it take to ship a car?
                      </span>
                    }
                  >
                    The time it takes to ship a car depends on several factors,
                    including the distance between the pickup and delivery
                    locations, the route, and the type of transport service
                    chosen. On average, car shipping can take anywhere from 1 to
                    2 weeks. Short distances (within the same state or nearby):
                    It may take around 1 to 3 days. Long distances
                    (cross-country): Shipping typically takes 7 to 10 days,
                    though it can sometimes take up to 14 days. Expedited
                    shipping: If you need faster delivery, expedited services
                    are available, but they usually come at an additional cost.
                  </AccordionItem>
                </Accordion>
              </div>

              {/* <Accordion variant="splitted" className="px-0">
                <AccordionItem
                  className="font-bold text-lg  text-gray-800 bg-white rounded-lg shadow-md outline-none border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  key="1"
                  aria-label="Accordion 1"
                  title="How does the car shipping process work?"
                >
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    The car shipping process begins with researching and
                    selecting a reputable shipping company that aligns with your
                    specific requirements. Once you’ve chosen a service
                    provider, you’ll request a quote, confirm the details, and
                    decide on the type of transport—such as open or enclosed
                    carriers—that best suits your needs.
                  </p>
                </AccordionItem>

                <AccordionItem
                  className="font-bold text-lg text-gray-800 bg-white 
                  rounded-lg shadow-md outline-none border border-gray-200
                   transition-all duration-300 hover:shadow-lg"
                  key="2"
                  aria-label="Accordion 2"
                  title="How much does it cost to ship a car?"
                >
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    The cost to ship a car can vary widely depending on several
                    factors, including the distance, the type of transport, the
                    size and weight of the vehicle, and whether you choose an
                    open or enclosed carrier. On average, shipping a car within
                    the same region can cost between $500 and $1,000, while
                    shipping across the country can range from $1,000 to $2,000
                    or more. For international shipping, costs can rise
                    significantly, often exceeding $3,000. Additionally,
                    expedited shipping, insurance, and other optional services
                    can increase the overall cost. To get an accurate quote,
                    it’s best to contact a few shipping companies and provide
                    specific details about your shipment.
                  </p>
                </AccordionItem>
                <AccordionItem
                  className="font-bold text-lg  text-gray-800 bg-white rounded-lg shadow-md outline-none border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  key="3"
                  aria-label="Accordion 3"
                  title="  What is the difference between open and enclosed car transport?"
                >
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    {" "}
                    Open car transport is the more common and economical option.
                    Vehicles are shipped on an open-air trailer, usually with no
                    covering or protection. This method is less expensive
                    because it can accommodate more vehicles and is quicker.
                    However, the vehicle is exposed to the elements (like rain,
                    dust, and debris), which may lead to potential damage during
                    transport.
                  </p>
                </AccordionItem>

                <AccordionItem
                  AccordionItem
                  className="font-bold text-lg text-gray-800 bg-white rounded-lg shadow-md outline-none border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  key="4"
                  aria-label="Accordion 4"
                  title=" How long does it take to ship a car?"
                >
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    {" "}
                    The time it takes to ship a car depends on several factors,
                    including the distance between the pickup and delivery
                    locations, the route, and the type of transport service
                    chosen. On average, car shipping can take anywhere from 1 to
                    2 weeks. Short distances (within the same state or nearby):
                    It may take around 1 to 3 days. Long distances
                    (cross-country): Shipping typically takes 7 to 10 days,
                    though it can sometimes take up to 14 days. Expedited
                    shipping: If you need faster delivery, expedited services
                    are available, but they usually come at an additional cost.
                  </p>
                </AccordionItem>
                <AccordionItem
                  AccordionItem
                  className="font-bold text-lg text-gray-800 bg-white rounded-lg shadow-md outline-none border border-gray-200 transition-all duration-300 hover:shadow-lg"
                  key="5"
                  aria-label="Accordion 5"
                  title="Will my car be insured during transport?"
                >
                  <p className="text-sm leading-relaxed text-gray-600 font-light">
                    {" "}
                    Basic Coverage: Most auto transport companies provide basic
                    liability insurance, which covers damage to your car during
                    transit. This coverage is often included in the cost of
                    shipping, but it may not cover everything (e.g., cosmetic
                    damage or theft). Coverage Limits: The standard insurance
                    typically has a deductible, and the coverage amount may
                    vary. It’s important to ask the transport company about
                    their insurance policy to know the specifics (e.g., how much
                    coverage is provided and what is excluded).
                  </p>
                </AccordionItem>
              </Accordion> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
