"use client";

import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Helper function to convert protocol-relative URLs to HTTPS
  const toAbsoluteUrl = (url) => {
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    return url;
  };

  const testimonials = [
    {
      title: "ONE CUSTOMER'S RARE REVIEWS",
      rating: 5,
      content:
        "This four-button console is a perfect throwback! Simple design with classic games like Contra and Mario—great for reliving childhood memories.",
      userName: "Robert Smith",
      purchaseItem: "Coaler Master Callier K2",
      userImage: toAbsoluteUrl(
        "//ecomus-2-2.myshopify.com/cdn/shop/files/testimonial.png?v=1744862505&width=734"
      ),
      bgImage: toAbsoluteUrl(
        "//ecomus-2-2.myshopify.com/cdn/shop/files/Mask_group_8e8cb1ec-efc2-4321-9bbd-3bd690f5f028.png?v=1744862147&width=2880"
      ),
    },
    {
      title: "ONE CHITCHMER'S BANK REVENGE",
      rating: 5,
      content:
        "This form-button connects to a perfect non-standard sample design with classic gamers like Coarse and Klein—great for recharge/displaced memories.",
      userName: "Basket Skills",
      purchaseItem: "Purchase Item Copies Master Online by",
      userImage: toAbsoluteUrl(
        "//ecomus-2-2.myshopify.com/cdn/shop/files/testimonial2_f3988b0f-61f1-48e2-a801-8ef2806ff05b.png?v=1750062469&width=734"
      ),
      bgImage: toAbsoluteUrl(
        "//ecomus-2-2.myshopify.com/cdn/shop/files/Mask_group_8e8cb1ec-efc2-4321-9bbd-3bd690f5f028.png?v=1744862147&width=2880"
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const activeTestimonial = testimonials[currentSlide];

  return (
    <div className="shopify-section hdt-section hdt-testimonials-with-image py-10 px-4 sm:px-6">
      <div
        className="max-w-7xl mx-auto rounded-xl overflow-hidden relative"
        style={{
          backgroundImage: `url(${activeTestimonial.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <Image
            src="https://ecomus-2-2.myshopify.com/cdn/shop/files/Mask_group_8e8cb1ec-efc2-4321-9bbd-3bd690f5f028.png?v=1744862147&width=1400"
            alt="background"
            priority
            fill
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="relative z-10">
          <div className="hdt-main-testimonial grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 md:p-10">
            {/* Testimonial Content */}
            <div className="hdt-testimonial-wrap flex flex-col justify-center text-white">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="31"
                  viewBox="0 0 46 31"
                  fill="none"
                >
                  <path
                    d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
                    stroke="#B5B5B5"
                  />
                </svg>
              </div>

              <div className="mb-4">
                <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {activeTestimonial.title}
                </h3>
              </div>

              <div className="mb-6 flex">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-4 h-4 mx-0.5" />
                ))}
              </div>

              <div className="mb-6">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  {activeTestimonial.content}
                </p>
              </div>

              <div className="flex items-center mt-4">
                <div>
                  <h4 className="text-base md:text-lg font-semibold">
                    {activeTestimonial.userName}
                  </h4>
                  <p className="text-sm md:text-base mt-1">
                    {activeTestimonial.purchaseItem}
                  </p>
                </div>
              </div>

              {/* Navigation buttons below author info */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center rounded-full border-1 border-stone-50 bg-opacity-20 hover:bg-opacity-30 p-2 transition-all"
                >
                  <FaChevronLeft className="text-white w-3 h-3 md:w-4 md:h-4" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentSlide === index ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center rounded-full border-1 border-stone-50 bg-opacity-20 hover:bg-opacity-30 p-2 transition-all"
                >
                  <FaChevronRight className="text-white w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>

            {/* Testimonial Image (desktop only) */}
            <div className="hidden lg:block hdt-testimonial-img-wrap rounded-xl overflow-hidden self-center">
              <div className="h-full w-full aspect-square">
                <Image
                  src={activeTestimonial.userImage}
                  alt={activeTestimonial.userName}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl border-4 border-white"
                />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
