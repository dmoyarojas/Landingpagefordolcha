import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import eventos1 from "../../public/dolchaTEventos.jpeg"
import eventos2 from "../../public/dolchaTEventos2.jpeg"
import eventos3 from "../../public/dolchaTEventos3.jpeg"
import eventos4 from "../../public/dolchaTEventos4.jpeg"
import eventos5 from "../../public/dolchaTEventos5.jpeg"
import eventos6 from "../../public/dolchaTEventos6.jpeg"
import infantil1 from "../../public/dolchaTInfantiles.jpeg"
import infantil2 from "../../public/dolchaTInfantiles1.jpeg"
import infantil3 from "../../public/dolchaTInfantiles2.jpeg"
import infantil4 from "../../public/dolchaTInfantiles3.jpeg"
import infantil5 from "../../public/dolchaTIfantiles4.jpeg"
import disenio1 from "../../public/dolchaTDiseño1.jpeg"
import disenio2 from "../../public/dolchaTDiseño2.jpeg"
import disenio3 from "../../public/dolchaTDiseño3.jpeg"
import disenio4 from "../../public/dolchaTDiseño4.jpeg"
import disenio5 from "../../public/dolchaTDiseño5.jpeg"
import disenio6 from "../../public/dolchaTDiseño6.jpeg"
import artesanal from "../../public/dolchaTArtesanales.jpeg"
import artesanal2 from "../../public/dolchaTArtesanales2.jpeg"
import artesanal3 from "../../public/dolchaTArtesanales3.jpeg"
import artesanal4 from "../../public/dolchaTArtesanales3.png"
import macarrones from "../../public/dolchaMacarrones.jpeg"
import macarrones2 from "../../public/dolchaMacarrones1.jpeg"
import macarrones3 from "../../public/dolchaMacarronesSabores.jpeg"



gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  title: string;
  description: string;
  img: string;
  alt: string;
  price: string;
  tag?: string;
  msg: string;
}

const categories = [
  { id: "eventos", name: "Eventos" },
  { id: "infantiles", name: "Infantiles" },
  { id: "diseno", name: "De Diseño" },
  { id: "macarons", name: "Macarons" },
  // { id: "pasteleria", name: "Pastelería General" }
];

const catalogData: Record<string, Product[]> = {
  eventos: [
    {
      id: "ev-1",
      title: "Torta Cumpleaños",
      description: "Espectacular torta de cumpleaños con un carrusel comestible. Relleno personalizable.",
      img: eventos1,
      alt: "Torta de cumpleaños",
      price: "",
      tag: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial 🍰"
    },
    {
      id: "ev-2",
      title: "Torta Rosa",
      description: "Diseño moderno con detalles azules y base de hojas blancas comestible.",
      img: eventos2,
      alt: "Torta elegante con detalles azules y base de hojas blancas comestible",
      price: "",
      tag: "Elegancia Pura",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "ev-3",
      title: "Torta Blanca Flor",
      description: "Torta de color blanco con la base de petalos de flor blanca.",
      img: eventos3,
      alt: "Torta decorada con estilo acuarela rosa",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "ev-4",
      title: "Torta Reloj y Rosas",
      description: "Torta de color turquesa con la base de flores y decoraciones comestibles doradas.",
      img: eventos4,
      alt: "Torta decorada con estilo acuarela rosa",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "ev-5",
      title: "Torta de Cumpleaños",
      description: "Torta de color negro con detalles plomos en forma de globos.",
      img: eventos5,
      alt: "Torta decorada",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "ev-6",
      title: "Torta de Bodas",
      description: "Torta de bodas de color blanca con detalles de flores comestibles.",
      img: eventos6,
      alt: "Torta decorada con estilo acuarela rosa",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    }
  ],
  infantiles: [
    {
      id: "inf-1",
      title: "Torta Hello Kitty",
      description: "Torta decorada con la tematica de Hello Kitty.",
      img: infantil1,
      alt: "Torta Hello Kitty",
      price: "",
      tag: "Favorita Niñas",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "inf-2",
      title: "Torta Principito",
      description: "Torta decorada con la tematica del principito.",
      img: infantil2,
      alt: "Torta principito",
      price: "",
      tag: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "inf-3",
      title: "Torta Kpop Demon Hunters",
      description: "Torta decorada con la tematica de Kpop Demon Hunters.",
      img: infantil3,
      alt: "Torta Kpop Demon Hunters",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "inf-4",
      title: "Torta Mario Bros",
      description: "Torta decorada con la tematica de Mario Bros.",
      img: infantil4,
      alt: "Torta Mario Bros",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "inf-5",
      title: "Torta Nemo",
      description: "Torta decorada con la tematica de Nemo.",
      img: infantil5,
      alt: "Torta Nemo",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    }
  ],
  diseno: [
    {
      id: "dis-1",
      title: "Torta de Minion",
      description: "Estructura vertical moderna, texturas de piedra y follaje comestible tallado a mano con flores silvestres.",
      img: disenio1,
      alt: "Torta de diseño con arreglos de flores de azúcar",
      price: "",
      tag: "Diseño de Autor",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "dis-2",
      title: "Torta de Perrito personalizado",
      description: "Torta decorada con la tematica de un perrito personalizado.",
      img: disenio2,
      alt: "Torta con texturas tridimensionales coloridas",
      price: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "dis-3",
      title: "Torta de Stich",
      description: "Torta decorada con la tematica de Stich.",
      img: disenio3,
      alt: "Torta Stich",
      price: "",
      tag: "Premium",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "dis-4",
      title: "Torta de Tigger",
      description: "Torta decorada con la tematica de Tigger.",
      img: disenio4,
      alt: "Torta Tigger",
      price: "",
      tag: "",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "dis-5",
      title: "Torta de Guitarra Personalizada",
      description: "Torta decorada con la tematica de una guitarra personalizada.",
      img: disenio5,
      alt: "Torta Guitarra",

      price: "",
      tag: "Diseño de Autor",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    },
    {
      id: "dis-6",
      title: "Torta de Tristeza Inside Out",
      description: "Torta decorada con la tematica de Tristeza de Inside Out.",
      img: disenio6,
      alt: "Torta Tristeza Inside Out",

      price: "",
      tag: "Diseño de Autor",
      msg: "Hola Dolcha! Me encantaría cotizar una torta para un evento especial🎂"
    }
  ],
  macarons: [
    {
      id: "mac-1",
      title: "Macarons Clásicos",
      description: "Caja surtida de 12 o 24 unidades.",
      img: macarrones,
      alt: "Caja de macarons  de colores pasteles",
      price: "",
      tag: "Artesanal",
      msg: "Hola Dolcha! Quisiera pedir una Caja de Macarons Clásicos 🎁🍬"
    },
    {
      id: "mac-2",
      title: "Macarons Blancos",
      description: "",
      img: macarrones2,
      alt: "",
      price: "",
      tag: "",
      msg: "Hola Dolcha! Quisiera pedir una Caja de Macarons Clásicos 🎁🍬"
    },
    {
      id: "mac-3",
      title: "Pack Sabores del Huerto",
      description: "Macarons gourmet con combinaciones únicas de frutas y hierbas, como maracuyá-albahaca y mora-lavanda.",
      img: macarrones3,
      alt: "Macarons surtidos en sabores gourmet",
      price: "",
      msg: "Hola Dolcha! Quisiera pedir una Caja de Macarons Clásicos 🎁🍬"
    }
  ],
  pasteleria: [
    {
      id: "pas-1",
      title: "Tarta de Frutas Silvestres",
      description: "Masa sablee crujiente rellena de crema pastelera de vainilla y abundante selección de fresas, arándanos y frambuesas.",
      img: artesanal,
      alt: "Tarta de frutas rojas y frambuesas",
      price: "",
      tag: "Frescura Diaria",
      msg: "Hola Dolcha! Quisiera pedir una Tarta de Frutas Silvestres para el fin de semana 🍓🥧"
    },
    {
      id: "pas-2",
      title: "Petit Fours de Limón y Merengue",
      description: "Bocaditos individuales de tarta de limón con merengue italiano dorado. Presentación en caja por 12 unidades.",
      img: artesanal2,
      alt: "Minipasteles y postres de limón gourmet",
      price: "$38.000 (Caja x12)",
      msg: "Hola Dolcha! Quisiera comprar una caja de Petit Fours de Limón y Merengue 🍋✨"
    },
    {
      id: "pas-3",
      title: "Croissants Rellenos de Almendra",
      description: "Hojaldre artesanal de mantequilla de alta calidad, relleno de crema de almendras y decorado con almendras fileteadas.",
      img: artesanal3,
      alt: "Croissants dorados crujientes con almendras",
      price: "$8.500 c/u",
      tag: "Horneado Hoy",
      msg: "Hola Dolcha! Me gustaría consultar disponibilidad de Croissants Rellenos de Almendra 🥐😋"
    },
    {
      id: "pas-4",
      title: "Croissants Rellenos de Almendra",
      description: "Hojaldre artesanal de mantequilla de alta calidad, relleno de crema de almendras y decorado con almendras fileteadas.",
      img: artesanal4,
      alt: "Croissants dorados crujientes con almendras",
      price: "$8.500 c/u",
      tag: "Horneado Hoy",
      msg: "Hola Dolcha! Me gustaría consultar disponibilidad de Croissants Rellenos de Almendra 🥐😋"
    }
  ]
};

export function ProductCatalogSection() {
  const [activeCategory, setActiveCategory] = useState("eventos");
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.fromTo(
        headRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        tabsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(
        sliderRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  const openWhatsapp = (message: string) => {
    window.open(`https://wa.me/573000000000?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      className="py-28 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "#F6E5E7" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12 flex flex-col items-center gap-4">
          <p
            className="tracking-widest uppercase text-[#A0AB89]"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
          >
            ✦ Nuestro Catálogo ✦
          </p>
          <h2
            className="text-[#3a2e2e]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 600 }}
          >
            Descubre nuestra dulzura
          </h2>
          <p
            className="text-[#7a5e5e] max-w-xl"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.75, fontWeight: 300 }}
          >
            Selecciona una categoría y navega horizontalmente para explorar los diseños y pasteles de tus sueños.
          </p>
        </div>

        {/* Categories Selector */}
        <div ref={tabsRef} className="flex justify-center mb-16 w-full px-4 md:px-0">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-[#fdf0f1]/60 p-2 md:p-1.5 rounded-2xl md:rounded-full border border-[#EFC0BC]/30 backdrop-blur-sm max-w-full md:min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-500 cursor-pointer ${activeCategory === cat.id
                  ? "bg-[#828C6A] text-white shadow-md shadow-[#828C6A]/15 scale-105"
                  : "text-[#7a5e5e] hover:text-[#3a2e2e] hover:bg-[#F6E5E7]/50"
                  }`}
                style={{ fontFamily: "'Lato', sans-serif", border: "none" }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Slider (Remounts on category change to reset Embla status) */}
        <div ref={sliderRef} className="relative px-6 md:px-12">
          <Carousel key={activeCategory} className="w-full">
            <CarouselContent className="-ml-4 md:-ml-6">
              {catalogData[activeCategory].map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div
                    className="catalog-card h-full flex flex-col justify-between rounded-3xl overflow-hidden"
                    style={{ background: "#ffffff", boxShadow: "0 8px 30px rgba(130,140,106,0.06)" }}
                  >
                    <div>
                      {/* Image section */}
                      <div className="relative overflow-hidden aspect-[3/4] w-full">
                        <img
                          src={product.img}
                          alt={product.alt}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        {product.tag && (
                          <div
                            className="absolute top-4 left-4 px-3 py-1 rounded-full"
                            style={{ background: "rgba(246, 229, 231, 0.92)", backdropFilter: "blur(6px)" }}
                          >
                            <span
                              className="text-[#828C6A] text-xs font-semibold uppercase tracking-wider"
                              style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6rem" }}
                            >
                              {product.tag}
                            </span>
                          </div>
                        )}
                        <div
                          className="absolute bottom-4 right-4 px-3.5 py-1 rounded-full"
                          style={{ background: "rgba(58, 46, 46, 0.85)", backdropFilter: "blur(4px)" }}
                        >
                          <span
                            className="text-[#F6E5E7] font-medium"
                            style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem" }}
                          >
                            {product.price}
                          </span>
                        </div>
                      </div>

                      {/* Info section */}
                      <div className="p-6 md:p-8 flex flex-col gap-3">
                        <h3
                          className="text-[#3a2e2e] transition-colors hover:text-[#828C6A]"
                          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600 }}
                        >
                          {product.title}
                        </h3>
                        <p
                          className="text-[#7a5e5e]"
                          style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", lineHeight: 1.65, fontWeight: 300 }}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Action */}
                    <div className="p-6 md:p-8 pt-0">
                      <button
                        onClick={() => openWhatsapp(product.msg)}
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white transition-all duration-300 catalog-btn"
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.8rem",
                          letterSpacing: "0.05em",
                          background: "#828C6A",
                          border: "none",
                        }}
                      >
                        Preguntar por WhatsApp
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows positioned cleanly outside/inside margins */}
            <CarouselPrevious className="flex bg-white hover:bg-[#F6E5E7] border border-[#EFC0BC]/50 text-[#828C6A] hover:text-[#3a2e2e] -left-3 md:-left-12 z-10 shadow-md hover:shadow-lg" />
            <CarouselNext className="flex bg-white hover:bg-[#F6E5E7] border border-[#EFC0BC]/50 text-[#828C6A] hover:text-[#3a2e2e] -right-3 md:-right-12 z-10 shadow-md hover:shadow-lg" />
          </Carousel>
        </div>
      </div>

      <style>{`
        .catalog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .catalog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(130,140,106,0.14) !important;
        }
        .catalog-btn {
          transition: all 0.3s ease;
        }
        .catalog-btn:hover {
          background: #E69B97 !important; /* Blush pink accent on hover */
          box-shadow: 0 4px 12px rgba(230, 155, 151, 0.25);
        }
      `}</style>
    </section>
  );
}
