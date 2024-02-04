import { optionsForHeader } from "@/utils/optionsForHeader/optionsForHeader";
import Link from "next/link";
import React from "react";
import { GrLanguage } from "react-icons/gr";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import LanguageButton from "@/components/components/languageBtn/LanguageButton";
export default function Nav({
  handleOpenSideBar,
}: {
  handleOpenSideBar: () => void;
}) {
  const [isSpanish] = useLanguageContext();

  return (
    <nav className=" w-full justify-evenly  hidden md:flex">
      {optionsForHeader.map((option) => (
        <Link
          className="flex items-center gap-2 "
          key={option.id}
          href={option.route}
        >
          <span className="text-2xl ">{option.icon}</span>
          <p className="text-lg ">
            {isSpanish ? option.titleEs : option.titleEn}
          </p>
        </Link>
      ))}
      <LanguageButton />
    </nav>
  );
}
