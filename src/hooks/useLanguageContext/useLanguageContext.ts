import { LanguageContext } from "@/context/languageContext/languageContext";
import React, { useContext } from "react";
import { LanguageContextType } from "@/interfaces/LanguageContextType";
export default function useLanguageContext(): LanguageContextType {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error(
      "useLanguageContext debe ser utilizado dentro de un LanguageContext.Provider"
    );
  }

  const [isSpanish, setIsSpanish] = languageContext;

  return [isSpanish, setIsSpanish];
}
