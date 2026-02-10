
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Home, Mountain, Wifi, Speaker, Trees, Coffee, Flame, Users, Calendar, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AboutPage() {
  const amenities = [
    { icon: Users, label: "Gran Capacidad" },
    { icon: Wifi, label: "WiFi Gratuito" },
    { icon: Flame, label: "Zona de Barbacoa" },
    { icon: Dog, label: "Pet-Friendly" },
    { icon: Coffee, label: "Cocina Moderna" },
    { icon: Trees, label: "Jardín y Patio" },
    { icon: Mountain, label: "Vistas al Campo" },
    { icon: Calendar, label: "Reserva Flexible" },
  ];

  return (
    <>
      <Helmet>
        <title>Acerca de - Peña da Osa | Visión General de la Propiedad y Servicios</title>
        <meta
          name="description"
          content="Conozca más sobre Peña da Osa. Descubra nuestra arquitectura de piedra, vistas al lago, sala de cine y otras comodidades de lujo en el corazón de la naturaleza."
        />
      </Helmet>

      {/* Header Section */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">
              Acerca de Peña da Osa
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Una propiedad meticulosamente restaurada que honra la tradición al tiempo que abraza el lujo moderno.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]"
            >
              <img
                src="/images/galeria/salon.jpg"
                alt="Interior de Peña da Osa"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">Visión General de la Propiedad</h2>
              <p className="text-stone-600 mb-4 leading-relaxed text-lg">
                Peña da Osa es un testimonio de la belleza duradera de la arquitectura tradicional de piedra.
                Ubicada en un paisaje sereno con vistas al campo, nuestra propiedad ha sido cuidadosamente
                renovada para ofrecer un ambiente cálido y acogedor para grupos grandes y familias.
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Cada rincón de la casa cuenta una historia, desde los sólidos muros de piedra.
                Un espacio acogedor y funcional perfecto para grupos y familias que buscan
                desconectar en un entorno tranquilo y natural.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-4 font-serif">
              Experiencias y Servicios
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Hemos creado un espacio donde puedes hacer tanto o tan poco como desees.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center"
              >
                <div className="bg-stone-100 p-3 rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-stone-700" />
                </div>
                <h3 className="font-semibold text-stone-800">{item.label}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-green-700">
              <h3 className="text-xl font-bold text-stone-800 mb-3">Aventuras al Aire Libre</h3>
              <p className="text-stone-600">Explora los senderos circundantes, disfruta de actividades acuáticas en el lago o simplemente da un paseo tranquilo por el bosque justo en tu puerta.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-700">
              <h3 className="text-xl font-bold text-stone-800 mb-3">Delicias Culinarias</h3>
              <p className="text-stone-600">Con una cocina totalmente equipada y una zona de barbacoa dedicada, preparar comidas se convierte en una alegre actividad comunitaria para todo el grupo.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-stone-700">
              <h3 className="text-xl font-bold text-stone-800 mb-3">Relajación y Cine</h3>
              <p className="text-stone-600">Relájate en nuestra exclusiva sala de cine, diseñada para noches de películas, o descansa en la terraza viendo la puesta de sol sobre el lago.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">Ven a Hospedarte con Nosotros</h2>
          <p className="text-stone-300 mb-8 text-lg">
            Experimenta la magia de Peña da Osa de primera mano.
          </p>
          <a href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100 font-bold px-8">
              ¡Reserva Ahora!
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
