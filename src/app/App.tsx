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
        {/* <SpecialtiesSection /> */}
        <ProductCatalogSection />
        <FlavorsSection />
        {/* <GallerySection /> */}
        <ThemedSection />
        {/* <CoursesSection /> */}
        <ContactSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/541131034341?text=Hola%20Dolcha%20%F0%9F%8E%82%20Quisiera%20consultar%20por%20una%20torta%20personalizada."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: "0 8px 30px rgba(37, 211, 102, 0.4)"
        }}
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -left-48 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-lg bg-white text-[#3a2e2e] text-xs font-semibold shadow-md border border-[#EFC0BC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          ¡Haz tu pedido por WhatsApp! 🍰
        </span>
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

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
