"use client";

import Button from "@/components/ui/Button";
import { MdAddShoppingCart } from "react-icons/md";

import { RiErrorWarningLine } from "react-icons/ri";

interface ProductInfoProps {
  product: any;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  // Add to Cart Functionality
  //   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
  //     event.stopPropagation();

  //     cart.addItem(data);
  //   };

  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <section className="mt-3 flex items-end justify-between">
        <h2 className="text-2xl text-gray-900">
          ARS <span className="font-semibold">$ {product.price}</span>
        </h2>
      </section>

      <section className="flex flex-col mt-4">
        <p className="text-lg font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          reiciendis quod unde illum molestiae blanditiis libero ducimus
          incidunt, error enim ab, id esse exercitationem!
        </p>
      </section>

      {/* "Out of stock" alert text */}
      <section className="flex justify-start items-center gap-2 mt-4">
        <RiErrorWarningLine className="w-6 h-6 text-red-700" />
        <span className="text-red-700">
          This product could be out of stock. Please contact us before you buy
          it.
        </span>
      </section>

      <hr className="my-4" />

      <section className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-black">Category: </h4>
          <span>{product.category}</span>
        </div>

        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-black">Color/s: </h4>

          <div className="flex gap-1">
            {product.colors.map((color: string[], index: any) => (
              <span
                key={index}
                className={`h-6 w-6 rounded-full border ${color}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-x-3">
          {/* Add Functionality */}
          <Button className="bg-gray-900 text-white">
            <MdAddShoppingCart className="w-5 h-5" />
            Añadir al Carrito
          </Button>
        </div>
      </section>
    </article>
  );
};

export default ProductInfo;
