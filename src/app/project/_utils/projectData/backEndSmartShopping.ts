import { smartShoppingBackEnd } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { Features, ProjectData } from "../../_interfaces/projectDataInterface";
import { nestProjectImg } from "@/utils/groupOfProjectImages";
import { v4 as uuidv4 } from "uuid";

const smartShoppingBackEndFeatures: Features[] = [
  { nameES: "Login de usuarios", nameEn: "Users Login", id: uuidv4() },
  { nameES: "Registro de usuarios", nameEn: "User registration", id: uuidv4() },
  {
    nameES: "Contraseñas encriptadas ",
    nameEn: "Encrypted passwords.",
    id: uuidv4(),
  },
  {
    nameES:
      "Middleware que se asegura que la contraseña cumpla con los requisitos. ",
    nameEn: "Middleware that ensures the password meets the requirements.",
    id: uuidv4(),
  },
  {
    nameES: "Guard para JSON Web Token. ",
    nameEn: "Guard for JSON Web Token.",
    id: uuidv4(),
  },
  {
    nameES: "Cambia o actualiza contraseña",
    nameEn: "Change or update password.",
    id: uuidv4(),
  },

  {
    nameEn: "Save shopping cart items for later.",
    nameES: "Guarda productos del carrito de compras para mas tarde",
    id: uuidv4(),
  },
  {
    nameEn: "Add shipping addresses.",
    nameES: "Agrega direcciones de envió ",
    id: uuidv4(),
  },
  {
    nameEn: "Save your purchase history.",
    nameES: "Guarda tu historial de compras ",
    id: uuidv4(),
  },
  {
    nameEn: "Receive an email with a summary of the purchased products ***.",
    nameES:
      "Recibe un Correo electrónico con un resumen de los productos comprados ***.",
    id: uuidv4(),
  },
];

export const smartShoppingBackEndData: ProjectData = {
  titleEn: "Smart shopping  ",
  titleEs: "Smart shopping  ",
  descriptionEn: `
    This project is primarily based on CRUD operations (Create, Read, Update, Delete) across most of its routes, allowing you to efficiently manage and manipulate data. Some key functionalities include: Login, Registration, Password Change, Shopping Cart, Order Registration.
    `,
  descriptionEs: `
    Este proyecto se basa principalmente en operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la mayoría de sus rutas, permitiéndote gestionar y manipular datos de manera eficiente. Algunas de las funciones clave incluyen: Inicio de Sesión, Registro, Cambio de Contraseña, Carrito de Compras, Registro de Pedidos.
`,
  id: "smartShoppingBackEnd",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: smartShoppingBackEnd,
  carouselImagesGroup: nestProjectImg,
  isResponsive: false,
  linkToGitHub: "https://github.com/Nickbrian246/nest-e-commerce",
  linkToProject: "",
  logInInformation: "",
  passwordInformation: "",
  features: smartShoppingBackEndFeatures,
};
