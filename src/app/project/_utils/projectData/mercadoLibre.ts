import { mercadoLibreGroupOfTechnologiesReact } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { Features, ProjectData } from "../../_interfaces/projectDataInterface";
import { groupOfMercadoLibreImages } from "@/utils/groupOfProjectImages";
import { v4 as uuidv4 } from "uuid";
const mercadoLibreFeatures: Features[] = [
  {
    nameES: "Agregar productos al carrito de compras. ",
    nameEn: "Adding products to the shopping cart.",
    id: uuidv4(),
  },
  {
    nameES: "Buscar productos. ",
    nameEn: "Search for products.",
    id: uuidv4(),
  },

  {
    nameEn: "Choose a shipping address.",
    nameES: "Elegir una dirección de envió",
    id: uuidv4(),
  },
  {
    nameEn: "Select the payment method.",
    nameES: "Elegir el método de pago  ",
    id: uuidv4(),
  },
  {
    nameEn: "Simulate a purchase.",
    nameES: "Simular una compra",
    id: uuidv4(),
  },
];

export const mercadoLibreData: ProjectData = {
  titleEn: "Mercado libre E-commerce clone ",
  titleEs: "Mercado libre E-commerce clone",
  descriptionEn: `
    In this e-commerce, you can simulate the purchase flow of a product, from viewing various products, adding them to the cart, choosing a payment method, selecting an address, and, of course, completing the purchase.
    `,
  descriptionEs: `
    En este comercio electrónico, puedes simular el proceso de compra de un producto, desde visualizar varios productos, agregarlos al carrito, elegir un método de pago, seleccionar una dirección y, por supuesto, concluir la compra.
`,
  id: "Smart shopping E-Commerce111",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: mercadoLibreGroupOfTechnologiesReact,
  carouselImagesGroup: groupOfMercadoLibreImages,
  isResponsive: false,
  linkToGitHub: "https://github.com/Nickbrian246/mercado-libre-clon",
  linkToProject: "",
  features: mercadoLibreFeatures,
};
