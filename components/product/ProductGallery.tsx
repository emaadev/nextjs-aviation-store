"use client";

import { useState } from "react";
import Image from "next/image";

export interface GalleryProps {
  images: any;
}

const Gallery = ({ images }: GalleryProps) => {
  const [imageSelected, setImageSelected] = useState(images[0]);

  const handleImage = (image: any) => {
    setImageSelected(image);
  };

  return (
    <section className="flex flex-col-reverse">
      <article className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <div className="grid grid-cols-5 gap-2">
          {images.map((image: any, index: any) => (
            <div onClick={() => handleImage(image)} key={index}>
              <div
                className={`aspect-square relative w-full h-full sm:rounded-lg overflow-hidden cursor-pointer ${
                  imageSelected === image && "border-[2px] border-gray-500"
                }`}
              >
                <Image
                  src={image}
                  alt="Single Image"
                  fill
                  className="w-full object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </article>

      <aside className="w-full flex justify-center items-center">
        <Image src={imageSelected} alt="Product Image" />
      </aside>
    </section>
  );
};

export default Gallery;
