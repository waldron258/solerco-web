import type { Metadata } from "next";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";

import localFont from "@next/font/local";

const rymaneco = localFont({
  src: [
    {
      path: "../public/fonts/RymanEco-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-rymaneco",
});
const yesevaone = localFont({
  src: [
    {
      path: "../public/fonts/YesevaOne-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-yesevaone",
});
const phetsarath = localFont({
  src: [
    {
      path: "../public/fonts/Phetsarath-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Phetsarath-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-phetsarath",
});

export const metadata: Metadata = {
  title: "SolerCo",
  description: "Proyecto personal con fines profesionales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${rymaneco.variable} font-sans ${yesevaone.variable} ${phetsarath.variable} font-sans`}
    >
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
