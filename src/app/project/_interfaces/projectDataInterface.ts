import { ProjectCard } from "@/interfaces/groupOfCardProjectsInterface";
import { GroupOfProjectImages } from "@/interfaces/groupOfProjectImgs";
type ProjectCardType = Omit<ProjectCard, "presentationImgSrc">;

export interface ProjectData extends ProjectCardType {
  carouselImagesGroup: GroupOfProjectImages[];
  features: Features[];
  logInInformation?: string;
  passwordInformation?: string;
  linkToProject?: string;
  linkToGitHub?: string;
  isResponsive: boolean;
}

export interface Features {
  nameES: string;
  nameEn: string;
  id: string;
}
