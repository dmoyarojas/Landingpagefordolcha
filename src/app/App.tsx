import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SpecialtiesSection } from "./components/SpecialtiesSection";
import { GallerySection } from "./components/GallerySection";
import { CoursesSection } from "./components/CoursesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

/* MARKER-MAKE-KIT-INVOKED */
/* No @make-kits design system detected — using Dolcha brand tokens + Radix primitives */

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden w-full relative"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SpecialtiesSection />
        <GallerySection />
        {/* <CoursesSection /> */}
        <ContactSection />
      </main>
      <Footer />

      <style>{`
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        html, body {
          scroll-behavior: smooth;
          overflow-x: hidden;
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}
