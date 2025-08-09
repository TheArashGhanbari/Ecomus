"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";

const features = [
  {
    title: "Free Shipping",
    desc: "You will love at great low prices",
    icon: (
      <svg
        width="29"
        height="30"
        viewBox="0 0 29 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.2504 30L0 22.8814V7.01669L14.2504 0L28.5009 7.01273V22.8814L14.2504 30ZM2.64633 21.246L14.2504 27.0388L25.8546 21.242V8.66276L14.2504 2.95069L2.64633 8.66276V21.246ZM15.5736 28.5207H12.9273V15.0152L0.739716 9.02798L1.90671 6.64627L15.5736 13.3666V28.5207ZM15.5736 28.5207H12.9273V13.3665L26.5942 6.6515L27.7612 9.03321L15.5736 15.0152V28.5207ZM14.2504 15.6596L0.739716 9.02798L1.90671 6.64627L14.2504 12.717L26.5942 6.65292L27.7612 9.03457L14.2504 15.6596Z"></path>
      </svg>
    ),
  },
  {
    title: "Flexible Payment",
    desc: "Pay with Multiple Credit Cards",
    icon: (
      <svg
        width="30"
        height="22"
        viewBox="0 0 30 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H29.4643V22H0V0ZM27.5 1.9643H1.9643V20.0357H27.5V1.9643ZM0 4.97617H29.4643V11.9167H0V4.97617ZM27.5 6.94047H1.9643V9.95238H27.5V6.94047Z"></path>
      </svg>
    ),
  },
  {
    title: "14 Day Returns",
    desc: "Within 30 days for an exchange",
    icon: (
      <svg
        width="29"
        height="18"
        viewBox="0 0 29 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25.5 1.5V7.5H5.745L11.115 2.115L9 0L0 9L9 18L11.115 15.885L5.745 10.5H28.5V1.5H25.5Z"></path>
      </svg>
    ),
  },
  {
    title: "Premium Support",
    desc: "Outstanding premium support",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M27.5 10H26.82C25.862 4.334 20.934 0 15 0C9.066 0 4.137 4.334 3.18 10H2.5C1.83712 10.0005 1.20154 10.2641 0.732818 10.7328C0.264092 11.2015 0.000529668 11.8371 0 12.5V17.5C0 18.879 1.121 20 2.5 20H4C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19V12C5 6.486 9.486 2 15 2C20.514 2 25 6.486 25 12V18C25 23.514 20.514 28 15 28C14.7348 28 14.4804 28.1054 14.2929 28.2929C14.1054 28.4804 14 28.7348 14 29C14 29.2652 14.1054 29.5196 14.2929 29.7071C14.4804 29.8946 14.7348 30 15 30C20.935 30 25.863 25.666 26.82 20H27.5C28.879 20 30 18.879 30 17.5V12.5C30 11.121 28.879 10 27.5 10ZM2 17.5V12.5C2 12.229 2.229 12 2.5 12H3V18H2.5C2.36788 17.9984 2.2416 17.9453 2.14817 17.8518C2.05474 17.7584 2.00156 17.6321 2 17.5ZM28 17.5C28 17.771 27.771 18 27.5 18H27V12H27.5C27.771 12 28 12.229 28 12.5V17.5ZM23 17V12C23 7.589 19.411 4 15 4C10.589 4 7 7.589 7 12V17C7 21.411 10.589 25 15 25C19.411 25 23 21.411 23 17ZM9 17V12C9 8.691 11.691 6 15 6C18.309 6 21 8.691 21 12V17C21 20.309 18.309 23 15 23C11.691 23 9 20.309 9 17Z"></path>
      </svg>
    ),
  },
];

export default function PremiumSupport() {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

  return (
    <div className="border-b border-gray-300 px-4 py-8 sm:px-14 sm:py-5">
      <div className="max-w-7xl">
        {isMobile ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="custom-swiper"
          >
            {features.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center card-content">
                  <div className="mb-4 flex items-center justify-center w-[74px] h-[74px] rounded-full border border-gray-300 animate-slide-up-fade-in">
                    {item.icon}
                  </div>
                  <h2 className="text-gray-700 font-bold text-[18px] animate-slide-up-fade-in">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-500 text-[14px] animate-slide-up-fade-in">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 card-content">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex h-[74px] animate-slide-up-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex w-[74px] h-[74px] items-center justify-center rounded-full border border-gray-300">
                  {item.icon}
                </div>
                <div className="flex flex-col ml-4 justify-center">
                  <h2 className="text-gray-700 font-bold text-[18px]">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-[14px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
