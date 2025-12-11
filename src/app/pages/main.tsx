import { Footer } from "@/components/Footer";
import NavbarFeat from "@/components/Navbar";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { Hero } from "../sections/Hero/hero";
import { Features } from "../sections/Features";
import { StackMarquee } from "../sections/StackMarquee";
import { LeanPresence } from "../sections/LeanPresence";
import { ShiftProcess } from "../sections/ShiftProcess";
import { ResultsCases } from "../sections/ResultsCases";
import { FAQ } from "../sections/FAQ";

export function MainPage() {
  return (
    <div
      id="top"
      className="max-w-7xl mx-auto md:border-x relative bg-background"
    >
      <NavbarFeat />
      <main>
        <Hero />
        <ScrollRevealSection id="stack">
          <StackMarquee />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <LeanPresence />
        </ScrollRevealSection>
        <ScrollRevealSection id="servicos">
          <Features />
        </ScrollRevealSection>
        <ScrollRevealSection id="processo">
          <ShiftProcess />
        </ScrollRevealSection>
        <ScrollRevealSection id="cases" threshold={0.45}>
          <ResultsCases />
        </ScrollRevealSection>
        <ScrollRevealSection id="faq" threshold={0.45}>
          <FAQ />
        </ScrollRevealSection>
      </main>
      <Footer />
    </div>
  );
}
