import Image from "next/image";

import categoryImage1 from "@/public/banner-1.jpg";
import { MdAirplanemodeActive } from "react-icons/md";

const CategorySelector = () => {
  return (
    <section className="m-auto relative flex justify-center items-center w-full h-full pb-[100px]">
      {/* Dividers */}
      <div className="absolute w-[600px] h-[600px] bg-[#0047CC] -bottom-40 left-40 rounded-full blur-2xl opacity-10 -z-[1]" />
      <div className="absolute w-[600px] h-[600px] bg-[#3F00CC] -bottom-40 right-40 rounded-full blur-2xl opacity-10 -z-[1]" />

      <div className="relative w-[30%] h-[500px] hover:w-full transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

        <div className="absolute top-1/3 left-0 p-6 text-white">
          <h4 className="text-3xl font-bold mb-2">Category</h4>
          <p className="text-xl italic mb-2">
            Find the best [category] products here.
          </p>
          <a href="" className="hover:underline italic">
            View more →
          </a>
        </div>

        <Image
          src={categoryImage1}
          className="w-full h-full object-cover"
          alt="Category Image"
        />
      </div>

      <div className="relative w-[30%] h-[500px] hover:w-full transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

        <div className="absolute top-1/3 left-0 p-6 text-white">
          <h4 className="text-3xl font-bold mb-2">Category</h4>
          <p className="text-xl italic mb-2">
            Find the best [category] products here.
          </p>
          <a href="" className="hover:underline italic">
            View more →
          </a>
        </div>

        <Image
          src={categoryImage1}
          className="w-full h-full object-cover"
          alt="Category Image"
        />
      </div>

      <div className="relative w-[30%] h-[500px] hover:w-full transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

        <div className="absolute top-1/3 left-0 p-6 text-white">
          <h4 className="text-3xl font-bold mb-2">Category</h4>
          <p className="text-xl italic mb-2">
            Find the best [category] products here.
          </p>
          <a href="" className="hover:underline italic">
            View more →
          </a>
        </div>

        <Image
          src={categoryImage1}
          className="w-full h-full object-cover"
          alt="Category Image"
        />
      </div>

      <div className="absolute flex justify-center items-center -bottom-5 left-[] w-[70px] h-[70px] rounded-full bg-white shadow-md z-[110]">
        <MdAirplanemodeActive className="text-gray-500 drop-shadow-xl rotate-[180deg] w-[40px] h-[40px]" />
      </div>
    </section>
  );
};

export default CategorySelector;
