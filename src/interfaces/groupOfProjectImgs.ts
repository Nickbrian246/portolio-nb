import { StaticImageData } from "next/image";

export interface GroupOfProjectImages {
  name: string;
  description?: string;
  imgSrc: StaticImageData;
  id: string;
}
