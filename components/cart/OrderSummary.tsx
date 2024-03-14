"use client";

import { useCart } from "@/context/CartContext";

import Button from "../ui/Button";

import { allProducts } from "@/constants/data";

const OrderSummary = () => {
  const { state, dispatch } = useCart();

  const cartProducts = state.items
    .map((item) => {
      return allProducts.find((product) => product.id === item.id);
    })
    .filter((product) => product !== undefined);

  const totalCost = cartProducts.reduce((total, product: any) => {
    return total + product.price;
  }, 0);

  const removeAllItems = () => {
    dispatch({
      type: "REMOVE_ALL_ITEMS",
      payload: "",
    });
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 shadow-md px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-bold text-gray-900">Resumen de la orden</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Subtotal</div>

          <span>ARS ${totalCost}</span>
        </div>
      </div>

      <div className="flex flex-col mt-6 gap-4">
        <Button
          disabled={state.items.length === 0}
          //   onClick={onCheckout}
          className={`w-full bg-gray-900 text-white ${
            state.items.length === 0 && "opacity-40"
          }`}
        >
          Go to Checkout
        </Button>

        <Button
          disabled={state.items.length === 0}
          onClick={() => removeAllItems()}
          className={`w-full bg-transparent border border-gray-300 text-black ${
            state.items.length === 0 && "opacity-40"
          }`}
        >
          Remove All Products
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
