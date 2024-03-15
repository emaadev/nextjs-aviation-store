import { MdAirplanemodeActive } from "react-icons/md";

import categoryImage1 from "@/public/plane-banner.jpg";
import categoryImage2 from "@/public/plane-banner-2.jpg";
import categoryImage3 from "@/public/plane-banner-3.jpg";
import CategoryComponent from "./shared/CategorySection";

const CategorySection = () => {
  return (
    <section className="m-auto relative flex justify-center items-center w-full h-full pb-[100px]">
      {/* Dividers */}
      <div className="category-divider-1" />
      <div className="category-divider-2" />

      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center w-full lg:w-[90%]">
        <CategoryComponent
          title={"Maquetas de Aviones"}
          subtitle={"Excelente calidad de maquetas de aviones"}
          textLink={"Ver más →"}
          href={"/products"}
          image={categoryImage1}
        />

        <CategoryComponent
          title={"Tazas Personalizadas"}
          subtitle={"Encontrá las tazas que todo fanático debe tener"}
          textLink={"Ver más →"}
          href={"/products"}
          image={categoryImage2}
        />

        <CategoryComponent
          title={"Vestimenta Profesional"}
          subtitle={"Vestimenta de excelente calidad"}
          textLink={"Ver más →"}
          href={"/products"}
          image={categoryImage3}
        />
      </div>

      <div className="absolute flex justify-center items-center -bottom-5 left-[] w-[70px] h-[70px] rounded-full bg-white shadow-md z-[110]">
        <MdAirplanemodeActive className="text-gray-500 drop-shadow-xl rotate-[180deg] w-[40px] h-[40px]" />
      </div>
    </section>
  );
};

export default CategorySection;
