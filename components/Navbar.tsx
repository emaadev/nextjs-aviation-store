"use client";

import Image from "next/image";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { state, dispatch } = useCart();

  return (
    <nav className="fixed z-[990] w-full px-24 py-4 flex items-center justify-between h-20 bg-white/90 backdrop-blur-sm shadow-md">
      <Link href="/" className="flex justify-between items-center gap-4">
        <Image src="/logo-navbar.png" width="60" height="60" alt="ISEAP Logo" />
        <div className="flex flex-col">
          <h4 className="text-[20px] font-bold -mb-1">ISEAP Tienda Oficial</h4>
          <span>Aeronautical Academy</span>
        </div>
      </Link>

      <div className="flex justify-between items-center gap-16">
        <div className="relative flex items-center justify-center gap-2 cursor-pointer">
          <Link href="/products" className="text-md font-medium">
            All Products
          </Link>{" "}
        </div>

        <div className="relative group flex items-center justify-center gap-2 cursor-pointer">
          <span className="text-md font-medium">Categories</span>
          <IoIosArrowDown className="w-4 h-4" />
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
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://www.iseap.com.ar/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-gray-300 text-gray-600">
              {" "}
              <GiAirplaneDeparture className="w-6 h-6 text-gray-600" /> Go To
              Website
            </Button>
          </Link>

          <Link href="/cart">
            <Button className="relative bg-black text-white">
              {" "}
              <RiShoppingBag3Fill className="w-6 h-6 text-white" /> Cart
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
