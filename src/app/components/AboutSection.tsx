import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagen1 from "../../public/dolchaNuestraHistoria.jpeg";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        textRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotras"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12"
      style={{ background: "#fdf0f1" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <div ref={imgRef} className="relative">
          <div
            className="rounded-3xl overflow-hidden aspect-[3/4] w-full max-w-md mx-auto"
            style={{ boxShadow: "0 20px 60px rgba(130,140,106,0.2)" }}
          >
            <img
              src={imagen1}
              alt="Detalle de torta artesanal con rosas rosadas de Dolcha Pastelería"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div
            className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full flex flex-col items-center justify-center text-center"
            style={{ background: "#828C6A", boxShadow: "0 10px 40px rgba(130,140,106,0.35)" }}
          >
            <span
              className="text-[#F6E5E7]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 600, lineHeight: 1 }}
            >
              +8
            </span>
            <span
              className="text-[#F6E5E7]/80"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em" }}
            >
              años de amor
              <br />
              en cada torta
            </span>
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="flex flex-col gap-7">
          <p
            className="tracking-widest uppercase text-[#A0AB89]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
          >
            ✦ Nuestra historia ✦
          </p>
          <h2
            className="text-[#3a2e2e]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Pasión artesanal,
            <br />
            <em style={{ color: "#E69B97", fontStyle: "italic" }}>elaborada con el corazón.</em>
          </h2>

          <p
            className="text-[#7a5e5e]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}
          >
            Dolcha nació del sueño de crear tortas que trasciendan el sabor: momentos que permanecen en la memoria.
            Desde 2016 elaboramos cada torta con ingredientes de primera calidad, técnicas artesanales y una estética
            romántica que convierte cada creación en una pequeña obra de arte.
          </p>

          <p
            className="text-[#7a5e5e]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}
          >
            Bodas, aniversarios, cumpleaños o simplemente el deseo de regalar algo especial — en Dolcha cada pedido
            recibe la misma dedicación y cariño que si fuera el primero.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { num: "300+", label: "Tortas\ncreadas" },
              { num: "98%", label: "Clientes\nsatisfechos" },
              { num: "12", label: "Sabores\ndisponibles" },
            ].map((stat) => (
              <div key={stat.num} className="flex flex-col items-center text-center">
                <span
                  className="text-[#828C6A]"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}
                >
                  {stat.num}
                </span>
                <span
                  className="text-[#7a5e5e] whitespace-pre-line"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", lineHeight: 1.4 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
