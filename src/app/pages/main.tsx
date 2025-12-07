import { Footer } from "@/components/Footer";
import NavbarFeat from "@/components/Navbar";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import WhyUseBrDocs from "../sections/WhyUseBrDocs";
import { Install } from "../sections/Install";
import { Hero } from "../sections/Hero/hero";
import { Features } from "../sections/Features";

export function MainPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarFeat />
      <main>
        <Hero />
        <ScrollRevealSection>
          <Features />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <WhyUseBrDocs />
        </ScrollRevealSection>
        <ScrollRevealSection threshold={0.45}>
          <Install />
        </ScrollRevealSection>
      </main>
      <Footer />
    </div>
  );
}
