import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import galeria1 from "@/public/dolchaGaleria1.png"
import galeria2 from "@/public/dolchaGaleria2.png"

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: galeria1,
    alt: "Tres tortas de boda escalonados con rosas y follaje verde",
    span: "row-span-2",
  },
  {
    src: galeria2,
    alt: "Torre de macarons apilados de colores pasteles",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1633997454151-b0262093419c?w=500&h=320&fit=crop&auto=format",
    alt: "Macarons coloridos apilados",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581745073351-e053d7d73694?w=600&h=400&fit=crop&auto=format",
    alt: "Torta blanca con decoración de rosas rosadas",
    span: "col-span-2",
  },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.querySelectorAll(".gal-item") ?? [],
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12"
      style={{ background: "#EFC0BC" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <p
            className="tracking-widest uppercase text-[#828C6A]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
          >
            ✦ Galería ✦
          </p>
          <h2
            className="text-[#3a2e2e]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 600 }}
          >
            Un vistazo al mundo Dolcha
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{ gridAutoRows: "220px" }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gal-item overflow-hidden rounded-2xl ${img.span}`}
              style={{ boxShadow: "0 8px 32px rgba(58,46,46,0.15)" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
