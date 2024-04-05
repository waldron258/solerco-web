"use client";

import BoldButton from "../../atoms/Button/BoldButton";
import MultiCarousel from "./MultiCarousel";

interface IRecomendationSection {
  kits: IKits[];
}

interface IKits {
  title: string;
  images: string[];
}

export default function RecomendationSection(props: IRecomendationSection) {
  const { kits } = props;

  return (
    <div className="flex flex-col w-full py-32 min-h-screen items-center justify-evenly bg-sweet-buttermilk">
      <h2 className="text-center text-3xl text-pepper-pinch font-secularone font-bold">
        KITS
        <br />
        RECOMENDADOS
      </h2>
      <div className="w-full">
        <MultiCarousel slides={kits} />
      </div>
      <div className="flex flex-col w-[550px]">
        <h3 className="flex items-center font-bold font-phetsarath text-center text-basil-green text-3xl mb-6 before:content-[''] before:flex-1 before:mr-5 before:h-[2px] before:bg-basil-green after:content-[''] after:flex-1 after:ml-5 after:h-[2px] after:bg-basil-green">
          ¿Necesitas un kit diferente?
        </h3>
        <div className="flex justify-center">
          <BoldButton label="Ver más kits" variant="primary" />
        </div>
      </div>
    </div>
  );
}
