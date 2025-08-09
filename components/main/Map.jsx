// components/Map.jsx

import { FiArrowRight } from "react-icons/fi";

// Store information
const STORE_INFO = {
  name: "Ecomus Store",
  address: "301 Front St W Toronto, Canada",
  email: "support@ecomus.com",
  phone: "(08) 8942 1299",
  hours: {
    weekdays: "Mon - Fri, 8:30am - 10:30pm",
    saturday: "Saturday, 8:30am - 10:30pm",
    sunday: "Sunday Closed",
  },
  directionsUrl:
    "https://ecomus-2.myshopify.com/pages/store-locations/?preview_theme_id=",
};

// Google Maps embed URL
const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.8913472017!2d-122.04109805!3d37.40280355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sThung%20l%C5%A9ng%20Silicon%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1744859608872!5m2!1svi!2s";

// Store information component
const StoreInfo = ({ className = "", textColor = "text-gray-700" }) => (
  <div className={className}>
    <h3 className="text-lg font-bold mb-4">{STORE_INFO.name}</h3>
    <p className={`text-sm ${textColor} mb-4 leading-relaxed`}>
      {STORE_INFO.address}
      <br />
      {STORE_INFO.email}
      <br />
      {STORE_INFO.phone}
    </p>
    <p className={`text-sm ${textColor} mb-4 leading-relaxed`}>
      {STORE_INFO.hours.weekdays}
      <br />
      {STORE_INFO.hours.saturday}
      <br />
      {STORE_INFO.hours.sunday}
    </p>
    <a
      href={STORE_INFO.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:underline font-medium"
    >
      Get Directions <FiArrowRight className="ml-1 w-4 h-4" />
    </a>
  </div>
);

const Map = () => {
  return (
    <section className="relative w-full h-auto">
      <div className="relative aspect-[4/3] md:aspect-auto md:h-[600px] w-full">
        {/* Google Map */}
        <iframe
          src={MAP_URL}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Ecomus Store Location"
        />

        {/* Floating Info Box for Desktop */}
        <div className="hidden md:block absolute top-1/2 right-12 -translate-y-1/2 z-10 w-[340px] bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6">
          <StoreInfo />
        </div>
      </div>

      {/* Stacked Info Box for Mobile */}
      <div className="block md:hidden px-4 py-6 bg-white text-center">
        <div className="max-w-md mx-auto">
          <StoreInfo className="text-center" textColor="text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Map;
