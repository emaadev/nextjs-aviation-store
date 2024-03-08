import Image from "next/image";
import { MdAirplanemodeActive } from "react-icons/md";

import categoryImage1 from "@/public/banner-1.jpg";
import CategoryComponent from "./shared/CategorySection";

const CategorySection = () => {
  return (
    <section className="m-auto relative flex justify-center items-center w-full h-full pb-[100px]">
      {/* Dividers */}
      <div className="absolute w-[600px] h-[600px] bg-[#0047CC] -bottom-40 left-40 rounded-full blur-2xl opacity-10 -z-[1]" />
      <div className="absolute w-[600px] h-[600px] bg-[#3F00CC] -bottom-40 right-40 rounded-full blur-2xl opacity-10 -z-[1]" />

      <div className="flex justify-center items-center w-[90%]">
        <CategoryComponent
          title={"Category"}
          subtitle={"Find the best [category] products here."}
          textLink={"View more →"}
          href={"/"}
          image={categoryImage1}
        />

        <CategoryComponent
          title={"Category"}
          subtitle={"Find the best [category] products here."}
          textLink={"View more →"}
          href={"/"}
          image={categoryImage1}
        />

        <CategoryComponent
          title={"Category"}
          subtitle={"Find the best [category] products here."}
          textLink={"View more →"}
          href={"/"}
          image={categoryImage1}
        />
      </div>

      <div className="absolute flex justify-center items-center -bottom-5 left-[] w-[70px] h-[70px] rounded-full bg-white shadow-md z-[110]">
        <MdAirplanemodeActive className="text-gray-500 drop-shadow-xl rotate-[180deg] w-[40px] h-[40px]" />
      </div>
    </section>
  );
};

export default CategorySection;
