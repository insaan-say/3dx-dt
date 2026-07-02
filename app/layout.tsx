import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3DX/DT",
  description:
    "Secure 3D technology transfer, digital twin repair collaboration, AI engineering recommendations, and manufacturing optimization."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
