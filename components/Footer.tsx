import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full h-[400px] bg-footer-texture flex justify-around">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image src="/logo.png" width="180" height="180" alt="ISEAP Logo" />

          <div className="flex mb-4">
            <a href="" className="">
              <Image
                src="/facebook.png"
                width="40"
                height="40"
                alt="facebook icon"
              />
            </a>
            <a href="" className="">
              <Image
                src="/instagram.png"
                width="40"
                height="40"
                alt="instagram icon"
              />
            </a>
            <a href="" className="">
              <Image
                src="/whatsapp.png"
                width="40"
                height="40"
                alt="whatsapp icon"
              />
            </a>
            <a href="" className="">
              <Image src="/x.png" width="40" height="40" alt="x icon" />
            </a>
          </div>
        </div>

        <small className="text-[10px] italic text-gray-600">
          © ISEAP Aeronautical Academy. All Right Reserved.
          <br />
          Desgined, developed and Mainteined by Emanuel Nuñez Nuñez.
        </small>
      </div>

      <div className="flex items-center gap-16">
        <div>
          <p className="text-blue-500 font-semibold mb-2">Category</p>

          <ul className="flex flex-col gap-2">
            <li className="text-gray-600">Item</li>
            <li className="text-gray-600">Item</li>
            <li className="text-gray-600">Item</li>
          </ul>
        </div>

        <div>
          <p className="text-blue-500 font-semibold mb-2">Category</p>

          <ul className="flex flex-col gap-2">
            <li className="text-gray-600">Item</li>
            <li className="text-gray-600">Item</li>
            <li className="text-gray-600">Item</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
