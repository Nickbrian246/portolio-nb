"use client";
import LanguageButton from "@/components/components/languageBtn/LanguageButton";
import Link from "next/link";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
export default function Header() {
  return (
    <>
      <div className="flex w-full justify-between p-2 bg-[#eeeff3]">
        <Link
          href={"/"}
          className=" md:text-2xl  text-xl font-bold flex items-center gap-2"
        >
          NbDev Js
          <HiOutlineComputerDesktop />
        </Link>
        <LanguageButton />
      </div>
    </>
  );
}
