import Image from "next/image";

import iPhone15ProImg from "@/public/apple-iphone-15-pro-1tb-blue-titanium.png";
import iPhone15ProMaxImg from "@/public/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import appleWatchUltra from "@/public/apple-watch-ultra-2.png";

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-200 py-[50px] shadow-inner">
      <div className="flex flex-col justify-center items-center mb-[20px]">
        <span className="font-bold text-xl">Most Recent</span>
        <h2 className="font-bold text-3xl">Featured Products</h2>
      </div>

      <div className="flex justify-center items-center gap-4">
        {/* Product */}
        <div className="flex justify-center items-center bg-white rounded-xl shadow-lg gap-10">
          <div className="w-[350px] flex flex-col justify-center items-start p-[20px]">
            <div className="m-auto w-[80%] bg-white object-contain mb-4 rounded-xl">
              <Image
                src={iPhone15ProImg}
                className="object-cover"
                alt="iPhone 15 Pro Img"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <h4 className="font-bold text-[19px]">SmartWatch iOS 2.14”</h4>
              <span className="text-gray-600 font-light italic text-[14px]">
                SmartWachs & Tech
              </span>
            </div>

            <div className="flex justify-start items-center gap-4 mb-[10px]">
              <p className="font-extrabold text-[22px]">$ 19.99</p>
              <span className="font-bold text-blue-600">
                6 product/s in stock
              </span>
            </div>

            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600" />
              <div className="w-8 h-8 rounded-full bg-gray-900" />
              <div className="w-8 h-8 rounded-full bg-gray-400" />
            </div>
          </div>
        </div>
        {/* Product */}
        <div className="flex justify-center items-center bg-white rounded-xl shadow-lg gap-10">
          <div className="w-[350px] flex flex-col justify-center items-start p-[20px]">
            <div className="m-auto w-[80%] bg-white object-contain mb-4 rounded-xl">
              <Image
                src={iPhone15ProMaxImg}
                className="object-cover"
                alt="iPhone 15 Pro Img"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <h4 className="font-bold text-[19px]">SmartWatch iOS 2.14”</h4>
              <span className="text-gray-600 font-light italic text-[14px]">
                SmartWachs & Tech
              </span>
            </div>

            <div className="flex justify-start items-center gap-4 mb-[10px]">
              <p className="font-extrabold text-[22px]">$ 19.99</p>
              <span className="font-bold text-blue-600">
                6 product/s in stock
              </span>
            </div>

            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600" />
              <div className="w-8 h-8 rounded-full bg-gray-900" />
              <div className="w-8 h-8 rounded-full bg-gray-400" />
            </div>
          </div>
        </div>
        {/* Product */}
        <div className="flex justify-center items-center bg-white rounded-xl shadow-lg gap-10">
          <div className="w-[350px] flex flex-col justify-center items-start p-[20px]">
            <div className="m-auto w-[80%] bg-white object-contain mb-4 rounded-xl">
              <Image
                src={appleWatchUltra}
                className="object-cover"
                alt="iPhone 15 Pro Img"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <h4 className="font-bold text-[19px]">SmartWatch iOS 2.14”</h4>
              <span className="text-gray-600 font-light italic text-[14px]">
                SmartWachs & Tech
              </span>
            </div>

            <div className="flex justify-start items-center gap-4 mb-[10px]">
              <p className="font-extrabold text-[22px]">$ 19.99</p>
              <span className="font-bold text-blue-600">
                6 product/s in stock
              </span>
            </div>

            <div className="flex justify-start items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600" />
              <div className="w-8 h-8 rounded-full bg-gray-900" />
              <div className="w-8 h-8 rounded-full bg-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
