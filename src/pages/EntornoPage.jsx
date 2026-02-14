import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Wine, Mountain, Church, Footprints, Camera } from "lucide-react";
import PageHero from "@/components/PageHero";

function EntornoPage() {
  const attractions = [
    {
      icon: Mountain,
      title: "Cañones del Sil",
      description: "Impresionantes gargantas fluviales con miradores espectaculares y rutas de senderismo. A pocos minutos de la casa.",
    },
    {
      icon: Wine,
      title: "Bodegas D.O. Ribeira Sacra",
      description: "Visita las bodegas de la denominación de origen más antigua de Galicia. Catas y tours disponibles.",
    },
    {
      icon: Church,
      title: "Monasterios Románicos",
      description: "Descubre el patrimonio religioso de la Ribeira Sacra, con monasterios centenarios de gran belleza.",
    },
    {
      icon: Footprints,
      title: "Rutas de Senderismo",
      description: "Explora los senderos que recorren viñedos en terrazas y paisajes únicos de la zona.",
    },
    {
      icon: Camera,
      title: "Miradores Panorámicos",
      description: "Vistas inolvidables desde los miradores de los Cañones del Sil y el río Miño.",
    },
    {
      icon: MapPin,
      title: "Casco Histórico de Sober",
      description: "A solo 500 metros, disfruta del encanto del pueblo con sus comercios y restaurantes tradicionales.",
    },
  ];

  const distances = [
    { place: "Centro de Sober", distance: "500 metros", time: "6 min a pie" },
    { place: "Cañones del Sil", distance: "3 km", time: "5 min en coche" },
    { place: "Bodegas cercanas", distance: "2-5 km", time: "5-10 min" },
    { place: "Mirador de Cabezoás", distance: "8 km", time: "12 min" },
    { place: "Monforte de Lemos", distance: "25 km", time: "25 min" },
    { place: "Ourense", distance: "45 km", time: "45 min" },
  ];

  return (
    <>
      <Helmet>
        <title>Entorno - Pena da Osa | Ribeira Sacra, Cañones del Sil</title>
        <meta
          name="description"
          content="Descubre el entorno de Pena da Osa en Sober: Cañones del Sil, bodegas D.O. Ribeira Sacra, monasterios románicos y rutas de senderismo. A 500m del centro."
        />
      </Helmet>

      <PageHero
        title="Descubre el Entorno"
        subtitle="Ubicada en el corazón de la Ribeira Sacra, a 500 metros del centro de Sober y cerca de los espectaculares Cañones del Sil."
        backgroundImage="/images/galeria/alrededor8.jpg"
      />

      {/* Landscape Image Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="/images/galeria/alrededor4.jpg"
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
              Los viñedos heroicos de la Ribeira Sacra
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
              Qué Visitar en Sober
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Un destino lleno de naturaleza, cultura y tradición vitivinícola
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
                Cañones del Sil
              </h2>
              <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                Los Cañones del Sil son uno de los paisajes más espectaculares de Galicia.
                Estas profundas gargantas excavadas por el río Sil ofrecen vistas impresionantes
                desde múltiples miradores.
              </p>
              <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                Podrás realizar catamaranes por el río, rutas de senderismo por los miradores,
                o simplemente disfrutar de la tranquilidad y belleza del entorno natural.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Las paredes del cañón están cubiertas de viñedos en terrazas, creando un
                paisaje único que combina naturaleza y tradición vitivinícola.
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
                src="/images/galeria/alrededor.jpg"
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
              Bodegas D.O. Ribeira Sacra
            </h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
              La Denominación de Origen Ribeira Sacra es conocida por sus vinos únicos,
              cultivados en viñedos heroicos que desafían la gravedad en las laderas de los
              cañones. Sober es uno de los núcleos principales de esta región vitivinícola.
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
              <h3 className="text-xl font-serif font-bold text-[#1a1e23] mb-3">Visitas y Catas</h3>
              <p className="text-stone-600">
                Descubre el proceso de elaboración del vino y degusta los mejores caldos
                de la región en bodegas cercanas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-serif font-bold text-[#1a1e23] mb-3">Viñedos Heroicos</h3>
              <p className="text-stone-600">
                Los viñedos en pendientes pronunciadas son un espectáculo único,
                trabajados con técnicas tradicionales transmitidas por generaciones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-serif font-bold text-[#1a1e23] mb-3">Variedades Autóctonas</h3>
              <p className="text-stone-600">
                Mencía, Godello, Albariño... Descubre las variedades de uva únicas
                que dan carácter a los vinos de la Ribeira Sacra.
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
              Ubicación Privilegiada
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pena da Osa está estratégicamente ubicada para que puedas disfrutar
              de todos los atractivos de la Ribeira Sacra
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
