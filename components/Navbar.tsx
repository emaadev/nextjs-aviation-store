/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed z-[990] w-full px-24 py-4 flex items-center justify-between h-20 bg-white shadow-md">
      <Link href="/" className="flex justify-between items-center gap-4">
        <Image src="/logo-navbar.png" width="60" height="60" alt="ISEAP Logo" />
        <div className="flex flex-col">
          <h4 className="text-[20px] font-bold -mb-1">ISEAP Tienda Oficial</h4>
          <span>Aeronautical Academy</span>
        </div>
      </Link>

      <div className="flex justify-between items-center gap-16">
        <div className="relative group flex items-center justify-center gap-2 cursor-pointer">
          <span className="text-md font-medium">Categories</span>{" "}
          <IoIosArrowDown className="w-4 h-4" />
          <div className="opacity-0 group-hover:opacity-100 w-[250px] absolute top-10 right-0 p-2 bg-gray-100/90 backdrop-blur-sm rounded-lg shadow-xl z-[999] transition-all py-4">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <li>Option1</li>
              <li>Option2</li>
              <li>Option3</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button className="bg-gray-300 text-gray-600">
            {" "}
            <GiAirplaneDeparture className="w-6 h-6 text-gray-600" /> Go To
            Website
          </Button>

          <Button className="bg-black text-white">
            {" "}
            <RiShoppingBag3Fill className="w-6 h-6 text-white" /> Cart
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
