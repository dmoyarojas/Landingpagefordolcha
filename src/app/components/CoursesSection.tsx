import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    name: "Macarons Parisinos",
    level: "Principiante",
    duration: "4 horas",
    price: "$120.000",
    description: "Aprende la técnica francesa clásica para crear macarons perfectos. Incluye rellenos de temporada.",
  },
  {
    name: "Pasteles de Fondant",
    level: "Intermedio",
    duration: "8 horas",
    price: "$220.000",
    description: "Diseña y construye pasteles de varios pisos cubiertos con fondant y decoraciones florales.",
  },
  {
    name: "Tartas Modernas",
    level: "Avanzado",
    duration: "6 horas",
    price: "$180.000",
    description: "Crea tartas contemporáneas con acabados geométricos, pintados y texturas artísticas.",
  },
];

export function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const openWhatsapp = (courseName: string) => {
    const msg = encodeURIComponent(`Hola Dolcha 🎂 Me interesa el curso de ${courseName}. ¿Tienen disponibilidad?`);
    window.open(`https://wa.me/573000000000?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="cursos"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12"
      style={{ background: "#fdf0f1" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <p
            className="tracking-widest uppercase text-[#A0AB89]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
          >
            ✦ Aprende con nosotras ✦
          </p>
          <h2
            className="text-[#3a2e2e]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 600 }}
          >
            Cursos de repostería
          </h2>
          <p
            className="text-[#7a5e5e] max-w-xl"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.75, fontWeight: 300 }}
          >
            Comparte nuestra pasión y lleva el arte de la repostería a tu propia cocina. Grupos pequeños, atención
            personalizada y materiales incluidos.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.name}
              className="course-card rounded-3xl p-8 flex flex-col gap-5 border border-[#EFC0BC]/60"
              style={{ background: "#F6E5E7" }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="px-3 py-1 rounded-full text-[#828C6A] border border-[#828C6A]/30"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {course.level}
                </span>
                <span
                  className="text-[#828C6A]"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700 }}
                >
                  {course.price}
                </span>
              </div>

              <h3
                className="text-[#3a2e2e]"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 600 }}
              >
                {course.name}
              </h3>

              <p
                className="text-[#7a5e5e] flex-1"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}
              >
                {course.description}
              </p>

              <div
                className="flex items-center gap-2 text-[#A0AB89]"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {course.duration}
              </div>

              <button
                onClick={() => openWhatsapp(course.name)}
                className="enroll-btn w-full py-3 rounded-full text-[#F6E5E7] transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em", background: "#828C6A", border: "none" }}
              >
                Reservar mi lugar
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .course-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(130,140,106,0.18);
        }
        .enroll-btn:hover {
          background: #A0AB89 !important;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
