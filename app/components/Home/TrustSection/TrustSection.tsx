"use client";

import TrustIcon from "@/app/assets/icons/home/trust.svg";

interface ITrustSection {}

export default function TrustSection(props: ITrustSection) {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-end bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/assets/backgrounds/home/trustSection.png')`,
      }}
    >
      <div className="flex items-center mr-24">
        <div className="flex flex-col items-center justify-center bg-scrofulous-brown min-h-[440px] rounded-l-3xl max-w-[380px]">
          <TrustIcon className="h-14 w-11 mb-4" />
          <h2 className="font-yesevaone text-6xl text-white text-center">
            CONFIA EN NOSOTROS
          </h2>
        </div>
        <div className="flex flex-col items-center justify-evenly bg-white min-h-[550px] rounded-3xl max-w-[450px] p-6">
          <div className="flex flex-col mb-8">
            <h3 className="flex items-center font-bold font-phetsarath text-scrofulous-brown text-2xl mb-4 after:content-[''] after:flex-1 after:ml-5 after:h-[2px] after:bg-scrofulous-brown">
              NUESTRA MISIÓN
            </h3>
            <p className="font-phetsarath text-luscious-purple text-sm">
              Nuestra misión es promover y distribuir el uso de las fuentes de
              energía no convencionales en Colombia, logrando impactar no solo a
              hogares y empresas colombianos sino también lugares más
              vulnerables y brindarles toda la información, capacitación y
              herramientas necesaria para hacer uso de estos sistemas.
            </p>
          </div>
          <div>
            <h3 className="flex items-center font-bold font-phetsarath text-scrofulous-brown text-2xl mb-4 after:content-[''] after:flex-1 after:ml-5 after:h-[2px] after:bg-scrofulous-brown">
              NUESTRA VISIÓN
            </h3>
            <p className="font-phetsarath text-luscious-purple text-sm">
              Nuestra visión es ser parte del desarrollo sostenible en la
              transición energética de mi país Colombia, aplicando sistemas de
              energía no convencionales como la mejor alternativa de fuente de
              energía y para ello inculcar conocimiento, alternativas y
              soluciones para que todas las personas puedan tener acceso y
              contribuir el progreso de la nación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
