import LanguageButton from "@/components/components/languageBtn/LanguageButton";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import { optionsForHeader } from "@/utils/optionsForHeader/optionsForHeader";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
export default function SideNav({
  isOpen,
  handleOpenSideBar,
}: {
  isOpen: boolean;
  handleOpenSideBar: () => void;
}) {
  const [isSpanish, setIsSpanish] = useLanguageContext();
  return (
    <nav
      className={`
      bg-[#eeeff3]
      md:hidden
      flex
      transition-all
      duration-300
      flex-col
      gap-4
      absolute
      top-0
      p-4
      ${isOpen ? "left-0 " : "-left-48"}`}
    >
      <button onClick={handleOpenSideBar}>
        <span className="text-2xl text-sky-500">
          <IoArrowBackOutline />
        </span>
      </button>

      {optionsForHeader.map((option) => (
        <Link
          onClick={handleOpenSideBar}
          className="flex items-center gap-2 "
          key={option.id}
          href={option.route}
        >
          <span>{option.icon}</span>
          <p className="text-lg">
            {isSpanish ? option.titleEs : option.titleEn}
          </p>
        </Link>
      ))}
      <LanguageButton handleOpenSideBar={handleOpenSideBar} />
    </nav>
  );
}
