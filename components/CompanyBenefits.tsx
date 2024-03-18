"use client";

import React from "react";

import Button from "./ui/Button";
import BenefitCard from "./shared/BenefitCard";

import { BsSendCheckFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";
import Link from "next/link";

const CompanyBenefits = () => {
  return (
    <section className="m-auto flex flex-col lg:flex-row justify-center items-center w-full lg:w-[80%] gap-20 py-[80px]">
      <aside className="flex flex-col justify-center items-start w-[80%] lg:w-[30%]">
        <div className="text-left mb-[10px]">
          <span className="font-medium text-xl">Nuestros Servicios</span>
          <h2 className="font-bold text-3xl">Por Qué Elegirnos</h2>
        </div>

        <p className="mb-[20px] font-medium">
          Su destino único en línea para equipos y accesorios de aviación de
          última generación.
          <br />
          <br />
          Explore nuestra amplia gama de productos diseñados tanto para
          aficionados como para pilotos profesionales.
        </p>

        <Link
          href="https://iseap.com.ar"
          target="_blank"
          className="bg-gray-300 text-gray-600 flex justify-center items-center gap-2 py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition"
        >
          Más Info
        </Link>
      </aside>

      <article className="flex flex-row justify-center lg:items-center flex-wrap w-[80%] lg:w-[40%] gap-x-2 lg:gap-x-8 gap-y-20">
        <BenefitCard
          icon={<BsSendCheckFill className="w-10 h-10 drop-shadow-lg" />}
          title={"Rápido como en Avión"}
          subtitle={
            "Enviamos a todo el país con la mayor velocidad y seguridad en los envíos."
          }
        />

        <BenefitCard
          icon={<RiSecurePaymentFill className="w-10 h-10 drop-shadow-lg" />}
          title={"Pagos Seguros"}
          subtitle={
            "Sus transacciones están seguras con nosotros. Utilizamos seguridad SSL encriptada para una protección del 100%."
          }
        />

        <BenefitCard
          icon={<BiSolidOffer className="w-10 h-10 drop-shadow-lg" />}
          title={"Ofertas Exclusivas"}
          subtitle={
            "Acceda a descuentos especiales en nuestros Cursos Oficiales con Certificado Oficial de ANAC."
          }
        />

        <BenefitCard
          icon={<FaTruckFast className="w-10 h-10 drop-shadow-lg" />}
          title={"A dónde estés, llegamos"}
          subtitle={
            "Envío a todo el país en todos los nuestros productos con entrega segura y puntual."
          }
        />
      </article>
    </section>
  );
};

export default CompanyBenefits;
