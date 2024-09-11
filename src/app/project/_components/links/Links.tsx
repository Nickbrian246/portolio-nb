"use client";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import { AiFillGithub } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { MdOutlineWeb } from "react-icons/md";
import { ProjectData } from "../../_interfaces/projectDataInterface";
interface Props
  extends Pick<
    ProjectData,
    "isResponsive" | "linkToGitHub" | "linkToProject"
  > {}
export default function Links({
  isResponsive,
  linkToGitHub,
  linkToProject,
}: Props) {
  const [isSpanish] = useLanguageContext();
  return (
    <section className="max-w-7xl m-auto flex flex-col gap-4 w-full ">
      <h2 className="md:text-3xl text-xl my-10 text-center font-semibold text-sky-500">
        {isSpanish ? "Enlaces " : "links"}
      </h2>
      <section className="flex gap-5 flex-grow w-full justify-between ">
        {/* <div className="flex items-center gap-2">
          <span
            className={
              isResponsive ? "text-green-400 text-xl" : "text-red-500 text-xl"
            }
          >
            <BsPhoneFill />
          </span>
          <p className={isResponsive ? "text-[#166534] " : "text-red-500 "}>
            {isResponsive
              ? isSpanish
                ? "Es adaptable a dispositivos mobiles (Responsive)"
                : "It is mobile responsive"
              : isSpanish
              ? "No es adaptable a dispositivos mobiles (Responsive)"
              : "It is not mobile responsive"}
          </p>
        </div> */}
        {linkToGitHub && (
          <a
            className="flex w-fit items-center gap-1 px-2 py-1 bg-black rounded-md text-white text-xl"
            target="_blank"
            href={linkToGitHub}
          >
            <span>
              {" "}
              <AiFillGithub />
            </span>
            <p>GitHub</p>
          </a>
        )}
        {linkToProject && (
          <a
            className="flex   w-fit items-center gap-1 px-2 py-1 bg-[#22c55e] rounded-md text-white text-xl"
            target="_blank"
            href={linkToProject}
          >
            <span>
              {" "}
              <MdOutlineWeb />
            </span>
            <p>{isSpanish ? "Visitar proyecto" : " Visit project"}</p>
          </a>
        )}
      </section>
    </section>
  );
}
