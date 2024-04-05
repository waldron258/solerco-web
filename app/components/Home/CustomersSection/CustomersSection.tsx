"use client";
import customerSectionImage from "@/app/assets/images/home/customersSection.png";
import Image from "next/image";

interface IImpactSection {}

export default function ImpactSection(props: IImpactSection) {
  return (
    <div className="flex flex-col w-full py-32 min-h-screen items-center justify-center">
      <h2 className="text-center text-3xl text-pepper-pinch font-secularone font-bold">
        NUESTROS CLIENTES Y<br />
        ALIADOS
      </h2>
      <div>
        <Image
          alt="customerSection"
          src={customerSectionImage}
          className="h-[600px] w-auto"
        />
      </div>
    </div>
  );
}
