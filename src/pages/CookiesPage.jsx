import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Shield, Info } from "lucide-react";
import { useTranslation } from 'react-i18next';
import PageHero from "@/components/PageHero";

function CookiesPage() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('cookies.page_title')}</title>
                <meta
                    name="description"
                    content={t('cookies.meta_desc')}
                />
                <link rel="canonical" href="https://penadaosa.com/cookies" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://penadaosa.com/cookies" />
                <meta property="og:title" content={t('cookies.og_title')} />
                <meta property="og:image" content="https://penadaosa.com/images/galeria/webp/sala.webp" />
            </Helmet>

            <PageHero
                eyebrow={t('cookies.eyebrow')}
                title={t('cookies.title')}
                subtitle={t('cookies.subtitle')}
                backgroundImage="/images/galeria/webp/sala.webp"
            />

            {/* Content Section */}
            <section className="py-16 bg-[#f7f6f2]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="prose prose-stone max-w-none"
                    >
                        <div className="bg-stone-50 p-6 rounded-xl mb-8">
                            <div className="flex items-start gap-4">
                                <Info className="h-6 w-6 text-stone-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h2 className="text-2xl font-bold text-stone-800 mb-4 mt-0">
                                        {t('cookies.what_are_cookies')}
                                    </h2>
                                    <p className="text-stone-600 leading-relaxed mb-0">
                                        {t('cookies.what_are_cookies_desc')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl mb-8">
                            <div className="flex items-start gap-4">
                                <Shield className="h-6 w-6 text-stone-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h2 className="text-2xl font-bold text-stone-800 mb-4 mt-0">
                                        {t('cookies.what_we_use')}
                                    </h2>
                                    <p className="text-stone-600 leading-relaxed mb-4">
                                        {t('cookies.what_we_use_desc')}
                                    </p>
                                    <ul className="space-y-2 text-stone-600">
                                        <li>
                                            <strong>{t('cookies.pref_cookies')}:</strong> {t('cookies.pref_cookies_desc')}
                                        </li>
                                        <li>
                                            <strong>{t('cookies.session_cookies')}:</strong> {t('cookies.session_cookies_desc')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl mb-8">
                            <h2 className="text-2xl font-bold text-stone-800 mb-4">
                                {t('cookies.no_third_party')}
                            </h2>
                            <p className="text-stone-600 leading-relaxed mb-0">
                                {t('cookies.no_third_party_desc')}
                            </p>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold text-stone-800 mb-4">
                                {t('cookies.manage_cookies')}
                            </h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                {t('cookies.manage_cookies_desc')}
                            </p>
                            <ul className="space-y-2 text-stone-600 mb-0">
                                <li>
                                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-stone-800 underline hover:text-stone-600">
                                        Google Chrome
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-stone-800 underline hover:text-stone-600">
                                        Mozilla Firefox
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-stone-800 underline hover:text-stone-600">
                                        Safari
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-stone-800 underline hover:text-stone-600">
                                        Microsoft Edge
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 p-6 bg-stone-100 rounded-xl">
                            <p className="text-sm text-stone-600 mb-0">
                                <strong>{t('cookies.last_update')}:</strong> {new Date().toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default CookiesPage;
