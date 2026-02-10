
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Mountain, Utensils, Film, BedDouble, ArrowRight, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";

function HomePage() {
  const features = [
    { icon: Home, title: "Arquitectura de Piedra", description: "Diseño rústico auténtico con confort moderno" },
    { icon: Mountain, title: "Vistas al Campo", description: "Impresionantes paisajes panorámicos" },
    { icon: Utensils, title: "Zona de Barbacoa", description: "Perfecta para comidas al aire libre y reuniones" },
    { icon: Dog, title: "Pet-Friendly", description: "Tus mascotas son bienvenidas" },
  ];

  return (
    <>
      <Helmet>
        <title>Peña da Osa - Propiedad Rural de Piedra de Lujo con Vistas al Lago</title>
        <meta
          name="description"
          content="Experimenta Peña da Osa, una impresionante propiedad rural con arquitectura tradicional de piedra, vistas al campo y comodidades modernas, incluyendo sala de cine y zona de barbacoa."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/galeria/alrededor.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
              Bienvenido a Peña da Osa
            </h1>
            <p className="text-xl sm:text-2xl text-stone-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              Una experiencia única en la naturaleza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-stone-100 hover:bg-white text-stone-900 text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-200 font-semibold"
                >
                  Reservar
                </Button>
              </a>
              <Link to="/galeria">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-200 font-semibold backdrop-blur-sm"
                >
                  Explorar
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6 font-serif">
              Un Santuario en la Naturaleza
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Peña da Osa ofrece una escapada única a la naturaleza sin renunciar a la comodidad.
              Rodeada de paisajes majestuosos, nuestra propiedad está diseñada para brindar paz,
              relajación y momentos inolvidables para familias y grupos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-stone-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-stone-700" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight: The Experience */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6 font-serif">
                Comodidades Inigualables
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-50 p-3 rounded-lg h-fit">
                    <BedDouble className="h-6 w-6 text-green-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">Múltiples Dormitorios</h3>
                    <p className="text-stone-600">Habitaciones espaciosas y bellamente decoradas para alojar a todo tu grupo con comodidad.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-50 p-3 rounded-lg h-fit">
                    <Utensils className="h-6 w-6 text-green-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">Cocina Totalmente Equipada</h3>
                    <p className="text-stone-600">Electrodomésticos modernos que se unen al encanto rústico, perfectos para preparar banquetes familiares.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/about">
                  <Button variant="outline" className="border-stone-800 text-stone-800 hover:bg-stone-50 group">
                    Saber Más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/galeria/salon.jpg"
                alt="Interior de la sala de estar de Peña da Osa"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-serif">
              ¿Listo para experimentar Peña da Osa?
            </h2>
            <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
              Reserva tu estancia hoy y descubre la combinación perfecta de elegancia rústica y belleza natural.
            </p>
            <a href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white hover:bg-stone-200 text-stone-900 text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-200 font-bold"
              >
                Iniciar tu Reserva
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
