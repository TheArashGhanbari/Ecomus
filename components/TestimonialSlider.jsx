"use client";

import React, { useState, useCallback, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

// Utility function to convert relative URLs to absolute
const toAbsoluteUrl = (url) => {
  if (url.startsWith("//")) return `https:${url}`;
  return url;
};

// Testimonial data
const TESTIMONIALS = [
  {
    id: 1,
    title: "OUR CUSTOMER'S RARE REVIEWS",
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
    id: 2,
    title: "OUR CUSTOMER'S RARE REVIEWS",
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

// Quote icon component
const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="30"
    viewBox="0 0 46 31"
    fill="none"
    className="mb-4 lg:mb-6"
  >
    <path
      d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
      stroke="#B5B5B5"
    />
  </svg>
);

// Star rating component
const StarRating = ({ rating }) => (
  <div className="flex mb-1">
    {[...Array(rating)].map((_, i) => (
      <FaStar key={i} className="text-white w-4 h-4 mr-2.5 mb-4" />
    ))}
  </div>
);

// Navigation button component
const NavigationButton = ({ direction, onClick, disabled }) => {
  const Icon = direction === "prev" ? FaChevronLeft : FaChevronRight;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-3 rounded-full border border-white text-white transition-all duration-200 ${
        disabled
          ? "opacity-30 cursor-not-allowed"
          : "hover:bg-white hover:text-black active:scale-95"
      }`}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} testimonial`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
};

// Single testimonial content component
const TestimonialContent = ({ testimonial, className = "" }) => (
  <div
    className={`text-white space-y-3 sm:space-y-4 lg:space-y-5 ${className}`}
  >
    <div>
      <QuoteIcon />
    </div>

    <h3 className="text-sm font-semibold uppercase">{testimonial.title}</h3>

    <div>
      <StarRating rating={testimonial.rating} />
    </div>

    <p className="text-sm leading-6 sm:leading-7 lg:leading-[34px] max-w-xl md:text-lg lg:text-2xl">
      {testimonial.content}
    </p>

    {/* User info with image on all screens */}
    <div className="mt-4 lg:mt-6 flex items-center gap-4">
      {/* Larger image without border */}
      <div className="relative w-[65px] h-[65px] lg:hidden rounded-lg overflow-hidden">
        <Image
          src={testimonial.userImage}
          alt={testimonial.purchaseItem}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h4 className="text-sm font-semibold">{testimonial.userName}</h4>
        <p className="text-white">Purchase item: {testimonial.purchaseItem}</p>
      </div>
    </div>
  </div>
);

// Custom hook for slider logic
const useSlider = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback(
    (index) => {
      const newDirection = index > currentSlide ? 1 : -1;
      setDirection(newDirection);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  return {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    canGoNext: currentSlide < totalSlides - 1,
    canGoPrev: currentSlide > 0,
  };
};

const TestimonialSlider = () => {
  const {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    canGoNext,
    canGoPrev,
  } = useSlider(TESTIMONIALS.length);

  const activeTestimonial = TESTIMONIALS[currentSlide];

  // Handle drag gestures using Framer Motion
  const handleDragEnd = useCallback(
    (event, info) => {
      const { offset, velocity } = info;
      const swipeThreshold = 50;
      const velocityThreshold = 500;

      if (
        Math.abs(offset.x) > swipeThreshold ||
        Math.abs(velocity.x) > velocityThreshold
      ) {
        if (offset.x > 0 && canGoPrev) {
          prevSlide();
        } else if (offset.x < 0 && canGoNext) {
          nextSlide();
        }
      }
    },
    [canGoNext, canGoPrev, nextSlide, prevSlide]
  );

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  return (
    <div
      className="max-w-screen-2xl mx-auto rounded-xl overflow-hidden flex items-center w-full"
      style={{
        backgroundImage: `url(${activeTestimonial.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="w-full px-6 sm:px-12 lg:px-25 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 relative overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing select-none"
              whileDrag={{ scale: 0.98 }}
            >
              {/* Current slide content */}
              <div className="relative">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <TestimonialContent testimonial={activeTestimonial} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-6 lg:mt-10">
              <NavigationButton
                direction="prev"
                onClick={prevSlide}
                disabled={!canGoPrev}
              />
              <NavigationButton
                direction="next"
                onClick={nextSlide}
                disabled={!canGoNext}
              />
            </div>
          </div>

          {/* Larger image for desktop */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide + "-img"}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative w-[340px] h-[340px] rounded-2xl overflow-hidden shadow-2xl">
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
  );
};

export default TestimonialSlider;
