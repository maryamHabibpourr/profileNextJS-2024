"use client";
import Image from "next/image";
import brainwave from "../assets/brainwave-symbol.svg";
import { useState } from "react";
import Link from "next/link"
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import HamburgerMenu from "./design/Header";



const Navbar = () => {
  // const router = useRouter();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4">
        <Link href="/" className="block w-[12rem] cursor-pointer">
          <Image
            src={brainwave}
            alt="maryam Habibpour"
            width={40}
            height={40}
            priority={true}
          />
        </Link>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1
                px-12 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <div
          className="ml-auto lg:hidden px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
