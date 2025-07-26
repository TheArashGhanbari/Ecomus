"use client";

import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const toAbsoluteUrl = (url) => {
    if (url.startsWith("//")) return `https:${url}`;
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
        "https://ecomus-2-2.myshopify.com/cdn/shop/files/testimonial.png?v=1744862505&width=450"
      ),
      bgImage: toAbsoluteUrl(
        "//ecomus-2-2.myshopify.com/cdn/shop/files/Mask_group_8e8cb1ec-efc2-4321-9bbd-3bd690f5f028.png?v=1744862147&width=2880"
      ),
    },
    {
      title: "ONE CUSTOMER'S RARE REVIEWS",
      rating: 5,
      content:
        "With stunning visuals and seamless motion tracking, this VR headset delivers an immersive experience that's perfect for gaming and virtual exploration.",
      userName: "Jack Smith",
      purchaseItem: "HTC VIVE Pro Virtual Reality Headset",
      userImage: toAbsoluteUrl(
        "//ecomus-2-2.myshopify.com/cdn/shop/files/testimonial2_f3988b0f-61f1-48e2-a801-8ef2806ff05b.png?v=1750062469&width=734"
      ),
      bgImage: toAbsoluteUrl(
        "//ecomus-2-2.myshopify.com/cdn/shop/files/Mask_group_8e8cb1ec-efc2-4321-9bbd-3bd690f5f028.png?v=1744862147&width=2880"
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const activeTestimonial = testimonials[currentSlide];

  return (
    <div className="shopify-section hdt-section hdt-testimonials-with-image">
      <div
        className="max-w-screen-xl mx-auto rounded-xl overflow-hidden relative min-h-[500px] p-5 py-10 flex items-center"
        style={{
          backgroundImage: `url(${activeTestimonial.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="w-full px-6 sm:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="text-white space-y-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  viewBox="0 0 46 31"
                  fill="none"
                  className="mb-5"
                >
                  <path
                    d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
                    stroke="#B5B5B5"
                  />
                </svg>

                <h3 className="text-sm font-bold uppercase tracking-[3px]">
                  {activeTestimonial.title}
                </h3>

                <div className="flex mb-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-white w-4 h-4 mr-2.5 mb-4"
                    />
                  ))}
                </div>

                <p className="text-[28px] leading-[34px] font-light max-w-xl">
                  {activeTestimonial.content}
                </p>

                {/* User info with image on all screens */}
                <div className="mt-6 flex items-center gap-4">
                  {/* Larger image without border */}
                  <div className="relative w-[65px] h-[65px] lg:hidden rounded-lg overflow-hidden">
                    <Image
                      src={activeTestimonial.userImage}
                      alt={activeTestimonial.purchaseItem}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      {activeTestimonial.userName}
                    </h4>
                    <p className="text-base text-gray-300">
                      Purchase item: {activeTestimonial.purchaseItem}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-10">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`p-3 rounded-full border border-white transition-all duration-200 ${
                      currentSlide === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-white hover:text-black"
                    }`}
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === testimonials.length - 1}
                    className={`p-3 rounded-full border border-white transition-all duration-200 ${
                      currentSlide === testimonials.length - 1
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-white hover:text-black"
                    }`}
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Larger image for desktop */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide + "-img"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex justify-end"
              >
                <div className="relative w-[340px] h-[340px] rounded-2xl overflow-hidden">
                  <Image
                    src={activeTestimonial.userImage}
                    alt={activeTestimonial.purchaseItem}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
