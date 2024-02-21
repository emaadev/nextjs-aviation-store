import Hero from "@/components/Hero";
import CategorySelector from "@/components/shared/CategorySelector";
import TrustedBrands from "@/components/shared/TrustedBrands";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustedBrands />
      <CategorySelector />
    </main>
  );
}
