"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("product").select("*");
      if (error) {
        console.error("Supabase error:", JSON.stringify(error, null, 2));
      } else {
        setProducts(data);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;

  if (products.length === 0) return <p>هیچ محصولی موجود نیست.</p>;

  // تنظیمات اسلایدر
  const settings = {
    dots: true, // نمایش نقطه‌های ناوبری
    infinite: false, // غیرفعال کردن چرخش بی‌نهایت
    speed: 500, // سرعت انیمیشن
    slidesToShow: 4, // تعداد آیتم‌های نمایش داده شده
    slidesToScroll: 1, // تعداد آیتم‌های جابه‌جا شده با هر درگ یا کلیک
    swipeToSlide: true, // فعال کردن سوایپ و درگ
    arrows: true, // دکمه‌های چپ و راست
    focusOnSelect: true, // اسنپ کردن روی آیتم انتخاب شده در درگ
    centerMode: false, // غیرفعال کردن حالت مرکزگرایی اسلاید
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotDeals = products.filter((p) => p.isHotDeals === true);

  return (
    <div className="px-14 py-6">
      <Slider {...settings}>
        {hotDeals.map((p) => (
          <ImageHoverZoom
            key={p.id}
            image={p.image}
            imageZoom={p.imageZoom}
            name={p.name}
            price={p.price}
          />
        ))}
      </Slider>
    </div>
  );
}

function ImageHoverZoom({ image, imageZoom, name, price }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-[300px]  h-[479px] border rounded-md p-4 cursor-pointer flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-[300px] overflow-hidden rounded-md">
        <img
          src={hovered && imageZoom ? imageZoom : image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
        <button className="w-[42px] h-[42px] bg-white flex justify-center items-center text-black">
          <svg
            id="hdt-icon-cart"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          ></svg>
        </button>
      </div>

      <h2 className="mt-4 text-gray-800 font-medium text-[18px] text-center">
        {name}
      </h2>
      <p className="text-gray-700 text-center">€{price}</p>
    </div>
  );
}
