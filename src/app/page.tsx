import { HeroSection } from "@/components/Hero";
import { TrustSection } from "@/components/Trust";
import { ProblemSection } from "@/components/Problem";
import { SolutionSection } from "@/components/Solution";
import { FeaturesSection } from "@/components/Features";
import { PricingSection } from "@/components/Pricing";
import { TestimonialsSection } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQ";
import { FinalCTASection } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
