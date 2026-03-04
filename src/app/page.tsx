import { HeroSection } from "@/components/Hero";
import { TrustSection } from "@/components/Trust";
import { ProblemSection } from "@/components/Problem";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ProblemSection />
    </main>
  );
}
