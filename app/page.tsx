import Hero from "@/components/Hero";
import CategorySelector from "@/components/CategorySelector";
import FeaturedProducts from "@/components/shared/FeaturedProducts";
import TrustedBrands from "@/components/shared/TrustedBrands";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustedBrands />
      <CategorySelector />
      <FeaturedProducts />
    </main>
  );
}
