// src/components/Header.jsx
"use client";

import { useState } from "react";
import { Button } from "./ui/button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-[#23242d] text-white border-b border-white/100 h-[60px] lg:h-[179.6px]">
      {/* Top Bar - Mobile & Desktop */}
      <div className="relative w-full h-[60px] lg:h-25 lg:px-14 md:px-4 px-4 flex items-center justify-between">
        {/* Desktop Search Bar */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <form
            action="/search"
            method="get"
            role="search"
            className="hidden w-[458px] max-w-xl lg:block overflow-hidden"
          >
            <input type="hidden" name="resources[limit_scope]" value="each" />
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
              <input
                type="search"
                name="q"
                autoComplete="off"
                placeholder="Search product"
                className="flex-grow px-4 w-full py-2 text-sm text-gray-600 bg-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-25 h-10 bg-black text-white rounded-full m-1 hover:opacity-90 transition"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>

        {/* Left Side - Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 transition-opacity">
            <div className="fixed inset-y-0 left-0 w-[320px] max-w-sm bg-white shadow-lg"></div>
          </div>
        )}

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ease-in-out opacity-0 animate-fadeIn">
            <div className="fixed inset-y-0 right-0 w-[320px] max-w-sm bg-white shadow-lg transform transition-all duration-300 ease-out translate-x-full animate-slideInRight"></div>
          </div>
        )}

        {/* Center - Logo */}
        <div className="z-10 m:flex-grow flex justify-center m:flex-grow">
          <img
            src="https://ecomus-2-2.myshopify.com/cdn/shop/files/logo_white.svg?v=1744703286&width=272"
            width={136}
            height={21}
            alt="Logo"
            className="cursor-pointer w-24 w-[136px]"
          />
        </Link>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-4">
          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-[rgb(153,21,242)]">
              <UserIcon />
              <span>Login</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[rgb(153,21,242)]">
              <CompareIcon />
              <span>Compare</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[rgb(153,21,242)]">
              <WishlistIcon />
              <span>Wishlist</span>
            </div>
            <div className="relative flex items-center cursor-pointer hover:text-[rgb(153,21,242)] cart-divider">
              <CartIcon />
              <span className="absolute -top-2 -right-2 text-white bg-[rgb(153,21,242)] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </div>
          </div>

          {/* Mobile Search Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <SearchIcon />
          </button>

          {/* Mobile Cart Icon */}
          <div className="lg:hidden relative">
            <CartIcon />
            <span className="absolute -top-1 -right-1 text-white bg-[rgb(153,21,242)] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </div>
        </div>
      </div>
      {/* Desktop Bottom Bar */}
      <div className="hidden  lg:flex items-center h-20 justify-between px-14 py-3 bg-[#23242d] border-t border-white/100">
        <Button className="flex items-center cursor-pointer gap-2 bg-[rgb(153,21,242)] h-10 hover:bg-[rgb(153,21,242)] text-white px-6 py-3 rounded-lg text-lg font-inherit shadow-none">
          <CategoriesIcon />
          Browse All Categories
        </Button>

        <nav className="flex items-center h-20 w-[1000px] gap-8 text-10 font-medium">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="your-element group relative pb-1 cursor-pointer flex items-center gap-1 capitalize font-inherit"
            >
              <span className="text-white">{item.label}</span>
              {item.hasDropdown && <DropdownArrow />}
          </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <NotificationIcon />
            <div className="flex flex-col leading-tight">
              <span className="text-[rgb(153,21,242)] text-xl lg:text-3xl lg:text-[28px] sm:text-base font-medium font-inherit">
                1900100888
              </span>
              <span className="text-white text-xs lg:text-sm">
                Support Center
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
