import iPhone15ProImg from "@/public/apple-iphone-15-pro-1tb-blue-titanium.png";
import iPhone15ProMaxImg from "@/public/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import appleWatchUltra from "@/public/apple-watch-ultra-2.png";

export const allProducts = [
  {
    id: "hdh328dhqwiond3nd13",
    name: "Laptop",
    description:
      "15-inch laptop with high-resolution display and powerful performance for professionals.",
    category: "Laptop",
    price: 999.99,
    isFeatured: true,
    stock: 1,
    colors: ["bg-blue-600", "bg-gray-900", "bg-gray-400"],
    images: [iPhone15ProImg],
  },
  {
    id: "hdudhuwiqdu12bdu21b2121221",
    name: "Smartphone",
    description:
      "Sleek and modern smartphone with a large screen, long-lasting battery, and high-quality camera.",
    category: "iPhone",
    price: 699.99,
    isFeatured: true,
    stock: 1,
    colors: ["bg-blue-600", "bg-gray-900", "bg-gray-400"],
    images: [iPhone15ProMaxImg],
  },
  {
    id: "hdudhuwiqdu12bdu21bdu",
    name: "Smartphone",
    description:
      "Sleek and modern smartphone with a large screen, long-lasting battery, and high-quality camera.",
    category: "iPhone",
    price: 699.99,
    isFeatured: false,
    stock: 1,
    colors: ["bg-blue-600", "bg-gray-900", "bg-gray-400"],
    images: [iPhone15ProMaxImg],
  },
  {
    id: "dqwbuidbwuiqdiqwbdqw",
    name: "Tablet",
    description:
      "Portable tablet with a vivid display, perfect for browsing, reading, and entertainment on the go.",
    category: "Technology",
    price: 499.99,
    isFeatured: true,
    stock: 1,
    colors: ["bg-blue-600", "bg-gray-900", "bg-gray-400"],
    images: [appleWatchUltra, iPhone15ProMaxImg, iPhone15ProMaxImg],
  },
  {
    id: "dhwuqbdu21bud1b2ud81",
    name: "Smartwatch",
    description:
      "Stylish smartwatch with fitness tracking, notifications, and customizable watch faces.",
    category: "Technology",
    price: 299.99,
    isFeatured: false,
    stock: 1,
    colors: ["bg-blue-600", "bg-gray-900", "bg-gray-400"],
    images: [appleWatchUltra],
  },
  {
    id: "dqwudbuiwdbuwqbduqdu1",
    name: "Wireless Headphones",
    description:
      "Comfortable wireless headphones with noise cancellation and high-quality sound.",
    category: "Headphones",
    price: 199.99,
    isFeatured: false,
    stock: 1,
    colors: ["bg-blue-600", "bg-gray-900", "bg-gray-400"],
    images: [appleWatchUltra],
  },
];
