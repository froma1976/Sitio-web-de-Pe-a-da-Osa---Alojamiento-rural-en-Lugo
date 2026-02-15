
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import PageHero from "@/components/PageHero";

function ReservasPage() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language === 'en' ? 'en' : 'es';

    return (
        <>
            <Helmet>
                <title>{t('reservas.page_title')}</title>
                <meta
                    name="description"
                    content={t('reservas.meta_desc')}
                />
                <link rel="canonical" href="https://penadaosa.com/reservas" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://penadaosa.com/reservas" />
                <meta property="og:title" content={t('reservas.og_title')} />
                <meta property="og:image" content="https://penadaosa.com/images/galeria/webp/exterior12.webp" />
            </Helmet>

            {/* Header Section */}
            <PageHero
                eyebrow={t('reservas.eyebrow')}
                title={t('reservas.title')}
                subtitle={t('reservas.subtitle')}
                backgroundImage="/images/galeria/webp/exterior12.webp"
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
                            src={`https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=${currentLang}&iframe=1`}
                            width="100%"
                            height="800px"
                            style={{ border: 0, display: 'block' }}
                            title={t('reservas.iframe_title')}
                        />
                    </motion.div>
                    <div className="mt-6 text-center">
                        <a
                            href={`https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=${currentLang}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#1a1e23] hover:bg-white hover:border-black/20 transition-colors"
                        >
                            {t('reservas.open_new_tab')}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ReservasPage;
