"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "app/components/Header/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Hola mundo layout")
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>
      </body>
       
    </html>
  );
}
