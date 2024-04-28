import Hero from "@/components/Hero";
import CategorySelector from "@/components/CategorySelector";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustedBrands from "@/components/shared/TrustedBrands";
import CompanyBenefits from "@/components/CompanyBenefits";
import FAQ from "@/components/FAQ";

import { allProducts } from "@/constants/data";

export default function Home() {
  const featuredProducts = allProducts.filter(
    (product) => product.isFeatured === true
  );

  return (
    <main className="relative w-full">
      <Hero />
      <TrustedBrands />
      <CategorySelector />
      <FeaturedProducts products={featuredProducts} />
      <CompanyBenefits />
      <FAQ />
    </main>
  );
}
