"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import { LuExpand } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";

interface FeaturedProduct {
  product: any;
}

const FeaturedProduct = ({ product }: FeaturedProduct) => {
  const router = useRouter();

  const { id, stock, images, name, category, price, colors } = product;

  const isOutOfStock = stock === 0;

  const handleClick = () => {
    router.push(`/products/product/${id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="flex justify-center items-center bg-white rounded-xl shadow-lg gap-10 cursor-pointer"
    >
      <div className="relative w-[350px] h-[450px] flex flex-col justify-center items-start p-[20px]">
        {isOutOfStock && (
          <div className="absolute top-4 right-4 px-6 py-1 shadow-lg rounded-lg bg-red-600 text-white text-sm text-center font-semibold z-[10]">
            SIN STOCK
          </div>
        )}

        <div className="relative group m-auto w-full bg-white object-contain mb-4 rounded-xl">
          <Image
            src={images[0]}
            className="object-cover"
            alt="iPhone 15 Pro Img"
          />

          {/* TODO: Preview Mode */}
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-800 opacity-0 group-hover:opacity-100 rounded-b-xl transition" />

          <div className="opacity-0 group-hover:opacity-100 transition-all absolute w-full px-6 bottom-5 ">
            <div className="flex gap-x-6 justify-center">
              <Button className="bg-white">
                <LuExpand className="w-6 h-6 text-gray-900" />
              </Button>

              <Button className="bg-white">
                <MdAddShoppingCart className="w-6 h-6 text-gray-900" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <h4 className="font-bold text-[19px]">{name}</h4>
          <span className="text-gray-600 font-light italic text-[14px]">
            {category}
          </span>
        </div>

        <div className="flex justify-start items-center gap-4 mb-[10px]">
          <p className="font-extrabold text-[22px]">$ {price}</p>
          <span
            className={`font-bold ${
              stock === 0 ? "text-red-600" : "text-blue-600"
            }`}
          >
            {stock} product/s in stock
          </span>
        </div>

        <div className="flex justify-start items-center gap-2">
          {colors.map((color: any, index: any) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full border-[1px] border-gray-300 ${color}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProduct;
