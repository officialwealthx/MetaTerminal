import { HeroSection } from "@/components/Hero";
import { TrustSection } from "@/components/Trust";
import { ProblemSection } from "@/components/Problem";
import { SolutionSection } from "@/components/Solution";
import { FeaturesSection } from "@/components/Features";
import { PricingSection } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
