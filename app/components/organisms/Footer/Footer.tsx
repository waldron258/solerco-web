"use client";

import RegularButton from "../../atoms/Button/RegularButton";
import TextArea from "../../atoms/TextArea";
import TextInput from "../../atoms/TextInput";
import ChatIcon from "@/app/assets/icons/footer/chat.svg";

interface IFooter {}

export default function Footer(props: IFooter) {
  return (
    <footer className="bg-pepper-pinch">
      <div className="flex min-h-96">
        <div className="flex flex-1 items-center justify-end">
          <p className="self-center font-rymaneco text-8xl text-white">
            SolerCo
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-16">
          <div>
            <h2 className="text-2xl text-white font-bold mb-6">Contáctanos</h2>
            <div className="flex flex-col mb-4">
              <h3 className="text-white font-bold">Dirección principal</h3>
              <p className="text-white">
                Carrera 99 #99-99
                <br />
                Barranquilla, Colombia
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <h3 className="text-white font-bold">Teléfono</h3>
              <p className="text-white">+ 99 999 999 9999</p>
            </div>
            <div className="flex flex-col mb-4">
              <h3 className="text-white font-bold">Email</h3>
              <p className="text-white">solerco@test.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start py-16">
          <div>
            <h2 className="flex items-center text-2xl text-white font-bold mb-6">
              Chatea con Nosotros <ChatIcon className="h-12 w-12 ml-3" />
            </h2>
            <TextInput
              id="email"
              label="Correo electrónico"
              className="w-96 mb-2"
            />
            <TextArea id="description" rows={6} className="mb-3" />
            <div className="flex justify-end">
              <RegularButton label="Enviar" variant="alternative" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-1 text-luscious-purple text-xs">
        {`Copyright © ${new Date().getFullYear()} SolerCo. Todos los derechos revervados`}
      </div>
    </footer>
  );
}
