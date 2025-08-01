"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Controllers",
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001825_af736a90-cdb8-4284-9547-5a5a4f8acc82.webp?v=1750064375&width=160",
  },
  {
    name: "Keyboards",
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001826_19b2a88f-ea2f-489d-a8d2-f0f032a33b14_1.jpg?v=1744881975&width=160",
  },
  {
    name: "Mice",
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001827_469928dd-dc0b-44e8-8346-1eaf8ce6c9cc.webp?v=1744882142&width=160",
  },
  {
    name: "Headsets",
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001828_c83bf841-4770-4163-92c5-2c01943be2ae.webp?v=1744882252&width=160",
  },
  {
    name: "Flight simulation",
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001829_e564fa55-a22c-41a9-911a-5a502039876e.webp?v=1744882310&width=160",
  },
  {
    name: "Race simulation",
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001830_df77d224-e4ff-4401-a38e-f5684872b9fd.webp?v=1744882421&width=160",
  },
  {
    name: "Monitor",
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018257.jpg?v=1744882547&width=160",
  },
];

function chunkArray(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

export default function ShopByCategory() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // برای درگ موس در دسکتاپ
  const [isDraggingDesktop, setIsDraggingDesktop] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  useEffect(() => {
    const updateItems = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerSlide(2);
      else if (w < 1024) setItemsPerSlide(3);
      else setItemsPerSlide(categories.length);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const slides = chunkArray(categories, itemsPerSlide);
  const isMobile = itemsPerSlide <= 3;

  const goTo = (index) => {
    if (index < 0 || index >= slides.length) return;
    setCurrentIndex(index);
  };

  // تاچ موبایل
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || touchStartX === null) return;
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTouchStartX(null);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const itemWidth = 146.79; // عرض هر آیتم (از CSS)
      const gap = 70; // فاصله بین آیتم‌ها
      const scrollAmount = itemWidth + gap; // کل عرض به همراه فاصله

      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // درگ موس دسکتاپ
  const handleMouseDown = (e) => {
    setIsDraggingDesktop(true);
    setDragStartX(e.clientX);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDraggingDesktop || !scrollRef.current) return;
    const diff = dragStartX - e.clientX;
    scrollRef.current.scrollLeft += diff;
    setDragStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDraggingDesktop(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    setIsDraggingDesktop(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center px-4 sm:px-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-[305px] w-full bg-[#23252e] rounded-2xl max-w-[1420px] py-[56px] px-[20px] sm:px-[40px] lg:px-[95px] relative overflow-hidden">
          {isMobile ? (
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-[50px] justify-center items-center"
                >
                  {slides.length > 0 &&
                    slides[currentIndex]?.map((cat, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-center items-center w-[146px] h-[193px]"
                      >
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={cat.img}
                            alt={cat.name}
                            className="w-[160px] h-[160px] object-cover transition-transform hover:scale-110"
                          />
                        </div>
                        <p className="text-white mt-4 text-[18px] font-semibold hover:text-[rgb(153,21,242)] transition-colors">
                          {cat.name}
                        </p>
                      </div>
                    ))}
                </motion.div>
              </AnimatePresence>
              <div className="mt-4 flex justify-center gap-2 custom-swiper2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`swiper-pagination-bullet ${
                      i === currentIndex
                        ? "swiper-pagination-bullet-active"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex justify-center items-center">
              <button
                onClick={() => scroll("left")}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white bg-black/50 text-white hover:border-purple-600 hover:text-purple-600 transition ${
                  isHovered ? "block" : "hidden"
                }`}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scroll("right")}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white bg-black/50 text-white hover:border-purple-600 hover:text-purple-600 transition ${
                  isHovered ? "block" : "hidden"
                }`}
              >
                <ChevronRight />
              </button>
              <div
                ref={scrollRef}
                className="flex gap-[70px] w-max overflow-x-hidden overflow-y-hidden cursor-grab select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-center items-center w-[146.79px] h-[193px] shrink-0"
                    onDragStart={(e) => e.preventDefault()}
                    draggable={false}
                  >
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-[160px] h-[160px] object-cover transition-transform duration-300 hover:scale-110"
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </div>
                    <p className="text-white mt-4 text-[18px] font-semibold hover:text-purple-600 transition-colors">
                      {cat.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[96px]"></div>
    </>
  );
}
