import Image from "next/image";
import Link from "next/link";

import Product from "./shared/Product";

import iPhone15ProImg from "@/public/apple-iphone-15-pro-1tb-blue-titanium.png";
import iPhone15ProMaxImg from "@/public/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import appleWatchUltra from "@/public/apple-watch-ultra-2.png";

const FeaturedProducts = () => {
  return (
    <section className="relative flex flex-col justify-center items-center bg-gray-200 py-[50px] shadow-inner">
      <div className="flex flex-col justify-center items-center mb-[20px]">
        <span className="font-bold text-xl">Most Recent</span>
        <h2 className="font-bold text-3xl">Featured Products</h2>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Product
          isOutOfStock={false}
          title={"SmartWatch iOS 2.14”"}
          category={"SmartWachs & Tech"}
          price={19.99}
          colors={["bg-blue-600", "bg-gray-900", "bg-gray-400"]}
          image={iPhone15ProImg}
          productsLeft={6}
        />

        <Product
          isOutOfStock={true}
          title={"SmartWatch iOS 2.14”"}
          category={"SmartWachs & Tech"}
          price={19.99}
          colors={["bg-blue-600", "bg-gray-900", "bg-gray-400"]}
          image={iPhone15ProMaxImg}
          productsLeft={6}
        />

        <Product
          isOutOfStock={true}
          title={"SmartWatch iOS 2.14”"}
          category={"SmartWachs & Tech"}
          price={19.99}
          colors={["bg-blue-600", "bg-gray-900", "bg-gray-400"]}
          image={appleWatchUltra}
          productsLeft={6}
        />
      </div>

      <div className="relative m-auto mt-[50px]">
        <Link
          href="/"
          className="h-[70px] bg-black text-center shadow-lg rounded-lg text-white text-md py-2 px-6 font-semibold"
        >
          See All Products →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
