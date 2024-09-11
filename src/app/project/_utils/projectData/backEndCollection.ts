import { collectionBackendTechnologies } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { ProjectData } from "../../_interfaces/projectDataInterface";
import { groupOfCollectionsImages } from "@/utils/groupOfProjectImages";
import { Features } from "../../_interfaces/projectDataInterface";
import { v4 as uuidv4 } from "uuid";

const collectionBackendFeatures: Features[] = [
  { nameES: "Login de usuarios", nameEn: "User login", id: uuidv4() },
  { nameES: "Registro de usuarios", nameEn: "User registration", id: uuidv4() },
  {
    nameES: "Inicio de session o registro con Google o github.",
    nameEn: "Users can log in or register  using Google or GitHub accounts.",
    id: uuidv4(),
  },
  {
    nameES: "Crea, Actualiza o elimina colecciones.",
    nameEn: "Create, update, or delete collections.",
    id: uuidv4(),
  },
  {
    nameES: "Crea colecciones con tantos campos personalizados como quieras.",
    nameEn: "Create collections with as many custom fields as you want.",
    id: uuidv4(),
  },
  {
    nameES:
      "Crea elementos en las colecciones rellenando los campos personalizados previamente definidos.",
    nameEn:
      "Create items in collections by filling out the predefined custom fields.",
    id: uuidv4(),
  },
  {
    nameES: "Operaciones CRUD en colecciones y elementos.",
    nameEn: "CRUD operations on collections and items.",
    id: uuidv4(),
  },
  {
    nameES:
      "Sección de comentarios implementada con websocket por lo que recibes actualizaciones de otros comentarios en el mismo elemento en tiempo real.",
    nameEn:
      "Comment section implemented with WebSocket, so you receive updates from other comments on the same item in real-time.",
    id: uuidv4(),
  },
  {
    nameES: `Puedes dar "me gusta".`,
    nameEn: `You can give "likes".`,
    id: uuidv4(),
  },
  {
    nameES:
      "En caso de tener derechos de administrador, cambia roles, bloquea usuarios o elimina usuarios. ",
    nameEn:
      "If you have admin rights, change roles, block users, or delete them.",
    id: uuidv4(),
  },
  {
    nameES:
      "En caso de tener derechos de administrador, puedes crear, editar o eliminar colecciones así como elementos de otros usuarios.",
    nameEn:
      "If you have admin rights, you can create, edit, or delete collections and items for other users.",
    id: uuidv4(),
  },
];

export const collectionBackendData: ProjectData = {
  titleEn: "Collections ",
  titleEs: "Colecciones ",
  descriptionEn: `
    In this project, you have the freedom to create personalized collections by defining customizable fields of different types: numeric, dates, text, or checkboxes, and add items to the collections using those fields. The platform allows commenting in real time and instantly receiving comments from other users viewing the same item, as well as giving 'likes.' Additionally, you can download your own collections in CSV format. If you're an administrator, you can also block users, delete them, change roles, and download the list of users with their current status.
    `,
  descriptionEs: `
    En este proyecto, tienes la libertad de crear colecciones personalizadas definiendo campos customizables de diferentes tipos: numéricos, fechas, textos, o checkboxes y agregar elementos a las colecciones usando esos campos.La plataforma permite comentar en tiempo real y recibir instantáneamente los comentarios de otros usuarios que estén visualizando el mismo elemento, así como dar 'me gusta'. Además, puedes descargar tus propias colecciones en formato CSV. Si eres administrador, también podrás bloquear usuarios, eliminarlos, cambiar roles y descargar la lista de usuarios con su estado actual.
`,
  id: "Collections-fullstack",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: collectionBackendTechnologies,
  carouselImagesGroup: groupOfCollectionsImages,
  isResponsive: true,
  linkToGitHub: "https://github.com/Nickbrian246/itransition-nick",
  linkToProject: "",
  features: collectionBackendFeatures,
};
