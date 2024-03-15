"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

import { LuExpand } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { state, dispatch } = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/product/${product?.id}`);
  };

  const addItemToCart = (item: any) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    toast.success("Producto añadido al carrito!");
  };

  return (
    <article
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <header className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={product?.images?.[0]}
          fill
          sizes="1000"
          alt={product?.name}
          className="object-contain w-full rounded-md"
        />

        {/* TODO: Preview Mode */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-800 opacity-0 group-hover:opacity-100 rounded-b-xl transition" />

        <div className="opacity-0 group-hover:opacity-100 transition-all absolute w-full px-6 bottom-5 ">
          <div className="flex gap-x-6 justify-center">
            <Button className="bg-white">
              <LuExpand className="w-6 h-6 text-gray-900" />
            </Button>

            <Button
              className="bg-white"
              onClick={() => addItemToCart({ id: product.id })}
            >
              <MdAddShoppingCart className="w-6 h-6 text-gray-900" />
            </Button>
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
      </section>

      <footer className="flex items-center justify-start gap-2">
        <span className="font-bold">ARS $ {product?.price}</span>
        <span
          className={`font-semibold text-sm ${
            product.stock === 0 ? "text-red-600" : "text-blue-600"
          }`}
        >
          {product.stock} productos en stock
        </span>
      </footer>
    </article>
  );
};

export default ProductCard;
