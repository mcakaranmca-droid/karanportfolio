import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Showreel } from "@/components/Showreel";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B1120] text-slate-100 overflow-x-hidden selection:bg-purple-600/30 selection:text-white">
      {/* Dynamic Background Aurora & Particle Canvas */}
      <BackgroundEffects />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Skills Section */}
      <Skills />

      {/* 4. Services Section */}
      <Services />

      {/* 5. Projects Section */}
      <Projects />

      {/* 6. Showreel Section */}
      <Showreel />

      {/* 7. Process Section */}
      <Process />

      {/* 8. Experience & Journey Section */}
      <Experience />

      {/* 9. Contact Section */}
      <Contact />

      {/* 10. Footer */}
      <Footer />

      {/* Back To Top Action */}
      <BackToTop />
    </main>
  );
}
