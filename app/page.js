import BrandsSlider from "@/components/main/BrandSlider";
import MainTop from "@/components/main/MainCart";
import HotDeals from "@/components/main/HotDeals";

import Map from "@/components/main/Map";
import PremiumSupport from "@/components/main/PremiumSupport";
import ShopByCategory from "@/components/main/ShopByCategory";
import Marquee from "@/components/main/Subtitile";
import TestimonialSlider from "@/components/main/TestimonialSlider";
import TitleOfProduct from "@/components/main/TitleOfProduct";

export default function Home() {
  return (  
    <>
      <main className="min-h-screen">
        <MainTop />
        <Marquee />
        <PremiumSupport />
        <TitleOfProduct />
        <ShopByCategory />
        <HotDeals />
      </main>

      {/* Testimonial and Brand Sliders above Map */}
      <section className="w-full px-2 md:px-14 py-14 space-y-15">
        <TestimonialSlider />
        <BrandsSlider />
      </section>

      <Map />
    </>
  );
}
