import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mountain, Wifi, Trees, Coffee, Flame, Users, Calendar, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

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
        <title>La Casa - Pena da Osa</title>
        <meta
          name="description"
          content="Conozca más sobre Pena da Osa. Descubra nuestra arquitectura de piedra, vistas al campo y todas las comodidades en el corazón de la naturaleza."
        />
      </Helmet>

      <PageHero
        eyebrow="La Casa"
        title={
          <>
            Acerca de <span className="text-[#e5c988] italic">Pena da Osa</span>
          </>
        }
        subtitle="Una propiedad meticulosamente restaurada que honra la tradición gallega al tiempo que abraza el confort moderno."
        backgroundImage="/images/galeria/exterior9.jpg"
      />

      {/* Property Overview */}
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
                src="/images/galeria/salon.jpg"
                alt="Interior de Pena da Osa"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 border-[1px] border-white/20 rounded-[2rem] pointer-events-none mix-blend-overlay"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a1e23] mb-8">El Alma de la Casa</h2>
              <div className="h-1 w-20 bg-[#c06c50] mb-8"></div>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg font-light">
                Pena da Osa es un testimonio de la belleza duradera de la arquitectura tradicional de piedra.
                Ubicada en un paisaje sereno con vistas al campo, nuestra propiedad ha sido cuidadosamente
                renovada para ofrecer un ambiente cálido y acogedor.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg font-light">
                Cada rincón de la casa cuenta una historia desde sus sólidos muros. Un espacio funcional y
                con carácter, perfecto para grupos y familias que buscan desconectar donde el tiempo se detiene.
              </p>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features (Dark) */}
      <section className="py-24 bg-[#1a1e23] text-[#f5f3ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#e5c988] uppercase tracking-widest text-sm font-bold mb-4 block">Comodidades</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
              Todo lo que necesitas
            </h2>
          </motion.div>

          {/* Grid de Iconos Premium */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-[#c06c50]/20 transition-colors group"
              >
                <item.icon className="h-8 w-8 text-[#e5c988] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="font-serif text-lg tracking-wide text-stone-300 group-hover:text-white transition-colors">{item.label}</h3>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Aventuras", desc: "Senderos naturales, rutas en bicicleta y paseos por el bosque justo en tu puerta.", border: "border-[#15803d]" },
              { title: "Gastronomía", desc: "Cocina equipada y BBQ para que cocinar sea una fiesta en familia.", border: "border-[#c06c50]" },
              { title: "Relax Total", desc: "Desde el salón acogedor hasta la terraza con vistas al atardecer.", border: "border-[#e5c988]" }
            ].map((card, i) => (
              <div key={i} className={`bg-[#252b32] p-8 rounded-2xl border-t-4 ${card.border}`}>
                <h3 className="text-2xl font-serif text-white mb-4">{card.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#f5f3ef] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/images/galeria/exterior.jpg')", backgroundSize: 'cover' }}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif text-[#1a1e23] mb-8">Tu Refugio en Galicia</h2>
          <p className="text-[#c06c50] text-xl font-medium tracking-wide mb-10">
            Experimenta la magia de Pena da Osa.
          </p>
          <Button size="lg" className="bg-[#1a1e23] text-white hover:bg-[#c06c50] text-lg px-12 py-8 rounded-full shadow-2xl transition-all font-serif" asChild>
            <a href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es" target="_blank" rel="noopener noreferrer">
              Reserva Ahora
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
