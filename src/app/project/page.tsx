import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import Carousel from "./_components/corousel/Carousel";
import Features from "./_components/features/Features";
import Links from "./_components/links/Links";
import Technologies from "./_components/technologies/Technologies";
import { ProjectData } from "./_interfaces/projectDataInterface";
import { adapterForGroupOfImageGallery } from "./_utils/adapter/adapterForGroupOfImageGallery";
import {
  chatData,
  mercadoLibreData,
  poinOfSaleBackEndData,
  poinOfSaleData,
  smartShoppingBackEndData,
  smartShoppingData,
  toDoBackendData,
} from "./_utils/projectData";
import Loading from "./loading";

interface Props {
  searchParams: string;
}
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  //@ts-ignore
  const { projectid } = searchParams;

  return {
    title: projectid,
  };
}

export default async function ProjectPage({
  searchParams,
}: {
  searchParams: { projectid: string };
}) {
  const { projectid } = searchParams;
  await generateMetadata({ searchParams: projectid });
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
    groupOfProjectData[searchParams.projectid as ProjectNama];
  const adapterForGroupOfImages = adapterForGroupOfImageGallery(
    projectSelected.carouselImagesGroup
  );

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="w-full  flex justify-center bg-[#eeeff3] ">
          <Carousel groupOfImages={adapterForGroupOfImages} />
        </section>
        <Technologies
          groupOfTechnologies={projectSelected.groupOfTechnologies}
          technologiesTitleEn={projectSelected.technologiesTitleEn}
          technologiesTitleEs={projectSelected.technologiesTitleEs}
        />
        <Features features={projectSelected.features} />
        <Links
          isResponsive={projectSelected.isResponsive}
          linkToGitHub={projectSelected.linkToGitHub}
          linkToProject={projectSelected.linkToProject}
        />
      </Suspense>
    </>
  );
}
