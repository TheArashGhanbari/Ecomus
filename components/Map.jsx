// components/Map.jsx

import { FiArrowRight } from "react-icons/fi";

const Map = () => {
  return (
    <section className="relative w-full h-auto">
      <div className="relative aspect-[4/3] md:aspect-auto md:h-[600px] w-full">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.8913472017!2d-122.04109805!3d37.40280355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sThung%20l%C5%A9ng%20Silicon%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1744859608872!5m2!1svi!2s"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Floating Info Box for Desktop */}
        <div className="hidden md:block absolute top-1/2 right-12 -translate-y-1/2 z-10 w-[340px] bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4">Ecomus Store</h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            301 Front St W Toronto, Canada
            <br />
            support@ecomus.com
            <br />
            (08) 8942 1299
          </p>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Mon - Fri, 8:30am - 10:30pm
            <br />
            Saturday, 8:30am - 10:30pm
            <br />
            Sunday Closed
          </p>
          <a
            href="https://ecomus-2.myshopify.com/pages/store-locations/?preview_theme_id="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:underline font-medium"
          >
            Get Directions <FiArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Stacked Info Box for Mobile */}
      <div className="block md:hidden px-4 py-6 bg-white text-center">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ecomus Store</h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            301 Front St W Toronto, Canada
            <br />
            support@ecomus.com
            <br />
            (08) 8942 1299
          </p>
          <p className="text-sm text-gray-500 mb-3 leading-relaxed">
            Mon - Fri, 8:30am - 10:30pm
            <br />
            Saturday, 8:30am - 10:30pm
            <br />
            Sunday Closed
          </p>
          <a
            href="https://ecomus-2.myshopify.com/pages/store-locations/?preview_theme_id="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-stone-600 underline font-medium text-sm"
          >
            Get Directions <FiArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;
