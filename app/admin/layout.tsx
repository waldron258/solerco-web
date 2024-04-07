import type { Metadata } from "next";
import "../globals.css";
import "react-multi-carousel/lib/styles.css";

export const metadata: Metadata = {
  title: "Admin panel",
  description: "Admin administration panel.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
