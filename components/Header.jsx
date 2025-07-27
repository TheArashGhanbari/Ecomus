// src/components/Header.jsx
"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-[#23242d] text-white border-b border-white/100 h-[60px] lg:h-[180px]">
      {/* Top Bar - Mobile & Desktop */}

      <div className="relative w-full h-[60px] lg:h-25 lg:px-14 md:px-4 px-4 flex items-center justify-between">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <form
            action="/search"
            method="get"
            role="search"
            className="hidden w-[458px] max-w-xl lg:block overflow:hidden"
          >
            <input type="hidden" name="resources[limit_scope] " value="each" />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M17.72 16.19l-4.08-4.08a7.57 7.57 0 10-1.53 1.45l4.08 4.08a.9.9 0 101.27-1.27zM2.16 7.58a5.41 5.41 0 1110.82 0 5.41 5.41 0 01-10.82 0z"
                    fill="currentColor"
                  />
                </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Center - Logo */}
        <Link className="z-10 m:flex-grow flex justify-center m:flex-grow">
          <img
            src="https://ecomus-2-2.myshopify.com/cdn/shop/files/logo_white.svg?v=1744703286&width=272"
            width={136}
            height={21}
            alt="Logo"
            className="cursor-pointer w-24 w-[136px]"
          />
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-4">
          {/* Desktop Icons - Moved before cart */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center  gap-2 cursor-pointer hover:text-[rgb(153,21,242)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M56,64V57.48A8.43,8.43,0,0,0,47.56,49H16.44A8.43,8.43,0,0,0,8,57.48V64H.9V57.48A15.53,15.53,0,0,1,16.44,41.94H47.56A15.53,15.53,0,0,1,63.1,57.48V64Zm-23.47-27a18.66,18.66,0,0,1-13.11-5.43,18.54,18.54,0,0,1,0-26.22A18.53,18.53,0,0,1,51.07,18.51,18.52,18.52,0,0,1,32.54,37.05Zm0-30a11.44,11.44,0,1,0,8.09,3.35A11.36,11.36,0,0,0,32.54,7.07Z" />
              </svg>
              <span>Login</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[rgb(153,21,242)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M6.59 5.17L1.41 0L0 1.41L5.17 6.58L6.59 5.17ZM10.5 0L12.54 2.04L0 14.59L1.41 16L13.96 3.46L16 5.5V0H10.5ZM10.83 9.41L9.42 10.82L12.55 13.95L10.5 16H16V10.5L13.96 12.54L10.83 9.41Z" />
              </svg>
              <span>Compare</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[rgb(153,21,242)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="currentColor"
              >
                <path d="M9.90736 15.2534L9.80926 15.3515L9.70136 15.2534C5.04196 11.0256 1.96185 8.22997 1.96185 5.3951C1.96185 3.43324 3.43324 1.96185 5.3951 1.96185C6.90572 1.96185 8.37711 2.94278 8.897 4.27684H10.7215C11.2414 2.94278 12.7128 1.96185 14.2234 1.96185C16.1853 1.96185 17.6567 3.43324 17.6567 5.3951C17.6567 8.22997 14.5766 11.0256 9.90736 15.2534ZM14.2234 0C12.5166 0 10.8785 0.79455 9.80926 2.04033C8.74005 0.79455 7.10191 0 5.3951 0C2.37384 0 0 2.36403 0 5.3951C0 9.09319 3.33515 12.1243 8.38692 16.7052L9.80926 18L11.2316 16.7052C16.2834 12.1243 19.6185 9.09319 19.6185 5.3951C19.6185 2.36403 17.2447 0 14.2234 0Z" />
              </svg>
              <span>Wishlist</span>
            </div>
            <div className="relative flex items-center cursor-pointer hover:text-[rgb(153,21,242)] cart-divider">
              {" "}
              <svg
                className="lg:hdt-block hdt-hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="29"
                viewBox="0 0 26 29"
                fill="currentColor"
              >
                {" "}
                <path d="M24.5556 29H1.44444C1.06135 29 0.693954 28.8472 0.423068 28.5753C0.152182 28.3034 0 27.9346 0 27.55V1.45C0 1.06544 0.152182 0.696623 0.423068 0.424695C0.693954 0.152767 1.06135 0 1.44444 0H24.5556C24.9386 0 25.306 0.152767 25.5769 0.424695C25.8478 0.696623 26 1.06544 26 1.45V27.55C26 27.9346 25.8478 28.3034 25.5769 28.5753C25.306 28.8472 24.9386 29 24.5556 29ZM23.1111 26.1V2.9H2.88889V26.1H23.1111ZM8.66667 5.8V8.7C8.66667 9.85369 9.12321 10.9601 9.93587 11.7759C10.7485 12.5917 11.8507 13.05 13 13.05C14.1493 13.05 15.2515 12.5917 16.0641 11.7759C16.8768 10.9601 17.3333 9.85369 17.3333 8.7V5.8H20.2222V8.7C20.2222 10.6228 19.4613 12.4669 18.1069 13.8265C16.7525 15.1862 14.9155 15.95 13 15.95C11.0845 15.95 9.24755 15.1862 7.89312 13.8265C6.53869 12.4669 5.77778 10.6228 5.77778 8.7V5.8H8.66667Z"></path>{" "}
              </svg>{" "}
              <span className="absolute -top-2 -right-2 text-white bg-[rgb(153,21,242)] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {" "}
                0{" "}
              </span>{" "}
            </div>
          </div>

          {/* Mobile Search Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                d="M17.72 16.19l-4.08-4.08a7.57 7.57 0 10-1.53 1.45l4.08 4.08a.9.9 0 101.27-1.27zM2.16 7.58a5.41 5.41 0 1110.82 0 5.41 5.41 0 01-10.82 0z"
                fill="currentColor"
              />
            </svg>
          </button>

          {/* Mobile Cart Icon */}
          <div className="lg:hidden relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="currentColor"
            >
              <path d="M24.5556 29H1.44444C1.06135 29 0.693954 28.8472 0.423068 28.5753C0.152182 28.3034 0 27.9346 0 27.55V1.45C0 1.06544 0.152182 0.696623 0.423068 0.424695C0.693954 0.152767 1.06135 0 1.44444 0H24.5556C24.9386 0 25.306 0.152767 25.5769 0.424695C25.8478 0.696623 26 1.06544 26 1.45V27.55C26 27.9346 25.8478 28.3034 25.5769 28.5753C25.306 28.8472 24.9386 29 24.5556 29ZM23.1111 26.1V2.9H2.88889V26.1H23.1111ZM8.66667 5.8V8.7C8.66667 9.85369 9.12321 10.9601 9.93587 11.7759C10.7485 12.5917 11.8507 13.05 13 13.05C14.1493 13.05 15.2515 12.5917 16.0641 11.7759C16.8768 10.9601 17.3333 9.85369 17.3333 8.7V5.8H20.2222V8.7C20.2222 10.6228 19.4613 12.4669 18.1069 13.8265C16.7525 15.1862 14.9155 15.95 13 15.95C11.0845 15.95 9.24755 15.1862 7.89312 13.8265C6.53869 12.4669 5.77778 10.6228 5.77778 8.7V5.8H8.66667Z" />
            </svg>
            <span className="absolute -top-1 -right-1 text-white bg-[rgb(153,21,242)] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Bar */}
      <div className="hidden lg:flex items-center h-20 justify-between px-15 py-3 bg-[#23242d] border-t border-white/100 z-50">
        <Button className="flex items-center cursor-pointer gap-2 bg-[rgb(153,21,242)] h-10 hover:bg-[rgb(153,21,242)] text-white px-6 py-3 rounded-lg text-lg font-inherit shadow-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M4.83416 0H1.61897C0.726277 0 0 0.726277 0 1.61897V4.83416C0 5.72685 0.726277 6.45312 1.61897 6.45312H4.83416C5.72685 6.45312 6.45312 5.72685 6.45312 4.83416V1.61897C6.45312 0.726277 5.72685 0 4.83416 0ZM5.35938 4.83416C5.35938 5.12375 5.12375 5.35938 4.83416 5.35938H1.61897C1.32937 5.35938 1.09375 5.12375 1.09375 4.83416V1.61897C1.09375 1.32937 1.32937 1.09375 1.61897 1.09375H4.83416C5.12375 1.09375 5.35938 1.32937 5.35938 1.61897V4.83416ZM12.3594 0H9.1875C8.28286 0 7.54688 0.735984 7.54688 1.64062V4.8125C7.54688 5.71714 8.28286 6.45312 9.1875 6.45312H12.3594C13.264 6.45312 14 5.71714 14 4.8125V1.64062C14 0.735984 13.264 0 12.3594 0ZM12.9062 4.8125C12.9062 5.11405 12.6609 5.35938 12.3594 5.35938H9.1875C8.88595 5.35938 8.64062 5.11405 8.64062 4.8125V1.64062C8.64062 1.33908 8.88595 1.09375 9.1875 1.09375H12.3594C12.6609 1.09375 12.9062 1.33908 12.9062 1.64062V4.8125ZM4.83416 7.54688H1.61897C0.726277 7.54688 0 8.27315 0 9.16584V12.381C0 13.2737 0.726277 14 1.61897 14H4.83416C5.72685 14 6.45312 13.2737 6.45312 12.381V9.16584C6.45312 8.27315 5.72685 7.54688 4.83416 7.54688ZM5.35938 12.381C5.35938 12.6706 5.12375 12.9062 4.83416 12.9062H1.61897C1.32937 12.9062 1.09375 12.6706 1.09375 12.381V9.16584C1.09375 8.87625 1.32937 8.64062 1.61897 8.64062H4.83416C5.12375 8.64062 5.35938 8.87625 5.35938 9.16584V12.381ZM12.3594 7.54688H9.1875C8.28286 7.54688 7.54688 8.28286 7.54688 9.1875V12.3594C7.54688 13.264 8.28286 14 9.1875 14H12.3594C13.264 14 14 13.264 14 12.3594V9.1875C14 8.28286 13.264 7.54688 12.3594 7.54688ZM12.9062 12.3594C12.9062 12.6609 12.6609 12.9062 12.3594 12.9062H9.1875C8.88595 12.9062 8.64062 12.6609 8.64062 12.3594V9.1875C8.64062 8.88595 8.88595 8.64062 9.1875 8.64062H12.3594C12.6609 8.64062 12.9062 8.88595 12.9062 9.1875V12.3594Z"
              fill="currentColor"
            ></path>
          </svg>
          Browse All Categories
        </Button>
        <nav className="flex items-center m-10 h-20 w-[1000px] gap-8 text-10 font-medium">
          <div className="your-element group relative pb-1 cursor-pointer flex items-center gap-1 capitalize font-inherit">
            <span className="text-white">Home</span>
            <svg
              className="text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
<<<<<<< HEAD
              <path
                d="M10 1.24243L5 6.24243L0 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="your-element cursor-pointer flex items-center gap-1 capitalize font-inherit">
            Shop
            <svg
              className="hdt-menu-item-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M10 1.24243L5 6.24243L0 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="your-element cursor-pointer flex items-center gap-1 capitalize font-inherit">
            Products
            <svg
              className="hdt-menu-item-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M10 1.24243L5 6.24243L0 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="your-element cursor-pointer flex items-center gap-1 capitalize font-inherit">
            Pages
            <svg
              className="hdt-menu-item-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M10 1.24243L5 6.24243L0 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="your-element cursor-pointer flex items-center gap-1 capitalize font-inherit">
            Blog
            <svg
              className="hdt-menu-item-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M10 1.24243L5 6.24243L0 1.24243L0.8875 0.354932L5 4.46743L9.1125 0.354931L10 1.24243Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="your-element cursor-pointer flex items-center gap-1 capitalize font-inherit">
            Buy now
          </div>
=======
              <span className="text-white">{item.label}</span>
              {item.hasDropdown && <DropdownArrow />}
            </div>
          ))}
>>>>>>> 73b56032afa142466c0b0d820074f09ae6164382
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.21989 13.7008C2.19942 13.7199 2.18295 13.743 2.17143 13.7685C2.1599 13.7941 2.15354 13.8217 2.15272 13.8497V18.5857C2.15272 19.4124 2.83298 20.0926 3.65962 20.0926H5.5256C5.64874 20.0926 5.74087 20.0005 5.74087 19.8774V13.8497C5.73977 13.793 5.71674 13.7389 5.6766 13.6987C5.63647 13.6586 5.58235 13.6356 5.5256 13.6345H2.36799C2.3118 13.6361 2.25855 13.66 2.21989 13.7008ZM0 13.8497C0.00339224 13.2228 0.253966 12.6224 0.697317 12.1791C1.14067 11.7357 1.74101 11.4851 2.36799 11.4817H5.5256C6.15335 11.4827 6.75513 11.7324 7.19902 12.1763C7.64291 12.6202 7.89268 13.222 7.89359 13.8497V19.8774C7.89428 20.1885 7.83349 20.4967 7.71473 20.7844C7.59597 21.072 7.42157 21.3333 7.20154 21.5533C6.98152 21.7733 6.7202 21.9477 6.4326 22.0665C6.14499 22.1852 5.83676 22.246 5.5256 22.2453H3.65962C1.64468 22.2453 0 20.6007 0 18.5857V13.8497Z"
                fill="#fff"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9927 2.15272C12.8144 2.1517 11.6476 2.38302 10.5588 2.83344C9.47008 3.28386 8.48083 3.94455 7.64769 4.77769C6.81455 5.61083 6.15387 6.60007 5.70345 7.68882C5.25303 8.77756 5.02171 9.94444 5.02273 11.1227V12.5719C5.02273 12.8574 4.90933 13.1311 4.70747 13.333C4.50561 13.5348 4.23184 13.6482 3.94637 13.6482C3.6609 13.6482 3.38712 13.5348 3.18527 13.333C2.98341 13.1311 2.87001 12.8574 2.87001 12.5719V11.1227C2.87001 4.97451 7.84451 0 13.9927 0C20.1409 0 25.1154 4.97451 25.1154 11.1227V12.5581C25.1154 12.8436 25.002 13.1174 24.8001 13.3192C24.5982 13.5211 24.3245 13.6345 24.039 13.6345C23.7535 13.6345 23.4798 13.5211 23.2779 13.3192C23.076 13.1174 22.9626 12.8436 22.9626 12.5581V11.1227C22.9626 6.16281 18.9525 2.15272 13.9927 2.15272ZM24.107 20.1133C24.2457 20.1411 24.3775 20.1959 24.495 20.2746C24.6124 20.3534 24.7132 20.4545 24.7916 20.5722C24.87 20.6899 24.9244 20.8219 24.9517 20.9607C24.979 21.0994 24.9788 21.2422 24.9509 21.3808C24.1914 25.1601 20.859 28 16.8627 28H15.4281C15.1426 28 14.8689 27.8866 14.667 27.6847C14.4652 27.4829 14.3518 27.2091 14.3518 26.9236C14.3518 26.6382 14.4652 26.3644 14.667 26.1625C14.8689 25.9607 15.1426 25.8473 15.4281 25.8473H16.8627C18.2705 25.8473 19.635 25.3603 20.7245 24.4688C21.8141 23.5773 22.5617 22.3362 22.8404 20.9563C22.8967 20.6766 23.0617 20.4307 23.2992 20.2726C23.5367 20.1146 23.8273 20.0572 24.107 20.1133Z"
                fill="#fff"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.3117 13.7008C22.2912 13.7199 22.2747 13.743 22.2632 13.7685C22.2517 13.7941 22.2453 13.8217 22.2445 13.8497V19.8774C22.2445 19.9936 22.3444 20.0926 22.4598 20.0926H24.2543C25.124 20.0926 25.8326 19.3831 25.8326 18.5134V13.8497C25.8315 13.793 25.8085 13.7389 25.7684 13.6987C25.7282 13.6586 25.6741 13.6356 25.6174 13.6345H22.4598C22.4036 13.6361 22.3503 13.66 22.3117 13.7008ZM20.0918 13.8497C20.0952 13.2228 20.3457 12.6224 20.7891 12.1791C21.2324 11.7357 21.8328 11.4851 22.4598 11.4817H25.6174C26.2451 11.4827 26.8469 11.7324 27.2908 12.1763C27.7347 12.6202 27.9845 13.222 27.9854 13.8497V18.5134C27.9847 19.5028 27.5914 20.4515 26.8918 21.1512C26.1923 21.8509 25.2437 22.2444 24.2543 22.2453H22.4598C21.832 22.2444 21.2302 21.9947 20.7863 21.5508C20.3425 21.1069 20.0927 20.5051 20.0918 19.8774V13.8497Z"
                fill="#fff"
              ></path>
            </svg>
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
