"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: any;
}

const Product = ({ product }: ProductProps) => {
  const router = useRouter();

  const { id, stock, images, name, category, price, colors } = product;

  const isOutOfStock = stock === 0;

  const handleClick = () => {
    router.push(`/products/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center bg-white rounded-xl shadow-lg gap-10 cursor-pointer"
    >
      <div className="relative w-[350px] h-[450px] flex flex-col justify-center items-start p-[20px]">
        {isOutOfStock && (
          <div className="absolute top-4 right-4 px-6 py-1 shadow-lg rounded-lg bg-red-600 text-white text-sm text-center font-semibold">
            OUT OF STOCK
          </div>
        )}

        <div className="m-auto w-full bg-white object-contain mb-4 rounded-xl">
          <Image
            src={images[0]}
            className="object-cover"
            alt="iPhone 15 Pro Img"
          />
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
    </div>
  );
};

export default Product;
