import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Features } from "@/components/sections/features";
import { Scores } from "@/components/sections/scores";
import { AiSection } from "@/components/sections/ai-section";
import { Pricing } from "@/components/sections/pricing";
import { CommunityPreview } from "@/components/sections/community-preview";
import { CtaSection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Scores />
        <AiSection />
        <Pricing />
        <CommunityPreview />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
