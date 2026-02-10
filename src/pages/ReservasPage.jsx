
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

function ReservasPage() {
    return (
        <>
            <Helmet>
                <title>Reservas - Peña da Osa | Reserva tu Estancia</title>
                <meta
                    name="description"
                    content="Reserva tu estancia en Peña da Osa. Sistema de reservas online seguro y fácil de usar."
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
                            Reserva tu Estancia
                        </h1>
                        <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                            Completa tu reserva de forma rápida y segura
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Booking Iframe Section */}
            <section className="py-10 bg-stone-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        style={{ minHeight: '800px' }}
                    >
                        <iframe
                            src="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es&iframe=1"
                            width="100%"
                            height="800px"
                            style={{ border: 0, display: 'block' }}
                            title="Sistema de Reservas Peña da Osa"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default ReservasPage;
