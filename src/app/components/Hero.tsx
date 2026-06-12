import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../../public/dolchaHeroSection.jpeg";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 });
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(taglineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.4")
      .fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.4")
      .fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.4")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3");

    // Subtle floating animation on decorative element
    if (floatRef.current) {
      gsap.to(floatRef.current, {
        y: -18,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCollection = () => {
    document.querySelector("#mundial2026")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/573000000000?text=Hola%20Dolcha%2C%20quisiera%20hacer%20un%20pedido%20%F0%9F%8E%82",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openPedidosYa = () => {
    window.open(
      "https://www.pedidosya.com.ar/restaurantes/buenos-aires/dolcha-pasteleria-6fa61b5c-3e29-4897-a657-158f66d1946a-menu",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F6E5E7 0%, #EFC0BC 50%, #E69B97 100%)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1761110657716-1eb3cb62de97?w=1600&h=900&fit=crop&auto=format')",
          filter: "brightness(0.35)",
        }}
        role="img"
        aria-label="Pastel de bodas con rosas y follaje, obra de Dolcha Pastelería Boutique"
      />

      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(130,140,106,0.55) 0%, rgba(246,229,231,0.15) 50%, rgba(230,155,151,0.45) 100%)",
        }}
      />

      {/* Decorative floating petal */}
      <div
        ref={floatRef}
        className="absolute right-16 top-1/4 w-48 h-48 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F6E5E7 0%, #EFC0BC 70%, transparent 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center py-32">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <p
            ref={taglineRef}
            className="tracking-widest uppercase text-[#EFC0BC]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em" }}
          >
            ✦ Creaciones artesanales con amor ✦
          </p>

          {/* Pulsating Monthly Collection Badge */}
          <button
            onClick={scrollToCollection}
            className="monthly-collection-badge self-start flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3a2e2e] bg-[#F6E5E7] transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E21B3C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E21B3C]"></span>
            </span>
            Colección Especial: Mundial 2026 ⚽
          </button>

          <h1
            ref={titleRef}
            className="text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Donde cada dulce
            <br />
            <em style={{ color: "#EFC0BC", fontStyle: "italic" }}>cuenta una historia.</em>
          </h1>

          <p
            ref={subtitleRef}
            className="text-[#F6E5E7]/90 max-w-md"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", lineHeight: 1.75, fontWeight: 300 }}
          >
            En <strong style={{ fontWeight: 400, color: "#EFC0BC" }}>Dolcha Pastelería Boutique</strong> elaboramos
            pasteles, tartas y dulces artesanales con ingredientes seleccionados, convirtiendo cada celebración en un
            recuerdo irrepetible.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={openWhatsapp}
              aria-label="Hacer un pedido por WhatsApp"
              className="whatsapp-btn flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white transition-all duration-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                background: "#25D366",
                border: "none",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hacer un pedido
            </button>

            <button
              onClick={openPedidosYa}
              aria-label="Pedir por Delivery en PedidosYa"
              className="pedidosya-btn flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white transition-all duration-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                background: "#E21B3C",
                border: "none",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
              </svg>
              Pedir en PedidosYa
            </button>

            <button
              onClick={scrollToContact}
              className="secondary-hero-btn px-7 py-3.5 rounded-full border-2 border-[#F6E5E7]/60 text-[#F6E5E7] transition-all duration-300 hover:bg-[#F6E5E7]/15"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", letterSpacing: "0.05em", background: "transparent" }}
            >
              Conoce más
            </button>
          </div>
        </div>

        {/* Right: feature card */}
        <div className="hidden lg:flex justify-center">
          <div
            className="relative rounded-3xl overflow-hidden aspect-[3/4] w-[330px]"
            style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}
          >
            <img
              src={heroImg}
              alt="Pastel artesanal decorado con flores rosas de Dolcha"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: "linear-gradient(to top, rgba(58,46,46,0.85) 0%, transparent 100%)" }}
            >
              <p
                className="text-[#EFC0BC]"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic" }}
              >
                "Cada pieza, una obra de arte"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        aria-hidden="true"
      >
        <span
          className="text-[#F6E5E7] tracking-widest uppercase"
          style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6rem" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-[#F6E5E7]/50 animate-pulse" />
      </div>

      <style>{`
        .whatsapp-btn:hover {
          background: #1ebe5c !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
        }
        .whatsapp-btn:active { transform: translateY(0); }
        .pedidosya-btn:hover {
          background: #c51430 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(226, 27, 60, 0.45);
        }
        .pedidosya-btn:active { transform: translateY(0); }
        
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(246, 229, 231, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(246, 229, 231, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(246, 229, 231, 0);
          }
        }
        .monthly-collection-badge {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </section>
  );
}
