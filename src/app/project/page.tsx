"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineWeb } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import {
  chatData,
  mercadoLibreData,
  poinOfSaleBackEndData,
  poinOfSaleData,
  smartShoppingBackEndData,
  smartShoppingData,
  toDoBackendData,
} from "./_utils/projectData";
import { ProjectData } from "./_interfaces/projectDataInterface";
import { adapterForGroupOfImageGallery } from "./_utils/adapter/adapterForGroupOfImageGallery";
import { TbPointFilled } from "react-icons/tb";
import LinkButton from "@/components/components/linkButton/LinkButton";
import { BsPhoneFill } from "react-icons/bs";
import { Suspense } from "react";
import Loading from "./loading";

export default function ProjectPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectid") ?? "";
  const [isSpanish] = useLanguageContext();
  type ProjectNama =
    | "mercado-libre-clon-frontend"
    | "chat-frontend"
    | "smartshopping-fullstack"
    | "pointofsale-fullstack"
    | "Pointofsale-backend"
    | "todo-backend"
    | "e-commerce-backend";

  const groupOfProjectData = {
    "mercado-libre-clon-frontend": mercadoLibreData,
    "chat-frontend": chatData,
    "smartshopping-fullstack": smartShoppingData,
    "pointofsale-fullstack": poinOfSaleData,
    "Pointofsale-backend": poinOfSaleBackEndData,
    "todo-backend": toDoBackendData,
    "e-commerce-backend": smartShoppingBackEndData,
  };
  const projectSelected: ProjectData =
    groupOfProjectData[projectId as ProjectNama];
  const adapterForGroupOfImages = adapterForGroupOfImageGallery(
    projectSelected.carouselImagesGroup
  );

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="w-full  flex justify-center bg-[#eeeff3] ">
          <div className="sm:max-w-7xl w-full p-4 ">
            <ImageGallery items={adapterForGroupOfImages} />
          </div>
        </section>
        <section>
          <h2 className="md:text-3xl text-xl my-10 text-center font-semibold text-sky-500">
            {isSpanish
              ? projectSelected.technologiesTitleEs
              : projectSelected.technologiesTitleEn}
          </h2>

          <ul className="sm:max-w-7xl md:justify-start sm:justify-center justify-start  p-4 flex w-full flex-wrap gap-3 md:gap-6 md:h-[250px] h-fit">
            {projectSelected.groupOfTechnologies.map((project) => (
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
        <section>
          <h2 className="md:text-3xl text-xl my-10 text-center font-semibold text-sky-500">
            {isSpanish ? "Características" : "Characteristics"}
          </h2>
          <ul>
            {projectSelected.features.map((feature) => (
              <li className="flex items-baseline gap-2" key={feature.id}>
                <span>
                  <TbPointFilled />
                </span>
                <p className="md:text-xl font-medium">
                  {isSpanish ? feature.nameES : feature.nameEn}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full flex flex-col gap-4 ">
          <div className="flex items-center gap-2">
            <span
              className={
                projectSelected.isResponsive
                  ? "text-green-400 text-xl"
                  : "text-red-500 text-xl"
              }
            >
              <BsPhoneFill />
            </span>
            <p
              className={
                projectSelected.isResponsive
                  ? "text-green-400 "
                  : "text-red-500 "
              }
            >
              {projectSelected.isResponsive
                ? isSpanish
                  ? "Es adaptable a dispositivos mobiles (Responsive)"
                  : "It is mobile responsive"
                : isSpanish
                ? "No es adaptable a dispositivos mobiles (Responsive)"
                : "It is not mobile responsive"}
            </p>
          </div>
          {projectSelected.linkToGitHub && (
            <LinkButton
              className="flex w-fit items-center gap-1 px-2 py-1 bg-black rounded-md text-white text-xl"
              target="_blank"
              href={projectSelected.linkToGitHub}
            >
              <span>
                {" "}
                <AiFillGithub />
              </span>
              <p>GitHub</p>
            </LinkButton>
          )}
          {projectSelected.linkToProject && (
            <LinkButton
              className="flex   w-fit items-center gap-1 px-2 py-1 bg-[#22c55e] rounded-md text-white text-xl"
              target="_blank"
              href={projectSelected.linkToProject}
            >
              <span>
                {" "}
                <MdOutlineWeb />
              </span>
              <p>{isSpanish ? "Visitar proyecto" : " Visit project"}</p>
            </LinkButton>
          )}
        </section>
      </Suspense>
    </>
  );
}
