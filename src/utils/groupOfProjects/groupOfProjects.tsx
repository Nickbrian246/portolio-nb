import { ProjectCard } from "@/interfaces/groupOfCardProjectsInterface";
import {
  pointOfSaleGroupOfTechnologiesReact,
  mercadoLibreGroupOfTechnologiesReact,
  chatNextJs,
  smartShoppingECommerceNextJs,
  pointOfSaleBackEnd,
  nestTodoBackEnd,
  smartShoppingBackEnd,
  collectionTechnologies,
} from "../groupOfTechnologies/groupOfTechnologiesPointOfSale";
import homeImgMercadoLibreClon from "../../assets/mercadoLibreClon/home1.webp";
import pointOfSaleImg from "../../assets/pointOfSale/home.png";
import smartShoppingImg from "@/assets/smart-shopping/home.png";
import chatNextjs from "@/assets/chat/chatting.png";
import feed from "@/assets/collections/feed1.png";
import NestImg from "@/assets/backEndImages/nest js.jpg";
import ExpressImg from "@/assets/backEndImages/express 2 image.png";
export const groupOfFrontEndProjects: ProjectCard[] = [
  {
    titleEn: "Mercado libre E-commerce clone ",
    titleEs: "Mercado libre E-commerce clone ",
    descriptionEn: `
    In this e-commerce, you can simulate the purchase flow of a product, from viewing various products, adding them to the cart, choosing a payment method, selecting an address, and, of course, completing the purchase.
    `,
    descriptionEs: `
    En este comercio electrónico, puedes simular el proceso de compra de un producto, desde visualizar varios productos, agregarlos al carrito, elegir un método de pago, seleccionar una dirección y, por supuesto, concluir la compra.
`,
    id: "mercado-libre-clon-frontend",
    presentationImgSrc: homeImgMercadoLibreClon,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: mercadoLibreGroupOfTechnologiesReact,
  },
  {
    titleEn: "Chat ",
    titleEs: "Chat",
    descriptionEn: `
      This chat is oriented towards work teams, as the administrator is the one who adds or removes users, as well as adds or deletes user groups.
      `,
    descriptionEs: `
    Este chat está orientado a equipos de trabajo, ya que es el administrador quien agrega o elimina usuarios, así como quien añade o elimina grupos de usuarios.
  `,
    id: "chat-frontend",
    presentationImgSrc: chatNextjs,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: chatNextJs,
  },
];

export const groupOfFullStackProjects: ProjectCard[] = [
  {
    titleEn: "Smart shopping E-Commerce ",
    titleEs: "Smart shopping E-Commerce ",
    descriptionEn: `
    In this e-commerce, you can simulate the purchase of products. You can register, log in, view various products, add them to the cart, save products, add a payment method, provide a shipping address, of course, make the purchase, check your purchase history, change the password, and more.`,
    descriptionEs: `
    En este comercio electrónico, puedes simular la compra de productos. Puedes registrarte, iniciar sesión, ver diversos productos, agregarlos al carrito, guardar productos, agregar un método de pago, proporcionar una dirección de envío, por supuesto, realizar la compra, revisar tu historial de compras, cambiar la contraseña y más.
  `,
    id: "smartshopping-fullstack",
    presentationImgSrc: smartShoppingImg,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: smartShoppingECommerceNextJs,
  },
  {
    titleEn: "Collections ",
    titleEs: "Colecciones ",
    descriptionEn: `
    In this project, you have the freedom to create personalized collections by defining customizable fields of different types: numeric, dates, text, or checkboxes, and add items to the collections using those fields. The platform allows commenting in real time and instantly receiving comments from other users viewing the same item, as well as giving 'likes.' Additionally, you can download your own collections in CSV format. If you're an administrator, you can also block users, delete them, change roles, and download the list of users with their current status.
    `,
    descriptionEs: `
    En este proyecto, tienes la libertad de crear colecciones personalizadas definiendo campos customizables de diferentes tipos: numéricos, fechas, textos, o checkboxes y agregar elementos a las colecciones usando esos campos.La plataforma permite comentar en tiempo real y recibir instantáneamente los comentarios de otros usuarios que estén visualizando el mismo elemento, así como dar 'me gusta'. Además, puedes descargar tus propias colecciones en formato CSV. Si eres administrador, también podrás bloquear usuarios, eliminarlos, cambiar roles y descargar la lista de usuarios con su estado actual.
`,
    id: "Collections-fullstack",
    presentationImgSrc: feed,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: collectionTechnologies,
  },
  {
    titleEn: "Point of sale ",
    titleEs: "Punto de venta ",
    descriptionEn: `
    At this point of sale, you can register products, update and delete them, keep a record of daily sales, as well as generate Excel reports or view sales in the form of graphs for a specific period of time.
    `,
    descriptionEs: `
    En este punto de venta, puedes registrar productos, actualizarlos y eliminarlos, mantener un registro de las ventas diarias, así como generar informes en Excel o ver en forma de gráficos las ventas que has tenido en un periodo determinado.
`,
    id: "pointofsale-fullstack",
    presentationImgSrc: pointOfSaleImg,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: pointOfSaleGroupOfTechnologiesReact,
  },
];
export const groupOfBackEndProjects: ProjectCard[] = [
  {
    titleEn: "Point of sale ",
    titleEs: "Punto de venta ",
    descriptionEn: `
    This project is primarily based on CRUD operations (Create, Read, Update, Delete) across most of its routes, allowing you to efficiently manage and manipulate data. Some key functionalities include: Login, Registration, Product Registration, Sales Registration`,
    descriptionEs: `
    Este proyecto se basa principalmente en operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la mayoría de sus rutas, permitiéndote gestionar y manipular datos de manera eficiente. Algunas de las funciones clave incluyen: Inicio de Sesión, Registro, Registro de Productos, Registro de Ventas.
  `,
    id: "Pointofsale-backend",
    presentationImgSrc: ExpressImg,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: pointOfSaleBackEnd,
  },
  {
    titleEn: "To Do and kanban",
    titleEs: "Tareas (To Do`s y kanban )",
    descriptionEn: `
    This project is primarily based on CRUD operations (Create, Read, Update, Delete) across most of its routes, allowing you to efficiently manage and manipulate data. Some key functionalities include: Login, Registration, Saving To-Do's, storing tasks in both To-Do and Kanban presentations.
    `,
    descriptionEs: `
    Este proyecto se centra principalmente en operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la mayoría de sus rutas, brindándote la capacidad de gestionar y manipular datos de manera eficiente. Algunas de las funciones clave incluyen: Inicio de Sesión, Registro, Guardar Tareas pendientes (To-Do's), almacenamiento de tareas en ambas presentaciones de lista To-Do y Kanban.
`,
    id: "todo-backend",
    presentationImgSrc: NestImg,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: nestTodoBackEnd,
  },
  {
    titleEn: "E-Commerce (Smart shopping)",
    titleEs: "E-Commerce (Smart shopping)",
    descriptionEn: `
    This project is primarily based on CRUD operations (Create, Read, Update, Delete) across most of its routes, allowing you to efficiently manage and manipulate data. Some key functionalities include: Login, Registration, Password Change, Shopping Cart, Order Registration.
    `,
    descriptionEs: `
    Este proyecto se basa principalmente en operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la mayoría de sus rutas, permitiéndote gestionar y manipular datos de manera eficiente. Algunas de las funciones clave incluyen: Inicio de Sesión, Registro, Cambio de Contraseña, Carrito de Compras, Registro de Pedidos.
`,
    id: "e-commerce-backend",
    presentationImgSrc: NestImg,
    technologiesTitleEn: "Technologies used in this project",
    technologiesTitleEs: "Tecnologías usadas en este proyecto",
    groupOfTechnologies: smartShoppingBackEnd,
  },
];
