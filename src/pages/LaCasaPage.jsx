
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Film, Wifi, UtensilsCrossed, Car, PawPrint, BedDouble, Bath, Flame } from "lucide-react";

function LaCasaPage() {
  const floors = [
    {
      title: "Planta Baja",
      image: "https://images.unsplash.com/photo-1690201857428-ec796765818d",
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
      image: "https://images.unsplash.com/photo-1560562125-ab512e4d9d29",
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
      image: "https://images.unsplash.com/photo-1589761633922-d13635869c7b",
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

      {/* Header Section */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              La Casa
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 max-w-3xl mx-auto">
              Una casa tradicional gallega de tres plantas, completamente renovada para ofrecerte
              el máximo confort con un toque rústico y auténtico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {floors.map((floor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-20 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={floor.image}
                    alt={floor.alt}
                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
                    {floor.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 italic">{floor.description}</p>
                  <ul className="space-y-3">
                    {floor.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-amber-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
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
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-amber-600 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4">
              Servicios y Comodidades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para una estancia perfecta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-amber-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LaCasaPage;
