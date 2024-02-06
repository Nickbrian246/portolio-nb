"use client";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import browserLanguage from "@/utils/utils/BrowserLanguage";
import { useEffect, useState } from "react";
import MobileHeader from "./components/mobileHeader/MobileHeader";
import Nav from "./components/nav/nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSpanish, setIsSpanish] = useLanguageContext();
  const handleOpenSideBar = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (browserLanguage().startsWith("es")) {
      return setIsSpanish(true);
    }
  }, [setIsSpanish]);

  return (
    <header className="w-full p-3  relative bg-[#eeeff3]">
      <Nav handleOpenSideBar={handleOpenSideBar} />
      <MobileHeader handleOpenSideBar={handleOpenSideBar} isOpen={isOpen} />
    </header>
  );
}
