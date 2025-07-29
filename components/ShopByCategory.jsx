// "use client";
// import { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function ShopByCategory() {
//   const scrollRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const itemWidth = 200 + 40; // عرض آیتم + فاصله بین آیتم‌ها

//   // تابع انیمیشن اسکرول نرم با easing
//   function smoothScrollBy(element, distance, duration = 600) {
//     const start = element.scrollLeft;
//     const startTime = performance.now();

//     function easeInOutQuad(t) {
//       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//     }

//     function animate(time) {
//       const elapsed = time - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const easeProgress = easeInOutQuad(progress);
//       element.scrollLeft = start + distance * easeProgress;
//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     }

//     requestAnimationFrame(animate);
//   }

//   // تابع snap smooth به نزدیک‌ترین آیتم
//   function snapToNearestItem(element, duration = 400) {
//     const start = element.scrollLeft;
//     const targetIndex = Math.round(start / itemWidth);
//     const targetScrollLeft = targetIndex * itemWidth;
//     const startTime = performance.now();

//     function easeInOutQuad(t) {
//       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//     }

//     function animate(time) {
//       const elapsed = time - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const easeProgress = easeInOutQuad(progress);
//       element.scrollLeft = start + (targetScrollLeft - start) * easeProgress;
//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     }

//     requestAnimationFrame(animate);
//   }

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;
//     const distance = direction === "left" ? -itemWidth * 3 : itemWidth * 3;
//     smoothScrollBy(scrollRef.current, distance, 600);

//     // بعد از انیمیشن اسکرول، اسنپ به نزدیک‌ترین آیتم
//     setTimeout(() => {
//       if (scrollRef.current) snapToNearestItem(scrollRef.current, 300);
//     }, 650);
//   };

//   useEffect(() => {
//     const slider = scrollRef.current;
//     if (!slider) return;

//     let isDown = false;
//     let startX = 0;
//     let scrollLeft = 0;

//     // رویدادهای ماوس
//     const mouseDown = (e) => {
//       isDown = true;
//       setIsDragging(true);
//       slider.classList.add("active");
//       startX = e.pageX - slider.getBoundingClientRect().left;
//       scrollLeft = slider.scrollLeft;
//     };
//     const mouseLeave = () => {
//       if (!isDown) return;
//       isDown = false;
//       setIsDragging(false);
//       slider.classList.remove("active");
//       snapToNearestItem(slider, 300);
//     };
//     const mouseUp = () => {
//       if (!isDown) return;
//       isDown = false;
//       setIsDragging(false);
//       slider.classList.remove("active");
//       snapToNearestItem(slider, 300);
//     };
//     const mouseMove = (e) => {
//       if (!isDown) return;
//       e.preventDefault();
//       const x = e.pageX - slider.getBoundingClientRect().left;
//       const walk = (x - startX) * 2; // کاهش سرعت اسکرول در درگ
//       slider.scrollLeft = scrollLeft - walk;
//     };

//     // رویدادهای لمس (لمسی)
//     let isTouching = false;
//     let touchStartX = 0;
//     let touchScrollLeft = 0;

//     const touchStart = (e) => {
//       isTouching = true;
//       setIsDragging(true);
//       slider.classList.add("active");
//       touchStartX = e.touches[0].pageX - slider.getBoundingClientRect().left;
//       touchScrollLeft = slider.scrollLeft;
//     };

//     const touchMove = (e) => {
//       if (!isTouching) return;
//       e.preventDefault();
//       const x = e.touches[0].pageX - slider.getBoundingClientRect().left;
//       const walk = (x - touchStartX) * 0.3;
//       slider.scrollLeft = touchScrollLeft - walk;
//     };

//     const touchEnd = () => {
//       if (!isTouching) return;
//       isTouching = false;
//       setIsDragging(false);
//       slider.classList.remove("active");
//       snapToNearestItem(slider, 300);
//     };

//     // اضافه کردن event listener ها
//     slider.addEventListener("mousedown", mouseDown);
//     slider.addEventListener("mouseleave", mouseLeave);
//     slider.addEventListener("mouseup", mouseUp);
//     slider.addEventListener("mousemove", mouseMove);

//     slider.addEventListener("touchstart", touchStart, { passive: false });
//     slider.addEventListener("touchmove", touchMove, { passive: false });
//     slider.addEventListener("touchend", touchEnd);

//     // پاکسازی در unmount
//     return () => {
//       slider.removeEventListener("mousedown", mouseDown);
//       slider.removeEventListener("mouseleave", mouseLeave);
//       slider.removeEventListener("mouseup", mouseUp);
//       slider.removeEventListener("mousemove", mouseMove);

//       slider.removeEventListener("touchstart", touchStart);
//       slider.removeEventListener("touchmove", touchMove);
//       slider.removeEventListener("touchend", touchEnd);
//     };
//   }, []);

//   const categories = [
//     {
//       name: "Controllers",
//       img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001825_af736a90-cdb8-4284-9547-5a5a4f8acc82.webp?v=1750064375&width=160",
//     },
//     {
//       name: "Keyboards",
//       img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001826_19b2a88f-ea2f-489d-a8d2-f0f032a33b14_1.jpg?v=1744881975&width=160",
//     },
//     {
//       name: "Mice",
//       img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001827_469928dd-dc0b-44e8-8346-1eaf8ce6c9cc.webp?v=1744882142&width=160",
//     },
//     {
//       name: "Headsets",
//       img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001828_c83bf841-4770-4163-92c5-2c01943be2ae.webp?v=1744882252&width=160",
//     },
//     {
//       name: "Flight simulation",
//       img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001829_e564fa55-a22c-41a9-911a-5a502039876e.webp?v=1744882310&width=160",
//     },
//     {
//       name: "Race simulation",
//       img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001830_df77d224-e4ff-4401-a38e-f5684872b9fd.webp?v=1744882421&width=160",
//     },
//     {
//       name: "Monitor",
//       img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018257.jpg?v=1744882547&width=160",
//     },
//   ];

//   return (
//     <div
//       className="flex justify-center items-center px-14"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="h-[305px] cursor-auto bg-[#23252e] hover:text-[rgb(153,21,242)] rounded-2xl max-w-[1420px] mx-auto flex items-center py-[56px] px-[95px]">
//         <div className="relative w-full">
//           {/* دکمه‌های اسکرول */}
//           <button
//             onClick={() => scroll("left")}
//             className={`absolute left-[-60px] top-[80px] -translate-y-1/2 z-20 p-3 rounded-full border border-white hover:border-[rgb(153,21,242)]
//             ${isHovered ? "opacity-100" : "opacity-0"} transition
//             hover:text-[rgb(153,21,242)] text-white bg-black/50`}
//           >
//             <ChevronLeft />
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className={`absolute right-[-55px] top-[80px] -translate-y-1/2 z-20 p-3 rounded-full border border-white hover:border-[rgb(153,21,242)]
//             ${isHovered ? "opacity-100" : "opacity-0"} transition
//             hover:text-[rgb(153,21,242)] text-white bg-black/50`}
//           >
//             <ChevronRight />
//           </button>

//           {/* اسلایدر */}
//           <div
//             ref={scrollRef}
//             style={{ touchAction: "pan-y" }}
//             className={`flex gap-[10px] overflow-hidden select-none ${
//               isDragging ? "cursor-auto" : "cursor-auto"
//             }`}
//           >
//             <div className="flex gap-[70px] justify-center items-center">
//               {categories.map((cat, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col justify-center items-center w-[146.79px] h-[193px] shrink-0"
//                   draggable={false}
//                 >
//                   <div className="overflow-hidden rounded-md">
//                     <img
//                       src={cat.img}
//                       alt={cat.name}
//                       className="w-[160px] h-[160px] cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
//                       draggable={false}
//                     />
//                   </div>
//                   <p className="text-white mt-[20px] text-[18px] font-semibold cursor-pointer hover:text-[rgb(153,21,242)] transition-colors duration-300 ease-in-out">
//                     {cat.name}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShopByCategory;
"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function ShopByCategory() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const itemWidth = 200 + 40; // عرض آیتم + فاصله بین آیتم‌ها

  // تابع انیمیشن اسکرول نرم با easing
  function smoothScrollBy(element, distance, duration = 600) {
    const start = element.scrollLeft;
    const startTime = performance.now();

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);
      element.scrollLeft = start + distance * easeProgress;
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // تابع snap smooth به نزدیک‌ترین آیتم
  function snapToNearestItem(element, duration = 400) {
    const start = element.scrollLeft;
    const targetIndex = Math.round(start / itemWidth);
    const targetScrollLeft = targetIndex * itemWidth;
    const startTime = performance.now();

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);
      element.scrollLeft = start + (targetScrollLeft - start) * easeProgress;
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const distance = direction === "left" ? -itemWidth * 3 : itemWidth * 3;
    smoothScrollBy(scrollRef.current, distance, 600);

    setTimeout(() => {
      if (scrollRef.current) snapToNearestItem(scrollRef.current, 300);
    }, 650);
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDown = (e) => {
      isDown = true;
      setIsDragging(true);
      slider.classList.add("active");
      startX = e.pageX - slider.getBoundingClientRect().left;
      scrollLeft = slider.scrollLeft;
    };
    const mouseLeave = () => {
      if (!isDown) return;
      isDown = false;
      setIsDragging(false);
      slider.classList.remove("active");
      snapToNearestItem(slider, 300);
    };
    const mouseUp = () => {
      if (!isDown) return;
      isDown = false;
      setIsDragging(false);
      slider.classList.remove("active");
      snapToNearestItem(slider, 300);
    };
    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.getBoundingClientRect().left;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    let isTouching = false;
    let touchStartX = 0;
    let touchScrollLeft = 0;

    const touchStart = (e) => {
      isTouching = true;
      setIsDragging(true);
      slider.classList.add("active");
      touchStartX = e.touches[0].pageX - slider.getBoundingClientRect().left;
      touchScrollLeft = slider.scrollLeft;
    };

    const touchMove = (e) => {
      if (!isTouching) return;
      e.preventDefault();
      const x = e.touches[0].pageX - slider.getBoundingClientRect().left;
      const walk = (x - touchStartX) * 0.1;
      slider.scrollLeft = touchScrollLeft - walk;
    };

    const touchEnd = () => {
      if (!isTouching) return;
      isTouching = false;
      setIsDragging(false);
      slider.classList.remove("active");
      snapToNearestItem(slider, 300);
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    slider.addEventListener("touchstart", touchStart, { passive: false });
    slider.addEventListener("touchmove", touchMove, { passive: false });
    slider.addEventListener("touchend", touchEnd);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);

      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchmove", touchMove);
      slider.removeEventListener("touchend", touchEnd);
    };
  }, []);

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

  // انیمیشن‌های framer-motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="flex justify-center items-center px-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[305px] cursor-auto bg-[#23252e] hover:text-[rgb(153,21,242)] rounded-2xl max-w-[1420px] mx-auto flex items-center py-[56px] px-[95px]">
        <div className="relative w-full">
          {/* دکمه‌های اسکرول */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-[-60px] top-[80px] -translate-y-1/2 z-20 p-3 rounded-full border border-white hover:border-[rgb(153,21,242)] hover:text-[rgb(153,21,242)] text-white bg-black/50 scroll-button ${
              isHovered ? "visible" : ""
            }`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-[-55px] top-[80px] -translate-y-1/2 z-20 p-3 rounded-full border border-white hover:border-[rgb(153,21,242)] hover:text-[rgb(153,21,242)] text-white bg-black/50 scroll-button ${
              isHovered ? "visible" : ""
            }`}
          >
            <ChevronRight />
          </button>

          {/* اسلایدر */}
          <motion.div
            ref={scrollRef}
            style={{ touchAction: "pan-y" }}
            className={`flex gap-[10px] overflow-hidden select-none ${
              isDragging ? "cursor-auto" : "cursor-auto"
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex gap-[70px] justify-center items-center">
              {categories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col justify-center items-center w-[146.79px] h-[193px] shrink-0"
                  draggable={false}
                  variants={itemVariants}
                >
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-[160px] h-[160px] cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                      draggable={false}
                    />
                  </div>
                  <p className="text-white mt-[20px] text-[18px] font-semibold cursor-pointer hover:text-[rgb(153,21,242)] transition-colors duration-300 ease-in-out">
                    {cat.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
