"use client";
import React from "react";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import { GrLanguage } from "react-icons/gr";
import { saveSelectedLanguage } from "@/utils/localStorage/saveSelectedLanguage";
export default function LanguageButton() {
  const [isSpanish, setIsSpanish] = useLanguageContext();
  const handleLanguageClick = () => {
    setIsSpanish((prev) => {
      if (!prev) {
        saveSelectedLanguage("es");
      } else {
        saveSelectedLanguage("en");
      }
      return !prev;
    });
  };

  return (
    <button
      className="flex gap-2 items-center bg-sky-500 px-2 py-1 rounded-md"
      onClick={handleLanguageClick}
    >
      <span className="text-2xl text-white">
        <GrLanguage />
      </span>
      <span className="text-lg text-white">
        {isSpanish ? "English (En)" : "Español (Es)"}
      </span>
    </button>
  );
}
