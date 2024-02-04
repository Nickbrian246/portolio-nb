import { nestTodoBackEnd } from "@/utils/groupOfTechnologies/groupOfTechnologiesPointOfSale";
import { Features, ProjectData } from "../../_interfaces/projectDataInterface";
import { nestProjectImg } from "@/utils/groupOfProjectImages";
import { v4 as uuidv4 } from "uuid";
const toDoFeatures: Features[] = [
  {
    nameES: "Login de usuarios. ",
    nameEn: " Users login ",
    id: uuidv4(),
  },
  {
    nameES: "Registro  de usuarios. ",
    nameEn: " User registration. ",
    id: uuidv4(),
  },
  {
    nameES: "Contraseñas encriptadas.",
    nameEn: "Encrypted passwords.",
    id: uuidv4(),
  },
  {
    nameES: "Agregar, eliminar, actualizar Tareas o kanban (CRUD)",
    nameEn: "Add, delete, update tasks or Kanban (CRUD).",
    id: uuidv4(),
  },
  {
    nameES:
      "Sincronización entre tareas y kanban (agrega, elimina, actualiza una tarea y se  agregara en kanban igualmente ) ",
    nameEn:
      "Synchronization between tasks and Kanban (add, delete, update a task, and it will be reflected in Kanban as well).",
    id: uuidv4(),
  },
  {
    nameES: ` Agrega tareas a kanban por estatus: "Pendiente","En progreso" "Terminado"`,
    nameEn: `Add tasks to Kanban by status: 'Pending,' 'In Progress,' 'Completed.'`,
    id: uuidv4(),
  },
];

export const toDoBackendData: ProjectData = {
  titleEn: "To Do and kanban ",
  titleEs: "Tareas y kanban ",
  descriptionEn: `
    This project is primarily based on CRUD operations (Create, Read, Update, Delete) across most of its routes, allowing you to efficiently manage and manipulate data. Some key functionalities include: Login, Registration, Saving To-Do's, storing tasks in both To-Do and Kanban presentations.
    `,
  descriptionEs: `
    Este proyecto se centra principalmente en operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la mayoría de sus rutas, brindándote la capacidad de gestionar y manipular datos de manera eficiente. Algunas de las funciones clave incluyen: Inicio de Sesión, Registro, Guardar Tareas pendientes (To-Do's), almacenamiento de tareas en ambas presentaciones de lista To-Do y Kanban.
`,
  id: "ToDoAndKanban",

  technologiesTitleEn: "Technologies used in this project",
  technologiesTitleEs: "Tecnologías usadas en este proyecto",
  groupOfTechnologies: nestTodoBackEnd,
  carouselImagesGroup: nestProjectImg,
  isResponsive: false,
  linkToGitHub: "https://github.com/Nickbrian246/nest-todo-app",
  linkToProject: "",
  logInInformation: "",
  passwordInformation: "",
  features: toDoFeatures,
};
