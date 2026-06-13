import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import logoImg from "../../public/dolchaHeroSection.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
    );
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "inicio",
      "especialidades",
      "catalogo",
      "galeria",
      "fechasEspeciales",
      "",
      "",
      "cursos",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },

    { label: "Catálogo", href: "#catalogo" },
    { label: "Sabores", href: "#sabores" },
    { label: "Galería", href: "#galeria" },
    { label: "Fechas Especiales", href: "#fechasEspeciales" },
    // { label: "Nosotras", href: "#nosotras" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50 bg-[#F6E5E7]/95 backdrop-blur-md shadow-sm border-b border-[#EFC0BC]/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 relative">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#inicio")}>
          <img src={logoImg} alt="Dolcha logo" className="h-12 w-auto object-contain rounded-full" />
          <div className="flex flex-col leading-none">
            <span
              className="text-[#828C6A] tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", letterSpacing: "0.25em" }}
            >
              Pastelería Boutique
            </span>
            <span
              className="text-[#3a2e2e]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.55rem", fontWeight: 700, lineHeight: 1.1 }}
            >
              Dolcha
            </span>
          </div>
        </div>

        {/* Desktop links */}
        <div ref={linksRef} className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-9 ml-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`relative transition-colors duration-300 font-semibold group ${isActive ? "text-[#828C6A]" : "text-[#3a2e2e] hover:text-[#828C6A]"
                  }`}
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", letterSpacing: "0.05em", background: "none", border: "none" }}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-[#E69B97] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
              </button>
            );
          })}

          {/* Cursos - special hover: white bg, black text, gold border */}
          <button
            className="cursos-btn px-5 py-2 rounded-full border transition-all duration-300 font-semibold"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              background: activeSection === "cursos" ? "#E69B97" : "#828C6A",
              color: "#F6E5E7",
              border: `1.5px solid ${activeSection === "cursos" ? "#E69B97" : "#828C6A"}`,
            }}
            onClick={() => scrollTo("https://www.escueladolce.com.ar/")}
          >
            Cursos
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#828C6A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#828C6A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#828C6A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[#F6E5E7]/98 backdrop-blur-md border-t border-[#EFC0BC]/40 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`text-left font-semibold transition-colors ${isActive ? "text-[#828C6A]" : "text-[#3a2e2e] hover:text-[#828C6A]"
                  }`}
                style={{ fontFamily: "'Lato', sans-serif", background: "none", border: "none" }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => scrollTo("https://www.escueladolce.com.ar/")}
            className="self-start px-5 py-2 rounded-full border font-semibold"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: activeSection === "cursos" ? "#E69B97" : "#828C6A",
              color: "#F6E5E7",
              border: `1.5px solid ${activeSection === "cursos" ? "#E69B97" : "#828C6A"}`,
            }}
          >
            Cursos
          </button>
        </div>
      </div>

      <style>{`
        .cursos-btn:hover {
          background: #ffffff !important;
          color: #111111 !important;
          border-color: #C9A84C !important;
          box-shadow: 0 0 0 1px #C9A84C, 0 4px 12px rgba(201, 168, 76, 0.25) !important;
        }
      `}</style>
    </nav>
  );
}
