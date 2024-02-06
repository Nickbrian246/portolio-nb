import { pointOfSaleGroupOfTechnologiesReact } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { Features, ProjectData } from "../../_interfaces/projectDataInterface";
import {
  groupOfPointOfSaleImages,
  expressProjectImg,
} from "@/utils/groupOfProjectImages";
import { v4 as uuidv4 } from "uuid";
const poinOfSaleBackEndFeatures: Features[] = [
  {
    nameES: "Login de empleados",
    nameEn: "Role-based login (employee, manager, owner).",
    id: uuidv4(),
  },
  {
    nameES: "Contraseñas encriptadas.",
    nameEn: "Encrypted passwords.",
    id: uuidv4(),
  },
  {
    nameES: "Registro   en base a rol (empleado, gerente, dueño).",
    nameEn: "Role-based Register (employee, manager, owner).",
    id: uuidv4(),
  },
  {
    nameES: "Crear, actualiza, eliminar productos (CRUD).",
    nameEn: "Create, update, delete products(CRUD).",
    id: uuidv4(),
  },
  {
    nameES: "Rutas  protegidas por role. ",
    nameEn: "Routes protected by roles.",
    id: uuidv4(),
  },
];

export const poinOfSaleBackEndData: ProjectData = {
  titleEn: "Point of sale ",
  titleEs: "Punto de venta ",
  descriptionEn: `
    This project is primarily based on CRUD operations (Create, Read, Update, Delete) across most of its routes, allowing you to efficiently manage and manipulate data. Some key functionalities include: Login, Registration, Product Registration, Sales Registration`,
  descriptionEs: `
    Este proyecto se basa principalmente en operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la mayoría de sus rutas, permitiéndote gestionar y manipular datos de manera eficiente. Algunas de las funciones clave incluyen: Inicio de Sesión, Registro, Registro de Productos, Registro de Ventas.
  `,
  id: "PointOfSaleBackEnd",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: pointOfSaleGroupOfTechnologiesReact,
  carouselImagesGroup: expressProjectImg,
  isResponsive: false,
  linkToGitHub: "https://github.com/Nickbrian246/Farmacia_meneses_v1",
  linkToProject: "",
  logInInformation: "",
  passwordInformation: "",
  features: poinOfSaleBackEndFeatures,
};
