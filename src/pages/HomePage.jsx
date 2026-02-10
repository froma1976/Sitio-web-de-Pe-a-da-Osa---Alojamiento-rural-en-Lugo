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
        <title>Peña da Osa | Retiro Rural de Lujo</title>
        <meta name="description" content="Experimenta el lujo rural en Peña da Osa. Arquitectura de piedra, vistas infinitas y confort moderno en Galicia." />
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
              PEÑA DA OSA
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/80 text-xs md:text-base tracking-[0.38em] font-light mt-6 uppercase"
            >
              Lugo, Galicia • Retiro rural de lujo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/reservas">
                <Button
                  size="lg"
                  className="rounded-full px-10 h-12 bg-white text-[#1a1e23] hover:bg-[#e5c988] hover:text-[#1a1e23] font-semibold tracking-[0.18em] uppercase"
                >
                  Reservar
                </Button>
              </Link>
              <Link to="/about" className="group inline-flex items-center gap-2">
                <span className="text-xs tracking-[0.35em] uppercase text-white/80 group-hover:text-white transition-colors">
                  Descubrir la villa
                </span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </section>


        {/* === BENTO BOX SECTION (Terracotta) === */}
        {/* Floating overlap - negative margin to pull it up into Hero */}
        <section className="relative z-20 -mt-32 md:-mt-40 px-4 max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="bg-[#d4765d] p-4 md:p-6 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">

              {/* LARGE LEFT CARD: Stone Architecture */}
              <div className="md:col-span-6 relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px] md:h-full">
                <img src="/images/galeria/exterior.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Stone House" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xs">
                  <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-2">Arquitectura de piedra</h3>
                  <div className="h-[2px] w-12 bg-[#e5c988]"></div>
                </div>
              </div>

              {/* RIGHT GRID */}
              <div className="md:col-span-6 grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-full">

                {/* Top Left: Small Image */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group">
                  <img src="/images/galeria/alrededor1.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Landscape" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Vistas</span>
                </div>

                {/* Top Right: Dark Card (Kitchen) */}
                <div className="bg-[#1a1e23] rounded-2xl md:rounded-3xl flex flex-col justify-center items-center text-center p-6 group hover:bg-[#252b32] transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-[#d4765d]">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <ChefHat className="w-12 h-12 text-[#e5c988] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-serif text-xl md:text-2xl text-white mb-1">Cocina &<br />Comedor</h4>
                  <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Equipada</p>
                </div>

                {/* Bottom Left: Dark Card (Cinema/Lounge) */}
                <div className="bg-[#1a1e23] rounded-2xl md:rounded-3xl flex flex-col justify-center items-center text-center p-6 group hover:bg-[#252b32] transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-[#d4765d]">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <Dog className="w-12 h-12 text-[#e5c988] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-serif text-xl md:text-2xl text-white mb-1">Pet<br />Friendly</h4>
                  <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Ven con el tuyo</p>
                </div>

                {/* Bottom Right: Dark Card (Pool/Nature) icon-based */}
                <div className="bg-[#1a1e23] rounded-2xl md:rounded-3xl flex flex-col justify-center items-center text-center p-6 group hover:bg-[#252b32] transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-[#d4765d]">
                    <Waves className="w-6 h-6" />
                  </div>
                  <Mountain className="w-12 h-12 text-[#e5c988] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-serif text-xl md:text-2xl text-white mb-1">Entorno<br />Natural</h4>
                  <p className="text-white/40 text-xs uppercase tracking-wider mt-2">Vistas abiertas</p>
                </div>

              </div>
            </div>
          </motion.div>
        </section>


        {/* === GLASS STRIP SECTION === */}
        <section className="py-20 px-4 max-w-6xl mx-auto -mt-10 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Dog, title: "Pet-Friendly" },
              { icon: Utensils, title: "BBQ Area" },
              { icon: Wifi, title: "High-Speed Wifi" },
              { icon: Mountain, title: "Countryside Views" }
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group cursor-default"
              >
                <item.icon className="w-10 h-10 text-[#e5c988] mb-4 group-hover:text-white transition-colors" strokeWidth={1.5} />
                <span className="font-serif text-lg tracking-wide text-white/90">{item.title}</span>
              </motion.div>
            ))}
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
