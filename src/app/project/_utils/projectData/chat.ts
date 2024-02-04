import { chatNextJs } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { Features, ProjectData } from "../../_interfaces/projectDataInterface";
import { groupOfChatImages } from "@/utils/groupOfProjectImages";
import { v4 as uuidv4 } from "uuid";
const chatFeatures: Features[] = [
  {
    nameES: "Login con google o correo  ",
    nameEn: "Log in with Google or email.",
    id: uuidv4(),
  },
  {
    nameES: "Agregar  contactos al chat.",
    nameEn: "Add contacts to the chat.",
    id: uuidv4(),
  },

  {
    nameEn: "Create groups.",
    nameES: "Crear grupos.",
    id: uuidv4(),
  },
  {
    nameEn: "Edit sent messages.",
    nameES: "Editar mensajes enviados. ",
    id: uuidv4(),
  },
];

export const chatData: ProjectData = {
  titleEn: "Chat ",
  titleEs: "Chat",
  descriptionEn: `
      This chat is oriented towards work teams, as the administrator is the one who adds or removes users, as well as adds or deletes user groups.
      `,
  descriptionEs: `
    Este chat está orientado a equipos de trabajo, ya que es el administrador quien agrega o elimina usuarios, así como quien añade o elimina grupos de usuarios.
  `,
  id: "Chat",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: chatNextJs,
  carouselImagesGroup: groupOfChatImages,
  isResponsive: false,
  linkToGitHub: "https://github.com/Nickbrian246/nextjs-chatapp",
  linkToProject: "https://nextjs-chatapp-lilac.vercel.app/",
  features: chatFeatures,
};
