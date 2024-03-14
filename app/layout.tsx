"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { CartProvider } from "@/context/CartContext";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
