"use client";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

import Button from "@/components/ui/Button";

import { RiShoppingBag3Fill } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import toast from "react-hot-toast";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const { state, dispatch } = useCart();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed z-[990] w-full px-6 lg:px-24 py-4 flex items-center justify-between h-20 bg-white/90 backdrop-blur-sm shadow-md">
      <Link href="/" className="flex justify-between items-center gap-4">
        <Image src="/logo-navbar.png" width="60" height="60" alt="ISEAP Logo" />
        <div className="flex flex-col">
          <h4 className="text-[16px] lg:text-[20px] font-bold -mb-1">
            ISEAP Tienda Oficial
          </h4>
          <span className="text-[12px] lg:text-[14px]">
            Aeronautical Academy
          </span>
        </div>
      </Link>

      <div className="flex lg:hidden" onClick={() => setNavbar(true)}>
        <RxHamburgerMenu className="text-gray-800 w-8 h-8" />
      </div>

      <div
        className={`lg:flex lg:justify-between lg:items-center gap-16 ${
          navbar
            ? "flex flex-col justify-center items-center absolute top-0 left-0 bg-gray-200 w-full h-screen"
            : "hidden -left-[200px]"
        }`}
      >
        <div
          className={`absolute top-10 right-10 lg:hidden`}
          onClick={() => setNavbar(false)}
        >
          <RxCross2 className="text-gray-800 w-10 h-10" />
        </div>

        <div className="relative flex items-center justify-center gap-2 cursor-pointer">
          <Link
            href="/products"
            className="text-md font-medium text-gray-500 hover:text-gray-800 transition-all"
            onClick={() => setNavbar(false)}
          >
            Todos los Productos
          </Link>{" "}
        </div>

        {/* <div
          onClick={() =>
            toast.error(
              "Estamos desarrollando esta sección. Por favor intente más tarde."
            )
          }
          className="relative group flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="text-md font-medium text-gray-500 hover:text-gray-800 transition-all">
            Categorías
          </span>
          <IoIosArrowDown className="w-4 h-4 text-gray-500 hover:text-gray-800 transition-all" />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full mt-2 w-[300px] right-0 p-2 bg-gray-100 rounded-lg shadow-xl z-50">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <li
                tabIndex={0}
                className="hover:bg-gray-300 text-black rounded-md py-2 px-6 text-center focus:outline-none focus:bg-gray-300"
                role="menuitem"
              >
                Option1
              </li>
              <li
                tabIndex={0}
                className="hover:bg-gray-300 text-black rounded-md py-2 px-6 text-center focus:outline-none focus:bg-gray-300"
                role="menuitem"
              >
                Option2
              </li>
              <li
                tabIndex={0}
                className="hover:bg-gray-300 text-black rounded-md py-2 px-6 text-center focus:outline-none focus:bg-gray-300"
                role="menuitem"
              >
                Option3
              </li>
            </ul>
          </div>
        </div> */}

        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://www.iseap.com.ar/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setNavbar(false)}
          >
            <Button className="bg-gray-300 text-gray-600">
              {" "}
              <GiAirplaneDeparture className="w-6 h-6 text-gray-600" /> Ir al
              Sitio Web
            </Button>
          </Link>

          <Link href="/cart" onClick={() => setNavbar(false)}>
            <Button className="relative bg-black text-white">
              {" "}
              <RiShoppingBag3Fill className="w-6 h-6 text-white" /> Carrito
              <div
                className={`absolute -top-2 -right-2 bg-blue-600 border-2 border-white w-6 h-6 rounded-full shadow-md text-white text-sm flex justify-center items-center transition-all font-bold ${
                  state.items.length !== 0 && "animate-bounce"
                }`}
              >
                {state.items.length}
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
