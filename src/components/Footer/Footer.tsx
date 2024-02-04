"use client";
import useLanguageContext from "@/hooks/useLanguageContext/useLanguageContext";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const [isSpanish] = useLanguageContext();
  return (
    <footer
      id="Contact"
      className="w-full  my-20  p-5 py-14 mb-0  bg-[#eeeff3]  "
    >
      <h2 className="text-center font-bold text-2xl text-sky-700 ">
        {isSpanish ? "Contacto" : "Contact"}
      </h2>
      <section className="max-w-7xl  p-4 m-auto  ">
        <div
          className="
          
          flex  w-full
                    mt-2
                    items-center
                    gap-1
                    text-2xl
                    "
        >
          <ul className="flex flex-wrap w-full justify-center gap-4">
            <li className="py-2   px-3 w-fit bg-blue-500 rounded-md ">
              <a
                href="https://www.linkedin.com/in/nick-jauregui-meneses-524256213/"
                target="_blank"
                className="
            flex items-center gap-1 text-white
       
            "
              >
                <AiFillLinkedin />
                LinkedIn
              </a>
            </li>
            <li className="py-2  px-3 w-fit bg-[#3f3f46] rounded-md ">
              <a
                href="mailto:nicknbjm@gmail.com"
                className="
                flex items-center gap-1 text-white
                
                    "
              >
                <MdOutlineEmail />
                nicknbjm@gmail.com
              </a>
            </li>
            <li className="py-2  px-3 w-fit bg-black rounded-md ">
              <a
                href="https://github.com/Nickbrian246"
                target="_blank"
                className="
              flex items-center gap-1 text-white
         "
              >
                <AiFillGithub />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
