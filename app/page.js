import BrandsSlider from "@/components/BrandSlider";
import Map from "@/components/Map";
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
