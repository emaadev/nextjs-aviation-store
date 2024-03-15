"use client";

import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

import { MdAddShoppingCart } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

interface ProductInfoProps {
  product: any;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { state, dispatch } = useCart();

  const addItem = (item: any) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    toast.success("Producto añadido al carrito!");
  };

  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <section className="mt-3 flex items-end justify-between">
        <h2 className="text-2xl text-gray-900">
          ARS <span className="font-semibold">$ {product.price}</span>
        </h2>
      </section>

      <section className="flex flex-col mt-4">
        <p className="text-lg font-light">{product.description}</p>
      </section>

      {product.stock === 0 && (
        <section className="flex justify-start items-center gap-2 mt-4">
          <RiErrorWarningLine className="w-10 h-10 text-red-700" />
          <span className="text-red-700">
            Este producto podría estar agotado. Póngase en contacto con nosotros
            antes de comprarlo.
          </span>
        </section>
      )}

      <hr className="my-4" />

      <section className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-black">Categoría: </h4>
          <span>{product.category}</span>
        </div>

        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-black">Color/es: </h4>

          <div className="flex gap-1">
            {product.colors.map((color: any, index: any) => (
              <span
                key={index}
                className={`h-6 w-6 rounded-full border`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <h4 className="font-semibold text-black">Stock:</h4>

          <span
            className={`font-semibold ${
              product.stock === 0 ? "text-red-600" : "text-blue-600"
            }`}
          >
            {product.stock} productos en stock
          </span>
        </div>

        <div className="mt-10 flex items-center gap-x-3">
          {/* Add Functionality */}
          <Button
            className={`bg-gray-900 text-white ${
              product.stock === 0 && "opacity-25"
            }`}
            onClick={() => addItem({ id: product.id })}
            disabled={product.stock === 0}
          >
            <MdAddShoppingCart className="w-5 h-5" />
            Añadir al Carrito
          </Button>
        </div>
      </section>
    </article>
  );
};

export default ProductInfo;
