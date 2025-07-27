import BrandsSlider from "@/components/BrandSlider";
import MainTop from "@/components/main-top";
import Map from "@/components/Map";
import PremiumSupport from "@/components/PremiumSupport";
import Marquee from "@/components/subtitile";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <main className="min-h-screen grid grid-rows-[1fr_auto]">Home</main>
      <TestimonialSlider />
      <BrandsSlider />
      <Map />
    </>
  );
}
