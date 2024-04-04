import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolerCo",
  description: "Proyecto personal con fines profesionales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
