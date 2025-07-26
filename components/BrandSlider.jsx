"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BrandsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  const brands = [
    "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001831.png?v=1750060905&width=304",
    "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001831-2.png?v=1750060921&width=354",
    "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018313.png?v=1750060942&width=304",
    "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018314.png?v=1750060960&width=304",
    "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018315.png?v=1750060991&width=304",
    "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018316.png?v=1750061008&width=304",
  ];

  // Calculate slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1150) setSlidesPerView(6);
      else if (window.innerWidth >= 768) setSlidesPerView(3);
      else setSlidesPerView(2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset index when slidesPerView changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerView]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + slidesPerView;
      return next >= brands.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - slidesPerView;
      return prevIndex < 0 ? brands.length - slidesPerView : prevIndex;
    });
  };

  // Total pages for dots navigation
  const totalPages = Math.ceil(brands.length / slidesPerView);
  const currentPage = Math.floor(currentIndex / slidesPerView) + 1;

  // Check if navigation should be visible
  const shouldShowNavigation = slidesPerView < brands.length;

  return (
    <section
      id="brands"
      className="py-10 bg-gradient-to-b from-scheme-1-from to-scheme-1-to"
      data-color-scheme="scheme-1"
    >
      <div className="container mx-auto px-4 relative">
        {/* Section Heading - Empty in original */}
        <div className="mb-[30px] flex flex-col gap-[15px] text-left"></div>

        {/* Brands Container */}
        <div className="relative">
          {/* Border around entire slider */}
          <div className="absolute inset-0 border border-line-border rounded-md pointer-events-none z-10"></div>

          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-md">
            {/* Brands Grid/Slider */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 relative">
              {brands.map((src, index) => (
                <div
                  key={index}
                  className={`
                    relative group
                    ${
                      index % slidesPerView !== slidesPerView - 1
                        ? "border-r"
                        : ""
                    }
                    ${index < brands.length - slidesPerView ? "border-b" : ""}
                    border-line-border
                    ${
                      index >= currentIndex &&
                      index < currentIndex + slidesPerView
                        ? "block"
                        : "hidden"
                    }
                  `}
                >
                  <div className="flex items-center justify-center w-full h-full min-h-[126px] p-3">
                    <Image
                      src={src}
                      alt={`Brand ${index + 1}`}
                      width={130}
                      height={130}
                      loading="lazy"
                      className="w-auto h-auto max-h-[126px] transition-all duration-300 lg:grayscale lg:opacity-50 lg:group-hover:grayscale-0 lg:group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots - Only show when needed */}
        {shouldShowNavigation && totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * slidesPerView)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i + 1 === currentPage
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${i + 1}`}
                aria-current={i + 1 === currentPage ? "page" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSlider;
