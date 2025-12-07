import { Footer } from "@/components/Footer";
import NavbarFeat from "@/components/Navbar";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import WhyUseBrDocs from "../sections/WhyUseBrDocs";
import { Install } from "../sections/Install";
import { Hero } from "../sections/Hero/hero";
import { Features } from "../sections/Features";
import Pricing from "../sections/Pricing/default";
import { Testimonials } from "../sections/Testimonials";

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
        <ScrollRevealSection>
          <Pricing />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <Testimonials />
        </ScrollRevealSection>
        <ScrollRevealSection threshold={0.45}>
          <Install />
        </ScrollRevealSection>
      </main>
      <Footer />
    </div>
  );
}
