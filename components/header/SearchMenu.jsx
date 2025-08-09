import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function SearchMenu({ setIsOpen }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <AnimatePresence>
      <div
        className="inset-0 z-50 bg-black/40 lg:hidden flex h-[1999px] w-full absolute"
        onClick={() => setIsOpen(false)}
      >
        {/* flex-parent، justify-end باعث میشه منو سمت راست بچسبه */}
        <div className="flex justify-end w-full ">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-[1999px] flex flex-col  w-[367px] bg-white text-black "
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex flex-col  w-full justify-between p-5 ">
              <div className="flex justify-between">
                <h2 className="font-inherit text-gray-600 text-[26px]">
                  Search our site
                </h2>
                <div className="sticky top-0 bg-white z-10 flex justify-end mb-4 py-2">
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex w-full  h-[42px] mb-[20px] pb-[30px] ">
                <div className="flex h-[42px] items-center border  border-black rounded px-3 py-2 w-full max-w-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M17.72 16.19l-4.08-4.08a7.57 7.57 0 10-1.53 1.45l4.08 4.08a.9.9 0 101.27-1.27zM2.16 7.58a5.41 5.41 0 1110.82 0 5.41 5.41 0 01-10.82 0z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="ml-2 w-full   outline-none text-sm text-black placeholder-black"
                  />
                </div>
              </div>
            </header>
            <div className="border-b-2 border-gray-400 w-[4000px]"></div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
