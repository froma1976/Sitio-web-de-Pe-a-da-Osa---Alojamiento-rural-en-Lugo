import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Film, Wifi, UtensilsCrossed, Car, PawPrint, BedDouble, Bath, Flame } from "lucide-react";
import PageHero from "@/components/PageHero";

function LaCasaPage() {
  const floors = [
    {
      title: "Planta Baja",
      image: "/images/galeria/exterior11.jpg",
      alt: "Patio tradicional gallego con horno de piedra antiguo",
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
      image: "/images/galeria/cocina1.jpg",
      alt: "Cocina moderna equipada con terraza amplia",
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
      image: "/images/galeria/salon.jpg",
      alt: "Salón de cine exclusivo con habitaciones dobles",
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
    { icon: Wifi, title: "WiFi Gratuito", description: "Internet de alta velocidad en toda la casa" },
    { icon: Flame, title: "Cocina Tradicional", description: "Cocina de hierro para experiencias auténticas" },
    { icon: Car, title: "Parking Privado", description: "Espacio seguro para varios vehículos" },
    { icon: PawPrint, title: "Admisión de Mascotas", description: "Tu mascota es bienvenida" },
    { icon: BedDouble, title: "6 Habitaciones", description: "Capacidad para grupos grandes" },
    { icon: Bath, title: "7 Baños", description: "Casi todas las habitaciones con baño privado" },
    { icon: UtensilsCrossed, title: "Cocina Equipada", description: "Todo lo necesario para cocinar" },
  ];

  return (
    <>
      <Helmet>
        <title>La Casa - Pena da Osa | 6 Habitaciones, 7 Baños, Sala de Cine</title>
        <meta
          name="description"
          content="Descubre Pena da Osa: casa rural de 3 plantas con 6 habitaciones, 7 baños (casi todas con baño privado), sala de cine, cocina equipada y patio tradicional."
        />
      </Helmet>

      <PageHero
        title="La Casa"
        subtitle="Una casa tradicional gallega de tres plantas, completamente renovada para ofrecerte el máximo confort con un toque rústico y auténtico."
        backgroundImage="/images/galeria/exterior10.jpg"
      />

      {/* Floors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {floors.map((floor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-24 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className={`relative overflow-hidden rounded-3xl shadow-2xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={floor.image}
                    alt={floor.alt}
                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1e23] mb-4">
                    {floor.title}
                  </h2>
                  <p className="text-lg text-stone-500 mb-6 italic">{floor.description}</p>
                  <ul className="space-y-3">
                    {floor.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#d4765d] mr-3 mt-1">✓</span>
                        <span className="text-stone-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#d4765d] text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                Máxima Privacidad y Confort
              </h3>
              <p className="text-lg sm:text-xl">
                Casi todas las habitaciones cuentan con <span className="font-bold">baño privado</span>,
                garantizando la máxima comodidad y privacidad para todos los huéspedes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif text-[#1a1e23] mb-4">
              Servicios y Comodidades
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Todo lo que necesitas para una estancia perfecta
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f3ef] p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="bg-[#d4765d] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1e23] mb-2">{amenity.title}</h3>
                <p className="text-sm text-stone-600">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LaCasaPage;
