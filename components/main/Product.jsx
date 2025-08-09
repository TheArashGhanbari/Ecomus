"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Slider from "react-slick";
import {
  ShoppingCart,
  Heart,
  Shuffle,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// دکمه‌های فلش سفارشی
function CustomArrow({ className, style, onClick, direction }) {
  return (
    <div
      className={`${className} !bg-white !rounded-full shadow-md !flex !justify-center !items-center !w-10 !h-10 z-10 hover:scale-110 transition-transform ${
        direction === "left" ? "-left-5" : "-right-5"
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      {direction === "left" ? (
        <ChevronLeft size={24} className="text-black" />
      ) : (
        <ChevronRight size={24} className="text-black" />
      )}
    </div>
  );
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("product").select("*");
      if (error) console.error("Supabase error:", error);
      else setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center">در حال بارگذاری...</p>;
  if (products.length === 0)
    return <p className="text-center">هیچ محصولی موجود نیست.</p>;

  const hotDeals = products.filter((p) => p.isHotDeals);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    focusOnSelect: true,
    centerMode: false,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-8 md:px-16 py-8">
      <Slider {...settings}>
        {hotDeals.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            imageZoom={p.imageZoom}
            name={p.name}
            price={p.price}
            colors={p.colors || ["#000", "#fff"]}
          />
        ))}
      </Slider>
    </div>
  );
}

function ProductCard({ image, imageZoom, name, price, colors }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-[300px] h-[479px] bg-white rounded-xl shadow-sm p-4 relative group cursor-pointer overflow-hidden flex flex-col items-center transition-all mx-auto">
      {/* تصویر محصول - دو تصویر روی هم */}
      <div
        className="relative w-full h-[300px] overflow-hidden rounded-md cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* تصویر اصلی */}
        <img
          src={image}
          alt={name}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
          }`}
          style={{ transitionProperty: "transform, opacity", zIndex: 1 }}
        />
        {/* تصویر زوم شده */}
        {imageZoom && (
          <img
            src={imageZoom}
            alt={`${name} zoom`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              hovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
            style={{ transitionProperty: "transform, opacity", zIndex: 2 }}
          />
        )}
      </div>

      {/* آیکون‌ها با افکت دونه‌به‌دونه */}
      <div className="mt-4 flex justify-center items-center gap-3">
        {[ShoppingCart, Heart, Shuffle, Eye].map((Icon, i) => (
          <ActionIcon
            key={i}
            icon={<Icon size={18} />}
            delay={i * 100}
            visible={hovered}
            label={["Add to Cart", "Wishlist", "Compare", "Quick View"][i]}
          />
        ))}
      </div>

      {/* نام و قیمت */}
      <h3 className="mt-4 font-semibold text-center text-sm">{name}</h3>
      <p className="text-sm text-gray-500 text-center mt-1">€{price}</p>

      {/* رنگ‌ها */}
      <div className="flex justify-center gap-2 mt-3">
        {colors.map((color, i) => (
          <span
            key={i}
            className="w-4 h-4 rounded-full border border-gray-400"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

// دکمه آیکون با افکت صعودی و Tooltip فقط روی دکمه
function ActionIcon({ icon, delay = 0, visible, label }) {
  return (
    <button
      className={`group bg-white p-2 rounded-md shadow-md hover:bg-gray-100 transition-all transform relative ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={label}
    >
      {icon}
    </button>
  );
}
