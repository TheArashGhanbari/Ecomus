function MainTop() {
  return (
    <div className="w-full">
      <div
        className="w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-14 pt-[30px] md:pt-[75px] pb-[40px] md:pb-[88px] min-h-[500px] md:h-[823px] relative overflow-auto"
        style={{
          backgroundImage: `url('//ecomus-2-2.myshopify.com/cdn/shop/files/image_57735b1e-8659-4126-b525-631f5ae81429.png?v=1744791792&width=1200')`,
        }}
      >
        <div className="relative z-10 w-full max-w-[1421px] mx-auto">
          <div className="scroll-x-hidden-scrollbar flex-nowrap-mobile px-1 -mx-1">
            {/* کارت اول */}
            <div className="group relative text-white font-bold card-scroll-item h-[300px] bg-black bg-opacity-50 rounded-3xl backdrop-blur-sm flex items-end px-6 sm:px-8 md:px-[50px] py-6 md:py-[70px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('//ecomus-2-2.myshopify.com/cdn/shop/files/image-1.png?v=1744792075&width=696')`,
                  zIndex: -1,
                }}
              ></div>
              <div className="relative z-10">
                <p className="mb-2 md:mb-4 text-base md:text-[22px]">
                  NO.1 GEA
                </p>
                <h2 className="text-3xl md:text-5xl mb-3 md:mb-6">Popular.</h2>
                <p className="mb-2 md:mb-4 text-base md:text-[22px]">
                  Every piece is made to last beyond the season
                </p>
                <button className="px-4 py-2 md:px-8 md:py-3 cursor-pointer w-[110px] md:w-[125px] h-[36px] md:h-[42px] bg-white text-black font-semibold rounded hover:bg-opacity-80 transition-all text-xs md:text-[12px] relative overflow-hidden group">
                  Shop now
                  <span
                    className="hidden md:block absolute -right-[50px] top-0 w-[80px] h-full bg-black opacity-0 
                    group-hover:opacity-20 group-hover:right-[calc(100%+10px)]
                    transition-all duration-500 ease-out"
                    style={{
                      transform: "skewX(-25deg)",
                      filter: "blur(6px)",
                      willChange: "transform, opacity",
                    }}
                  ></span>
                </button>
              </div>
            </div>

            {/* کارت دوم */}
            <div className="group relative text-white font-bold card-scroll-item h-[300px] bg-black bg-opacity-50 rounded-3xl backdrop-blur-sm flex items-end px-6 sm:px-8 md:px-[50px] py-6 md:py-[70px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('//ecomus-2-2.myshopify.com/cdn/shop/files/image-2_27452f39-33a5-4648-b2b9-9c9c39a77b60.png?v=1744793068&width=1410')`,
                  zIndex: -1,
                }}
              ></div>
              <div className="relative z-10">
                <p className="mb-2 md:mb-4 text-base md:text-[22px]">
                  NO.1 GEA
                </p>
                <h2 className="text-3xl md:text-5xl mb-3 md:mb-6">
                  Best Seller
                </h2>
                <p className="mb-2 md:mb-4 text-base md:text-[22px]">
                  Every piece is made to last beyond the season
                </p>
                <button className="px-4 py-2 md:px-8 md:py-3 cursor-pointer w-[110px] md:w-[125px] h-[36px] md:h-[42px] bg-white text-black font-semibold rounded hover:bg-opacity-80 transition-all text-xs md:text-[12px] relative overflow-hidden group">
                  Shop now
                  <span
                    className="hidden md:block absolute -right-[50px] top-0 w-[80px] h-full bg-black opacity-0 
                    group-hover:opacity-20 group-hover:right-[calc(100%+10px)]
                    transition-all duration-500 ease-out"
                    style={{
                      transform: "skewX(-25deg)",
                      filter: "blur(6px)",
                      willChange: "transform, opacity",
                    }}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTop;
