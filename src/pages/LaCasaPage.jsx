import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Mountain, Wifi, Trees, Coffee, Flame, Users, Calendar, Dog,
  Film, UtensilsCrossed, Car, PawPrint, BedDouble, Bath, ArrowRight
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

function LaCasaPage() {
  const floors = [
    {
      title: "Planta Baja",
      image: "/images/galeria/webp/exterior11.webp",
      alt: "Patio tradicional gallego de piedra en Peña da Osa con horno antiguo",
      description: "El corazón de la casa tradicional gallega",
      features: [
        "Patio tradicional con ambiente acogedor",
        "Zona de churrasco con horno de piedra antiguo",
        "Baños de servicio completamente equipados",
        "Espacio ideal para reuniones al aire libre",
      ],
    },
    {
      title: "Planta Primera",
      image: "/images/galeria/webp/cocina1.webp",
      alt: "Cocina moderna y luminosa en Peña da Osa con salida a terraza",
      description: "El espacio principal de convivencia",
      features: [
        "Cocina completamente equipada con terraza",
        "Salón principal espacioso y luminoso",
        "3 habitaciones confortables (una con baño privado)",
        "Baño general de diseño moderno",
        "Vistas panorámicas desde la terraza",
      ],
    },
    {
      title: "Planta Superior",
      image: "/images/galeria/webp/salon.webp",
      alt: "Salón de cine exclusivo en la planta superior de Peña da Osa",
      description: "El refugio privado y exclusivo",
      features: [
        "Salón de cine exclusivo para entretenimiento",
        "3 habitaciones dobles amplias",
        "Todas las habitaciones con baño privado",
        "Máxima privacidad y confort",
        "Diseño elegante y moderno",
      ],
    },
  ];

  const amenities = [
    { icon: Film, title: "Sala de Cine", description: "Entretenimiento exclusivo para grupos" },
    { icon: Wifi, title: "WiFi Alta Velocidad", description: "Internet gratuito en toda la casa" },
    { icon: Flame, title: "Cocina Tradicional", description: "Cocina de hierro para experiencias auténticas" },
    { icon: Car, title: "Parking Privado", description: "Espacio seguro para varios vehículos" },
    { icon: PawPrint, title: "Pet-Friendly", description: "Tus mascotas son bienvenidas" },
    { icon: BedDouble, title: "6 Habitaciones", description: "Capacidad para grupos de hasta 12-14 personas" },
    { icon: Bath, title: "7 Baños", description: "Máxima privacidad: casi todas con baño propio" },
    { icon: UtensilsCrossed, title: "Cocina Equipada", description: "Todo lo necesario para grandes banquetes" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <>
      <Helmet>
        <title>La Casa - Peña da Osa | 6 Habitaciones, 7 Baños y Sala de Cine</title>
        <meta
          name="description"
          content="Descubre la distribución de Peña da Osa: casa rural de 3 plantas con 6 habitaciones, 7 baños, sala de cine, patio tradicional y vistas a la Ribeira Sacra."
        />
        <link rel="canonical" href="https://penadaosa.com/lacasa" />
      </Helmet>

      <PageHero
        eyebrow="Arquitectura y Confort"
        title={<>Explora <span className="text-[#e5c988] italic">la Casa</span></>}
        subtitle="Una construcción tradicional de piedra meticulosamente restaurada que combina el alma de la Galicia rural con lujos modernos."
        backgroundImage="/images/galeria/webp/exterior10.webp"
      />

      {/* Intro Section - Merged from About */}
      <section className="py-24 bg-[#f5f3ef] text-[#1a1e23]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px]"
            >
              <img
                src="/images/galeria/webp/exterior9.webp"
                alt="Exterior de piedra tradicional de Peña da Osa"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a1e23] mb-8">El Alma de la Piedra</h2>
              <div className="h-1 w-20 bg-[#d4765d] mb-8"></div>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg font-light">
                Pena da Osa no es solo un alojamiento; es un testimonio de la arquitectura tradicional gallega.
                Sus muros de granito guardan historias de siglos, ahora renovados para ofrecer un refugio de paz.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg font-light">
                Con sus 3 plantas y espacios diseñados para convivir, es el lugar ideal para familias numerosas
                o grupos de amigos que buscan desconectar sin renunciar a la comodidad de un hotel de lujo.
              </p>
              <Button asChild className="bg-[#1a1e23] text-white hover:bg-[#d4765d] rounded-full px-8 py-6">
                <a href="#distribucion">Ver distribución por plantas</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floors Section */}
      <section id="distribucion" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1e23]">Distribución por plantas</h2>
            <p className="text-stone-500 mt-4 text-lg">Más de 400m² dedicados a tu descanso</p>
          </motion.div>

          {floors.map((floor, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-3xl shadow-xl h-[400px] ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={floor.image}
                  alt={floor.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "md:order-1" : ""}
              >
                <h3 className="text-3xl font-serif text-[#1a1e23] mb-4">{floor.title}</h3>
                <p className="text-[#d4765d] font-medium mb-6 uppercase tracking-widest text-sm">{floor.description}</p>
                <ul className="space-y-3">
                  {floor.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4765d] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-[#1a1e23] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#e5c988]">Servicios y Equipamiento</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">No falta detalle para que tu estancia sea perfecta, desde el entretenimiento hasta el descanso.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 p-8 rounded-2xl text-center border border-white/10 hover:border-[#d4765d] transition-all group"
              >
                <div className="bg-[#d4765d]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <amenity.icon className="h-6 w-6 text-[#d4765d]" />
                </div>
                <h4 className="text-lg font-bold mb-2">{amenity.title}</h4>
                <p className="text-sm text-stone-400">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#f5f3ef] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Users className="w-12 h-12 text-[#d4765d] mx-auto mb-8" />
          <h2 className="text-5xl font-serif text-[#1a1e23] mb-8">¿Listo para venir con los tuyos?</h2>
          <p className="text-stone-600 text-xl mb-12 font-light">Reserva la casa completa en exclusiva para tu grupo.</p>
          <Button size="lg" className="bg-[#d4765d] text-white hover:bg-[#1a1e23] px-12 py-8 rounded-full shadow-2xl transition-all" asChild>
            <a href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es" target="_blank" rel="noopener noreferrer">
              Consultar disponibilidad real
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

export default LaCasaPage;
