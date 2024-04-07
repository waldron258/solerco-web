"use client";

interface IAbout {}

export default function About(props: IAbout) {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/assets/backgrounds/about/about.png')`,
      }}
    >
      a
    </div>
  );
}
