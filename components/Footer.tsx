import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full py-[50px] flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-around">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src="/logo.png" width="180" height="180" alt="ISEAP Logo" />

          <div className="flex gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/emanuelnunez/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="w-8 h-8 text-white hover:text-white/80 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/emanuelnunez/"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter className="w-8 h-8 text-white hover:text-white/80 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/emanuelnunez/"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill className="w-8 h-8 text-white hover:text-white/80 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/emanuelnunez/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp className="w-8 h-8 text-white hover:text-white/80 transition-all" />
            </a>
          </div>
        </div>

        <small className="text-[10px] italic text-white">
          © ISEAP Aeronautical Academy. All Right Reserved.
          <br />
          Desgined, developed and Mainteined by{" "}
          <a
            href="https://www.linkedin.com/in/emanuelnunez/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Emanuel Nuñez
          </a>
          .
        </small>
      </div>

      <div className="flex items-center gap-16 mb-10">
        <div>
          <p className="text-white font-semibold mb-2">Categorías</p>

          <ul className="flex flex-col gap-2">
            <li className="text-white">
              <Link href="/products">Todos los productos</Link>
            </li>
            {/* <li className="text-white">
              <Link href="/products">Todos los productos</Link>
            </li>
            <li className="text-white">
              <Link href="/products">Todos los productos</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
