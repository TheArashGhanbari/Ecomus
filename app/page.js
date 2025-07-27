import BrandsSlider from "@/components/BrandSlider";
import Map from "@/components/Map";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* Main content area - empty for now */}
      </main>

      {/* Testimonial and Brand Sliders above Map */}
      <section className="w-full px-14 py-14 space-y-15">
        <TestimonialSlider />
        <BrandsSlider />
      </section>
      <Map />
    </>
  );
}
