"use client";

import Image from "next/image";

import brand1 from "@/public/brands/brands-1.png";
import brand2 from "@/public/brands/brands-2.png";
import brand3 from "@/public/brands/brands-3.png";
import brand4 from "@/public/brands/brands-4.png";
import brand5 from "@/public/brands/brands-5.png";
import brand6 from "@/public/brands/brands-6.png";
import brand7 from "@/public/brands/brands-7.png";

import styles from "./TrustedBrands.module.css";

const TrustedBrandsImages = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
];

const TrustedBrands = () => {
  return (
    <div className="relative m-auto bg-white w-[90%] lg:w-[70%] h-60 flex flex-col justify-center items-center overflow-hidden">
      <h2 className="font-bold text-[25px] lg:text-[35px]">
        Alcanzá tus Sueños
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
