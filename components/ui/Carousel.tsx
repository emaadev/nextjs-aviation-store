"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: any;
  interval?: number;
}

const Carousel = ({ images, interval = 3000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      {images.map((image: any, index: any) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt={`Airport Image ${index + 1}`}
            priority
            layout="fill"
          />
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 flex items-center justify-center gap-2 z-50">
        {images.map((_: any, index: any) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
