import Divider from "@/components/components/Divider";
import Link from "next/link";
import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { ProjectCard } from "@/interfaces/groupOfCardProjectsInterface";
import Image from "next/image";
interface Props extends ProjectCard {
  isSpanish: boolean;
}
export default function ProjectCard(props: Props) {
  const {
    descriptionEn,
    descriptionEs,
    groupOfTechnologies,
    id,
    presentationImgSrc,
    technologiesTitleEn,
    technologiesTitleEs,
    titleEn,
    titleEs,
    isSpanish,
  } = props;
  return (
    <Link
      href={`/project?projectid=${id}`}
      className="p-4 shadow-2xl max-w-96 h-fit "
      key={id}
    >
      <h2 className="text-xl text-center my-4 font-bold ">
        {isSpanish ? titleEs : titleEn}
      </h2>
      <div className="relative">
        <Image
          src={presentationImgSrc}
          alt="project image"
          width={400}
          height={500}
        />
      </div>
      <p className="text-xl my-4">
        {isSpanish ? technologiesTitleEs : technologiesTitleEn}
      </p>
      <Divider />
      <div className="flex w-full h-fit p-2">
        <ul className="h-fit flex  gap-3 flex-wrap">
          {groupOfTechnologies.map((technology) => (
            <li className="flex items-center gap-1 h-fit" key={technology.name}>
              <span>
                <TbPointFilled />
              </span>
              <span style={{ color: technology.iconColor }} className={``}>
                {technology.icon}
              </span>
              <p style={{ color: technology.iconColor }}>{technology.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-xl  text-left font-bold">
        {isSpanish ? "Descripcion " : " Description"}
      </h2>
      <Divider />
      <p className="text-left mb-5">
        {isSpanish ? descriptionEs : descriptionEn}
      </p>
      <span className="p-2 px-4 rounded-md bg-sky-500 text-white tracking-wide  ">
        {isSpanish ? "Ver mas " : " View more"}
      </span>
    </Link>
  );
}
