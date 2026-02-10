
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Copy } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

function ContactoPage() {
  const contactInfo = useMemo(
    () => [
      {
        icon: MapPin,
        title: "Ubicación",
        content: "Os Pacios, 4 · 27460 Sober, Lugo",
        subtitle: "Galicia, España",
        copyValue: "Os Pacios, 4, 27460 Sober, Lugo, Galicia, España",
      },
      {
        icon: Phone,
        title: "Teléfono",
        content: "+34 639 403 998",
        subtitle: "Llámanos para reservar",
        href: "tel:+34639403998",
        copyValue: "+34639403998",
      },
      {
        icon: Mail,
        title: "Email",
        content: "turismoruralpendaosa@gmail.com",
        subtitle: "Respondemos rápido",
        href: "mailto:turismoruralpendaosa@gmail.com",
        copyValue: "turismoruralpendaosa@gmail.com",
      },
    ],
    []
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({ title: "Copiado", description: value });
    } catch {
      toast({ title: "No se pudo copiar", description: "Tu navegador no permite copiar automaticamente." });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Consulta desde la web - Peña da Osa");
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:turismoruralpendaosa@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Peña da Osa | Reserva tu Estancia</title>
        <meta
          name="description"
          content="Contacta con Peña da Osa en Sober, Galicia. Llama al +34 639 403 998 o escríbenos a turismoruralpendaosa@gmail.com."
        />
      </Helmet>

      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        subtitle="Escríbenos para dudas, disponibilidad o recomendaciones de la zona."
        backgroundImage="/images/galeria/exterior6.jpg"
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
                        aria-label={`Copiar ${info.title}`}
                      >
                        <Copy className="h-4 w-4" />
                        Copiar
                      </button>
                    </div>
                  </Card>
                );
              })}

              <div className="rounded-2xl border border-black/10 bg-[#1a1e23] text-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#e5c988]">
                  Consejo
                </p>
                <p className="mt-2 text-white/80 leading-relaxed">
                  Para reservas, también puedes usar el sistema online integrado en la web.
                </p>
                <div className="mt-5">
                  <a
                    href="https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=348171&lang=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-white text-[#1a1e23] px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#e5c988] transition-colors"
                  >
                    Abrir reservas
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            {/* Right: form + map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-sm p-7 md:p-10 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-serif text-[#1a1e23]">
                  Envía un mensaje
                </h2>
                <p className="mt-3 text-black/60 leading-relaxed">
                  Sin formularios raros: al enviar, se abrirá tu app de correo con el mensaje preparado.
                </p>

                <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Tu nombre"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                        placeholder="tu@email.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Fechas, numero de personas, dudas..."
                      rows={5}
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto rounded-full bg-[#1a1e23] text-white hover:bg-[#d4765d] px-8 tracking-[0.18em] uppercase"
                    >
                      Preparar email
                    </Button>
                    <p className="text-xs text-black/45">
                      O llámanos: <a className="underline" href="tel:+34639403998">+34 639 403 998</a>
                    </p>
                  </div>
                </form>
              </div>

              <div className="mt-8">
              <a
                href="https://www.google.com/maps/place/Pena+da+osa+-+casa+rural+-+Ribeira+sacra/@42.459802,-7.581345,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-black/5 h-96 rounded-3xl border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer relative group">
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
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactoPage;
