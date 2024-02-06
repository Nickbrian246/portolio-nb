import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./components/sideNav";
import Link from "next/link";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export default function MobileHeader({
  isOpen,
  handleOpenSideBar,
}: {
  isOpen: boolean;
  handleOpenSideBar: () => void;
}) {
  return (
    <>
      <div className="flex  justify-between md:hidden ">
        <button className="md:hidden " onClick={handleOpenSideBar}>
          <span className="text-2xl text-sky-500">
            <RxHamburgerMenu />
          </span>
        </button>
        <Link
          href={"/"}
          className="text-2xl  font-bold flex items-center gap-2"
        >
          NbDev Js
          <HiOutlineComputerDesktop />
        </Link>
      </div>
      <SideNav isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
    </>
  );
}
