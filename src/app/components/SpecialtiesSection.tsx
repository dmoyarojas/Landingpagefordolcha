import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    title: "Pasteles de Celebración",
    description: "Diseñamos el pastel de tus sueños: desde el boceto hasta el detalle más delicado, cada nivel es una declaración de amor.",
    img: "https://images.unsplash.com/photo-1581745071812-e69f8cf9e898?w=500&h=600&fit=crop&auto=format",
    alt: "Pastel de celebración de múltiples pisos decorado con flores",
    tag: "Bodas & Eventos",
  },
  {
    title: "Macarons & Petit Fours",
    description: "Delicados bocados elaborados con técnica francesa clásica. Disponibles en más de 12 sabores de temporada.",
    img: "https://images.unsplash.com/photo-1519665541-b13188b28be9?w=500&h=600&fit=crop&auto=format",
    alt: "Torre de macarons coloridos de múltiples sabores",
    tag: "Petit Délices",
  },
  {
    title: "Tartas Artesanales",
    description: "Masas crujientes, cremas suaves y frutas frescas de temporada se unen en cada pieza para sorprenderte.",
    img: "https://images.unsplash.com/photo-1581745069539-1e60d7f965f4?w=500&h=600&fit=crop&auto=format",
    alt: "Tarta artesanal decorada con flores rosas y crema",
    tag: "Repostería Clásica",
  },
];

export function SpecialtiesSection() {
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

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12"
      style={{ background: "#F6E5E7" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16 flex flex-col items-center gap-4">
          <p
            className="tracking-widest uppercase text-[#A0AB89]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
          >
            ✦ Lo que creamos ✦
          </p>
          <h2
            className="text-[#3a2e2e]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 600 }}
          >
            Nuestras especialidades
          </h2>
          <p
            className="text-[#7a5e5e] max-w-xl"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.75, fontWeight: 300 }}
          >
            Cada creación lleva horas de dedicación artesanal y el sello inconfundible de Dolcha.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {specialties.map((item) => (
            <article
              key={item.title}
              className="specialty-card group rounded-3xl overflow-hidden cursor-pointer"
              style={{ boxShadow: "0 4px 24px rgba(130,140,106,0.12)", background: "#fdf0f1" }}
              tabIndex={0}
              aria-label={item.title}
            >
              <div className="relative overflow-hidden" style={{ height: 300 }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full"
                  style={{ background: "rgba(246,229,231,0.92)", backdropFilter: "blur(6px)" }}
                >
                  <span
                    className="text-[#828C6A]"
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
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .specialty-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .specialty-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(130,140,106,0.22) !important;
        }
      `}</style>
    </section>
  );
}
