"use client";

import Form from "./Form";

interface IAbout {}

export default function About(props: IAbout) {
  return (
    <div
      className={`flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-pepper-pinch md:bg-[url('/assets/backgrounds/admin/login.jpg')] .bg-opacity-10`}
      style={
        {
          // backgroundImage: `url('')`,
        }
      }
    >
      <div className="flex flex-col justify-center rounded-3xl bg-transparent md:bg-pepper-pinch w-full md:w-[500px] p-6 md:p-6">
        <h2 className="text-3xl font-medium text-white mb-6">Iniciar sesión</h2>
        <Form />
      </div>
    </div>
  );
}
