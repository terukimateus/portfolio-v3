import { Footer } from "@/components/Footer";
import NavbarFeat from "@/components/Navbar";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { Hero } from "../sections/Hero/hero";
import { Skills } from "../sections/Skills/skills";
import { Experiences } from "../sections/Experiences/experiences";
import { Blog } from "../sections/Blog/blog";
import { Projects } from "../sections/Projects/projects";

export function MainPage() {
  return (
    <div
      id="top"
      className="max-w-7xl mx-auto md:border-x relative bg-background"
    >
      <main>
        <Hero />
        <Projects />
        <Experiences />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
