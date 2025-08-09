// app/hot-deals/page.jsx
"use client";

import { useState, useEffect } from "react";
import ProductList from "./Product";

export default function HotDeals() {
  const [timeLeft, setTimeLeft] = useState({
    days: 99,
    hours: 1,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = { ...prev };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;

          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;

            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;

              if (newTime.days > 0) {
                newTime.days--;
              } else {
                clearInterval(interval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-[80px]">
      <div className=" mx-14  flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Hot Deals</h1>

        <div className="flex justify-center items-center gap-3 p-2 w-min text-[14px] text-purple-700 font-inherit font-bold rounded-3xl bg-purple-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.5631 11.7661L10.7746 9.67465V5.41441C10.7746 4.98605 10.4283 4.6398 9.99996 4.6398C9.5716 4.6398 9.22535 4.98605 9.22535 5.41441V10.062C9.22535 10.306 9.34 10.5361 9.5352 10.6817L12.6336 13.0055C12.7673 13.1062 12.9302 13.1606 13.0975 13.1604C13.3338 13.1604 13.5662 13.0543 13.718 12.8498C13.9752 12.5081 13.9055 12.0225 13.5631 11.7661Z"
              fill="currentColor"
            ></path>
            <path
              d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48566 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.6592 1.54918 10C1.54918 5.34082 5.34082 1.54918 10 1.54918C14.66 1.54918 18.4508 5.34082 18.4508 10C18.4508 14.6592 14.6592 18.4508 10 18.4508Z"
              fill="currentColor"
            ></path>
          </svg>
          {/* Days */}
          <div className="flex">
            <div>{timeLeft.days.toString().padStart(2, "0")}</div>
            <span>D</span>
          </div>
          :{/* Hours */}
          <div className="flex">
            <div>{timeLeft.hours.toString().padStart(2, "0")}</div>
            <span>H</span>
          </div>
          :{/* Minutes */}
          <div className="flex">
            <div>{timeLeft.minutes.toString().padStart(2, "0")}</div>
            <span>M </span>
          </div>
          :{/* Seconds */}
          <div className="flex">
            <div>{timeLeft.seconds.toString().padStart(2, "0")}</div>
            <span>S</span>
          </div>
        </div>
      </div>
      <ProductList />
      <img src="public\image\1.1.webp  " />
    </div>
  );
}
