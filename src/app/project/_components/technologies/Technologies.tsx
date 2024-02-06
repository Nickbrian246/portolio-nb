"use client";
import React from "react";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import { ProjectData } from "../../_interfaces/projectDataInterface";
import { TbPointFilled } from "react-icons/tb";
interface Props
  extends Pick<
    ProjectData,
    "technologiesTitleEn" | "technologiesTitleEs" | "groupOfTechnologies"
  > {}
export default function Technologies({
  groupOfTechnologies,
  technologiesTitleEn,
  technologiesTitleEs,
}: Props) {
  const [isSpanish] = useLanguageContext();
  return (
    <section>
      <h2 className="md:text-3xl text-xl my-10 text-center font-semibold text-sky-500">
        {isSpanish ? technologiesTitleEs : technologiesTitleEn}
      </h2>

      <ul className="sm:max-w-7xl md:justify-start sm:justify-center justify-start  p-4 flex w-full flex-wrap gap-3 md:gap-6 md:h-[250px] h-fit">
        {groupOfTechnologies.map((project) => (
          <li className="flex items-center gap-1 h-fit" key={project.name}>
            <span>
              <TbPointFilled />
            </span>
            <span
              style={{ color: project.iconColor }}
              className={`md:text-4xl text-xl`}
            >
              {project.icon}
            </span>
            <p
              className={`md:text-2xl text-xl`}
              style={{ color: project.iconColor }}
            >
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
