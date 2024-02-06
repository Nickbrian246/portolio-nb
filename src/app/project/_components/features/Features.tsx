"use client";
import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { ProjectData } from "../../_interfaces/projectDataInterface";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
interface Props extends Pick<ProjectData, "features"> {}
export default function Features({ features }: Props) {
  const [isSpanish] = useLanguageContext();
  return (
    <section>
      <h2 className="md:text-3xl text-xl my-10 text-center font-semibold text-sky-500">
        {isSpanish ? "Características" : "Characteristics"}
      </h2>
      <ul>
        {features.map((feature) => (
          <li className="flex items-baseline gap-2" key={feature.id}>
            <span>
              <TbPointFilled />
            </span>
            <p className="md:text-xl font-medium">
              {isSpanish ? feature.nameES : feature.nameEn}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
