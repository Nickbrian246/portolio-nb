import { pointOfSaleGroupOfTechnologiesReact } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { Features, ProjectData } from "../../_interfaces/projectDataInterface";
import { groupOfPointOfSaleImages } from "@/utils/groupOfProjectImages";
import { v4 as uuidv4 } from "uuid";
const poinOfSaleFeatures: Features[] = [
  {
    nameES: "Login de empleados",
    nameEn: "Role-based login (employee, manager, owner).",
    id: uuidv4(),
  },
  {
    nameES: "Registro   en base a rol (empleado, gerente, dueño).",
    nameEn: "Role-based Register (employee, manager, owner).",
    id: uuidv4(),
  },
  {
    nameES: "Crear, actualiza, eliminar productos (CRUD).",
    nameEn: "Create, update, delete products.",
    id: uuidv4(),
  },
  {
    nameES:
      "Funcionalidades como  agregar, eliminar, visualizar ventas, descargar reportes protegidas por role. ",
    nameEn:
      "Functionalities like adding, deleting, viewing sales, and downloading reports protected by user roles.",
    id: uuidv4(),
  },
  {
    nameES:
      "Agrega productos con un etiqueta personalizada  como, bebida, alimenticio etc",
    nameEn: "Add products with a custom label such as beverage, food, etc.",
    id: uuidv4(),
  },
  {
    nameES:
      "Agrega productos medicos con la una etiqueta indicando su uso como, dolor, fiebre etc",
    nameEn:
      "Add medical products with a label indicating their use, such as pain relief, fever, etc.",
    id: uuidv4(),
  },
  {
    nameES: "Panal de visualización de  productos del inventario. ",
    nameEn: "Product inventory display panel.",
    id: uuidv4(),
  },
  {
    nameES:
      "Filtro de  productos de inventario por, precio, cantidad en inventario, rango. ",
    nameEn: "Inventory product filter by price, quantity in stock, and range.",
    id: uuidv4(),
  },
  {
    nameES:
      "Agrega color de entre verde, rojo, ámbar  a cada una de las opciones de filtrado para diferenciar entre filtros. ",
    nameEn:
      "Add color coding (green, red, amber) to each filtering option to differentiate between filters.",
    id: uuidv4(),
  },
  {
    nameES: "Descarga el inventario actual en un archivo excel.",
    nameEn: "Download the current inventory to an Excel file.",
    id: uuidv4(),
  },
  {
    nameEn: "Sales display panel by date or date range.",
    nameES: "Panel de visualización de ventas por fecha o por rango de fecha.",
    id: uuidv4(),
  },
  {
    nameEn: "Download an Excel file with sales for the selected date range.",
    nameES:
      "Descarga un archivo en formato excel con las ventas con el rango de fecha seleccionado",
    id: uuidv4(),
  },
];

export const poinOfSaleData: ProjectData = {
  titleEn: "Point of sale ",
  titleEs: "Punto de venta ",
  descriptionEn: `
    At this point of sale, you can register products, update and delete them, keep a record of daily sales, as well as generate Excel reports or view sales in the form of graphs for a specific period of time.
    `,
  descriptionEs: `
    En este punto de venta, puedes registrar productos, actualizarlos y eliminarlos, mantener un registro de las ventas diarias, así como generar informes en Excel o ver en forma de gráficos las ventas que has tenido en un periodo determinado.
`,
  id: "Point of sale23423",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: pointOfSaleGroupOfTechnologiesReact,
  carouselImagesGroup: groupOfPointOfSaleImages,
  isResponsive: false,
  linkToGitHub: "https://github.com/Nickbrian246/Farmacia_meneses_v1",
  linkToProject: "https://puntodeventa.nbjdev.com/login",
  logInInformation: "",
  passwordInformation: "",
  features: poinOfSaleFeatures,
};
