"use client";

interface IImpactSection {}

export default function ImpactSection(props: IImpactSection) {
  return (
    <div
      className="flex flex-col md:flex-row w-full md:h-[240px] bg-basil-green bg-[length:100%_100%]"
      style={{ boxShadow: "inset 0px 15px 20px rgba(0, 0, 0, 0.6)" }}
    >
      <div className="flex flex-1 flex-col h-full items-center justify-center py-8 md:p-0">
        <p className="font-phetsarath text-white text-5xl md:text-4xl lg:text-5xl">
          15.000.000
        </p>
        <p className="font-phetsarath text-white text-2xl md:text-xl lg:text-2xl">
          KW INSTALADOS
        </p>
      </div>
      <div className="flex flex-1 flex-col h-full items-center justify-center  py-8 md:p-0">
        <p className="font-phetsarath text-white text-5xl md:text-4xl lg:text-5xl">
          99.9%
        </p>
        <p className="font-phetsarath text-white text-2xl md:text-xl lg:text-2xl">
          DE EFECTIVIDAD
        </p>
      </div>
      <div className="flex flex-1 flex-col h-full items-center justify-center  py-8 md:p-0">
        <p className="font-phetsarath text-white text-5xl md:text-4xl lg:text-5xl">
          100+
        </p>
        <p className="font-phetsarath text-white text-2xl md:text-xl lg:text-2xl text-center">
          CLIENTES SATISFECHOS
        </p>
      </div>
    </div>
  );
}
