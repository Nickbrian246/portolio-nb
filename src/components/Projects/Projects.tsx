"use client";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import {
  groupOfBackEndProjects,
  groupOfFrontEndProjects,
  groupOfFullStackProjects,
} from "@/utils/groupOfProjects/groupOfProjects";
import Divider from "../components/Divider";
import ProjectCard from "./components/ProjectCard/ProjectCard";
export default function Projects() {
  const [isSpanish] = useLanguageContext();

  return (
    <main className="max-w-screen-xl m-auto  p-4 " id="Projects">
      <h2 className="text-center font-semibold text-2xl text-sky-700">
        {isSpanish ? "Proyectos" : "Projects"}
      </h2>
      <Divider className="my-6 bg-sky-500" />
      <h2 className=" text-center text-2xl font-bold text-blue-500 my-5">
        FullStack
      </h2>

      <section className=" flex  justify-evenly flex-wrap gap-5">
        {groupOfFullStackProjects.map((project) => (
          <ProjectCard
            descriptionEn={project.descriptionEn}
            descriptionEs={project.descriptionEs}
            groupOfTechnologies={project.groupOfTechnologies}
            id={project.id}
            isSpanish={isSpanish}
            presentationImgSrc={project.presentationImgSrc}
            technologiesTitleEn={project.technologiesTitleEn}
            technologiesTitleEs={project.technologiesTitleEs}
            titleEn={project.titleEn}
            titleEs={project.titleEs}
            key={project.id}
          />
        ))}
      </section>
      <Divider className="my-6 bg-blue-500" />
      <h2 className=" text-center text-2xl font-bold text-blue-500 my-5">
        FrontEnd
      </h2>

      <section className=" flex  justify-evenly flex-wrap gap-5">
        {groupOfFrontEndProjects.map((project) => (
          <ProjectCard
            descriptionEn={project.descriptionEn}
            descriptionEs={project.descriptionEs}
            groupOfTechnologies={project.groupOfTechnologies}
            id={project.id}
            isSpanish={isSpanish}
            presentationImgSrc={project.presentationImgSrc}
            technologiesTitleEn={project.technologiesTitleEn}
            technologiesTitleEs={project.technologiesTitleEs}
            titleEn={project.titleEn}
            titleEs={project.titleEs}
            key={project.id}
          />
        ))}
      </section>
      <Divider className="my-6 bg-red-500" />
      <h2 className=" text-center text-2xl font-bold text-red-500 my-5">
        BackEnd
      </h2>

      <section className=" flex  justify-evenly flex-wrap gap-5">
        {groupOfBackEndProjects.map((project) => (
          <ProjectCard
            descriptionEn={project.descriptionEn}
            descriptionEs={project.descriptionEs}
            groupOfTechnologies={project.groupOfTechnologies}
            id={project.id}
            isSpanish={isSpanish}
            presentationImgSrc={project.presentationImgSrc}
            technologiesTitleEn={project.technologiesTitleEn}
            technologiesTitleEs={project.technologiesTitleEs}
            titleEn={project.titleEn}
            titleEs={project.titleEs}
            key={project.id}
          />
        ))}
      </section>
    </main>
  );
}
