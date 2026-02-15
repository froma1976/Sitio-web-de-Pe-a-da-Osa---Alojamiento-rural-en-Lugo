import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Wine, Mountain, Church, Footprints, Camera } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

function EntornoPage() {
  const { t } = useTranslation();

  const attractions = useMemo(() => [
    {
      icon: Mountain,
      title: t('environment.attraction_sil'),
      description: t('environment.attraction_sil_desc'),
    },
    {
      icon: Wine,
      title: t('environment.attraction_wineries'),
      description: t('environment.attraction_wineries_desc'),
    },
    {
      icon: Church,
      title: t('environment.attraction_monasteries'),
      description: t('environment.attraction_monasteries_desc'),
    },
    {
      icon: Footprints,
      title: t('environment.attraction_hiking'),
      description: t('environment.attraction_hiking_desc'),
    },
    {
      icon: Camera,
      title: t('environment.attraction_viewpoints'),
      description: t('environment.attraction_viewpoints_desc'),
    },
    {
      icon: MapPin,
      title: t('environment.attraction_sober'),
      description: t('environment.attraction_sober_desc'),
    },
  ], [t]);

  const distances = useMemo(() => [
    { place: t('environment.dist_sober'), distance: "500 meters", time: t('environment.dist_sober_time') },
    { place: t('environment.dist_sil'), distance: "3 km", time: t('environment.dist_sil_time') },
    { place: t('environment.dist_wineries'), distance: "2-5 km", time: t('environment.dist_wineries_time') },
    { place: t('environment.dist_viewpoint'), distance: "8 km", time: t('environment.dist_viewpoint_time') },
    { place: t('environment.dist_monforte'), distance: "25 km", time: t('environment.dist_monforte_time') },
    { place: t('environment.dist_ourense'), distance: "45 km", time: t('environment.dist_ourense_time') },
  ], [t]);

  return (
    <>
      <Helmet>
        <title>{t('environment.title')}</title>
        <meta
          name="description"
          content={t('environment.description')}
        />
      </Helmet>

      <PageHero
        title={t('environment.hero_title')}
        subtitle={t('environment.hero_subtitle')}
        backgroundImage="/images/galeria/webp/alrededor8.webp"
      />

      {/* Landscape Image Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="/images/galeria/webp/alrededor4.webp"
          alt="Paisaje de viñedos en terrazas de la Ribeira Sacra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1e23]/80 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl sm:text-3xl font-serif"
            >
              {t('environment.heroic_vineyards')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* What to Visit Section */}
      <section className="py-24 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif text-[#1a1e23] mb-4">
              {t('environment.visit_sober_title')}
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              {t('environment.visit_sober_subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-[#d4765d] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <attraction.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1a1e23] mb-3">{attraction.title}</h3>
                <p className="text-stone-600 leading-relaxed">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cañones del Sil Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-serif text-[#1a1e23] mb-6">
                {t('environment.sil_title')}
              </h2>
              <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                {t('environment.sil_p1')}
              </p>
              <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                {t('environment.sil_p2')}
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                {t('environment.sil_p3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="/images/galeria/webp/alrededor.webp"
                alt="Vista panorámica de los Cañones del Sil con viñedos"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wine Region Section */}
      <section className="py-24 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-serif text-[#1a1e23] mb-6">
              {t('environment.wineries_title')}
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              {t('environment.wineries_p')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-serif font-bold text-[#1a1e23] mb-3">{t('environment.wineries_tastings')}</h3>
              <p className="text-stone-600">
                {t('environment.wineries_tastings_p')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-serif font-bold text-[#1a1e23] mb-3">{t('environment.wineries_heroic')}</h3>
              <p className="text-stone-600">
                {t('environment.wineries_heroic_p')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-serif font-bold text-[#1a1e23] mb-3">{t('environment.wineries_varieties')}</h3>
              <p className="text-stone-600">
                {t('environment.wineries_varieties_p')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Distances Section */}
      <section className="py-24 bg-[#1a1e23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">
              {t('environment.location_title')}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('environment.location_subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distances.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{item.place}</h3>
                  <MapPin className="h-5 w-5 text-[#e5c988] flex-shrink-0 ml-2" />
                </div>
                <p className="text-[#e5c988] text-2xl font-bold mb-1">{item.distance}</p>
                <p className="text-white/60 text-sm">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EntornoPage;
