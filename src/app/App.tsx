import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SpecialtiesSection } from "./components/SpecialtiesSection";
import { ProductCatalogSection } from "./components/ProductCatalogSection";
import { FlavorsSection } from "./components/FlavorsSection";
import { GallerySection } from "./components/GallerySection";
import { ThemedSection } from "./components/ThemedSection";
import { CoursesSection } from "./components/CoursesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

/* MARKER-MAKE-KIT-INVOKED */
/* No @make-kits design system detected — using Dolcha brand tokens + Radix primitives */

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Refresh ScrollTrigger when page is fully loaded (images, fonts, etc.)
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    // 2. Refresh after a small timeout to let late-rendering images/layouts settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1200);

    // 3. Refresh ScrollTrigger on resize and orientation changes
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // 4. Configure limit callbacks and clear scroll memory
    ScrollTrigger.config({
      limitCallbacks: true
    });
    ScrollTrigger.clearScrollMemory();

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      clearTimeout(timer);
    };
  }, []);

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
        <ProductCatalogSection />
        <FlavorsSection />
        <GallerySection />
        <ThemedSection />
        {/* <CoursesSection /> */}
        <ContactSection />
      </main>
      <Footer />

      <style>{`
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}
