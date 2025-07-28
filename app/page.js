import BrandsSlider from "@/components/BrandSlider";
import MainTop from "@/components/main-top";
import Map from "@/components/Map";
import PremiumSupport from "@/components/PremiumSupport";
import Marquee from "@/components/subtitile";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <MainTop />
        <Marquee />
        <PremiumSupport />
      </main>

      {/* Testimonial and Brand Sliders above Map */}
      <section className="w-full px-3 py-14 space-y-15">
        <TestimonialSlider />
        <BrandsSlider />
      </section>

      <Map />
    </>
  );
}
