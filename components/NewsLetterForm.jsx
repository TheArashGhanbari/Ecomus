import React, { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { toast } from "sonner";

const NewsletterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-auto mx-auto">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
          className="w-full px-3 py-4 text-sm md:text-[12px] text-stone-100 bg-[#2c2c2c] rounded-[3px] focus:outline-none"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2.5 font-medium text-white bg-black rounded-[3px]  ${
            isLoading ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-[11px]">Subscribe</span>
              <LuArrowUpRight className="text-xs sm:text-sm" />
            </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default NewsletterForm;
