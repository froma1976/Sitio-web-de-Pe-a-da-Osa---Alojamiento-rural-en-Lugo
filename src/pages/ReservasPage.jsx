
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

function ReservasPage() {
    return (
        <>
            <Helmet>
                <title>Reservas - Pena da Osa | Reserva tu Estancia</title>
                <meta
                    name="description"
                    content="Reserva tu estancia en Pena da Osa. Sistema de reservas online seguro y fácil de usar."
                />
            </Helmet>

            {/* Header Section */}
            <PageHero
                eyebrow="Reservas"
                title="Reserva tu estancia"
                subtitle="Sistema online seguro. Si prefieres, también puedes abrirlo en una nueva pestaña."
                backgroundImage="/images/galeria/exterior12.jpg"
            />

            {/* Booking Iframe Section */}
            <section className="py-10 bg-[#f7f6f2] min-h-screen">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-sm overflow-hidden border border-black/10"
                        style={{ minHeight: '800px' }}
                    >
                        <iframe
                            src="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es&iframe=1"
                            width="100%"
                            height="800px"
                            style={{ border: 0, display: 'block' }}
                            title="Sistema de Reservas Pena da Osa"
                        />
                    </motion.div>
                    <div className="mt-6 text-center">
                        <a
                            href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#1a1e23] hover:bg-white hover:border-black/20 transition-colors"
                        >
                            Abrir en nueva pestaña
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ReservasPage;
