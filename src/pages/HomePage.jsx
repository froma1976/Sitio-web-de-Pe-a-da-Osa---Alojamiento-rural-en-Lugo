import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchemaOrg from "@/components/SchemaOrg";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <>
      <Helmet>
        <title>{t('home.page_title')}</title>
        <meta name="description" content={t('home.meta_description')} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://penadaosa.com/" />
        <meta property="og:title" content={t('home.og_title')} />
        <meta property="og:description" content={t('home.og_description')} />
        <meta property="og:image" content="https://penadaosa.com/images/galeria/webp/alrededor.webp" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://penadaosa.com/" />
        <meta property="twitter:title" content={t('home.og_title')} />
        <meta property="twitter:description" content={t('home.twitter_description')} />
        <meta property="twitter:image" content="https://penadaosa.com/images/galeria/webp/alrededor.webp" />

        {/* Additional SEO */}
        <link rel="canonical" content="https://penadaosa.com/" />
        <meta name="keywords" content="casa rural galicia, alojamiento rural lugo, turismo rural galicia, casa rural con encanto, pena da osa" />
      </Helmet>
      <SchemaOrg />

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
                style={{ backgroundImage: "url('/images/galeria/webp/alrededor.webp')" }}
              />
            </motion.div>
            {/* Mejor contraste con gradiente más fuerte */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a1e23]/90" />
          </div>

          {/* Huge Title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative z-10 text-center"
          >
            <h1 className="text-[14vw] md:text-[12vw] leading-none font-serif text-[#e5c988] drop-shadow-2xl tracking-tighter">
              Pena da Osa
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white text-sm md:text-lg tracking-[0.3em] font-light mt-6 uppercase drop-shadow-lg"
            >
              {t('home.hero_subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-10 h-14 bg-[#e5c988] text-[#1a1e23] hover:bg-white hover:shadow-lg hover:shadow-[#e5c988]/30 font-bold tracking-[0.15em] uppercase transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a
                  href={`https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=${i18n.language === 'en' ? 'en' : 'es'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1e23]"
                >
                  {t('common.reserve')}
                </a>
              </Button>
              <Link
                to="/lacasa"
                className="group inline-flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4765d] rounded-full px-4 py-2"
              >
                <span className="text-sm tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors">
                  {t('common.discover_house')}
                </span>
                <ArrowRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* === BENTO BOX SECTION (Terracotta) === */}
        <section className="relative z-20 -mt-10 px-4 max-w-[1400px] mx-auto mb-48">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="bg-[#d4765d] p-4 md:p-6 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">

              {/* Arquitectura */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px] cursor-pointer">
                <img src="/images/galeria/webp/fixed-exterior2.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_arch')} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xs">
                  <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-2">{t('home.architecture')}</h3>
                  <div className="h-[2px] w-12 bg-[#e5c988]"></div>
                </div>
              </div>

              {/* Naturaleza */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px] cursor-pointer">
                <img src="/images/galeria/webp/alrededor8.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_nature')} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm font-bold tracking-widest uppercase">{t('home.nature')}</span>
              </div>

              {/* Paseos */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px] cursor-pointer">
                <img src="/images/galeria/webp/exterior6.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_walks')} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm font-bold tracking-widest uppercase">{t('home.walks')}</span>
              </div>

              {/* Entorno */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group h-[300px] cursor-pointer">
                <img src="/images/galeria/webp/alrededor5.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_env')} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm font-bold tracking-widest uppercase">{t('home.environment')}</span>
              </div>

            </div>
          </motion.div>
        </section>

        {/* === GLASS STRIP SECTION === */}
        <section className="py-20 px-4 max-w-6xl mx-auto -mt-10 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Pet-Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src="/images/galeria/webp/pet-friendly.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_pet')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">{t('home.pet_friendly')}</span>
            </motion.div>

            {/* Zona de Barbacoa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src="/images/galeria/webp/exterior.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_bbq')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">{t('home.bbq')}</span>
            </motion.div>

            {/* Wifi Alta Velocidad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src="/images/galeria/webp/wifi-work.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_wifi')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">{t('home.wifi')}</span>
            </motion.div>

            {/* Vistas al Campo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src="/images/galeria/webp/alrededor4.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t('home.alt_views')} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-lg tracking-wide text-white">{t('home.views')}</span>
            </motion.div>
          </div>
        </section>

        {/* === GALLERY PREVIEW STRIP (Cream) === */}
        <section className="bg-[#f5f3ef] py-24 text-[#1a1e23] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 mb-12 flex justify-between items-end">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1e23]">{t('home.a_glimpse')}</h2>
            <div className="flex gap-4">
              <Link to="/galeria" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-[#d4765d] transition-colors cursor-pointer">
                {t('common.see_gallery')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Scrollable Strip */}
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 no-scrollbar snap-x cursor-grab active:cursor-grabbing">
            {[
              "fixed-habitacion1.webp",
              "fixed-salon.webp",
              "fixed-cocina1.webp",
              "fixed-exterior2.webp",
              "alrededor4.webp"
            ].map((img, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] md:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden snap-center relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`/images/galeria/webp/${img}`}
                  className="w-full h-full object-cover"
                  alt={t('home.gallery_img_alt', { index: i + 1 })}
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
