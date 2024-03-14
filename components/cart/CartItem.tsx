"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";

export interface CartItemProps {
  product: any;
}

const CartItem = ({ product }: CartItemProps) => {
  const { state, dispatch } = useCart();
  console.log(product);

  const removeItem = (item: any) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={product.images[0].src}
          alt={product.name}
          className="object-contain w-full"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <Button
            onClick={() => removeItem({ id: product.id })}
            className="flex justify-center items-center bg-gray-200 rounded-full shadow-md"
          >
            <RxCross2 className="text-black" />
          </Button>
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex flex-col items-between gap-2">
            <p className="text-lg font-semibold text-black">{product.name}</p>
            <p className="text-sm text-gray-400">{product.description}</p>
          </div>

          <div className="mt-1 flex flex-col text-sm">
            <p className="text-black font-semibold ml-4 border-l border-gray-200 pl-4">
              ARS ${product.price}
            </p>

            <p className="text-black font-semibold ml-4 border-l border-gray-200 pl-4">
              Cantidad:{" "}
              {state.items.filter((item) => item.id === product.id).length}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
