import Image from "next/image";

import categoryImage1 from "@/public/banner-1.jpg";

const CategorySelector = () => {
  return (
    <div className="m-auto relative flex justify-center w-[90%] h-full mb-[100px]">
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
    </div>
  );
};

export default CategorySelector;
