import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import ModulesGrid from "@/components/ModulesGrid";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-wisecura-background text-wisecura-text selection:bg-wisecura-secondary selection:text-wisecura-primary">
      <Hero />
      <WhoWeAre />
      <ModulesGrid />
      <Features />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
