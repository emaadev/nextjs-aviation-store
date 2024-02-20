import Image from "next/image";

import banner from "@/public/banner-1.jpg";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="relative w-full">
      <Image
        className="w-full object-contain bg-[200px]"
        src={banner}
        alt="Airport Image"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 to-gray-800/40" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center px-[100px]">
        <div className="relative">
          <div className="absolute -top-6 left-0 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>

        <h1 className="text-white text-6xl font-bold mb-2">
          Tienda #1 en Aeronáutica
        </h1>
        <p className="w-[50%] text-white font-light text-2xl mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          ratione culpa.
        </p>

        <div className="flex gap-4">
          <Button className="bg-blue-500 text-white">
            View all the Products
          </Button>

          <Button className="border border-white text-white">
            Go to website
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
