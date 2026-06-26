import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagen1 from "../../public/dolchaNuestraHistoria.jpeg";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

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
              +15
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
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", letterSpacing: "0.3em", fontWeight: 600 }}
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

          <div className="flex flex-col gap-4 relative">
            <p
              className="text-[#7a5e5e]"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}
            >
              Detrás de Dolcha Pastelería Boutique hay una historia de sueños, vocación y una comunidad que creció junto a nosotros.
            </p>
            <p
              className="text-[#7a5e5e]"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}
            >
              Todo comenzó hace más de 15 años, en la cocina de mi casa. Lo que empezó preparando tortas para familiares y amigos fue creciendo gracias al boca a boca, hasta que muchas personas comenzaron a pedirme que les enseñara a decorar y crear sus propias tortas.
            </p>

            <div 
              className={`flex flex-col gap-4 overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Como soy maestra de profesión, descubrí que enseñar era una pasión tan grande como la pastelería. Así nació Dolce, nuestra escuela, donde durante más de quince años me dediqué a formar alumnos, compartiendo conocimientos, técnicas y experiencia con miles de personas.
              </p>
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Con el tiempo, la escuela se convirtió en un referente. Registré la marca durante la pandemia y tuve la oportunidad de trabajar junto a las principales marcas del rubro, brindar clases en exposiciones y eventos, y acompañar a una enorme comunidad de alumnos que sigue creciendo hasta el día de hoy.
              </p>
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Fue justamente durante la pandemia cuando nació algo muy especial. En las clases en vivo, los “madrugones” y los encuentros virtuales, comenzamos a construir una comunidad muy unida. Buscando un nombre que nos representara surgieron “Las Dolchitas”, como empezamos a llamar cariñosamente a nuestros alumnos. Ese nombre quedó para siempre y hoy sigue identificando a nuestra comunidad, que continúa conectada a través de un grupo privado.
              </p>
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                De manera natural, esa identidad también dio origen a Dolcha. Así, cuando llegó el momento de cumplir un nuevo sueño, el nombre ya tenía una historia y un significado construidos junto a quienes nos acompañaron durante tantos años.
              </p>
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Ese sueño finalmente se hizo realidad en octubre del año pasado, gracias al apoyo de un gran amigo de la familia. Así nació Dolcha Pastelería Boutique, ubicada en Montevideo 732, un espacio pensado para ofrecer mucho más que tortas y postres.
              </p>
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Elegimos llamarla Pastelería Boutique porque creemos que la experiencia está en cada detalle. Desde la selección de los mejores ingredientes hasta la presentación de cada producto y un packaging cuidadosamente diseñado, todo está pensado para sorprender. Queremos que cada persona que nos visite se lleve mucho más que un postre: queremos que viva una experiencia.
              </p>
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Hoy, Dolcha Pastelería Boutique abre sus puertas para ofrecer pastelería de diseño, artesanal y de excelencia. Y Dolce continúa su camino como un estudio de formación, donde seguimos brindando clases de decoración de tortas con grupos reducidos y una enseñanza personalizada, manteniendo la esencia que nos acompañó desde el primer día.
              </p>
              <p className="text-[#7a5e5e]" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Porque creemos que la pastelería no es solamente crear algo rico. Es emocionar, compartir y transformar los pequeños momentos en recuerdos inolvidables.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-[#828C6A] hover:text-[#5d644b] font-medium text-left transition-colors self-start"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", letterSpacing: "0.05em" }}
            >
              {isExpanded ? "Ver menos" : "Leer historia completa..."}
            </button>
          </div>

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
