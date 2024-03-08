import Hero from "@/components/Hero";
import CategorySelector from "@/components/CategorySelector";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustedBrands from "@/components/shared/TrustedBrands";
import CompanyBenefits from "@/components/CompanyBenefits";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustedBrands />
      <CategorySelector />
      <FeaturedProducts />
      <CompanyBenefits />
    </main>
  );
}
