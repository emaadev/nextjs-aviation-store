import ProductCard from "@/components/product/ProductCard";

interface ProductsListProps {
  title?: string;
  products: any;
}

const ProductsList = ({ title, products }: ProductsListProps) => {
  return (
    <section className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {products.length === 0 ? (
        <div>
          <h2>No results.</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsList;
