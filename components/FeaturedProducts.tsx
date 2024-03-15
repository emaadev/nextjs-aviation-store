import Image from "next/image";
import Link from "next/link";

import Product from "./product/FeaturedProduct";

interface FeaturedProductsProps {
  products: any;
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="relative flex flex-col justify-center items-center bg-gray-200 py-[50px] shadow-inner">
      <div className="flex flex-col justify-center items-center mb-[20px]">
        <span className="font-medium text-xl">Últimas Novedades</span>
        <h2 className="font-bold text-3xl">Productos Destacados</h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        {products.map((product: any, index: any) => (
          <div key={index} className="hover:shadow-lg transition-all">
            <Product product={product} />
          </div>
        ))}
      </div>

      <div className="relative m-auto mt-[50px]">
        <Link
          href="/products"
          className="h-[70px] bg-black text-center shadow-lg rounded-lg text-white text-md py-2 px-6 font-semibold"
        >
          Ver todos los productos →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
