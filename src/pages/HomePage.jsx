import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mountain, Utensils, ArrowRight, Dog, Wifi, ChefHat, Waves } from "lucide-react"; // ChefHat & Waves for new icons
import { Button } from "@/components/ui/button";

function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>Pena da Osa | Retiro Rural con Encanto</title>
        <meta name="description" content="Experimenta el encanto rural en Pena da Osa. Arquitectura de piedra, vistas infinitas y confort moderno en Galicia." />
      </Helmet>

      <div ref={containerRef} className="bg-[#1a1e23] min-h-screen text-white font-sans selection:bg-[#d4765d] selection:text-white">

        {/* === HERO SECTION === */}
        <section className="relative h-[92vh] w-full overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-28 px-4">

          {/* Background Image Parallax */}
          <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
              className="w-full h-full"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/galeria/alrededor.jpg')" }} // Using 'alrededor.jpg' for dramatic landscape
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1e23]/60 via-transparent to-[#1a1e23]" />
          </div>

          {/* Huge Title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative z-10 text-center"
          >
            <h1 className="text-[12vw] leading-none font-serif text-[#e5c988] drop-shadow-2xl tracking-tighter opacity-90">
              Pena da Osa
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/80 text-xs md:text-base tracking-[0.38em] font-light mt-6 uppercase"
            >
              Lugo, Galicia • Retiro rural con encanto
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-10 h-12 bg-white text-[#1a1e23] hover:bg-[#e5c988] hover:text-[#1a1e23] font-semibold tracking-[0.18em] uppercase"
                asChild
              >
                <a
                  href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar
                </a>
              </Button>
              <Link to="/about" className="group inline-flex items-center gap-2">
                <span className="text-xs tracking-[0.35em] uppercase text-white/80 group-hover:text-white transition-colors">
                  Descubrir la casa
                </span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </section>


        {/* === BENTO BOX SECTION (Terracotta) === */}
        {/* Floating overlap - negative margin to pull it up into Hero */}
        <section className="relative z-20 -mt-32 md:-mt-40 px-4 max-w-[1400px] mx-auto mb-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="bg-[#d4765d] p-4 md:p-6 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">

              {/* Arquitectura */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px]">
                <img src="/images/galeria/exterior11.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Arquitectura" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xs">
                  <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-2">Arquitectura de piedra</h3>
                  <div className="h-[2px] w-12 bg-[#e5c988]"></div>
                </div>
              </div>

              {/* Naturaleza */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px]">
                <img src="/images/galeria/alrededor8.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Naturaleza" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Naturaleza</span>
              </div>

              {/* Paseos */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px]">
                <img src="/images/galeria/exterior6.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Paseos" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Paseos</span>
              </div>

              {/* Entorno - Image Swapped to exterior2.jpg */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px]">
                <img src="/images/galeria/alrededeor9.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Entorno" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Entorno</span>
              </div>

            </div>
          </motion.div>
        </section>


        {/* === GLASS STRIP SECTION === */}
        <section className="py-20 px-4 max-w-6xl mx-auto -mt-10 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Pet-Friendly - With Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default"
            >
              <img src="/images/galeria/pet-friendly.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Pet Friendly" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">Pet-Friendly</span>
            </motion.div>

            {/* Zona de Barbacoa - With Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default"
            >
              <img src="/images/galeria/exterior.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Zona de Barbacoa" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">Zona de Barbacoa</span>
            </motion.div>

            {/* Wifi Alta Velocidad - With Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default"
            >
              <img src="/images/galeria/wifi-work.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wifi" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">Wifi Alta Velocidad</span>
            </motion.div>

            {/* Vistas al Campo - Image Swapped to alrededeor9.jpg */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-default"
            >
              <img src="/images/galeria/alrededor4.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Vistas" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">Vistas al Campo</span>
            </motion.div>
          </div>
        </section>


        {/* === GALLERY PREVIEW STRIP (Cream) === */}
        <section className="bg-[#f5f3ef] py-24 text-[#1a1e23] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 mb-12 flex justify-between items-end">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1e23]">Un vistazo</h2>
            <div className="flex gap-4">
              <Link to="/galeria" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-[#d4765d] transition-colors">
                Ver galeria <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Scrollable Strip */}
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
            {[
              "habitacion1.jpg",
              "salon.jpg",
              "cocina1.jpg",
              "exterior2.jpg",
              "alrededor4.jpg"
            ].map((img, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] md:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden snap-center relative group"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={`/images/galeria/${img.includes(".") ? img : img + ".jpg"}`}
                  className="w-full h-full object-cover"
                  alt="Galeria de fotos"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

export default HomePage;
