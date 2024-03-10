"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

import { LuExpand } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/product/${product?.id}`);
  };

  //   const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
  //     event.stopPropagation();

  //     previewModal.onOpen(product);
  //   };

  //   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
  //     event.stopPropagation();

  //     cart.addItem(product);
  //   };

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

        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-800 opacity-0 group-hover:opacity-100 rounded-b-xl transition" />

        {/* TODO: Preview Mode */}
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
          <div className="flex gap-x-6 justify-center">
            <Button className="bg-white">
              <LuExpand className="w-6 h-6 text-gray-900" />
            </Button>

            <Button className="bg-white">
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
          {product.stock} product/s in stock
        </span>
      </footer>
    </article>
  );
};

export default ProductCard;
