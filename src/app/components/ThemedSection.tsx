import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import worldCupCake from "../../public/world_cup_cake.png";
import worldCupMacarons from "../../public/world_cup_macarons.png";
import worldCupCupcakes from "../../public/world_cup_cupcakes.png";

gsap.registerPlugin(ScrollTrigger);

const themedProducts = [
  {
    id: "torta-estadio",
    title: "Torta Estadio Campeones",
    description: "Nuestra obra de arte mundialista. Bizcochuelo de vainilla humedecido en tres leches, relleno de dulce de leche artesanal y decorado con detalles en oro comestible y un diseño elegante de cancha de fútbol.",
    img: worldCupCake,
    alt: "Torta gourmet del mundial de fútbol con césped de azúcar y detalles dorados",
    tag: "Edición Limitada",
    msg: "Hola Dolcha! Quisiera consultar sobre la Torta Estadio Campeones de la Colección Mundial 2026 ⚽🏆"
  },
  {
    id: "macarons-seleccion",
    title: "Macarons de la Selección",
    description: "Delicados macarons franceses pintados a mano con sutiles balones dorados y colores mundialistas. Caja por 12 unidades en sabores pistacho y ganache de chocolate blanco.",
    img: worldCupMacarons,
    alt: "Macarons en tonos pastel y detalles pintados de balones de fútbol",
    tag: "Petit Délices",
    msg: "Hola Dolcha! Quisiera encargar una caja de Macarons de la Selección de la Colección Mundial 2026 ⚽✨"
  },
  {
    id: "cupcakes-pasion",
    title: "Cupcakes de la Pasión",
    description: "Cupcakes de chocolate belga rellenos de coulis de frutos rojos, coronados con frosting de crema suiza y decoraciones artesanales de fútbol con detalles dorados.",
    img: worldCupCupcakes,
    alt: "Cupcakes con decoraciones mundialistas y detalles dorados",
    tag: "Favoritos de la Hinchada",
    msg: "Hola Dolcha! Me interesan los Cupcakes de la Pasión de la Colección Mundial 2026 ⚽🧁"
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
    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="mundial2026"
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
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full"
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
                    className="text-[#7a5e5e]"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}
                  >
                    {item.description}
                  </p>
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
