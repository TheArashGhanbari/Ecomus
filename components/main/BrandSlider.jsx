"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";

// Brand data
const BRANDS = [
  "/brands/ssense.webp",
  "/brands/burberry.webp",
  "/brands/nike.webp",
  "/brands/asos.webp",
  "/brands/pull&bear.webp",
  "/brands/gildan.webp",
];

// Responsive breakpoints for slides per view
const BREAKPOINTS = {
  desktop: 1150,
  tablet: 768,
};

const SLIDES_PER_VIEW = {
  desktop: 6,
  tablet: 3,
  mobile: 2,
};

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(SLIDES_PER_VIEW.mobile);
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINTS.desktop) {
        setSlidesPerView(SLIDES_PER_VIEW.desktop);
      } else if (window.innerWidth >= BREAKPOINTS.tablet) {
        setSlidesPerView(SLIDES_PER_VIEW.tablet);
      } else {
        setSlidesPerView(SLIDES_PER_VIEW.mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to first slide when slides per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + slidesPerView;
      return next >= BRANDS.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - slidesPerView;
      return prevIndex < 0 ? BRANDS.length - slidesPerView : prevIndex;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex * slidesPerView);
  };

  const visibleBrands = BRANDS.slice(
    currentIndex,
    currentIndex + slidesPerView
  );
  const totalPages = Math.ceil(BRANDS.length / slidesPerView);
  const currentPage = Math.floor(currentIndex / slidesPerView) + 1;
  const shouldShowNavigation = slidesPerView < BRANDS.length;

  return (
    <section
      id="brands"
      className="bg-gradient-to-b from-scheme-1-from to-scheme-1-to"
      data-color-scheme="scheme-1"
    >
      <div className="max-w-screen-2xl mx-auto relative">
        <div className="relative">
          <div className="absolute inset-0 border-t border-l border-r border-b border-line-border rounded-md pointer-events-none z-10" />

          <div className="relative overflow-hidden rounded-md">
            {isMobile ? (
              // Mobile view with Swiper
              <Swiper
                slidesPerView={2}
                spaceBetween={0}
                pagination={{
                  clickable: true,
                  el: ".brand-swiper-pagination",
                }}
                modules={[Pagination]}
                className="brand-swiper"
                grabCursor={true}
                touchRatio={1}
                resistance={true}
                resistanceRatio={0.85}
                speed={600}
                effect="slide"
              >
                {BRANDS.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="border-r border-line-border flex items-center justify-center p-4">
                      <Image
                        src={src}
                        alt={`Brand ${index + 1}`}
                        width={130}
                        height={130}
                        loading="lazy"
                        className="w-auto h-auto max-h-[126px] transition-all duration-500 grayscale hover:grayscale-0"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Desktop view with grid - show all brands
              <div
                className="grid gap-0"
                style={{
                  gridTemplateColumns: `repeat(${BRANDS.length}, minmax(0, 1fr))`,
                }}
              >
                {BRANDS.map((src, index) => (
                  <div
                    key={index}
                    className="border-r border-line-border flex items-center justify-center p-4"
                  >
                    <Image
                      src={src}
                      alt={`Brand ${index + 1}`}
                      width={130}
                      height={130}
                      loading="lazy"
                      className="w-auto h-auto max-h-[126px] transition-all duration-500 grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pagination outside the slider */}
        {isMobile && (
          <div className="flex justify-center items-center mt-6">
            <div className="brand-swiper-pagination"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandSlider;
