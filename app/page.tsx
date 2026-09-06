import dynamic from "next/dynamic";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { CodeDiffSection } from "@/components/sections/CodeDiffSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { DeveloperImpactSection } from "@/components/sections/DeveloperImpactSection";
import { AuthSimulator } from "@/components/sections/AuthSimulator";
import { FAQSection } from "@/components/sections/FAQSection";
import { ShareBar } from "@/components/ui/ShareBar";
import { TakeawaySection } from "@/components/sections/TakeawaySection";
import { BackToTop } from "@/components/ui/BackToTop";

const BackgroundCanvas = dynamic(
  () => import("@/components/three/BackgroundCanvas"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-asgardeo-orange/30">
      {/* 3D Three.js Ambient Particle Space */}
      <BackgroundCanvas />

      {/* Navigation Header with ScrollSpy */}
      <Navbar />

      {/* Blog Post Sections */}
      <div className="relative z-10 space-y-8">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CodeDiffSection />
        <ArchitectureSection />
        <DeveloperImpactSection />
        <AuthSimulator />
        <FAQSection />
        <ShareBar />
        <TakeawaySection />
      </div>

      {/* Floating Back to Top with Scroll Progress Ring */}
      <BackToTop />
    </main>
  );
}
