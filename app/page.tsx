import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { NovisShowcase } from "@/components/NovisShowcase";
import { Showreel } from "@/components/Showreel";
import { Experience } from "@/components/Experience";
import { Process } from "@/components/Process";
import { Tools } from "@/components/Tools";
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

      {/* 1. Hero Section — Cinematic First Impression */}
      <Hero />

      {/* 2. About Me — Personal Profile & BCA Narrative */}
      <About />

      {/* 3. Skills Section — Animated Proficiency (80%, 80%, 60%) */}
      <Skills />

      {/* 4. Services Section — What I Can Do */}
      <Services />

      {/* 5. Featured Projects — Selected Works */}
      <Projects />

      {/* 6. Flagship Project — NOVIS AI Showcase & Interactive Orb */}
      <NovisShowcase />

      {/* 7. Video Production Showreel & Motion Showcase */}
      <Showreel />

      {/* 8. Experience & Learning Timeline — My Journey */}
      <Experience />

      {/* 9. Methodology & Process Flow */}
      <Process />

      {/* 10. Tools & Technologies Categorized Grid */}
      <Tools />

      {/* 11. Contact Section — Let's Build Something Great */}
      <Contact />

      {/* 12. Footer with Monogram & Dynamic Year */}
      <Footer />

      {/* Back To Top Floating Action */}
      <BackToTop />
    </main>
  );
}
