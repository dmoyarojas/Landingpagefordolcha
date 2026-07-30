import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import boxMundialero from "../../public/dolchaMundial1.jpeg";
import worldCupMacarons from "../../public/world_cup_macarons.png";
import worldCupCupcakes from "../../public/world_cup_cupcakes.png";
import cookieMundial1 from "../../public/dolchaMundial3.jpeg";
import cookieMundial2 from "../../public/dolchaMundial2.jpeg";
import cupcakeMundial1 from "../../public/dolchaMundial6.jpeg";
import cupcakeMundial2 from "../../public/dolchaMundial5.jpeg";
import cupcakeMundial3 from "../../public/dolchaMundial4.jpeg";

gsap.registerPlugin(ScrollTrigger);

const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${alt} ${idx + 1}`}
          style={{ transition: "opacity 1s ease-in-out, transform 0.7s ease" }}
          className={`absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </>
  );
};

const themedProducts = [
  {
    id: "box-mundialero",
    title: "Box Mundialero",
    description: "Disponible sólo los fines de semana previa reservación.\n• Media docena de sándwich de pollo en pancitos Chips artesanales.\n• Media docena de scons de queso y cibulet.",
    img: boxMundialero,
    alt: "Box mundialero con sandwiches y scons",
    tag: "Edición Limitada",
    price: "$35.000",
    msg: "Hola Dolcha! Quisiera encargar un Box Mundialero ⚽🏆"
  },
  {
    id: "cookies-campeones",
    title: "Cookies de Campeones",
    description: "Disfruta de nuestros sabores más argentinos:\n• Mate\n• Copa de fernet\n• Infancia Argentina (butter tofi con chips y dulce de leche)",
    img: cookieMundial1,
    images: [cookieMundial1, cookieMundial2],
    alt: "Cookies de Campeones",
    tag: "Sabores Únicos",
    price: "$15.000",
    msg: "Hola Dolcha! Quisiera encargar las Cookies de Campeones ⚽🍪"
  },
  {
    id: "cupcakes-edicion-mundial",
    title: "Cupcakes Edición Mundial",
    description: "Deliciosos cupcakes de chocolate rellenos de frutos rojos con decoración artesanal mundialista. ¡Ideales para acompañar los partidos!",
    img: cupcakeMundial1,
    images: [cupcakeMundial1, cupcakeMundial2, cupcakeMundial3],
    alt: "Cupcakes Edición Mundial",
    tag: "Favoritos de la Hinchada",
    price: "$25.000 la media docena",
    msg: "Hola Dolcha! Me interesan los Cupcakes Edición Mundial ⚽🧁"
  }
];

export function ThemedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const openWhatsapp = (message: string) => {
    window.open(`https://wa.me/5491131034346?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="fechasEspeciales"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "#fdf0f1" }}
    >
      {/* Background decorations for soccer/festive feel but elegant */}
      <div
        className="absolute top-1/4 -left-16 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#828C6A" }}
      />
      <div
        className="absolute bottom-1/4 -right-16 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#EFC0BC" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16 flex flex-col items-center gap-4">
          <p
            className="tracking-widest uppercase text-[#828C6A]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
          >
            ⚽ Colección Especial Mundial 2026 ⚽
          </p>
          <h2
            className="text-[#3a2e2e]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 600 }}
          >
            Sabor que Grita Campeón
          </h2>
          <p
            className="text-[#7a5e5e] max-w-xl"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.75, fontWeight: 300 }}
          >
            Celebramos la fiesta del fútbol fusionando la pasión mundialista con la dulzura y elegancia que nos caracteriza. ¡Pedidos limitados por temporada!
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {themedProducts.map((item) => (
            <article
              key={item.title}
              className="themed-card group rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between"
              style={{ boxShadow: "0 4px 24px rgba(130,140,106,0.08)", background: "#ffffff" }}
              tabIndex={0}
              aria-label={item.title}
            >
              <div>
                <div className="relative overflow-hidden aspect-[3/4] w-full">
                  {(item as any).images ? (
                    <div className="absolute inset-0 z-0">
                      <ImageSlider images={(item as any).images} alt={item.alt} />
                    </div>
                  ) : (
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                    />
                  )}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full z-20"
                    style={{ background: "rgba(130, 140, 106, 0.9)", backdropFilter: "blur(6px)" }}
                  >
                    <span
                      className="text-white"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col gap-3">
                  <h3
                    className="text-[#3a2e2e]"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#7a5e5e] whitespace-pre-line"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}
                  >
                    {item.description}
                  </p>
                  {(item as any).price && (
                    <p
                      className="text-[#828C6A] font-bold mt-2"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem" }}
                    >
                      {(item as any).price}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-7 pb-7 pt-2">
                <button
                  onClick={() => openWhatsapp(item.msg)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white transition-all duration-300 themed-btn"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    background: "#828C6A",
                    border: "none",
                  }}
                >
                  Consultar Disponibilidad ⚽
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .themed-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .themed-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(130,140,106,0.18) !important;
        }
        .themed-btn {
          transition: all 0.3s ease;
        }
        .themed-btn:hover {
          background: #C9A84C !important; /* Gold on hover */
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(201, 168, 76, 0.2);
        }
      `}</style>
    </section>
  );
}
