import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import AboutMe from "@/components/aboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  title: "NbDev js portfolio",
};
export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}
