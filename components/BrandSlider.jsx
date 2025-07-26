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

  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerView]);

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

  const visibleBrands = brands.slice(
    currentIndex,
    currentIndex + slidesPerView
  );

  const totalPages = Math.ceil(brands.length / slidesPerView);
  const currentPage = Math.floor(currentIndex / slidesPerView) + 1;
  const shouldShowNavigation = slidesPerView < brands.length;

  return (
    <section
      id="brands"
      className="bg-gradient-to-b from-scheme-1-from to-scheme-1-to"
      data-color-scheme="scheme-1"
    >
      <div className="container mx-auto relative">
        <div className="relative">
          <div className="absolute inset-0 border border-line-border rounded-md pointer-events-none z-10"></div>

          <div className="relative overflow-hidden rounded-md">
            <div
              className={`grid grid-cols-${slidesPerView} gap-0`}
              style={{
                gridTemplateColumns: `repeat(${slidesPerView}, minmax(0, 1fr))`,
              }}
            >
              {visibleBrands.map((src, index) => (
                <div
                  key={index}
                  className="border border-line-border flex items-center justify-center p-4"
                >
                  <Image
                    src={src}
                    alt={`Brand ${index + 1}`}
                    width={130}
                    height={130}
                    loading="lazy"
                    className="w-auto h-auto max-h-[126px] transition-all duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

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
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSlider;
