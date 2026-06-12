import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cake, Sparkles, X, Eye } from "lucide-react";

// Import local image for the original flavor card if the user wants to see it
import cartaSaboresImg from "../../public/dolchaSabores.jpeg"; // Placeholder/Default or dolchaFondo, we will instruct the user to replace this with the saved image if they wish

gsap.registerPlugin(ScrollTrigger);

const bizcochos = [
  "Vainilla",
  "Marmolado",
  "Chocolate",
  "Red Velvet",
  "Carrot Cake",
  "Oreo"
];

const rellenos = [
  "Dulce de Leche",
  "Chocolate",
  "Capuchino",
  "Chocolate Blanco",
  "Bon O Bon",
  "Frutilla",
  "Limón Pie",
  "Dulce de Leche Granizado",
  "Maracuyá",
  "Nutella",
  "Frutos Rojos",
  "Frambuesa",
  "Chocotorta",
  "Oreo",
  "Cream Cheese"
];

export function FlavorsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );
      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" }
        }
      );
      gsap.fromTo(
        bannerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: bannerRef.current, start: "top 85%" }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const openWhatsapp = () => {
    const msg = "¡Hola Dolcha! Estuve viendo la Carta de Sabores en la web y me encantaría armar una torta personalizada 🍰✨";
    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="sabores"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "#F6E5E7" }}
    >
      {/* Decorative details */}
      <div
        className="absolute top-1/3 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#828C6A" }}
      />
      <div
        className="absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-10 blur-2xl pointer-events-none"
        style={{ background: "#EFC0BC" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16 flex flex-col items-center gap-4">
          <p
            className="tracking-widest uppercase text-[#828C6A]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
          >
            ✦ Selección de Dulzura ✦
          </p>
          <h2
            className="text-[#3a2e2e]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}
          >
            Carta de Sabores
          </h2>
          <p
            className="text-[#7a5e5e] max-w-xl"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.75, fontWeight: 300 }}
          >
            Diseña la torta de tus sueños. Elige tu bizcocho favorito y combínalo con nuestros exquisitos rellenos hechos con amor.
          </p>
        </div>

        {/* Flavors Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-5 gap-8 items-stretch mb-16">
          {/* Card 1: Bizcochos (2 cols on desktop) */}
          <div
            className="md:col-span-2 rounded-3xl p-8 flex flex-col justify-between"
            style={{ background: "#fdf0f1", boxShadow: "0 10px 40px rgba(130,140,106,0.06)" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFC0BC]/30">
                <div className="p-2.5 rounded-full bg-[#828C6A]/10 text-[#828C6A]">
                  <Cake className="w-5 h-5" />
                </div>
                <h3
                  className="text-[#3a2e2e] text-xl font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Bizcochos
                </h3>
              </div>
              <ul className="flex flex-col gap-3.5">
                {bizcochos.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#7a5e5e] group cursor-default"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E69B97] transition-transform duration-300 group-hover:scale-150" />
                    <span className="transition-colors duration-300 group-hover:text-[#3a2e2e]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Rellenos (3 cols on desktop to support 2 subcolumns) */}
          <div
            className="md:col-span-3 rounded-3xl p-8 flex flex-col justify-between"
            style={{ background: "#ffffff", boxShadow: "0 10px 40px rgba(130,140,106,0.06)" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFC0BC]/30">
                <div className="p-2.5 rounded-full bg-[#E69B97]/10 text-[#EFC0BC]">
                  <Sparkles className="w-5 h-5" style={{ color: "#E69B97" }} />
                </div>
                <h3
                  className="text-[#3a2e2e] text-xl font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Rellenos
                </h3>
              </div>
              {/* Double column list for fillings to balance container heights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                {rellenos.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[#7a5e5e] group cursor-default"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#828C6A] transition-transform duration-300 group-hover:scale-150" />
                    <span className="transition-colors duration-300 group-hover:text-[#3a2e2e]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buttercream info & Actions */}
        <div ref={bannerRef} className="flex flex-col items-center gap-8">
          <div
            className="w-full max-w-4xl p-6 rounded-2xl text-center border"
            style={{
              background: "#828C6A",
              color: "#F6E5E7",
              borderColor: "#828C6A",
              boxShadow: "0 10px 30px rgba(130,140,106,0.15)"
            }}
          >
            <p
              className="font-light italic text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Nuestros rellenos están elaborados a base de nuestra deliciosa Buttercream Italiana, combinados con una deliciosa ganache de chocolate."
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openWhatsapp}
              className="px-8 py-3.5 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                background: "#828C6A",
                border: "none",
              }}
            >
              Armar Torta Personalizada
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-[#828C6A] hover:text-[#3a2e2e] bg-[#fdf0f1] hover:bg-[#EFC0BC]/20 border border-[#828C6A]/20 transition-all duration-300 cursor-pointer"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.05em"
              }}
            >
              <Eye className="w-4 h-4" />
              Ver Menú Impreso
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for original menu image */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div className="relative max-w-3xl w-full h-[85vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Modal Image container */}
            <div className="flex-1 overflow-auto p-6 flex justify-center items-center bg-[#F6E5E7]">
              <img
                src={cartaSaboresImg}
                alt="Carta de Sabores original de Dolcha"
                className="max-h-full max-w-full object-contain rounded-lg shadow-md"
              />
            </div>
            {/* Modal footer info */}
            <div className="p-4 bg-white border-t text-center flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-[#3a2e2e] font-semibold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                Carta de Sabores Oficial
              </span>
              <p className="text-xs text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif" }}>
                *Para guardar la imagen en tu PC o Móvil, mantén presionado y selecciona "Guardar imagen".
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
