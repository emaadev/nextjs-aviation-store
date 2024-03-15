"use client";

import { useState } from "react";
import Image from "next/image";

import { allProducts } from "@/constants/data";
import ProductCard from "@/components/product/ProductCard";
import Filter from "@/components/ui/Filter";

import banner1 from "/public/banner-1.jpg";
import { MdManageSearch } from "react-icons/md";

const AllProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const categories = [
    "All",
    ...Array.from(new Set(allProducts.map((product) => product.category))),
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto pt-[50px]">
        <Image
          src={banner1}
          className="object-cover w-full h-[300px]"
          alt="Banner Image"
        />
      </section>

      <section className="mx-auto pb-[100px] px-[50px]">
        <div className="flex justify-between items-end px-4 pt-10 pb-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold">Todos los productos</h2>
            <p className="text-md">
              Esta es la descripción de la página donde estarán todos los
              productos
            </p>
          </div>

          <div className="flex justify-start items-center gap-4 px-4 py-1 w-1/4 bg-gray-200 rounded-full">
            <MdManageSearch className="text-gray-600 w-7 h-7" />
            <input
              type="text"
              placeholder="Escribe algo aquí..."
              className="bg-transparent w-full h-full text-gray-600 placeholder:text-gray-400 font-medium"
            />
          </div>
        </div>

        <hr className="mb-10" />

        <aside className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-5">
            <div className="hidden lg:block">
              <Filter
                name="Categorías"
                filters={categories}
                onFilter={handleFilter}
                activeCategory={activeCategory}
              />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {filteredProducts.length === 0 ? (
                <div>No products found.</div>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default AllProductsPage;
