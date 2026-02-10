
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactoPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Os pacios, 4 27460 SOBER",
      subtitle: "Galicia, España",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+34 639 403 998",
      subtitle: "Llámanos para reservar",
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      content: "turismoruralpendaosa@gmail.com",
      subtitle: "Envíanos un email",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Peña da Osa | Reserva tu Estancia</title>
        <meta
          name="description"
          content="Contacta con Peña da Osa en Sober, Galicia. Llama al +34 639 403 998 o escríbenos a turismoruralpendaosa@gmail.com."
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
              Contacto
            </h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Estamos a tu disposición para cualquier consulta o reserva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">

            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8 w-full max-w-5xl"
            >
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-stone-100 p-4 rounded-full mb-6 text-stone-800">
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3 font-serif line-clamp-1">
                    {info.title}
                  </h3>
                  <p className="text-lg text-stone-700 font-medium mb-1 break-words w-full">
                    {info.content}
                  </p>
                  <p className="text-stone-500 text-sm">
                    {info.subtitle}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 w-full max-w-5xl"
            >
              <a
                href="https://www.google.com/maps/place/Pena+da+osa+-+casa+rural+-+Ribeira+sacra/@42.459802,-7.581345,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-stone-200 h-96 rounded-2xl border border-stone-300 overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative group">
                  <img
                    src="/mapa-ubicacion.png"
                    alt="Mapa de ubicación de Peña da Osa en Sober, Galicia"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-6 py-3 rounded-full shadow-lg">
                      <p className="text-stone-800 font-semibold flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Ver en Google Maps
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactoPage;
