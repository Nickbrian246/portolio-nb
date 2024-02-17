import React from "react";
import { ProjectButtonList } from "../../utils/projectsButtonsList/projectButtonsList";
import LinkButton from "@/components/components/linkButton/LinkButton";
export default function ProjectButtons() {
  return (
    <nav className="flex justify-between max-w-3xl m-auto mt-2 ">
      <ul>
        {ProjectButtonList.map((button) => (
          <li key={button.title}>
            <LinkButton
              className="sm:px-3 px-1 py-2 border-2 border-blue-400 rounded-lg text-blue-500 font-semibold"
              target="_self"
              key={button.title}
              href={button.href}
            >
              {button.title}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
