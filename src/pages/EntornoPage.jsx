
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Wine, Mountain, Church, Footprints, Camera } from "lucide-react";

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

      {/* Header Section */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Descubre el Entorno
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 max-w-3xl mx-auto">
              Ubicada en el corazón de la Ribeira Sacra, a 500 metros del centro de Sober
              y cerca de los espectaculares Cañones del Sil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Landscape Image Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1664900517968-a66bbe465d40"
          alt="Paisaje de viñedos en terrazas de la Ribeira Sacra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-2xl sm:text-3xl font-semibold"
            >
              Los viñedos heroicos de la Ribeira Sacra
            </motion.p>
          </div>
        </div>
      </section>

      {/* What to Visit Section */}
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
              Qué Visitar en Sober
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-amber-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-amber-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <attraction.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{attraction.title}</h3>
                <p className="text-gray-700 leading-relaxed">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cañones del Sil Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
                Cañones del Sil
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Los Cañones del Sil son uno de los paisajes más espectaculares de Galicia.
                Estas profundas gargantas excavadas por el río Sil ofrecen vistas impresionantes
                desde múltiples miradores.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Podrás realizar catamaranes por el río, rutas de senderismo por los miradores,
                o simplemente disfrutar de la tranquilidad y belleza del entorno natural.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Las paredes del cañón están cubiertas de viñedos en terrazas, creando un
                paisaje único que combina naturaleza y tradición vitivinícola.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1552348012-b56fba55116a"
                alt="Vista panorámica de los Cañones del Sil con viñedos"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wine Region Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
              Bodegas D.O. Ribeira Sacra
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
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
              className="bg-amber-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-amber-900 mb-3">Visitas y Catas</h3>
              <p className="text-gray-700">
                Descubre el proceso de elaboración del vino y degusta los mejores caldos
                de la región en bodegas cercanas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-amber-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-amber-900 mb-3">Viñedos Heroicos</h3>
              <p className="text-gray-700">
                Los viñedos en pendientes pronunciadas son un espectáculo único,
                trabajados con técnicas tradicionales transmitidas por generaciones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-amber-900 mb-3">Variedades Autóctonas</h3>
              <p className="text-gray-700">
                Mencía, Godello, Albariño... Descubre las variedades de uva únicas
                que dan carácter a los vinos de la Ribeira Sacra.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Distances Section */}
      <section className="py-20 bg-gradient-to-br from-amber-800 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ubicación Privilegiada
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
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
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{item.place}</h3>
                  <MapPin className="h-5 w-5 text-amber-300 flex-shrink-0 ml-2" />
                </div>
                <p className="text-amber-100 text-2xl font-bold mb-1">{item.distance}</p>
                <p className="text-amber-200 text-sm">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EntornoPage;
