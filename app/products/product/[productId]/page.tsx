import ProductInfo from "@/components/product/ProductInfo";
import Gallery from "@/components/product/ProductGallery";
import ProductsList from "@/components/product/ProductList";

import { allProducts } from "@/constants/data";

export interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = allProducts.find((item) => item.id === params.productId);
  const suggestedProducts = allProducts.filter(
    (item) => item.id !== params.productId
  );

  return (
    <main className="bg-white">
      <section className="mx-auto py-[100px] px-[10px] lg:px-[50px]">
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images} />

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>

          <hr className="my-10" />

          <ProductsList
            title="Productos Relacionados"
            products={suggestedProducts}
          />
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
