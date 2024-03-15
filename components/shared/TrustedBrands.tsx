"use client";

import Image from "next/image";

import adidas from "@/public/adidas.jpg";
import amazon from "@/public/amazon.png";
import apple from "@/public/apple.jpg";
import channel from "@/public/channel.jpg";
import jaguar from "@/public/jaguar.png";
import lacoste from "@/public/lacoste.jpg";
import luisVitton from "@/public/luis-vitton.jpg";
import nike from "@/public/nike.jpg";

import styles from "./TrustedBrands.module.css";

const TrustedBrandsImages = [
  adidas,
  amazon,
  apple,
  channel,
  jaguar,
  lacoste,
  luisVitton,
  nike,

  adidas,
  amazon,
  apple,
  channel,
  jaguar,
  lacoste,
  luisVitton,
  nike,
];

const TrustedBrands = () => {
  return (
    <div className="relative m-auto bg-white w-[90%] lg:w-[70%] h-60 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="font-bold text-[25px] lg:text-[35px]">
        Nuestros Partners
      </h2>

      <div className="absolute top-0 left-0 w-[50px] lg:w-[200px] h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-[50px] lg:w-[200px] h-full bg-gradient-to-r from-transparent to-white z-10" />

      <div className={styles.scroller}>
        {TrustedBrandsImages.map((item, index) => (
          <Image
            src={item}
            alt="Brand Image"
            className="w-[150px] object-cover"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
