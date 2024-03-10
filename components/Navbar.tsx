/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Button from "@/components/ui/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-[999] w-full px-24 py-4 flex items-center justify-between h-20 bg-white shadow-md">
      <Link href="/" className="flex justify-between items-center gap-4">
        <Image src="/logo-navbar.png" width="60" height="60" alt="ISEAP Logo" />
        <div className="flex flex-col">
          <h4 className="text-[20px] font-bold -mb-1">ISEAP Tienda Oficial</h4>
          <span>Aeronautical Academy</span>
        </div>
      </Link>

      <div className="flex justify-between items-center gap-16">
        <ul className="flex gap-6 justify-between font-medium">
          <li>T-Shirts</li>
          <li>Shoes</li>
          <li>Jeans</li>
        </ul>

        <div className="flex items-center justify-center gap-4">
          <Button className="bg-gray-300 text-gray-600">Sign In</Button>

          <Button className="bg-black text-white">Cart</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
