"use client";
import React from "react";
import ImageGallery from "react-image-gallery";
import { GalleryImagesInterface } from "../../_utils/adapter/adapterForGroupOfImageGallery";

interface Props {
  groupOfImages: GalleryImagesInterface[];
}
export default function Carousel({ groupOfImages }: Props) {
  return (
    <div className="sm:max-w-7xl w-full p-4 ">
      <ImageGallery items={groupOfImages} />
    </div>
  );
}
