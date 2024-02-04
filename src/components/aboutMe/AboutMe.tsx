"use client";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import Link from "next/link";
import React from "react";
import LinkButton from "../components/linkButton/LinkButton";

export default function AboutMe() {
  const [isSpanish] = useLanguageContext();
  return (
    <section
      id="AboutMe"
      className="h-screen w-full bg-[#eeeff3]  flex flex-col items-center justify-center gap-4 p-2"
    >
      <div className="max-w-4xl">
        {isSpanish ? (
          <>
            <h2 className="text-4xl text-left ">
              <span className="text-sky-500">Hola,</span> soy Nick Brian y soy
              Ingeniero Mecatrónico
            </h2>
            <p className="text-xl text-left ">
              Soy un ingeniero apasionado por el desarrollo web.¡El desarrollo
              web es donde mi corazón y mi ingenio se unen para dar vida a ideas
              digitales emocionantes!
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl text-left ">
              <span className="text-sky-500">Hello,</span> my name is Nick Brian
              and I am mechatronics engineer.
            </h2>
            <p className="text-xl text-left ">
              {`      I'm an engineer passionate about web development. Web development
              is where my heart and ingenuity come together to bring exciting
              digital ideas to life!.`}
            </p>
          </>
        )}
        <div className="w-full p-2 px-4 flex justify-start mt-5">
          <LinkButton
            className="p-2  bg-sky-500 rounded-lg"
            href={""}
            target="_blank"
          >
            <span className=" font-medium tracking-wide text-white ">
              {isSpanish ? "Ver Cv" : "View CV"}
            </span>
          </LinkButton>
        </div>
      </div>
    </section>
  );
}