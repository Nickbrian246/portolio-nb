"use client";
import React from "react";
import LanguageButton from "@/components/components/languageBtn/LanguageButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const handleBackArrowBtn = () => {
    router.back();
  };
  return (
    <>
      <div className="flex w-full justify-between p-2 bg-[#eeeff3]">
        <button onClick={handleBackArrowBtn} className="text-2xl md:ml-5 ml-2">
          <IoMdArrowRoundBack />
        </button>
        <LanguageButton />
      </div>
    </>
  );
}
