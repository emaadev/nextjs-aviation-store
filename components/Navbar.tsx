/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full px-24 py-4 flex items-center justify-between h-20 bg-white shadow-md">
      <div className="flex justify-between items-center gap-4">
        <Image src="/logo.png" width="60" height="60" alt="ISEAP Logo" />
        <div className="flex flex-col">
          <h4 className="text-[25px] font-bold -mb-2">ISEAP's Store</h4>
          <span>Aeronautical Academy</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-16">
        <ul className="flex gap-6 justify-between font-medium">
          <li>T-Shirts</li>
          <li>Shoes</li>
          <li>Jeans</li>
        </ul>

        <div className="flex items-center justify-center gap-4">
          <button className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md font-semibold">
            Sign In
          </button>

          <button className="bg-black text-white py-2 px-4 rounded-md font-semibold">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
