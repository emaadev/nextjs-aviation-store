import React from "react";

import Button from "./ui/Button";
import BenefitCard from "./shared/BenefitCard";

import { BsSendCheckFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";

const CompanyBenefits = () => {
  return (
    <section className="m-auto flex justify-center items-center w-[80%] gap-20 py-[80px]">
      <aside className="flex flex-col justify-center items-start w-[30%]">
        <div className="text-left mb-[10px]">
          <span className="font-bold text-xl">Our Benefits</span>
          <h2 className="font-bold text-3xl">Why Choose Us</h2>
        </div>

        <p className="mb-[20px] font-medium">
          Your one-stop online destination for state-of-the-art aviation
          equipment and accessories. <br /> <br /> Browse our extensive product
          line designed for both amateur enthusiasts and professional pilots.
        </p>

        <Button className="bg-gray-300 text-gray-600">More Info</Button>
      </aside>

      <article className="flex justify-end items-center flex-wrap w-[40%] gap-x-8 gap-y-20">
        <BenefitCard
          icon={<BsSendCheckFill className="w-10 h-10 drop-shadow-lg" />}
          title={"Fast Delivery"}
          subtitle={
            "Enjoy free shipping on all orders over 200 with secure and timely delivery."
          }
        />

        <BenefitCard
          icon={<RiSecurePaymentFill className="w-10 h-10 drop-shadow-lg" />}
          title={"Secure Payment"}
          subtitle={
            "Your transactions are safe with us. We use encrypted SSL security for 100% protection."
          }
        />

        <BenefitCard
          icon={<BiSolidOffer className="w-10 h-10 drop-shadow-lg" />}
          title={"Exclusive Deals"}
          subtitle={
            "Access special discounts and offers available only to the SkyMart community."
          }
        />

        <BenefitCard
          icon={<FaTruckFast className="w-10 h-10 drop-shadow-lg" />}
          title={"Whatever You Want"}
          subtitle={"We send you the products along the entire countrie."}
        />
      </article>
    </section>
  );
};

export default CompanyBenefits;
