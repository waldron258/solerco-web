"use client";
import ServiceIcon from "@/app/assets/icons/home/service.svg";
import CommitmentIcon from "@/app/assets/icons/home/commitment.svg";
import SastisfactionIcon from "@/app/assets/icons/home/satisfaction.svg";

interface ICustomerServiceSection {}

export default function CustomerServiceSection(props: ICustomerServiceSection) {
  return (
    <div className="flex w-full h-[240px] bg-white bg-[length:100%_100%]">
      <div className="flex flex-1 flex-col h-full items-center justify-center">
        <ServiceIcon className="h-16 w-16 mb-6" />
        <p className="font-phetsarath font-bold text-scrofulous-brown text-base text-center">
          Atención de
          <br />
          primera
        </p>
      </div>
      <div className="flex flex-1 flex-col h-full items-center justify-center">
        <CommitmentIcon className="h-16 w-16 mb-6" />
        <p className="font-phetsarath font-bold text-scrofulous-brown text-base text-center">
          Comprometidos
          <br />
          con el medio ambiente
        </p>
      </div>
      <div className="flex flex-1 flex-col h-full items-center justify-center">
        <SastisfactionIcon className="h-16 w-16 mb-6" />
        <p className="font-phetsarath font-bold text-scrofulous-brown text-base text-center">
          Clientes
          <br />
          satisfechos
        </p>
      </div>
    </div>
  );
}
