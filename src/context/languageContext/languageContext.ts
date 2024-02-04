import { Dispatch, SetStateAction, createContext } from "react";
import { LanguageContextType } from "@/interfaces/LanguageContextType";
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
