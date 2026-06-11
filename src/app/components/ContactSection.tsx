import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/573000000000?text=Hola%20Dolcha%20%F0%9F%8E%82%20Quisiera%20consultar%20sobre%20un%20pedido.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #828C6A 0%, #A0AB89 60%, #EFC0BC 100%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-15"
        style={{ background: "#F6E5E7" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-15"
        style={{ background: "#F6E5E7" }}
        aria-hidden="true"
      />

      <div ref={innerRef} className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <p
          className="tracking-widest uppercase text-[#F6E5E7]/70"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
        >
          ✦ Hablemos ✦
        </p>
        <h2
          className="text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            textShadow: "0 2px 20px rgba(0,0,0,0.2)",
          }}
        >
          ¿Lista para crear algo
          <br />
          <em style={{ color: "#F6E5E7", fontStyle: "italic" }}>inolvidable?</em>
        </h2>

        <p
          className="text-[#F6E5E7]/85 max-w-lg"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300 }}
        >
          Escríbenos por WhatsApp y cuéntanos sobre tu celebración especial. Respondemos en menos de 24 horas con amor
          y con ideas.
        </p>

        <button
          onClick={openWhatsapp}
          aria-label="Contactar a Dolcha por WhatsApp"
          className="contact-wa-btn flex items-center gap-3 px-10 py-4 rounded-full text-white transition-all duration-300"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", letterSpacing: "0.06em", background: "#25D366", border: "none" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Escríbenos por WhatsApp
        </button>

        {/* Contact info pills */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {[
            { icon: "📍", text: "Buenos Aires, Argentina" },
            { icon: "🕐", text: "Lun – Sáb, 9am – 6pm" },
            { icon: "📸", text: "@dolcha.pasteleria" },
          ].map((info) => (
            <div
              key={info.text}
              className="px-4 py-2 rounded-full flex items-center gap-2"
              style={{ background: "rgba(246,229,231,0.2)", backdropFilter: "blur(6px)" }}
            >
              <span>{info.icon}</span>
              <span
                className="text-[#F6E5E7]/90"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem" }}
              >
                {info.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .contact-wa-btn:hover {
          background: #1ebe5c !important;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(37, 211, 102, 0.45);
        }
        .contact-wa-btn:active { transform: translateY(0) scale(1); }
      `}</style>
    </section>
  );
}
