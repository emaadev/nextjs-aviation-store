import Image from "next/image";
import Link from "next/link";

import bannerImg1 from "@/public/banner-1.jpg";
import bannerImg2 from "@/public/banner-2.jpg";
import bannerImg3 from "@/public/banner-3.jpg";
import Carousel from "./ui/Carousel";

const bannerImages = [bannerImg1, bannerImg2, bannerImg3];

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh]">
      <Carousel images={bannerImages} />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 to-gray-800/40" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center px-[30px] lg:px-[100px]">
        <h1 className="text-white text-3xl lg:text-6xl font-bold mb-2">
          Despegá con estilo!
        </h1>
        <p className="w-[90%] lg:w-[50%] text-white font-light text-md lg:text-xl mb-4">
          Conocé nuestra exclusiva colección de productos que te harán sentir
          parte de nuestra comunidad aeronáutica con máxima comodidad y estilo.{" "}
          <br />
          <br />
          ¡Siente el cielo más cerca que nunca!
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <Link
            href="/products"
            className="flex justify-center items-center gap-2 py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition bg-blue-500 text-white"
          >
            Ver todos los productos →
          </Link>

          <Link
            href="https://iseap.com.ar"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition border border-white text-white hover:opacity-80"
          >
            Ir al Sitio Web ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
