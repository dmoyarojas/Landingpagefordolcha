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
    window.open(`https://wa.me/541131034341?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="sabores"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "#ffffff" }}
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

        {/* 2-Column Layout: Image on the Left, Structured Lists and Actions on the Right */}
        <div ref={cardsRef} className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: The Beautiful Menu Card Image */}
          <div className="lg:col-span-5 flex flex-col items-center gap-4">
            <div
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]"
              onClick={() => setModalOpen(true)}
              style={{
                boxShadow: "0 20px 50px rgba(130,140,106,0.15)",
                border: "8px solid #ffffff",
                background: "#ffffff"
              }}
            >
              <img
                src={cartaSaboresImg}
                alt="Carta de Sabores original de Dolcha"
                className="w-full max-w-[340px] h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#828C6A] text-[#F6E5E7] px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                  Ver en pantalla completa
                </span>
              </div>
            </div>
            <p
              className="text-xs text-[#7a5e5e]/80 italic"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Haz clic para ampliar la carta oficial
            </p>
          </div>

          {/* Right Column: Guide to order + Banner + Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Guide Container */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-6"
              style={{ background: "#fdf0f1", boxShadow: "0 10px 40px rgba(130,140,106,0.04)" }}
            >
              <h3
                className="text-[#3a2e2e] text-2xl font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ¿Cómo armar tu Torta Personalizada?
              </h3>
              
              <div className="flex flex-col gap-6">
                {/* Step 1 */}
                <div className="flex gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm"
                    style={{ background: "#828C6A" }}
                  >
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#3a2e2e] font-semibold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Elige tus Sabores favoritos
                    </h4>
                    <p className="text-[#7a5e5e] text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                      Explora la Carta de Sabores en la imagen de la izquierda. Elige tu bizcocho base favorito y combínalo con los rellenos que más te gusten.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm"
                    style={{ background: "#E69B97" }}
                  >
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#3a2e2e] font-semibold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Define el Diseño y Tamaño
                    </h4>
                    <p className="text-[#7a5e5e] text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                      Cuéntanos tu idea: colores, temática, referencias visuales o detalles decorativos. También definiremos la cantidad de porciones según tus invitados.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm"
                    style={{ background: "#828C6A" }}
                  >
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#3a2e2e] font-semibold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      ¡Haz tu Pedido!
                    </h4>
                    <p className="text-[#7a5e5e] text-sm leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                      Haz clic en "Armar Torta Personalizada" para escribirnos directamente a nuestro WhatsApp. Dinos la fecha del evento y lo que has elegido para darte un presupuesto a medida.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <button
                onClick={openWhatsapp}
                className="flex-1 sm:flex-initial px-8 py-3.5 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[#828C6A] hover:text-[#3a2e2e] bg-[#fdf0f1] hover:bg-[#EFC0BC]/20 border border-[#828C6A]/20 transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em"
                }}
              >
                <Eye className="w-4 h-4" />
                Ver en Pantalla Completa
              </button>
            </div>

            {/* Buttercream info Banner */}
            <div
              ref={bannerRef}
              className="w-full p-5 rounded-2xl text-center border"
              style={{
                background: "#828C6A",
                color: "#F6E5E7",
                borderColor: "#828C6A",
                boxShadow: "0 8px 25px rgba(130,140,106,0.12)"
              }}
            >
              <p
                className="font-light italic text-xs sm:text-sm leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "Nuestros rellenos están elaborados a base de nuestra deliciosa Buttercream Italiana, combinados con una deliciosa ganache de chocolate."
              </p>
            </div>
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
