import { smartShoppingECommerceNextJs } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { ProjectData } from "../../_interfaces/projectDataInterface";
import { groupOfSmartShoppingImages } from "@/utils/groupOfProjectImages";
import { Features } from "../../_interfaces/projectDataInterface";
import { v4 as uuidv4 } from "uuid";

const smartShoppingFeatures: Features[] = [
  { nameES: "Login de usuarios", nameEn: "Users Login", id: uuidv4() },
  { nameES: "Registro de usuarios", nameEn: "User registration", id: uuidv4() },
  {
    nameES: "Cambia o actualiza contraseña",
    nameEn: "Change or update password.",
    id: uuidv4(),
  },
  {
    nameES:
      "Agregar productos al carrito de compras  sin haber iniciado sesión ",
    nameEn: "Adding products to the shopping cart without being logged in.",
    id: uuidv4(),
  },
  {
    nameES:
      " Iniciar sesión o registrarse sin perder los productos guardados previamente en carrito de compras ",
    nameEn:
      "Log in or register without losing previously saved items in the shopping cart.",
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
    nameEn:
      "Receive an email with a summary of the purchased products (only for interview)*.",
    nameES:
      "Recibir un correo electrónico con un resumen de los productos comprados (solo para entrevista)*.",
    id: uuidv4(),
  },
];

export const smartShoppingData: ProjectData = {
  titleEn: "Smart shopping E-Commerce ",
  titleEs: "Smart shopping E-Commerce ",
  descriptionEn: `
    In this e-commerce, you can simulate the purchase of products. You can register, log in, view various products, add them to the cart, save products, add a payment method, provide a shipping address, of course, make the purchase, check your purchase history, change the password, and more.`,
  descriptionEs: `
    En este comercio electrónico, puedes simular la compra de productos. Puedes registrarte, iniciar sesión, ver diversos productos, agregarlos al carrito, guardar productos, agregar un método de pago, proporcionar una dirección de envío, por supuesto, realizar la compra, revisar tu historial de compras, cambiar la contraseña y más.
  `,
  id: "Smart shopping E-Commerce111",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: smartShoppingECommerceNextJs,
  carouselImagesGroup: groupOfSmartShoppingImages,
  isResponsive: false,
  linkToGitHub: "https://github.com/Nickbrian246/nextjs-e-commerce",
  linkToProject: "https://nextjs-e-commerce-kohl.vercel.app/",
  features: smartShoppingFeatures,
};
