import React from "react";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import { GrLanguage } from "react-icons/gr";

export default function LanguageButton() {
  const [isSpanish, setIsSpanish] = useLanguageContext();
  return (
    <button
      className="flex gap-2 items-center bg-sky-500 px-2 py-1 rounded-md"
      onClick={() => {
        setIsSpanish((prev) => !prev);
      }}
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
