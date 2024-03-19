import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoImg from "../public/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);
  const [linkColor, setlinkColor] = useState("#1f2937");

  // For Mobile nav
  const handleNav = () => {
    setNav(!nav);
  };

  // Change Nav color
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white dark:bg-black/50"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer ">
        <Link href="/">
          <div className="w-10 h-10">
            <Image src={LogoImg} alt="LogoImg" width={30} height={30} />
          </div>
        </Link>

        <div className="flex justify-between items-center">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex"
            role="menu"
            aria-label="My Account"
          >
            <li
              className="ml-10 font-bold hover:border-b dark:text-white uppercase"
              role="none"
            >
              <Link href="/" role="menuitem">
                Home
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-white uppercase"
              role="none"
            >
              <Link href="/gallery" role="menuitem">
                Gallery
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-white uppercase"
              role="none"
            >
              <Link href="/newsfeed" role="menuitem">
                Newsfeed
              </Link>
            </li>

            <li
              className="ml-10 font-bold hover:border-b dark:text-white uppercase"
              role="none"
            >
              <Link href="/contact" role="menuitem">
                Contact
              </Link>
            </li>
          </ul>
          <div className="p-4"></div>
          <div
            onClick={handleNav}
            className="md:hidden dark:text-white p-4 shadow-xl shadow-yellow-200 rounded-lg"
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[50%] sm:w-[40%] md:w-[35%] h-auto p-10 ease-in duration-500 bg-white dark:bg-black/50 rounded-lg"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center relative cursor-pointer">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-yellow-600 text-white absolute right-0"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="py-4 flex flex-col cursor-pointer">
              <ul
                className="uppercase"
                style={{ color: `${linkColor}` }}
                role="menu"
                aria-label="My Account"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-bold hover:bg-yellow-700 px-4 rounded-lg hover:text-white duration-300 dark:text-yellow-600 dark:hover:bg-white dark:hover:text-black uppercase"
                  role="none"
                >
                  <Link href="/" role="menuitem">
                    Home
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-bold hover:bg-yellow-700 px-4 rounded-lg hover:text-white duration-300 dark:text-yellow-600 dark:hover:bg-white dark:hover:text-black uppercase"
                  role="none"
                >
                  <Link href="/gallery" role="menuitem">
                    Gallery
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-bold hover:bg-yellow-700 px-4 rounded-lg hover:text-white duration-300 dark:text-yellow-600 dark:hover:bg-white dark:hover:text-black uppercase"
                  role="none"
                >
                  <Link href="/newsfeed" role="menuitem">
                    Newsfeed
                  </Link>
                </li>

                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-bold hover:bg-yellow-700 px-4 rounded-lg hover:text-white duration-300 dark:text-yellow-600 dark:hover:bg-white dark:hover:text-black uppercase"
                  role="none"
                >
                  <Link href="/contact" role="menuitem">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
