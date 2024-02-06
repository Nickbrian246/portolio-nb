import { GroupOfProjectImages } from "@/interfaces/groupOfProjectImgs";
import { StaticImageData } from "next/image";
export interface GalleryImagesInterface {
  original: string;
  thumbnail: string;
}
export function adapterForGroupOfImageGallery(
  groupOfProjectImages: GroupOfProjectImages[]
): GalleryImagesInterface[] {
  const groupOfImagesAdapted: GalleryImagesInterface[] =
    groupOfProjectImages.map((image) => {
      return {
        original: image.imgSrc.src,
        thumbnail: image.imgSrc.src,
      };
    });

  return groupOfImagesAdapted;
}
