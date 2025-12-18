import { Footer } from "@/components/Footer";
import NavbarFeat from "@/components/Navbar";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { Hero } from "../sections/Hero/hero";
import { Pricing } from "../sections/Pricing";
import { StackMarquee } from "../sections/StackMarquee";
import { Features } from "../sections/Features";
import { HowItWorks } from "../sections/HowItWorks";
import { ResultsCases } from "../sections/ResultsCases";
import { FAQ } from "../sections/FAQ";
import { SocialProof } from "../sections/SocialProof";
import { FinalCTA } from "../sections/FinalCTA";

export function MainPage() {
  return (
    <div
      id="top"
      className="max-w-7xl mx-auto md:border-x relative bg-background"
    >
      <NavbarFeat />
      <main>
        <Hero />

        <ScrollRevealSection id="beneficios">
          <Features />
        </ScrollRevealSection>

        <ScrollRevealSection id="planos">
          <Pricing />
        </ScrollRevealSection>
        <div className="h-16 w-full border-t bg-stripes" />

        <ScrollRevealSection id="como-funciona">
          <HowItWorks />
        </ScrollRevealSection>
        <div className="h-16 w-full border-b bg-stripes" />

        <ScrollRevealSection id="prova" threshold={0.45}>
          <SocialProof />
        </ScrollRevealSection>
        <ScrollRevealSection id="faq" threshold={0.45}>
          <FAQ />
        </ScrollRevealSection>
        <ScrollRevealSection id="cta-final" threshold={0.4}>
          <FinalCTA />
        </ScrollRevealSection>
      </main>
      <Footer />
    </div>
  );
}
