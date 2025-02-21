// import Image from "next/image";
// import { FcGoogle } from "react-icons/fc";
// import user1 from "../../../public/images/person=1.png";
// import user2 from "../../../public/images/person=2.png";
// import user3 from "../../../public/images/person=3.png";
// import user4 from "../../../public/images/person=4.png";

// const Review = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <h3 className=" text-3xl  text-[#1C3A5F] my-5  md:text-4xl font-extrabold mb-5 text-center   mt-5 ">
//         Client Feedback / Reviews
//       </h3>
//       <section className="bg-gray-100 py-10  my-10 rounded-md">
//         <div className="lg:px-4 md:px-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* card one  */}
//           <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
//             <div className="flex justify-center mb-4">
//               <FcGoogle className="text-4xl" />
//             </div>

//             <div className="flex justify-center mb-4">
//               {[...Array(5)].map((_, index) => (
//                 <span key={index} className="text-yellow-500 text-xl">
//                   ★
//                 </span>
//               ))}
//             </div>

//             <p className="text-center text-gray-700 text-sm mb-14">
//               The team at Ariana Shipping made the process so smooth. My car
//               arrived on time and in perfect condition!
//             </p>

//             <div className="flex flex-col items-center">
//               <Image
//                 src={user1}
//                 alt="User"
//                 className="w-14 h-14 rounded-full mb-2 border"
//               />
//               <p className="font-semibold text-gray-800">Sonu Dadhich</p>
//               <p className="text-sm text-gray-500">
//                 @SonuDadhich · 17 days ago
//               </p>
//             </div>
//           </div>
//           {/* card two  */}
//           <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
//             <div className="flex justify-center mb-4">
//               <FcGoogle className="text-4xl" />
//             </div>

//             <div className="flex justify-center mb-4">
//               {[...Array(5)].map((_, index) => (
//                 <span key={index} className="text-yellow-500 text-xl">
//                   ★
//                 </span>
//               ))}
//             </div>

//             <p className="text-center text-gray-700 text-sm mb-14">
//               I’ve shipped multiple cars with them, and they’ve never
//               disappointed
//             </p>

//             <div className="flex flex-col items-center">
//               <Image
//                 src={user2}
//                 alt="User"
//                 className="w-14 h-14 rounded-full mb-2 border"
//               />
//               <p className="font-semibold text-gray-800">Priya Sharma</p>
//               <p className="text-sm text-gray-500">
//                 @Priya Sharma . 23 days ago
//               </p>
//             </div>
//           </div>
//           {/* card three  */}
//           <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
//             <div className="flex justify-center mb-4">
//               <FcGoogle className="text-4xl" />
//             </div>

//             <div className="flex justify-center mb-4">
//               {[...Array(5)].map((_, index) => (
//                 <span key={index} className="text-yellow-500 text-xl">
//                   ★
//                 </span>
//               ))}
//             </div>

//             <p className="text-center text-gray-700 text-sm mb-14">
//               Great customer support and reliable service. Highly recommended!
//             </p>

//             <div className="flex flex-col items-center">
//               <Image
//                 src={user3}
//                 alt="User"
//                 className="w-14 h-14 rounded-full mb-2 border"
//               />
//               <p className="font-semibold text-gray-800">Vkumar kumar</p>
//               <p className="text-sm text-gray-500">
//                 @vkumar kumar . 23 days ago
//               </p>
//             </div>
//           </div>{" "}
//           {/* card four  */}
//           <div className="bg-white border rounded-xl shadow-lg p-6 w-full">
//             <div className="flex justify-center mb-4">
//               <FcGoogle className="text-4xl" />
//             </div>

//             <div className="flex justify-center mb-4">
//               {[...Array(5)].map((_, index) => (
//                 <span key={index} className="text-yellow-500 text-xl">
//                   ★
//                 </span>
//               ))}
//             </div>

//             <p className="text-center text-gray-700 text-sm mb-14">
//               Thanks a lot GetItSMS for providing me the best service providing
//               me provider in ...............
//             </p>

//             <div className="flex flex-col items-center">
//               <Image
//                 src={user4}
//                 alt="User"
//                 className="w-14 h-14 rounded-full mb-2 border"
//               />
//               <p className="font-semibold text-gray-800">lohit sharma</p>
//               <p className="text-sm text-gray-500">
//                 @lohit sharma . 24 days ago
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Review;
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import user1 from "../../../public/images/person=1.png";
import user2 from "../../../public/images/person=2.png";
import user3 from "../../../public/images/person=3.png";
import user4 from "../../../public/images/person=4.png";

const testimonials = [
  {
    name: "Sonu Dadhich",
    username: "@SonuDadhich · 17 days ago",
    review:
      "The team at Ariana Shipping made the process so smooth. My car arrived on time and in perfect condition!",
    image: user1,
  },
  {
    name: "Priya Sharma",
    username: "@Priya Sharma . 23 days ago",
    review:
      "I’ve shipped multiple cars with them, and they’ve never disappointed.",
    image: user2,
  },
  {
    name: "Vkumar kumar",
    username: "@vkumar kumar . 23 days ago",
    review: "Great customer support and reliable service. Highly recommended!",
    image: user3,
  },
  {
    name: "Lohit Sharma",
    username: "@lohit sharma . 24 days ago",
    review: "Thanks a lot GetItSMS for providing me the best service provider.",
    image: user4,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="mb-14">
      <section className="  max-w-screen-xl mx-auto ">
        <h3 className=" text-3xl  text-[#1C3A5F] my-5  md:text-4xl font-extrabold mb-5 text-center   mt-5 ">
          Client Feedback / Reviews
        </h3>
        <div className="  ">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
            className="pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="p-4">
                <div className=" border rounded-xl shadow-lg p-6 w-full">
                  <div className="flex justify-center mb-4">
                    <FcGoogle className="text-4xl" />
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-yellow-500 text-xl">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-center text-gray-700 text-sm mb-14">
                    {testimonial.review}
                  </p>

                  <div className="flex flex-col items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mb-2 border"
                    />
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.username}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
