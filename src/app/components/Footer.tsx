export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 px-6 lg:px-12 border-t border-[#EFC0BC]/40"
      style={{ background: "#F6E5E7" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            className="text-[#3a2e2e]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 600 }}
          >
            Dolcha
          </span>
          <span
            className="text-[#A0AB89]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            Pastelería Boutique
          </span>
        </div>

        {/* Nav */}
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Inicio", href: "#inicio" },
              { label: "Especialidades", href: "#especialidades" },
              { label: "Galería", href: "#galeria" },
              { label: "Cursos", href: "#cursos" },
              { label: "Contacto", href: "#contacto" },
            ].map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-[#7a5e5e] hover:text-[#828C6A] transition-colors duration-200"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", background: "none", border: "none" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p
          className="text-[#A0AB89] text-center"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem" }}
        >
          © 2024 Dolcha Pastelería Boutique
        </p>
      </div>
    </footer>
  );
}
