"use client";
import { useState } from "react";
import Link from "next/link";

import CartIcon from "@/app/assets/navbar/cart.svg";
import { usePathname } from "next/navigation";

interface INavBar {}

export default function NavBar(props: INavBar) {
  //dark:bg-gray-900
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <nav className="bg-transparent/[0.2] backdrop-blur h-[116px] fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-full">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          href="/"
        >
          <span className="self-center font-rymaneco text-7xl text-white">
            SolerCo
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse ">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "active " : ""
                }block py-0 text-white hover:bg-transparent/[0.3] md:text-lg md:rounded-2xl md:bg-transparent md:px-3 md:py-1 md:hover:bg-transparent/[0.3] [&.active]:md:bg-transparent/[0.3]`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "active " : ""
                }block py-0 text-white hover:bg-transparent/[0.3] md:text-lg md:rounded-2xl md:bg-transparent md:px-3 md:py-1 md:hover:bg-transparent/[0.3] [&.active]:md:bg-transparent/[0.3]`}
              >
                Conócenos
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`${
                  pathname === "/shop" ? "active " : ""
                }block py-0 text-white hover:bg-transparent/[0.3] md:text-lg md:rounded-2xl md:bg-transparent md:px-3 md:py-1 md:hover:bg-transparent/[0.3] [&.active]:md:bg-transparent/[0.3]`}
              >
                Tienda
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`${
                  pathname === "/cart" ? "active " : ""
                }block py-0 text-white hover:bg-transparent/[0.3] md:text-lg md:rounded-2xl md:bg-transparent md:px-3 md:hover:bg-transparent/[0.3] [&.active]:md:bg-transparent/[0.3]`}
              >
                <CartIcon className="h-9 w-7" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
