"use client";

import { useEffect, useState } from "react";

import { useCart } from "@/context/CartContext";
import { allProducts } from "@/constants/data";

import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  isFeatured: boolean;
  stock: number;
  colors: string[];
  images: any;
}

const CartPage = () => {
  const { state } = useCart();
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const updatedCartProducts = state.items
      .map((item) => {
        return allProducts.find((product) => product.id === item.id);
      })
      .filter((product) => product !== undefined) as Product[];

    setCartProducts(updatedCartProducts);
  }, [state.items]);

  return (
    <main className="py-[100px] m-auto w-[90%]">
      <section>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <hr className="w-full mt-4" />

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cartProducts.length === 0 && (
                <p className="text-neutral-500 ">No items added to cart</p>
              )}

              <ul>
                {cartProducts.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ul>
            </div>

            <OrderSummary />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
