import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./components/sideNav";

export default function MobileHeader({
  isOpen,
  handleOpenSideBar,
}: {
  isOpen: boolean;
  handleOpenSideBar: () => void;
}) {
  return (
    <>
      <button className="md:hidden " onClick={handleOpenSideBar}>
        <span className="text-2xl text-sky-500">
          <RxHamburgerMenu />
        </span>
      </button>
      <SideNav isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
    </>
  );
}
