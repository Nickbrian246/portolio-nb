import { ReactNode } from "react";
import { AiOutlineContacts } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
interface OptionsForHeader {
  titleEs: string;
  titleEn: string;
  icon: ReactNode;
  id: string;
  route: string;
}

export const optionsForHeader: OptionsForHeader[] = [
  {
    icon: <AiOutlineContacts />,
    id: "  Contact",
    route: "#Contact",
    titleEn: "Contact",
    titleEs: "Contacto",
  },
  {
    icon: <SiAboutdotme />,
    id: "AboutMe",
    route: "#AboutMe",
    titleEn: "About me",
    titleEs: "Acerca de mi",
  },
  {
    icon: <FaLaptopCode />,
    id: "Projects",
    route: "#Projects",
    titleEn: "Projects",
    titleEs: "Proyectos",
  },
];
