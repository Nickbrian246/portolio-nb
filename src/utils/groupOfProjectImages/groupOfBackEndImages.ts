import express from "@/assets/backEndImages/express 2 image.png";
import nestjs from "@/assets/backEndImages/nest js.jpg";
import { GroupOfProjectImages } from "@/interfaces/groupOfProjectImgs";

export const expressProjectImg: GroupOfProjectImages[] = [
  { id: "express22", imgSrc: express, name: "express" },
];
export const nestProjectImg: GroupOfProjectImages[] = [
  { id: "nestjs22", imgSrc: nestjs, name: "nestjs" },
];
