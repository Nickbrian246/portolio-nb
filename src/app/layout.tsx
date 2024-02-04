"use client";
import { LanguageContext } from "@/context/languageContext/languageContext";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSpanish, setIsSpanish] = useState<boolean>(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageContext.Provider value={[isSpanish, setIsSpanish]}>
          {children}
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
