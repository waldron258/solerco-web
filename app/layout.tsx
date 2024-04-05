import type { Metadata } from "next";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";

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
    <html lang="es">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
