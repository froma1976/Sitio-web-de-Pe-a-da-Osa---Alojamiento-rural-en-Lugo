import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Shield, Info } from "lucide-react";
import PageHero from "@/components/PageHero";

function CookiesPage() {
    return (
        <>
            <Helmet>
                <title>Política de Cookies - Pena da Osa</title>
                <meta
                    name="description"
                    content="Información sobre el uso de cookies en el sitio web de Pena da Osa."
                />
            </Helmet>

            <PageHero
                eyebrow="Legal"
                title="Política de cookies"
                subtitle="Solo cookies propias y necesarias para recordar tu elección del banner."
                backgroundImage="/images/galeria/sala.jpg"
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
                                        ¿Qué son las cookies?
                                    </h2>
                                    <p className="text-stone-600 leading-relaxed mb-0">
                                        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                                        cuando visitas un sitio web. Se utilizan para que el sitio web funcione de
                                        manera más eficiente y para proporcionar información a los propietarios del sitio.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl mb-8">
                            <div className="flex items-start gap-4">
                                <Shield className="h-6 w-6 text-stone-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h2 className="text-2xl font-bold text-stone-800 mb-4 mt-0">
                                        ¿Qué cookies utilizamos?
                                    </h2>
                                    <p className="text-stone-600 leading-relaxed mb-4">
                                        En Pena da Osa únicamente utilizamos cookies estrictamente necesarias para
                                        el funcionamiento básico del sitio web:
                                    </p>
                                    <ul className="space-y-2 text-stone-600">
                                        <li>
                                            <strong>Cookies de preferencias:</strong> Recordamos tu elección sobre el
                                            banner de cookies para no mostrártelo de nuevo.
                                        </li>
                                        <li>
                                            <strong>Cookies de sesión:</strong> Permiten la navegación básica por el
                                            sitio web.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl mb-8">
                            <h2 className="text-2xl font-bold text-stone-800 mb-4">
                                No utilizamos cookies de terceros
                            </h2>
                            <p className="text-stone-600 leading-relaxed mb-0">
                                No utilizamos cookies de análisis, publicitarias ni de redes sociales.
                                No compartimos información con terceros a través de cookies.
                            </p>
                        </div>

                        <div className="bg-stone-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold text-stone-800 mb-4">
                                Gestionar cookies
                            </h2>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                Puedes gestionar o eliminar las cookies según tus preferencias. Para más información,
                                consulta la ayuda de tu navegador:
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
                                <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default CookiesPage;
