
import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Copy } from "lucide-react";
import PageHero from "@/components/PageHero";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";

function ContactoPage() {
  const { t, i18n } = useTranslation();
  const contactInfo = useMemo(
    () => [
      {
        icon: MapPin,
        title: t('contact.info_location'),
        content: "Os Pacios, 4 · 27460 Sober, Lugo",
        subtitle: t('contact.info_location_sub'),
        copyValue: "Os Pacios, 4, 27460 Sober, Lugo, Galicia, España",
      },
      {
        icon: Phone,
        title: t('contact.info_phone'),
        content: "+34 639 403 998",
        subtitle: t('contact.info_phone_sub'),
        href: "tel:+34639403998",
        copyValue: "+34639403998",
      },
      {
        icon: Mail,
        title: t('contact.info_email'),
        content: "turismoruralpendaosa@gmail.com",
        subtitle: t('contact.info_email_sub'),
        href: "mailto:turismoruralpendaosa@gmail.com",
        copyValue: "turismoruralpendaosa@gmail.com",
      },
    ],
    [t]
  );

  const onCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({ title: t('contact.copied'), description: value });
    } catch {
      toast({ title: t('contact.copy_error'), description: t('contact.copy_error_desc') });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('contact.title')}</title>
        <meta
          name="description"
          content={t('contact.description')}
        />
        <link rel="canonical" href="https://penadaosa.com/contacto" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://penadaosa.com/contacto" />
        <meta property="og:title" content={t('contact.title')} />
        <meta property="og:description" content={t('contact.description')} />
        <meta property="og:image" content="https://penadaosa.com/images/galeria/webp/exterior10.webp" />
      </Helmet>

      <PageHero
        eyebrow={t('common.contact')}
        title={t('contact.hero_title')}
        subtitle={t('contact.hero_subtitle')}
        backgroundImage="/images/galeria/webp/exterior6.webp"
      />

      {/* Main Content */}
      <section className="py-20 bg-[#f7f6f2]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Contact Information Cards */}
            {/* Left: contact cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 grid gap-5"
            >
              {contactInfo.map((info, index) => {
                const Card = info.href ? "a" : "div";
                const isExternal = info.href?.startsWith("http");
                return (
                  <Card
                    key={index}
                    href={info.href}
                    className="group rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-all"
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    target={isExternal ? "_blank" : undefined}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 rounded-xl bg-black/5 p-3 text-[#1a1e23]">
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#d4765d]">
                            {info.title}
                          </p>
                          <p className="mt-1 text-lg font-semibold text-[#1a1e23] break-words">
                            {info.content}
                          </p>
                          <p className="mt-1 text-sm text-black/55">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          onCopy(info.copyValue);
                        }}
                        className="shrink-0 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#1a1e23] hover:border-black/20"
                        aria-label={`${t('contact.copy_btn')} ${info.title}`}
                      >
                        <Copy className="h-4 w-4" />
                        {t('contact.copy_btn')}
                      </button>
                    </div>
                  </Card>
                );
              })}

              <div className="rounded-2xl border border-black/10 bg-[#1a1e23] text-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#e5c988]">
                  {t('contact.tip_title')}
                </p>
                <p className="mt-2 text-white/80 leading-relaxed">
                  {t('contact.tip_text')}
                </p>
                <div className="mt-5">
                  <a
                    href={`https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=${i18n.language === 'en' ? 'en' : 'es'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-white text-[#1a1e23] px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#e5c988] transition-colors"
                  >
                    {t('contact.tip_btn')}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            {/* Right: map only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="h-full">
                <a
                  href="https://www.google.com/maps/place/Pena+da+osa+-+casa+rural+-+Ribeira+sacra/@42.459802,-7.581345,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-black/5 h-full min-h-[400px] rounded-3xl border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer relative group">
                    <img
                      src="/mapa-ubicacion.png"
                      alt="Mapa de ubicación de Pena da Osa en Sober, Galicia"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-6 py-3 rounded-full shadow-lg">
                        <p className="text-stone-800 font-semibold flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          {t('contact.view_maps')}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactoPage;
