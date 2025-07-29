import { X, Heart, Search, User } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({ setIsOpen }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <>
      <AnimatePresence>
        <div className="h-[19999px] inset-0 z-50 bg-black/40 lg:hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex h-[19999px]  flex-col  justify-between w-[367px] bg-white text-black p-5"
          >
            <div className="sticky top-0  bg-white z-10 flex justify-start mb-4 py-2">
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-4">
                {["Home", "Shop", "Products", "Pages", "Blog"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b pb-2 cursor-pointer hover:text-purple-600"
                    >
                      <span>{item}</span>
                      <span className="text-xl font-semibold">+</span>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-6 font-semibold">Buy now</div>
              <div className="flex gap-2 mt-4">
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-[5px]     text-sm font-medium hover:opacity-90 transition">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </button>
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-[5px] text-sm font-medium hover:opacity-90 transition">
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-700">
                <p className="mb-1 font-medium">Need help ?</p>
                <p>
                  Address: 1234 Fashion Street, Suite 567, New York, NY 10001
                </p>
                <p>Email: info@fashionshop.com</p>
                <p>Phone: (212) 555-1234</p>
              </div>
            </div>
            <div className="sticky bottom-0 mt-[100px] bg-white ">
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-[5px] text-sm font-medium hover:opacity-90 transition">
                <User className="w-4 h-4" />
                Login
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}
