import { ReactNode } from "react";
import { GroupOfTechnologies } from "./groupOfTechnologies";
import { StaticImageData } from "next/image";
export interface ProjectCard {
  titleEs: string;
  titleEn: string;

  presentationImgSrc: StaticImageData;

  technologiesTitleEs: string;
  technologiesTitleEn: string;

  groupOfTechnologies: GroupOfTechnologies[];

  descriptionEs: string;
  descriptionEn: string;

  id: string;
}
